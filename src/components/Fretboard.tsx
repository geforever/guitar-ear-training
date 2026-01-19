import React from 'react';
import type { ChordVoicing } from '../data/chords';

interface FretboardProps {
    voicing: ChordVoicing;
    name: string;
    width?: number;
    height?: number;
}

const Fretboard: React.FC<FretboardProps> = ({ voicing, name, width = 200, height = 240 }) => {
    const numStrings = 6;
    const numFrets = 5; // Usually enough for basic chords

    // Calculate dimensions
    const padding = 20;
    const boardWidth = width - padding * 2;
    const boardHeight = height - padding * 2;
    const stringSpacing = boardWidth / (numStrings - 1);
    const fretSpacing = boardHeight / numFrets;

    const startFret = voicing.position || 1;

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                role="img"
                aria-label={`Guitar chord diagram for ${name} at fret ${startFret}`}
            >
                {/* Fretboard Background */}
                <rect x={padding} y={padding} width={boardWidth} height={boardHeight} fill="#f5f5f5" stroke="none" />

                {/* Frets (Horizontal Lines) */}
                {Array.from({ length: numFrets + 1 }).map((_, i) => (
                    <line
                        key={`fret-${i}`}
                        x1={padding}
                        y1={padding + i * fretSpacing}
                        x2={width - padding}
                        y2={padding + i * fretSpacing}
                        stroke="#333"
                        strokeWidth={i === 0 && startFret === 1 ? 4 : 1} // Nut is thicker
                    />
                ))}

                {/* Strings (Vertical Lines) */}
                {Array.from({ length: numStrings }).map((_, i) => (
                    <line
                        key={`string-${i}`}
                        x1={padding + i * stringSpacing}
                        y1={padding}
                        x2={padding + i * stringSpacing}
                        y2={height - padding}
                        stroke="#555"
                        strokeWidth={1 + (5 - i) * 0.5} // Thicker low strings
                    />
                ))}

                {/* Dots/Markers */}
                {voicing.frets.map((fret, stringIndex) => {
                    if (fret === -1) {
                        // Mute (X)
                        return (
                            <text
                                key={`mute-${stringIndex}`}
                                x={padding + stringIndex * stringSpacing}
                                y={padding - 5}
                                textAnchor="middle"
                                fontSize="14"
                                fill="#333"
                            >
                                X
                            </text>
                        );
                    } else if (fret === 0) {
                        // Open (O)
                        return (
                            <circle
                                key={`open-${stringIndex}`}
                                cx={padding + stringIndex * stringSpacing}
                                cy={padding - 8}
                                r={4}
                                stroke="#333"
                                strokeWidth="1"
                                fill="white"
                            />
                        );
                    } else {
                        // Fingered position
                        const relativeFret = fret - startFret + 1;
                        if (relativeFret < 1 || relativeFret > numFrets) return null;

                        return (
                            <circle
                                key={`note-${stringIndex}`}
                                cx={padding + stringIndex * stringSpacing}
                                cy={padding + (relativeFret - 0.5) * fretSpacing}
                                r={stringSpacing * 0.35}
                                fill="#333"
                            />
                        );
                    }
                })}
                {/* Fret Number Label if not starting at 1 */}
                {startFret > 1 && (
                    <text x={padding - 18} y={padding + fretSpacing - 6} fontSize="14" fontWeight="bold" fill="#888">
                        {startFret}
                    </text>
                )}
            </svg>
        </div>
    );
};

export default Fretboard;
