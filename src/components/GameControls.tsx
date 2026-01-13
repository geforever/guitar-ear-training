import React from 'react';
import type { RootGroup } from '../data/chords';
import Fretboard from './Fretboard';
import { useLanguage } from '../i18n/LanguageContext';

interface GameControlsProps {
    keys: string[];
    selectedKey: string;
    onKeyChange: (key: string) => void;
    onStart: () => void;
    isPlaying: boolean;
    rootGroups: RootGroup[];
    selectedVoicingIds: string[];
    onToggleVoicing: (id: string) => void;
    onToggleChordAll: (chordName: string, allIds: string[]) => void;
    onSelectAll: () => void;
    onClearAll: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({
    keys, selectedKey, onKeyChange, onStart, isPlaying,
    rootGroups, selectedVoicingIds, onToggleVoicing, onToggleChordAll,
    onSelectAll, onClearAll
}) => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col gap-6 pb-20">
            {/* Key Selection */}
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-400 mb-2">{t.selectKey}</label>
                <select
                    value={selectedKey}
                    onChange={(e) => onKeyChange(e.target.value)}
                    disabled={isPlaying}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                    {keys.map(key => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                </select>
            </div>

            {/* Chord Selection */}
            <div className="w-full">
                <div className="flex justify-between items-end mb-3">
                    <label className="block text-sm font-medium text-gray-400">{t.selectChords}</label>
                    <div className="flex gap-2">
                        <button
                            onClick={onSelectAll}
                            disabled={isPlaying}
                            className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
                        >
                            {t.selectAll}
                        </button>
                        <button
                            onClick={onClearAll}
                            disabled={isPlaying}
                            className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
                        >
                            {t.selectNone}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {rootGroups.map(group => (
                        <div key={group.root} className="space-y-2">
                            <h3 className="text-lg font-bold text-blue-400 border-b border-gray-700 pb-1">{group.root} Family</h3>

                            {group.chords.map(chord => {
                                const allIds = chord.voicings.map(v => v.id);
                                const allSelected = allIds.every(id => selectedVoicingIds.includes(id));
                                const someSelected = allIds.some(id => selectedVoicingIds.includes(id));

                                return (
                                    <div key={chord.name} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-lg">{chord.name}</span>
                                            <button
                                                onClick={() => onToggleChordAll(chord.name, allIds)}
                                                disabled={isPlaying}
                                                className={`text-xs px-3 py-1.5 rounded font-medium transition-colors ${allSelected ? 'bg-blue-600 text-white' :
                                                    someSelected ? 'bg-blue-900 text-blue-200' : 'bg-gray-700 text-gray-400'
                                                    }`}
                                            >
                                                {allSelected ? t.selectAll : someSelected ? t.selectSome : t.selectNone}
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            {chord.voicings.map(voicing => (
                                                <button
                                                    key={voicing.id}
                                                    onClick={() => onToggleVoicing(voicing.id)}
                                                    disabled={isPlaying}
                                                    className={`relative p-2 rounded-lg border transition-all flex flex-col items-center gap-2 ${selectedVoicingIds.includes(voicing.id)
                                                        ? 'bg-blue-900/20 border-blue-500/50'
                                                        : 'bg-gray-700/30 border-transparent hover:bg-gray-700/50'
                                                        }`}
                                                    title={voicing.label || voicing.id}
                                                >
                                                    <div className="pointer-events-none scale-75 origin-top">
                                                        <Fretboard voicing={voicing} name="" width={80} height={100} />
                                                    </div>
                                                    <span className={`text-xs font-medium truncate w-full text-center ${selectedVoicingIds.includes(voicing.id) ? 'text-blue-300' : 'text-gray-500'
                                                        }`}>
                                                        {voicing.label || 'Voicing'}
                                                    </span>

                                                    {/* Checkmark overlay */}
                                                    {selectedVoicingIds.includes(voicing.id) && (
                                                        <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Start Button */}
            <div className="sticky bottom-0 bg-gray-900 pt-4 border-t border-gray-800">
                <button
                    onClick={onStart}
                    disabled={selectedVoicingIds.length < 2}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all transform active:scale-95 ${isPlaying
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/50'
                        : selectedVoicingIds.length < 2
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/50 shadow-lg'
                        }`}
                >
                    {isPlaying ? t.stopPractice : t.startPractice}
                </button>
                {selectedVoicingIds.length < 2 && (
                    <p className="text-xs text-red-400 mt-2 text-center">{t.minSelection}</p>
                )}
            </div>
        </div>
    );
};

export default GameControls;
