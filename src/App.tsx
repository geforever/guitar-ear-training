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
    setSelectedVoicingIds(prev => {
      // If deselecting, always allow
      if (prev.includes(id)) {
        return prev.filter(v => v !== id);
      }

      // If selecting, check limit
      // Find which chord this voicing belongs to
      const chord = availableChords.find(c => c.voicings.some(v => v.id === id));
      if (!chord) return prev; // Should not happen

      // Check if this chord is already selected (has at least one voicing in prev)
      const isChordSelected = chord.voicings.some(v => prev.includes(v.id));

      if (!isChordSelected) {
        // It's a new chord. Check if we already have 12 unique chords selected.
        const currentSelectedChordsCount = availableChords.filter(c =>
          c.voicings.some(v => prev.includes(v.id))
        ).length;

        if (currentSelectedChordsCount >= 12) {
          alert("You can only select up to 12 chords.");
          return prev;
        }
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
      // Check if this is a new chord
      // Since we are selecting all for a specific chord, we just need to check if this chord is already partially selected or not.
      // Actually, handleToggleChordAll is called for a specific chord group (all voicings of one chord).

      // We need to know if this chord is currently "selected" (has > 0 voicings).
      // But `allIds` are just IDs. We can find the chord from one ID.
      if (allIds.length === 0) return;

      const chord = availableChords.find(c => c.voicings.some(v => v.id === allIds[0]));
      if (!chord) return;

      const isChordSelected = chord.voicings.some(v => selectedVoicingIds.includes(v.id));

      if (!isChordSelected) {
        // New chord. Check limit.
        const currentSelectedChordsCount = availableChords.filter(c =>
          c.voicings.some(v => selectedVoicingIds.includes(v.id))
        ).length;

        if (currentSelectedChordsCount >= 12) {
          alert("You can only select up to 12 chords.");
          return;
        }
      }

      setSelectedVoicingIds(prev => {
        const others = prev.filter(id => !allIds.includes(id));
        return [...others, ...allIds];
      });
    }
  };

  const handleSelectAllGlobal = () => {
    // Select random 12 chords
    const shuffled = [...availableChords].sort(() => 0.5 - Math.random()).slice(0, 12);
    const allVoicings = shuffled.flatMap(c => c.voicings.map(v => v.id));
    setSelectedVoicingIds(allVoicings);
  };

  const handleClearAllGlobal = () => {
    setSelectedVoicingIds([]);
  };

  const playVoicing = useCallback(async (voicing: ChordVoicing) => {
    await audioEngine.init();
    audioEngine.strumChord(voicing.notes, "1n", 0.06);
  }, []);

  const [gameChords, setGameChords] = useState<typeof availableChords>([]);

  const nextRound = useCallback(() => {
    // Filter available voicings based on selection AND the active game chords
    // We only want voicings that belong to the chords currently in the game
    const activeChords = gameChords.length > 0 ? gameChords : availableChords;

    // Get all valid voicings from the active game chords that are also selected
    const activeVoicings = activeChords.flatMap(c => c.voicings).filter(v => selectedVoicingIds.includes(v.id));

    if (activeVoicings.length < 2) return;

    // Pick random voicing
    let nextVoicing;
    do {
      const randomIndex = Math.floor(Math.random() * activeVoicings.length);
      nextVoicing = activeVoicings[randomIndex];
    } while (activeVoicings.length > 1 && nextVoicing === currentVoicing);

    // Find chord name for this voicing
    const chord = activeChords.find(c => c.voicings.some(v => v.id === nextVoicing.id));

    setCurrentVoicing(nextVoicing);
    setCurrentChordName(chord ? chord.name : null);
    setFeedback(null);
    setLastGuessedName(null);

    setTimeout(() => playVoicing(nextVoicing), 500);
  }, [availableChords, selectedVoicingIds, currentVoicing, playVoicing, gameChords]);

  const handleStart = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentVoicing(null);
      setCurrentChordName(null);
      setFeedback(null);
      setIsDrawerOpen(true); // Open drawer when stopping
      setGameChords([]); // Reset game chords
    } else {
      // Determine which chords are selected (have at least one voicing selected)
      const selectedChords = availableChords.filter(c =>
        c.voicings.some(v => selectedVoicingIds.includes(v.id))
      );

      // Limit is enforced at selection time, so we can just use selectedChords
      // But just in case, we can slice it (though UI shouldn't allow > 12)
      const chordsForGame = selectedChords.slice(0, 12);

      setGameChords(chordsForGame);
      setIsPlaying(true);
      setIsDrawerOpen(false); // Close drawer when starting

      // We need to wait for state update or pass the chords directly to nextRound logic
      // Since nextRound depends on gameChords state, we can't call it immediately if we just set state.
      // However, we can duplicate the logic slightly or use a useEffect.
      // Better: pass the chords to a helper or use a timeout.
      // Simplest here: just call nextRound inside a setTimeout to let state settle,
      // OR refactor nextRound to accept chords. Let's use setTimeout for simplicity in this refactor.
      setTimeout(() => {
        // We need to manually trigger the first round logic here because nextRound uses the state
        // which might not be updated yet in the closure if we just called it.
        // Actually, let's just use a useEffect to trigger nextRound when isPlaying becomes true?
        // No, that might trigger on re-renders.
        // Let's just do the logic manually here for the first pick to be safe and immediate.

        const activeVoicings = chordsForGame.flatMap(c => c.voicings).filter(v => selectedVoicingIds.includes(v.id));
        if (activeVoicings.length > 0) {
          const randomIndex = Math.floor(Math.random() * activeVoicings.length);
          const nextVoicing = activeVoicings[randomIndex];
          const chord = chordsForGame.find(c => c.voicings.some(v => v.id === nextVoicing.id));

          setCurrentVoicing(nextVoicing);
          setCurrentChordName(chord ? chord.name : null);
          setFeedback(null);
          setLastGuessedName(null);
          setTimeout(() => playVoicing(nextVoicing), 500);
        }
      }, 0);
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
            options={gameChords}
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
