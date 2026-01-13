import React from 'react';
import type { Chord, ChordVoicing } from '../data/chords';
import { Play } from 'lucide-react';
import Fretboard from './Fretboard';
import { useLanguage } from '../i18n/LanguageContext';

interface QuizAreaProps {
    currentVoicing: ChordVoicing | null;
    currentChordName: string | null;
    options: Chord[];
    onGuess: (chordName: string) => void;
    feedback: 'correct' | 'incorrect' | null;
    onReplay: () => void;
    lastGuessedName: string | null;
}

const QuizArea: React.FC<QuizAreaProps> = ({ currentVoicing, currentChordName, options, onGuess, feedback, onReplay, lastGuessedName }) => {
    const { t } = useLanguage();

    if (!currentVoicing) return <div className="text-gray-400 text-center mt-10 text-xl">{t.pressStart}</div>;

    return (
        <div className="flex flex-col items-center w-full h-full justify-center">

            {/* Playback Controls */}
            <div className="mb-10 flex gap-3">
                <button
                    onClick={onReplay}
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg transform active:scale-95 transition-all text-xl"
                >
                    <Play size={32} fill="currentColor" />
                    <span className="font-bold">{t.replayChord}</span>
                </button>
            </div>

            {/* Feedback Area */}
            <div className="h-16 mb-4">
                {feedback && (
                    <div className={`text-3xl font-bold animate-bounce ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                        {feedback === 'correct' ? t.correct : t.incorrect}
                    </div>
                )}
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl px-4">
                {options.map((chord) => (
                    <button
                        key={chord.name}
                        onClick={() => onGuess(chord.name)}
                        className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 shadow-lg
              ${feedback === 'correct' && chord.name === currentChordName
                                ? 'bg-green-900/40 border-green-500 scale-105'
                                : feedback === 'incorrect' && chord.name === lastGuessedName
                                    ? 'bg-red-900/40 border-red-500 shake'
                                    : 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-750 hover:-translate-y-1'
                            }
            `}
                    >
                        <span className="text-3xl font-bold">{chord.name}</span>
                        {/* We show a representative voicing (the first one) for visual aid, or maybe just the name?
                User said "Show these chords names and corresponding guitar fretboard styles".
                Let's show the first voicing of the chord as a hint/reference.
            */}
                        <div className="pointer-events-none opacity-60 scale-90">
                            <Fretboard voicing={chord.voicings[0]} name="" width={100} height={120} />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizArea;
