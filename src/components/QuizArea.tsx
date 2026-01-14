import React from 'react';
import type { ChordVoicing } from '../data/chords';
import { Play, SkipForward } from 'lucide-react';
import Fretboard from './Fretboard';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion'; // Assuming framer-motion is imported for motion.div

interface QuizAreaProps {
    currentVoicing: ChordVoicing | null;
    options: { voicing: ChordVoicing, chordName: string }[];
    onGuess: (voicingId: string) => void;
    feedback: 'correct' | 'incorrect' | null;
    onReplay: () => void;
    onNext: () => void; // Added onNext prop
    lastGuessedName: string | null;
}

const QuizArea: React.FC<QuizAreaProps> = ({
    currentVoicing,
    options,
    onGuess,
    feedback,
    onReplay,
    onNext,
    lastGuessedName
}) => {
    const { t } = useLanguage();

    if (!currentVoicing) return null;

    return (
        <div className="flex flex-col items-center w-full h-full max-h-screen pt-4">
            {/* Controls: Replay & Next */}
            <div className="mb-6 flex-shrink-0 flex gap-4">
                <button
                    onClick={onReplay}
                    className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full shadow-sm transition-all flex items-center gap-2 font-bold"
                >
                    <Play size={20} className="fill-current" />
                    {t.replay}
                </button>
                <button
                    onClick={onNext}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all flex items-center gap-2 font-bold"
                >
                    <SkipForward size={20} className="fill-current" />
                    {t.next}
                </button>
            </div>

            {/* Feedback */}
            <div className="h-8 mb-4 flex-shrink-0">
                {feedback && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-2xl font-bold ${feedback === 'correct' ? 'text-green-600' : 'text-red-500'
                            }`}
                    >
                        {feedback === 'correct' ? t.correct : t.incorrect}
                    </motion.div>
                )}
            </div>

            {/* Scrollable Options Grid */}
            <div className="flex-1 w-full overflow-y-auto px-4 pb-10 flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl">
                    {options.map((option) => (
                        <button
                            key={option.voicing.id}
                            onClick={() => onGuess(option.voicing.id)}
                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 shadow-sm w-32 md:w-40
                  ${feedback === 'correct' && currentVoicing && option.voicing.id === currentVoicing.id
                                    ? 'bg-green-50 border-green-500 scale-105 ring-2 ring-green-200'
                                    : feedback === 'incorrect' && option.voicing.id === lastGuessedName
                                        ? 'bg-red-50 border-red-500 shake'
                                        : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1'
                                }
                `}
                        >
                            <span className="text-xl font-bold text-center text-gray-800">{option.chordName}</span>
                            <span className="text-xs text-gray-500 text-center -mt-2">{option.voicing.label}</span>
                            <div className="pointer-events-none opacity-90 scale-90">
                                <Fretboard voicing={option.voicing} name="" width={80} height={100} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuizArea;
