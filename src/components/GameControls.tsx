import React from 'react';
import type { RootGroup, Chord } from '../data/chords';
import Fretboard from './Fretboard';
import { useLanguage } from '../i18n/LanguageContext';
import { Settings, Check, Music } from 'lucide-react';
import CircleOfFifths from './CircleOfFifths';

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
    selectedKey, onKeyChange, onStart, isPlaying,
    rootGroups, selectedVoicingIds, onToggleVoicing, onToggleChordAll,
    onClearAll
}) => {
    const { t } = useLanguage();
    const currentMode = selectedKey.includes('Minor') ? 'minor' : 'major';

    const handleModeToggle = (newMode: 'major' | 'minor') => {
        if (newMode === currentMode) return;
        const root = selectedKey.replace(' Major', '').replace(' Minor', '');
        onKeyChange(`${root} ${newMode === 'major' ? 'Major' : 'Minor'}`);
    };

    return (
        <div className="flex flex-col gap-8 pb-10">
            <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                    <Settings size={24} />
                    {t.settings}
                </h2>

                {/* Circle of Fifths Selector */}
                <div className="mb-8 flex flex-col items-center">
                    <label className="block text-sm font-medium text-gray-500 mb-2">{t.selectKey}</label>
                    <CircleOfFifths selectedKey={selectedKey} onKeySelect={onKeyChange} mode={currentMode} />

                    {/* Major/Minor Toggle */}
                    <div className="flex bg-gray-100 p-1 rounded-lg mt-4">
                        <button
                            onClick={() => handleModeToggle('major')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${currentMode === 'major' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Major
                        </button>
                        <button
                            onClick={() => handleModeToggle('minor')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${currentMode === 'minor' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Minor
                        </button>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={onClearAll}
                        className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm font-medium transition-colors"
                    >
                        {t.selectNone}
                    </button>
                </div>

                {/* Chord Library */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                            <Music size={18} />
                            {t.chordLibrary}
                        </h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${selectedVoicingIds.length > 12 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                            {selectedVoicingIds.length} / 12
                        </span>
                    </div>

                    {rootGroups.map((group) => {
                        // Filter out chords with no playable voicings
                        const playableChords = group.chords.filter(c => c.voicings.length > 0);
                        if (playableChords.length === 0) return null;

                        return (
                            <div key={group.root} className="space-y-3">
                                {/* Root Header (No "Family" suffix) */}
                                <div className="flex items-center gap-4">
                                    <div className="h-px bg-gray-200 flex-1"></div>
                                    <span className="font-bold text-xl text-gray-400">{group.root}</span>
                                    <div className="h-px bg-gray-200 flex-1"></div>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {playableChords.map(chord => (
                                        <div key={chord.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                                            <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-100">
                                                <h4 className="font-bold text-gray-800">{chord.name}</h4>
                                                <button
                                                    onClick={() => onToggleChordAll(chord)}
                                                    className="text-xs px-2 py-1 bg-white border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-200 rounded transition-colors"
                                                >
                                                    {t.selectAll}
                                                </button>
                                            </div>

                                            <div className="p-3 grid grid-cols-2 gap-3">
                                                {chord.voicings.map(voicing => {
                                                    const isSelected = selectedVoicingIds.includes(voicing.id);
                                                    return (
                                                        <button
                                                            key={voicing.id}
                                                            onClick={() => onToggleVoicing(voicing.id)}
                                                            className={`
                                                                relative flex flex-col items-center p-2 rounded-lg border transition-all group
                                                                ${isSelected
                                                                    ? 'border-blue-500 bg-blue-50/50'
                                                                    : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-md'
                                                                }
                                                            `}
                                                        >
                                                            <div className="w-full flex justify-between items-start mb-2">
                                                                <span className={`text-[10px] font-medium uppercase tracking-wider ${isSelected ? 'text-blue-600' : 'text-gray-400'}`}>
                                                                    {voicing.label || 'Voicing'}
                                                                </span>
                                                                {isSelected && <Check size={14} className="text-blue-500" />}
                                                            </div>

                                                            {/* Fretboard Diagram */}
                                                            <div className={`transition-opacity ${isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                                                                <Fretboard voicing={voicing} name="" width={80} height={100} />
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
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
