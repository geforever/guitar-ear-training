import React from 'react';
import { motion } from 'framer-motion';

interface CircleOfFifthsProps {
    selectedKey: string;
    onKeySelect: (key: string) => void;
    mode: 'major' | 'minor';
}

const KEYS = [
    { name: 'C', label: 'C', angle: -90 },
    { name: 'G', label: 'G', angle: -60 },
    { name: 'D', label: 'D', angle: -30 },
    { name: 'A', label: 'A', angle: 0 },
    { name: 'E', label: 'E', angle: 30 },
    { name: 'B', label: 'B', angle: 60 },
    { name: 'F#', label: 'F#', angle: 90 }, // Bottom
    { name: 'Db', label: 'Db', angle: 120 },
    { name: 'Ab', label: 'Ab', angle: 150 },
    { name: 'Eb', label: 'Eb', angle: 180 },
    { name: 'Bb', label: 'Bb', angle: 210 },
    { name: 'F', label: 'F', angle: 240 },
];

const CircleOfFifths: React.FC<CircleOfFifthsProps> = ({ selectedKey, onKeySelect, mode }) => {
    // Normalize selected key (remove " Major" or " Minor" suffix if present for comparison)
    const currentRoot = selectedKey.replace(' Major', '').replace(' Minor', '');

    return (
        <div className="relative w-64 h-64 mx-auto my-6">
            <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-0">
                {/* Background Circle */}
                <circle cx="50" cy="50" r="48" fill="white" stroke="#e5e7eb" strokeWidth="1" />

                {/* Segments */}
                {KEYS.map((k) => {
                    const isSelected = currentRoot === k.name;
                    // Calculate segment path
                    // Each segment is 30 degrees
                    // Start angle: k.angle - 15
                    // End angle: k.angle + 15
                    // We need to convert to radians and coordinates

                    // Actually, simpler to just place buttons in a circle
                    // But user asked for "Circle of Fifths style"

                    // Let's use a group rotated to the correct angle
                    // Adjust so C is at top (-90 + 90 = 0)
                    // Wait, standard SVG 0 is right (3 o'clock).
                    // -90 is top.

                    // Let's position labels using trigonometry
                    const radius = 38;
                    const rad = (k.angle) * (Math.PI / 180);
                    const x = 50 + radius * Math.cos(rad);
                    const y = 50 + radius * Math.sin(rad);

                    return (
                        <g key={k.name} onClick={() => onKeySelect(`${k.name} ${mode === 'major' ? 'Major' : 'Minor'}`)} className="cursor-pointer group">
                            {/* Highlight Circle */}
                            <motion.circle
                                cx={x}
                                cy={y}
                                r={isSelected ? 8 : 6}
                                fill={isSelected ? '#2563eb' : '#f3f4f6'}
                                stroke={isSelected ? '#1d4ed8' : '#d1d5db'}
                                strokeWidth={isSelected ? 0 : 1}
                                className="transition-colors group-hover:fill-blue-100"
                                whileHover={{ scale: 1.2 }}
                            />
                            {/* Label */}
                            <text
                                x={x}
                                y={y}
                                dy="0.35em"
                                textAnchor="middle"
                                className={`text-[8px] font-bold select-none pointer-events-none ${isSelected ? 'fill-white' : 'fill-gray-700'}`}
                            >
                                {k.label}
                            </text>
                        </g>
                    );
                })}

                {/* Center Label */}
                <text x="50" y="50" dy="0.35em" textAnchor="middle" className="text-[6px] fill-gray-400 font-medium">
                    {mode === 'major' ? 'Major Keys' : 'Minor Keys'}
                </text>
            </svg>
        </div>
    );
};

export default CircleOfFifths;
