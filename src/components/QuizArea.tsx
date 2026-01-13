import React from 'react';
import type { ChordVoicing } from '../data/chords';
import { Play } from 'lucide-react';
import Fretboard from './Fretboard';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion'; // Assuming framer-motion is imported for motion.div

interface QuizAreaProps {
    currentVoicing: ChordVoicing | null;
    options: { voicing: ChordVoicing, chordName: string }[];
    onGuess: (voicingId: string) => void;
    feedback: 'correct' | 'incorrect' | null;
    onReplay: () => void;
    lastGuessedName: string | null;
}

const QuizArea: React.FC<QuizAreaProps> = ({
    currentVoicing,
    options,
    onGuess,
    feedback,
    onReplay,
    lastGuessedName
}) => {
    const { t } = useLanguage();

    if (!currentVoicing) return null;

    return (
        <div className="flex flex-col items-center w-full h-full max-h-screen pt-4">
            {/* Replay Button */}
            <div className="mb-6 flex-shrink-0">
                <button
                    onClick={onReplay}
                    className="p-6 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                    title={t.replay}
                >
                    <Play size={40} className="text-white fill-current" />
                </button>
            </div>

            {/* Feedback */}
            <div className="h-8 mb-4 flex-shrink-0">
                {feedback && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-2xl font-bold ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'
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
                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 shadow-lg w-32 md:w-40
                  ${feedback === 'correct' && currentVoicing && option.voicing.id === currentVoicing.id
                                    ? 'bg-green-900/40 border-green-500 scale-105'
                                    : feedback === 'incorrect' && option.voicing.id === lastGuessedName
                                        ? 'bg-red-900/40 border-red-500 shake'
                                        : 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-750 hover:-translate-y-1'
                                }
                `}
                        >
                            <span className="text-xl font-bold text-center">{option.chordName}</span>
                            <span className="text-xs text-gray-400 text-center -mt-2">{option.voicing.label}</span>
                            <div className="pointer-events-none opacity-80 scale-90">
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
