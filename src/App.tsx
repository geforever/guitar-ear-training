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
    setSelectedVoicingIds(prev => {
      // If deselecting, always allow
      if (prev.includes(id)) {
        return prev.filter(v => v !== id);
      }

      // If selecting, check limit (Max 12 voicings)
      if (prev.length >= 12) {
        alert("You can only select up to 12 specific chords (voicings).");
        return prev;
      }

      return [...prev, id];
    });
  };

  const handleToggleChordAll = (_: string, allIds: string[]) => {
    const allSelected = allIds.every(id => selectedVoicingIds.includes(id));
    if (allSelected) {
      // Deselect all
      setSelectedVoicingIds(prev => prev.filter(id => !allIds.includes(id)));
    } else {
      // Select all
      // Calculate how many new items we are adding
      const newIds = allIds.filter(id => !selectedVoicingIds.includes(id));

      if (selectedVoicingIds.length + newIds.length > 12) {
        alert(`You can only select up to 12 specific chords. You have ${selectedVoicingIds.length} selected and are trying to add ${newIds.length}.`);
        return;
      }

      setSelectedVoicingIds(prev => [...prev, ...newIds]);
    }
  };

  const handleClearAllGlobal = () => {
    setSelectedVoicingIds([]);
  };

  const playVoicing = useCallback(async (voicing: ChordVoicing) => {
    await audioEngine.init();
    // 1s sustain, 0.2s strum duration
    audioEngine.downStrumWithPick(voicing.notes, 1, 0.2);
  }, []);

  // Game state now tracks specific voicings as options
  const [gameOptions, setGameOptions] = useState<{ voicing: ChordVoicing, chordName: string }[]>([]);

  const nextRound = useCallback(() => {
    if (gameOptions.length < 2) return;

    // Pick random option from gameOptions
    let nextOption;
    do {
      const randomIndex = Math.floor(Math.random() * gameOptions.length);
      nextOption = gameOptions[randomIndex];
    } while (gameOptions.length > 1 && nextOption.voicing.id === currentVoicing?.id);

    setCurrentVoicing(nextOption.voicing);
    setFeedback(null);
    setLastGuessedName(null);

    setTimeout(() => playVoicing(nextOption.voicing), 500);
  }, [gameOptions, currentVoicing, playVoicing]);

  const handleStart = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentVoicing(null);
      setFeedback(null);
      setIsDrawerOpen(true); // Open drawer when stopping
      setGameOptions([]); // Reset game options
    } else {
      // Build game options from selected voicings
      const options: { voicing: ChordVoicing, chordName: string }[] = [];

      // We need to map selected IDs back to full voicing objects and their chord names
      availableChords.forEach(chord => {
        chord.voicings.forEach(voicing => {
          if (selectedVoicingIds.includes(voicing.id)) {
            options.push({ voicing, chordName: chord.name });
          }
        });
      });

      // Limit is enforced at selection time, but just in case
      const finalOptions = options.slice(0, 12);

      setGameOptions(finalOptions);
      setIsPlaying(true);
      setIsDrawerOpen(false); // Close drawer when starting

      setTimeout(() => {
        if (finalOptions.length > 0) {
          const randomIndex = Math.floor(Math.random() * finalOptions.length);
          const nextOption = finalOptions[randomIndex];

          setCurrentVoicing(nextOption.voicing);
          setFeedback(null);
          setLastGuessedName(null);
          setTimeout(() => playVoicing(nextOption.voicing), 500);
        }
      }, 0);
    }
  };

  const handleGuess = (guessedVoicingId: string) => {
    if (!currentVoicing) return;

    if (guessedVoicingId === currentVoicing.id) {
      setFeedback('correct');
      setTimeout(() => {
        nextRound();
      }, 1500);
    } else {
      setFeedback('incorrect');
      setLastGuessedName(guessedVoicingId); // Now storing ID
    }
  };

  const handleReplay = () => {
    if (currentVoicing) {
      playVoicing(currentVoicing);
    }
  };



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
            options={gameOptions}
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
