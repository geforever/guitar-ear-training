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
        <div className="flex flex-col items-center w-full h-full overflow-hidden pt-8">

            {/* Fixed Header Area */}
            <div className="flex-none flex flex-col items-center w-full mb-4">
                {/* Playback Controls */}
                <div className="mb-6 flex gap-3">
                    <button
                        onClick={onReplay}
                        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg transform active:scale-95 transition-all text-xl"
                    >
                        <Play size={32} fill="currentColor" />
                        <span className="font-bold">{t.replayChord}</span>
                    </button>
                </div>

                {/* Feedback Area */}
                <div className="h-12 flex items-center justify-center">
                    {feedback && (
                        <div className={`text-3xl font-bold animate-bounce ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                            {feedback === 'correct' ? t.correct : t.incorrect}
                        </div>
                    )}
                </div>
            </div>

            {/* Scrollable Options Grid */}
            <div className="flex-1 w-full overflow-y-auto px-4 pb-10 flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl">
                    {options.map((chord) => (
                        <button
                            key={chord.name}
                            onClick={() => onGuess(chord.name)}
                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 shadow-lg w-32 md:w-40
                  ${feedback === 'correct' && chord.name === currentChordName
                                    ? 'bg-green-900/40 border-green-500 scale-105'
                                    : feedback === 'incorrect' && chord.name === lastGuessedName
                                        ? 'bg-red-900/40 border-red-500 shake'
                                        : 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-750 hover:-translate-y-1'
                                }
                `}
                        >
                            <span className="text-2xl font-bold">{chord.name}</span>
                            <div className="pointer-events-none opacity-60 scale-90">
                                <Fretboard voicing={chord.voicings[0]} name="" width={80} height={100} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuizArea;
