export type ChordQuality = 'major' | 'minor' | 'dominant' | 'sus' | 'dim' | 'aug';

export interface ChordVoicing {
    id: string;
    frets: number[];
    fingers?: number[];
    notes: string[];
    position?: number;
    label?: string;
}

export interface Chord {
    name: string;
    quality: ChordQuality;
    voicings: ChordVoicing[];
}

export interface RootGroup {
    root: string;
    chords: Chord[];
}

export interface Key {
    name: string;
    scale: string;
    roots: RootGroup[];
}

// Helper to create voicings
const v = (id: string, frets: number[], notes: string[], fingers?: number[], position: number = 1, label?: string): ChordVoicing => ({
    id, frets, notes, fingers, position, label
});

export const CHORD_LIBRARY: Record<string, Key> = {
    'C Major': {
        name: 'C Major',
        scale: 'major',
        roots: [
            /* ================= C Root ================= */
            {
                root: 'C',
                chords: [
                    {
                        name: 'C',
                        quality: 'major',
                        voicings: [
                            v('C-open', [-1, 3, 2, 0, 1, 0], ['C3', 'E3', 'G3', 'C4', 'E4'], [-1, 3, 2, 0, 1, 0], 1, 'Open'),
                            v('C-barre-3', [-1, 3, 5, 5, 5, 3], ['C3', 'G3', 'C4', 'E4', 'G4'], [-1, 1, 3, 3, 3, 1], 3, 'A-shape'),
                            v('C-barre-8', [8, 10, 10, 9, 8, 8], ['C3', 'G3', 'C4', 'E4', 'G4', 'C5'], [1, 3, 4, 2, 1, 1], 8, 'E-shape'),
                        ]
                    },
                    {
                        name: 'Cmaj7',
                        quality: 'major',
                        voicings: [
                            v('Cmaj7-open', [-1, 3, 2, 0, 0, 0], ['C3', 'E3', 'G3', 'B3', 'E4'], [-1, 3, 2, 0, 0, 0], 1, 'Open'),
                            v('Cmaj7-barre-3', [-1, 3, 5, 4, 5, 3], ['C3', 'G3', 'B3', 'E4', 'G4'], [-1, 1, 3, 2, 4, 1], 3, 'A-shape'),
                            v('Cmaj7-shell', [-1, 3, -1, 4, 5, -1], ['C3', 'B3', 'E4'], [-1, 1, -1, 2, 3, -1], 3, 'Shell'),
                        ]
                    },
                    {
                        name: 'C6/9',
                        quality: 'major',
                        voicings: [
                            v('C69-jazz', [-1, 3, 2, 2, 3, 3], ['C3', 'E3', 'A3', 'D4', 'G4'], [-1, 2, 1, 1, 3, 4], 3, 'Jazz 3rd pos'),
                            v('C69-top', [-1, -1, 10, 9, 10, 10], ['C4', 'E4', 'A4', 'D5'], [-1, -1, 2, 1, 3, 4], 9, 'Top Strings'),
                            v('C69-mid', [-1, 3, 2, 2, 3, -1], ['C3', 'E3', 'A3', 'D4'], [-1, 2, 1, 1, 3, -1], 3, 'Mid Strings'),
                        ]
                    },
                    {
                        name: 'Csus2',
                        quality: 'sus',
                        voicings: [
                            v('Csus2-open', [-1, 3, 0, 0, 1, -1], ['C3', 'D3', 'G3', 'C4'], [-1, 3, 0, 0, 1, -1], 1, 'Open'),
                            v('Csus2-barre-3', [-1, 3, 5, 5, 3, 3], ['C3', 'G3', 'C4', 'D4', 'G4'], [-1, 1, 3, 4, 1, 1], 3, 'A-shape'),
                            v('Csus2-x35533', [-1, 3, 5, 5, 3, 3], ['C3', 'G3', 'C4', 'D4', 'G4'], [-1, 1, 3, 4, 1, 1], 3, 'Barre'),
                        ]
                    },
                    {
                        name: 'Csus4',
                        quality: 'sus',
                        voicings: [
                            v('Csus4-open', [-1, 3, 3, 0, 1, 1], ['C3', 'F3', 'G3', 'C4', 'F4'], [-1, 3, 4, 0, 1, 1], 1, 'Open'),
                            v('Csus4-barre-3', [-1, 3, 5, 5, 6, 3], ['C3', 'G3', 'C4', 'F4', 'G4'], [-1, 1, 3, 3, 4, 1], 3, 'A-shape'),
                            v('Csus4-barre-8', [8, 10, 10, 10, 8, 8], ['C3', 'G3', 'C4', 'F4', 'G4', 'C5'], [1, 3, 3, 4, 1, 1], 8, 'E-shape'),
                        ]
                    },
                ]
            },

            /* ================= D Root ================= */
            {
                root: 'D',
                chords: [
                    {
                        name: 'Dm',
                        quality: 'minor',
                        voicings: [
                            v('Dm-open', [-1, -1, 0, 2, 3, 1], ['D3', 'A3', 'D4', 'F4'], [-1, -1, 0, 2, 3, 1], 1, 'Open'),
                            v('Dm-barre-5', [-1, 5, 7, 7, 6, 5], ['D3', 'A3', 'D4', 'F4', 'A4'], [-1, 1, 3, 4, 2, 1], 5, 'Am-shape'),
                            v('Dm-barre-10', [10, 12, 12, 10, 10, 10], ['D3', 'A3', 'D4', 'F4', 'A4', 'D5'], [1, 3, 4, 1, 1, 1], 10, 'Em-shape'),
                        ]
                    },
                    {
                        name: 'Dm7',
                        quality: 'minor',
                        voicings: [
                            v('Dm7-open', [-1, -1, 0, 2, 1, 1], ['D3', 'A3', 'C4', 'F4'], [-1, -1, 0, 2, 1, 1], 1, 'Open'),
                            v('Dm7-barre-5', [-1, 5, 7, 5, 6, 5], ['D3', 'A3', 'C4', 'F4', 'A4'], [-1, 1, 3, 1, 2, 1], 5, 'Am-shape'),
                            v('Dm7-shell', [-1, 5, -1, 5, 6, -1], ['D3', 'C4', 'F4'], [-1, 1, -1, 2, 3, -1], 5, 'Shell'),
                        ]
                    },
                    {
                        name: 'Dm9',
                        quality: 'minor',
                        voicings: [
                            v('Dm9-jazz', [-1, 5, 3, 5, 5, -1], ['D3', 'F3', 'C4', 'E4'], [-1, 2, 1, 3, 4, -1], 3, 'Jazz'),
                            v('Dm9-shell', [-1, 5, -1, 5, 5, -1], ['D3', 'C4', 'E4'], [-1, 1, -1, 1, 1, -1], 5, 'Shell (no3)'),
                            v('Dm9-top', [-1, -1, 0, 5, 5, 0], ['D3', 'G3', 'C4', 'E4'], [-1, -1, 0, 2, 3, 0], 1, 'Open-ish'),
                        ]
                    },
                ]
            },

            /* ================= E Root ================= */
            {
                root: 'E',
                chords: [
                    {
                        name: 'Em',
                        quality: 'minor',
                        voicings: [
                            v('Em-open', [0, 2, 2, 0, 0, 0], ['E2', 'B2', 'E3', 'G3', 'B3', 'E4'], [0, 2, 3, 0, 0, 0], 1, 'Open'),
                            v('Em-barre-7', [-1, 7, 9, 9, 8, 7], ['E3', 'B3', 'E4', 'G4', 'B4'], [-1, 1, 3, 4, 2, 1], 7, 'Am-shape'),
                            v('Em-triad', [-1, -1, -1, 9, 8, 7], ['E4', 'G4', 'B4'], [-1, -1, -1, 3, 2, 1], 7, 'Triad'),
                        ]
                    },
                    {
                        name: 'Em7',
                        quality: 'minor',
                        voicings: [
                            v('Em7-open', [0, 2, 2, 0, 3, 0], ['E2', 'B2', 'E3', 'G3', 'D4', 'E4'], [0, 1, 2, 0, 3, 0], 1, 'Open'),
                            v('Em7-barre-7', [-1, 7, 9, 7, 8, 7], ['E3', 'B3', 'D4', 'G4', 'B4'], [-1, 1, 3, 1, 2, 1], 7, 'Am-shape'),
                            v('Em7-shell', [0, -1, 5, 7, -1, -1], ['E2', 'G3', 'D4'], [0, -1, 1, 3, -1, -1], 5, 'Shell'),
                        ]
                    },
                    {
                        name: 'Emadd9',
                        quality: 'minor',
                        voicings: [
                            v('Emadd9-open', [0, 2, 4, 0, 0, 0], ['E2', 'B2', 'F#3', 'G3', 'B3', 'E4'], [0, 1, 4, 0, 0, 0], 1, 'Open'),
                            v('Emadd9-barre', [-1, 7, 5, 0, 0, 0], ['E3', 'G3', 'D4', 'F#4'], [-1, 3, 1, 0, 0, 0], 5, 'Stretch'), // Hard
                            v('Em9-jazz', [0, -1, 4, 0, 3, 2], ['E2', 'F#3', 'G3', 'D4', 'F#4'], [0, -1, 3, 0, 2, 1], 1, 'Jazz'),
                        ]
                    },
                ]
            },

            /* ================= F Root ================= */
            {
                root: 'F',
                chords: [
                    {
                        name: 'F',
                        quality: 'major',
                        voicings: [
                            v('F-barre-1', [1, 3, 3, 2, 1, 1], ['F2', 'C3', 'F3', 'A3', 'C4', 'F4'], [1, 3, 4, 2, 1, 1], 1, 'E-shape'),
                            v('F-open-simple', [-1, -1, 3, 2, 1, 1], ['F3', 'A3', 'C4', 'F4'], [-1, -1, 3, 2, 1, 1], 1, 'Simple'),
                            v('F-triad', [-1, -1, -1, 10, 10, 8], ['F4', 'A4', 'C5'], [-1, -1, -1, 3, 2, 1], 8, 'Triad'),
                        ]
                    },
                    {
                        name: 'Fmaj7',
                        quality: 'major',
                        voicings: [
                            v('Fmaj7-open', [-1, -1, 3, 2, 1, 0], ['F3', 'A3', 'C4', 'E4'], [-1, -1, 3, 2, 1, 0], 1, 'Open'),
                            v('Fmaj7-barre-1', [1, 3, 2, 2, 1, 1], ['F2', 'C3', 'E3', 'A3', 'C4', 'F4'], [1, 3, 2, 2, 1, 1], 1, 'Thumb'),
                            v('Fmaj7-shell', [1, -1, 2, 2, -1, -1], ['F2', 'E3', 'A3'], [1, -1, 2, 3, -1, -1], 1, 'Shell'),
                        ]
                    },
                ]
            },

            /* ================= G Root ================= */
            {
                root: 'G',
                chords: [
                    {
                        name: 'G',
                        quality: 'major',
                        voicings: [
                            v('G-open-folk', [3, 2, 0, 0, 0, 3], ['G2', 'B2', 'D3', 'G3', 'B3', 'G4'], [2, 1, 0, 0, 0, 3], 1, 'Open Folk'),
                            v('G-open-rock', [3, 2, 0, 0, 3, 3], ['G2', 'B2', 'D3', 'G3', 'D4', 'G4'], [2, 1, 0, 0, 3, 4], 1, 'Open Rock'),
                            v('G-barre-3', [3, 5, 5, 4, 3, 3], ['G2', 'D3', 'G3', 'B3', 'D4', 'G4'], [1, 3, 4, 2, 1, 1], 3, 'E-shape'),
                        ]
                    },
                    {
                        name: 'G7',
                        quality: 'dominant',
                        voicings: [
                            v('G7-open', [3, 2, 0, 0, 0, 1], ['G2', 'B2', 'D3', 'G3', 'B3', 'F4'], [3, 2, 0, 0, 0, 1], 1, 'Open'),
                            v('G7-barre-3', [3, 5, 3, 4, 3, 3], ['G2', 'D3', 'F3', 'B3', 'D4', 'G4'], [1, 3, 1, 2, 1, 1], 3, 'E-shape'),
                            v('G7-shell', [3, -1, 3, 4, -1, -1], ['G2', 'F3', 'B3'], [1, -1, 2, 3, -1, -1], 3, 'Shell'),
                        ]
                    },
                    {
                        name: 'G9',
                        quality: 'dominant',
                        voicings: [
                            v('G9-jazz', [-1, 2, 3, 2, 3, -1], ['B2', 'F3', 'A3', 'D4'], [-1, 1, 2, 1, 3, -1], 2, 'Rootless'), // B F A D (3 b7 9 5) - G9 rootless
                            v('G9-barre', [3, 5, 3, 4, 3, 5], ['G2', 'D3', 'F3', 'B3', 'D4', 'A4'], [1, 3, 1, 2, 1, 4], 3, 'Barre'),
                        ]
                    },
                    {
                        name: 'Gsus4',
                        quality: 'sus',
                        voicings: [
                            v('Gsus4-open', [3, 3, 0, 0, 1, 3], ['G2', 'C3', 'D3', 'G3', 'C4', 'G4'], [2, 3, 0, 0, 1, 4], 1, 'Open'),
                            v('Gsus4-barre-3', [3, 5, 5, 5, 3, 3], ['G2', 'D3', 'G3', 'C4', 'D4', 'G4'], [1, 3, 4, 4, 1, 1], 3, 'E-shape'),
                        ]
                    }
                ]
            },

            /* ================= A Root ================= */
            {
                root: 'A',
                chords: [
                    {
                        name: 'Am',
                        quality: 'minor',
                        voicings: [
                            v('Am-open', [-1, 0, 2, 2, 1, 0], ['A2', 'E3', 'A3', 'C4', 'E4'], [-1, 0, 2, 3, 1, 0], 1, 'Open'),
                            v('Am-barre-5', [5, 7, 7, 5, 5, 5], ['A2', 'E3', 'A3', 'C4', 'E4', 'A4'], [1, 3, 4, 1, 1, 1], 5, 'Em-shape'),
                            v('Am-triad', [-1, -1, 7, 5, 5, 5], ['A3', 'C4', 'E4', 'A4'], [-1, -1, 3, 1, 1, 1], 5, 'Triad'),
                        ]
                    },
                    {
                        name: 'Am7',
                        quality: 'minor',
                        voicings: [
                            v('Am7-open', [-1, 0, 2, 0, 1, 0], ['A2', 'E3', 'G3', 'C4', 'E4'], [-1, 0, 2, 0, 1, 0], 1, 'Open'),
                            v('Am7-barre-5', [5, 7, 5, 5, 5, 5], ['A2', 'E3', 'G3', 'C4', 'E4', 'A4'], [1, 3, 1, 1, 1, 1], 5, 'Em-shape'),
                            v('Am7-shell', [5, -1, 5, 5, -1, -1], ['A2', 'G3', 'C4'], [1, -1, 2, 3, -1, -1], 5, 'Shell'),
                        ]
                    },
                ]
            },

            /* ================= B Root ================= */
            {
                root: 'B',
                chords: [
                    {
                        name: 'Bdim',
                        quality: 'dim',
                        voicings: [
                            v('Bdim-x234xx', [-1, 2, 3, 4, -1, -1], ['B2', 'F3', 'B3'], [-1, 1, 2, 4, -1, -1], 2, 'Triad'),
                            v('Bdim-xx0101', [-1, -1, 0, 1, 0, 1], ['D3', 'G#3', 'B3', 'F4'], [-1, -1, 0, 1, 0, 2], 1, 'Inversion'),
                        ]
                    },
                    {
                        name: 'Bm7b5',
                        quality: 'dim',
                        voicings: [
                            v('Bm7b5-open', [-1, 2, 3, 2, 3, -1], ['B2', 'F3', 'A3', 'D4'], [-1, 1, 3, 2, 4, -1], 2, 'Open Shell'),
                            v('Bm7b5-barre-7', [-1, 7, 8, 7, 8, 7], ['B2', 'F3', 'A3', 'D4', 'F4'], [-1, 1, 2, 1, 3, 1], 7, 'Barre'),
                            v('Bm7b5-shell', [-1, 7, -1, 7, 8, -1], ['B2', 'A3', 'D4'], [-1, 1, -1, 2, 3, -1], 7, 'Shell'),
                        ]
                    },
                    {
                        name: 'Bdim7',
                        quality: 'dim',
                        voicings: [
                            v('Bdim7-open', [-1, 2, 0, 1, 0, 1], ['B2', 'D3', 'Ab3', 'D4', 'F4'], [-1, 2, 0, 1, 0, 1], 1, 'Open'),
                            v('Bdim7-x2313x', [-1, 2, 3, 1, 3, -1], ['B2', 'F3', 'Ab3', 'D4'], [-1, 2, 3, 1, 4, -1], 1, 'Jazz'),
                        ]
                    }
                ]
            }
        ]
    }
};
