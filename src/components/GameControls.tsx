import React, { useState } from 'react';
import type { RootGroup, Chord } from '../data/chords';
import Fretboard from './Fretboard';
import { useLanguage } from '../i18n/LanguageContext';
import { ChevronDown, ChevronUp, Settings, Check } from 'lucide-react';

interface GameControlsProps {
    keys: string[];
    selectedKey: string;
    onKeyChange: (key: string) => void;
    onStart: () => void;
    isPlaying: boolean;
    rootGroups: RootGroup[];
    selectedVoicingIds: string[];
    onToggleVoicing: (id: string) => void;
    onToggleChordAll: (chord: Chord) => void;
    onClearAll: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({
    keys, selectedKey, onKeyChange, onStart, isPlaying,
    rootGroups, selectedVoicingIds, onToggleVoicing, onToggleChordAll,
    onClearAll
}) => {
    const { t } = useLanguage();
    const [expandedRoots, setExpandedRoots] = useState<string[]>([]);

    const toggleGroup = (root: string) => {
        setExpandedRoots(prev =>
            prev.includes(root)
                ? prev.filter(r => r !== root)
                : [...prev, root]
        );
    };

    // Circle of Fifths Order for sorting keys
    const circleOfFifths = [
        'C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major',
        'F# Major', 'Db Major', 'Ab Major', 'Eb Major', 'Bb Major', 'F Major'
    ];

    const sortedKeys = [...keys].sort((a, b) => {
        return circleOfFifths.indexOf(a) - circleOfFifths.indexOf(b);
    });

    return (
        <div className="flex flex-col gap-8 pb-10">
            <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                    <Settings size={24} />
                    {t.settings}
                </h2>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-500 mb-2">{t.selectKey}</label>
                    <div className="flex flex-wrap gap-2">
                        {sortedKeys.map(key => (
                            <button
                                key={key}
                                onClick={() => onKeyChange(key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${selectedKey === key
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 mb-4">
                    <button
                        onClick={onClearAll}
                        className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                    >
                        {t.selectNone}
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-700">{t.chordLibrary}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${selectedVoicingIds.length > 12 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                            {selectedVoicingIds.length} voicings selected
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">(Max 12 voicings in game)</p>

                    {rootGroups.map((group) => (
                        <div key={group.root} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                            <button
                                onClick={() => toggleGroup(group.root)}
                                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-800">{group.root} Family</span>
                                {expandedRoots.includes(group.root) ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                            </button>

                            {expandedRoots.includes(group.root) && (
                                <div className="p-4 space-y-6 border-t border-gray-100">
                                    {group.chords.map(chord => (
                                        <div key={chord.name} className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-blue-600">{chord.name}</h4>
                                                <button
                                                    onClick={() => onToggleChordAll(chord)}
                                                    className="text-xs px-2 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                                                >
                                                    {t.selectAll}
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {chord.voicings.map(voicing => {
                                                    const isSelected = selectedVoicingIds.includes(voicing.id);
                                                    return (
                                                        <button
                                                            key={voicing.id}
                                                            onClick={() => onToggleVoicing(voicing.id)}
                                                            className={`
                                relative p-2 rounded-lg border-2 text-left transition-all group
                                ${isSelected
                                                                    ? 'border-blue-500 bg-blue-50'
                                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                                }
                              `}
                                                        >
                                                            <div className="flex justify-between items-start mb-1">
                                                                <span className={`text-xs font-medium ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                                                                    {voicing.label || 'Voicing'}
                                                                </span>
                                                                {isSelected && <Check size={14} className="text-blue-500" />}
                                                            </div>
                                                            <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                                                                <Fretboard voicing={voicing} name="" width={60} height={80} />
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={onStart}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95
          ${isPlaying
                        ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'
                    }`}
            >
                {isPlaying ? t.stopPractice : t.startPractice}
            </button>
        </div>
    );
};

export default GameControls;
