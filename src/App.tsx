import { useState, useEffect, useCallback } from 'react';
import { CHORD_LIBRARY, type ChordVoicing } from './data/chords';
import { audioEngine } from './audio/AudioEngine';
import GameControls from './components/GameControls';
import QuizArea from './components/QuizArea';
import Layout from './components/Layout';
import { Guitar, Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  // State
  const [selectedKey, setSelectedKey] = useState<string>('C Major');
  const [selectedVoicingIds, setSelectedVoicingIds] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const [currentVoicing, setCurrentVoicing] = useState<ChordVoicing | null>(null);
  const [currentChordName, setCurrentChordName] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [lastGuessedName, setLastGuessedName] = useState<string | null>(null);

  const { language, setLanguage, t } = useLanguage();

  // Derived state
  const currentKeyData = CHORD_LIBRARY[selectedKey];
  // Flatten all chords from all roots for easy access
  const availableChords = currentKeyData.roots.flatMap(r => r.chords);

  // Initialize selected chords when key changes (Select NONE by default as requested)
  useEffect(() => {
    setSelectedVoicingIds([]);
  }, [selectedKey]);

  const handleToggleVoicing = (id: string) => {
    setSelectedVoicingIds(prev =>
      prev.includes(id)
        ? prev.filter(v => v !== id)
        : [...prev, id]
    );
  };

  const handleToggleChordAll = (_: string, allIds: string[]) => {
    const allSelected = allIds.every(id => selectedVoicingIds.includes(id));
    if (allSelected) {
      // Deselect all
      setSelectedVoicingIds(prev => prev.filter(id => !allIds.includes(id)));
    } else {
      // Select all
      setSelectedVoicingIds(prev => {
        const others = prev.filter(id => !allIds.includes(id));
        return [...others, ...allIds];
      });
    }
  };

  const handleSelectAllGlobal = () => {
    const allVoicings = availableChords.flatMap(c => c.voicings.map(v => v.id));
    setSelectedVoicingIds(allVoicings);
  };

  const handleClearAllGlobal = () => {
    setSelectedVoicingIds([]);
  };

  const playVoicing = useCallback(async (voicing: ChordVoicing) => {
    await audioEngine.init();
    audioEngine.strumChord(voicing.notes, "1n", 0.06);
  }, []);

  const nextRound = useCallback(() => {
    // Filter available voicings based on selection
    const activeVoicings = availableChords.flatMap(c => c.voicings).filter(v => selectedVoicingIds.includes(v.id));

    if (activeVoicings.length < 2) return;

    // Pick random voicing
    let nextVoicing;
    do {
      const randomIndex = Math.floor(Math.random() * activeVoicings.length);
      nextVoicing = activeVoicings[randomIndex];
    } while (activeVoicings.length > 1 && nextVoicing === currentVoicing);

    // Find chord name for this voicing
    const chord = availableChords.find(c => c.voicings.some(v => v.id === nextVoicing.id));

    setCurrentVoicing(nextVoicing);
    setCurrentChordName(chord ? chord.name : null);
    setFeedback(null);
    setLastGuessedName(null);

    setTimeout(() => playVoicing(nextVoicing), 500);
  }, [availableChords, selectedVoicingIds, currentVoicing, playVoicing]);

  const handleStart = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentVoicing(null);
      setCurrentChordName(null);
      setFeedback(null);
      setIsDrawerOpen(true); // Open drawer when stopping
    } else {
      setIsPlaying(true);
      setIsDrawerOpen(false); // Close drawer when starting
      nextRound();
    }
  };

  const handleGuess = (guessedName: string) => {
    if (!currentChordName) return;

    if (guessedName === currentChordName) {
      setFeedback('correct');
      setTimeout(() => {
        nextRound();
      }, 1500);
    } else {
      setFeedback('incorrect');
      setLastGuessedName(guessedName);
    }
  };

  const handleReplay = () => {
    if (currentVoicing) {
      playVoicing(currentVoicing);
    }
  };

  // Get unique chords that have at least one selected voicing (for options display)
  const activeChordOptions = availableChords.filter(c =>
    c.voicings.some(v => selectedVoicingIds.includes(v.id))
  );

  return (
    <Layout
      isDrawerOpen={isDrawerOpen}
      onDrawerToggle={() => setIsDrawerOpen(!isDrawerOpen)}
      drawerContent={
        <GameControls
          keys={Object.keys(CHORD_LIBRARY)}
          selectedKey={selectedKey}
          onKeyChange={setSelectedKey}
          onStart={handleStart}
          isPlaying={isPlaying}
          rootGroups={currentKeyData.roots}
          selectedVoicingIds={selectedVoicingIds}
          onToggleVoicing={handleToggleVoicing}
          onToggleChordAll={handleToggleChordAll}
          onSelectAll={handleSelectAllGlobal}
          onClearAll={handleClearAllGlobal}
        />
      }
    >
      <div className="flex flex-col items-center justify-center h-full w-full bg-gray-800/50 relative">
        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          className="absolute top-6 left-6 p-3 bg-gray-700/50 hover:bg-gray-600 rounded-full text-white transition-all z-10 flex items-center gap-2"
        >
          <Globe size={20} />
          <span className="text-sm font-bold">{language === 'en' ? 'EN' : '中'}</span>
        </button>

        {!isPlaying ? (
          <div className="text-center p-10">
            <Guitar size={80} className="text-blue-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400">
              {t.subtitle}
            </p>
          </div>
        ) : (
          <QuizArea
            currentVoicing={currentVoicing}
            currentChordName={currentChordName}
            options={activeChordOptions}
            onGuess={handleGuess}
            feedback={feedback}
            onReplay={handleReplay}
            lastGuessedName={lastGuessedName}
          />
        )}
      </div>
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
