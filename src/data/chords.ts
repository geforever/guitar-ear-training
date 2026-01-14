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

// Helper for 'x' in arrays
const x = -1;

// Helper to create voicings
const v = (id: string, frets: number[], notes: string[], fingers?: number[], position: number = 1, label?: string): ChordVoicing => ({
    id, frets, notes, fingers, position, label
});

// Base C Major Key Data
const C_MAJOR_KEY: Key = {
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
                        v('C-open', [-1, 3, 2, 0, 1, 0], ['C3', 'E3', 'G3', 'C4', 'E4'], [-1, 3, 2, 0, 1, 0], 1, 'Open (C-shape)'),
                        v('C-barre-3', [-1, 3, 5, 5, 5, 3], ['C3', 'G3', 'C4', 'E4', 'G4'], [-1, 1, 3, 3, 3, 1], 3, 'Barre (A-shape)'),
                        v('C-barre-8', [8, 10, 10, 9, 8, 8], ['C3', 'G3', 'C4', 'E4', 'G4', 'C5'], [1, 3, 4, 2, 1, 1], 8, 'Barre (E-shape)'),
                        v('C-G-shape', [-1, 7, 5, 5, 5, 8], ['E3', 'G3', 'C4', 'E4', 'C5'], [-1, 3, 1, 1, 1, 4], 5, 'G-shape (Partial)'),
                        v('C-D-shape', [-1, -1, 10, 12, 13, 12], ['C4', 'G4', 'C5', 'E5'], [-1, -1, 1, 3, 4, 2], 10, 'D-shape'),
                        v('C-triad-5', [-1, -1, 5, 5, 5, -1], ['G3', 'C4', 'E4'], [-1, -1, 1, 1, 1, -1], 5, 'Triad (A-shape)'),
                        v('C-triad-8', [-1, -1, 10, 9, 8, -1], ['C4', 'E4', 'G4'], [-1, -1, 3, 2, 1, -1], 8, 'Triad (E-shape)'),
                    ]
                },
                {
                    name: 'Cmaj7',
                    quality: 'major',
                    voicings: [
                        v('Cmaj7-open', [-1, 3, 2, 0, 0, 0], ['C3', 'E3', 'G3', 'B3', 'E4'], [-1, 3, 2, 0, 0, 0], 1, 'Open (C-shape)'),
                        v('Cmaj7-barre-3', [-1, 3, 5, 4, 5, 3], ['C3', 'G3', 'B3', 'E4', 'G4'], [-1, 1, 3, 2, 4, 1], 3, 'Barre (A-shape)'),
                        v('Cmaj7-shell', [-1, 3, -1, 4, 5, -1], ['C3', 'B3', 'E4'], [-1, 1, -1, 2, 3, -1], 3, 'Shell'),
                        v('Cmaj7-E-shape', [8, x, 9, 9, 8, x], ['C3', 'B3', 'E4', 'G4'], [1, -1, 3, 4, 2, -1], 8, 'E-shape (Shell)'),
                        v('Cmaj7-G-shape', [-1, 7, 5, 5, 5, 7], ['E3', 'G3', 'C4', 'E4', 'B4'], [-1, 3, 1, 1, 1, 4], 5, 'G-shape'),
                        v('Cmaj7-D-shape', [-1, -1, 10, 12, 12, 12], ['C4', 'G4', 'B4', 'E5'], [-1, -1, 1, 3, 3, 3], 10, 'D-shape'),
                    ]
                },
                {
                    name: 'C6/9',
                    quality: 'major',
                    voicings: [
                        v('C69-jazz', [-1, 3, 2, 2, 3, 3], ['C3', 'E3', 'A3', 'D4', 'G4'], [-1, 2, 1, 1, 3, 4], 2, 'Jazz (C-shape)'),
                        v('C69-top', [-1, -1, 10, 9, 10, 10], ['C4', 'E4', 'A4', 'D5'], [-1, -1, 2, 1, 3, 4], 9, 'Top Strings'),
                        v('C69-mid', [-1, 3, 2, 2, 3, -1], ['C3', 'E3', 'A3', 'D4'], [-1, 2, 1, 1, 3, -1], 2, 'Mid Strings'),
                        v('C69-A-shape', [-1, 3, 5, 2, 3, 3], ['C3', 'G3', 'A3', 'D4', 'G4'], [-1, 2, 4, 1, 3, 3], 2, 'A-shape Var'),
                        v('C69-E-shape', [8, 7, 7, 7, 8, 8], ['C3', 'E3', 'A3', 'D4', 'G4', 'C5'], [2, 1, 1, 1, 2, 2], 7, 'E-shape'),
                    ]
                },
                {
                    name: 'Csus2',
                    quality: 'sus',
                    voicings: [
                        v('Csus2-open', [-1, 3, 0, 0, 1, -1], ['C3', 'D3', 'G3', 'C4'], [-1, 3, 0, 0, 1, -1], 1, 'Open (C-shape)'),
                        v('Csus2-barre-3', [-1, 3, 5, 5, 3, 3], ['C3', 'G3', 'C4', 'D4', 'G4'], [-1, 1, 3, 4, 1, 1], 3, 'Barre (A-shape)'),
                        v('Csus2-E-shape', [8, 10, 10, 7, 8, 8], ['C3', 'G3', 'C4', 'D4', 'G4', 'C5'], [2, 3, 4, 1, 2, 2], 7, 'E-shape'),
                        v('Csus2-G-shape', [-1, -1, 5, 5, 3, 3], ['G3', 'C4', 'D4', 'G4'], [-1, -1, 3, 4, 1, 1], 3, 'G-shape (Top)'),
                    ]
                },
                {
                    name: 'Csus4',
                    quality: 'sus',
                    voicings: [
                        v('Csus4-open', [-1, 3, 3, 0, 1, 1], ['C3', 'F3', 'G3', 'C4', 'F4'], [-1, 3, 4, 0, 1, 1], 1, 'Open (C-shape)'),
                        v('Csus4-barre-3', [-1, 3, 5, 5, 6, 3], ['C3', 'G3', 'C4', 'F4', 'G4'], [-1, 1, 3, 3, 4, 1], 3, 'Barre (A-shape)'),
                        v('Csus4-barre-8', [8, 10, 10, 10, 8, 8], ['C3', 'G3', 'C4', 'F4', 'G4', 'C5'], [1, 3, 3, 4, 1, 1], 8, 'Barre (E-shape)'),
                        v('Csus4-D-shape', [-1, -1, 10, 12, 13, 13], ['C4', 'G4', 'C5', 'F5'], [-1, -1, 1, 3, 4, 4], 10, 'D-shape'),
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
                        v('Dm-open', [-1, -1, 0, 2, 3, 1], ['D3', 'A3', 'D4', 'F4'], [-1, -1, 0, 2, 3, 1], 1, 'Open (Dm-shape)'),
                        v('Dm-barre-5', [-1, 5, 7, 7, 6, 5], ['D3', 'A3', 'D4', 'F4', 'A4'], [-1, 1, 3, 4, 2, 1], 5, 'Barre (Am-shape)'),
                        v('Dm-barre-10', [10, 12, 12, 10, 10, 10], ['D3', 'A3', 'D4', 'F4', 'A4', 'D5'], [1, 3, 4, 1, 1, 1], 10, 'Barre (Em-shape)'),
                        v('Dm-Cm-shape', [-1, 5, 3, 2, 3, -1], ['D3', 'F3', 'A3', 'D4'], [-1, 4, 2, 1, 3, -1], 2, 'Cm-shape'),
                        v('Dm-Gm-shape', [-1, -1, 7, 7, 6, 5], ['A3', 'D4', 'F4', 'A4'], [-1, -1, 3, 4, 2, 1], 5, 'Gm-shape (Top)'),
                    ]
                },
                {
                    name: 'Dm7',
                    quality: 'minor',
                    voicings: [
                        v('Dm7-open', [-1, -1, 0, 2, 1, 1], ['D3', 'A3', 'C4', 'F4'], [-1, -1, 0, 2, 1, 1], 1, 'Open (Dm-shape)'),
                        v('Dm7-barre-5', [-1, 5, 7, 5, 6, 5], ['D3', 'A3', 'C4', 'F4', 'A4'], [-1, 1, 3, 1, 2, 1], 5, 'Barre (Am-shape)'),
                        v('Dm7-shell', [-1, 5, -1, 5, 6, -1], ['D3', 'C4', 'F4'], [-1, 1, -1, 2, 3, -1], 5, 'Shell'),
                        v('Dm7-Em-shape', [10, 12, 10, 10, 10, 10], ['D3', 'A3', 'C4', 'F4', 'A4', 'D5'], [1, 3, 1, 1, 1, 1], 10, 'Barre (Em-shape)'),
                        v('Dm7-Cm-shape', [-1, 5, 3, 5, 3, -1], ['D3', 'F3', 'C4', 'F4'], [-1, 3, 1, 4, 1, -1], 3, 'Cm-shape'),
                    ]
                },
                {
                    name: 'Dm9',
                    quality: 'minor',
                    voicings: [
                        v('Dm9-jazz', [-1, 5, 3, 5, 5, -1], ['D3', 'F3', 'C4', 'E4'], [-1, 2, 1, 3, 4, -1], 3, 'Jazz (Cm-shape)'),
                        v('Dm9-shell', [-1, 5, -1, 5, 5, -1], ['D3', 'C4', 'E4'], [-1, 1, -1, 1, 1, -1], 5, 'Shell (no3)'),
                        v('Dm9-top', [-1, -1, 0, 5, 5, 0], ['D3', 'G3', 'C4', 'E4'], [-1, -1, 0, 2, 3, 0], 1, 'Open-ish'),
                        v('Dm9-Em-shape', [10, x, 10, 10, 10, 12], ['D3', 'C4', 'F4', 'A4', 'E5'], [1, -1, 1, 1, 1, 3], 10, 'Em-shape'),
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
                        v('Em-open', [0, 2, 2, 0, 0, 0], ['E2', 'B2', 'E3', 'G3', 'B3', 'E4'], [0, 2, 3, 0, 0, 0], 1, 'Open (Em-shape)'),
                        v('Em-barre-7', [-1, 7, 9, 9, 8, 7], ['E3', 'B3', 'E4', 'G4', 'B4'], [-1, 1, 3, 4, 2, 1], 7, 'Barre (Am-shape)'),
                        v('Em-triad', [-1, -1, -1, 9, 8, 7], ['E4', 'G4', 'B4'], [-1, -1, -1, 3, 2, 1], 7, 'Triad'),
                        v('Em-Dm-shape', [-1, -1, 2, 4, 5, 3], ['E3', 'B3', 'E4', 'G4'], [-1, -1, 1, 3, 4, 2], 2, 'Dm-shape'),
                        v('Em-Cm-shape', [-1, 7, 5, 4, 5, -1], ['E3', 'G3', 'B3', 'E4'], [-1, 4, 2, 1, 3, -1], 4, 'Cm-shape'),
                        v('Em-Gm-shape', [-1, -1, 9, 9, 8, 7], ['B3', 'E4', 'G4', 'B4'], [-1, -1, 3, 4, 2, 1], 7, 'Gm-shape (Top)'),
                    ]
                },
                {
                    name: 'Em7',
                    quality: 'minor',
                    voicings: [
                        v('Em7-open', [0, 2, 2, 0, 3, 0], ['E2', 'B2', 'E3', 'G3', 'D4', 'E4'], [0, 1, 2, 0, 3, 0], 1, 'Open (Em-shape)'),
                        v('Em7-barre-7', [-1, 7, 9, 7, 8, 7], ['E3', 'B3', 'D4', 'G4', 'B4'], [-1, 1, 3, 1, 2, 1], 7, 'Barre (Am-shape)'),
                        v('Em7-shell', [0, -1, 5, 7, -1, -1], ['E2', 'G3', 'D4'], [0, -1, 1, 3, -1, -1], 5, 'Shell'),
                        v('Em7-Dm-shape', [-1, -1, 2, 4, 3, 3], ['E3', 'B3', 'D4', 'G4'], [-1, -1, 1, 3, 2, 2], 2, 'Dm-shape'),
                        v('Em7-Cm-shape', [-1, 7, 5, 7, 5, -1], ['E3', 'G3', 'D4', 'G4'], [-1, 3, 1, 4, 1, -1], 5, 'Cm-shape'),
                    ]
                },
                {
                    name: 'Emadd9',
                    quality: 'minor',
                    voicings: [
                        v('Emadd9-open', [0, 2, 4, 0, 0, 0], ['E2', 'B2', 'F#3', 'G3', 'B3', 'E4'], [0, 1, 4, 0, 0, 0], 1, 'Open'),
                        v('Emadd9-barre', [-1, 7, 5, 0, 0, 0], ['E3', 'G3', 'D4', 'F#4'], [-1, 3, 1, 0, 0, 0], 5, 'Stretch'),
                        v('Em9-jazz', [0, -1, 4, 0, 3, 2], ['E2', 'F#3', 'G3', 'D4', 'F#4'], [0, -1, 3, 0, 2, 1], 1, 'Jazz'),
                        v('Em9-Cm-shape', [-1, 7, 5, 7, 5, x], ['E3', 'G3', 'D4', 'F#4'], [-1, 3, 1, 4, 1, -1], 5, 'Cm-shape'),
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
                        v('F-barre-1', [1, 3, 3, 2, 1, 1], ['F2', 'C3', 'F3', 'A3', 'C4', 'F4'], [1, 3, 4, 2, 1, 1], 1, 'Barre (E-shape)'),
                        v('F-open-simple', [-1, -1, 3, 2, 1, 1], ['F3', 'A3', 'C4', 'F4'], [-1, -1, 3, 2, 1, 1], 1, 'Simple'),
                        v('F-triad', [-1, -1, -1, 10, 10, 8], ['F4', 'A4', 'C5'], [-1, -1, -1, 3, 2, 1], 8, 'Triad'),
                        v('F-A-shape', [-1, 8, 10, 10, 10, 8], ['F3', 'C4', 'F4', 'A4', 'C5'], [-1, 1, 3, 3, 3, 1], 8, 'Barre (A-shape)'),
                        v('F-C-shape', [-1, 8, 7, 5, 6, 5], ['F3', 'A3', 'C4', 'F4', 'A4'], [-1, 4, 3, 1, 2, 1], 5, 'C-shape'),
                        v('F-G-shape', [-1, -1, 10, 10, 10, 13], ['C4', 'F4', 'A4', 'F5'], [-1, -1, 1, 1, 1, 4], 10, 'G-shape (Top)'),
                    ]
                },
                {
                    name: 'Fmaj7',
                    quality: 'major',
                    voicings: [
                        v('Fmaj7-open', [-1, -1, 3, 2, 1, 0], ['F3', 'A3', 'C4', 'E4'], [-1, -1, 3, 2, 1, 0], 1, 'Open'),
                        v('Fmaj7-barre-1', [1, 3, 2, 2, 1, 1], ['F2', 'C3', 'E3', 'A3', 'C4', 'F4'], [1, 3, 2, 2, 1, 1], 1, 'Thumb (E-shape)'),
                        v('Fmaj7-shell', [1, -1, 2, 2, -1, -1], ['F2', 'E3', 'A3'], [1, -1, 2, 3, -1, -1], 1, 'Shell'),
                        v('Fmaj7-A-shape', [-1, 8, 10, 9, 10, 8], ['F3', 'C4', 'E4', 'A4', 'C5'], [-1, 1, 3, 2, 4, 1], 8, 'Barre (A-shape)'),
                        v('Fmaj7-C-shape', [-1, 8, 7, 5, 5, 5], ['F3', 'A3', 'C4', 'E4', 'A4'], [-1, 4, 3, 1, 1, 1], 5, 'C-shape'),
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
                        v('G-barre-3', [3, 5, 5, 4, 3, 3], ['G2', 'D3', 'G3', 'B3', 'D4', 'G4'], [1, 3, 4, 2, 1, 1], 3, 'Barre (E-shape)'),
                        v('G-C-shape', [-1, 10, 9, 7, 8, 7], ['G3', 'B3', 'D4', 'G4', 'B4'], [-1, 4, 3, 1, 2, 1], 7, 'C-shape'),
                        v('G-A-shape', [-1, 10, 12, 12, 12, 10], ['G3', 'D4', 'G4', 'B4', 'D5'], [-1, 1, 3, 3, 3, 1], 10, 'Barre (A-shape)'),
                        v('G-D-shape', [-1, -1, 5, 7, 8, 7], ['G3', 'D4', 'G4', 'B4'], [-1, -1, 1, 3, 4, 2], 5, 'D-shape'),
                    ]
                },
                {
                    name: 'G7',
                    quality: 'dominant',
                    voicings: [
                        v('G7-open', [3, 2, 0, 0, 0, 1], ['G2', 'B2', 'D3', 'G3', 'B3', 'F4'], [3, 2, 0, 0, 0, 1], 1, 'Open'),
                        v('G7-barre-3', [3, 5, 3, 4, 3, 3], ['G2', 'D3', 'F3', 'B3', 'D4', 'G4'], [1, 3, 1, 2, 1, 1], 3, 'Barre (E-shape)'),
                        v('G7-shell', [3, -1, 3, 4, -1, -1], ['G2', 'F3', 'B3'], [1, -1, 2, 3, -1, -1], 3, 'Shell'),
                        v('G7-A-shape', [-1, 10, 12, 10, 12, 10], ['G3', 'D4', 'F4', 'B4', 'D5'], [-1, 1, 3, 1, 4, 1], 10, 'Barre (A-shape)'),
                        v('G7-C-shape', [-1, 10, 9, 10, 8, x], ['G3', 'B3', 'F4', 'G4'], [-1, 3, 2, 4, 1, -1], 8, 'C-shape'),
                        v('G7-D-shape', [-1, -1, 5, 7, 6, 7], ['G3', 'D4', 'F4', 'B4'], [-1, -1, 1, 3, 2, 4], 5, 'D-shape'),
                    ]
                },
                {
                    name: 'G9',
                    quality: 'dominant',
                    voicings: [
                        v('G9-jazz', [-1, 2, 3, 2, 3, -1], ['B2', 'F3', 'A3', 'D4'], [-1, 1, 2, 1, 3, -1], 2, 'Rootless'),
                        v('G9-barre', [3, 5, 3, 4, 3, 5], ['G2', 'D3', 'F3', 'B3', 'D4', 'A4'], [1, 3, 1, 2, 1, 4], 3, 'Barre (E-shape)'),
                        v('G9-A-shape', [-1, 10, 9, 10, 10, 10], ['G3', 'B3', 'F4', 'A4', 'D5'], [-1, 2, 1, 3, 3, 3], 9, 'A-shape'),
                    ]
                },
                {
                    name: 'Gsus4',
                    quality: 'sus',
                    voicings: [
                        v('Gsus4-open', [3, 3, 0, 0, 1, 3], ['G2', 'C3', 'D3', 'G3', 'C4', 'G4'], [2, 3, 0, 0, 1, 4], 1, 'Open'),
                        v('Gsus4-barre-3', [3, 5, 5, 5, 3, 3], ['G2', 'D3', 'G3', 'C4', 'D4', 'G4'], [1, 3, 4, 4, 1, 1], 3, 'Barre (E-shape)'),
                        v('Gsus4-A-shape', [-1, 10, 12, 12, 13, 10], ['G3', 'D4', 'G4', 'C5', 'D5'], [-1, 1, 3, 3, 4, 1], 10, 'Barre (A-shape)'),
                        v('Gsus4-D-shape', [-1, -1, 5, 7, 8, 8], ['G3', 'D4', 'G4', 'C5'], [-1, -1, 1, 3, 4, 4], 5, 'D-shape'),
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
                        v('Am-open', [-1, 0, 2, 2, 1, 0], ['A2', 'E3', 'A3', 'C4', 'E4'], [-1, 0, 2, 3, 1, 0], 1, 'Open (Am-shape)'),
                        v('Am-barre-5', [5, 7, 7, 5, 5, 5], ['A2', 'E3', 'A3', 'C4', 'E4', 'A4'], [1, 3, 4, 1, 1, 1], 5, 'Barre (Em-shape)'),
                        v('Am-triad', [-1, -1, 7, 5, 5, 5], ['A3', 'C4', 'E4', 'A4'], [-1, -1, 3, 1, 1, 1], 5, 'Triad'),
                        v('Am-Cm-shape', [-1, 12, 10, 9, 10, 8], ['A3', 'C4', 'E4', 'A4', 'C5'], [-1, 4, 2, 1, 3, 1], 8, 'Cm-shape'), // Hard stretch
                        v('Am-Gm-shape', [-1, -1, 7, 5, 5, 5], ['A3', 'C4', 'E4', 'A4'], [-1, -1, 3, 1, 1, 1], 5, 'Gm-shape (Top)'),
                        v('Am-Dm-shape', [-1, -1, 7, 9, 10, 8], ['A3', 'E4', 'A4', 'C5'], [-1, -1, 1, 3, 4, 2], 7, 'Dm-shape'),
                    ]
                },
                {
                    name: 'Am7',
                    quality: 'minor',
                    voicings: [
                        v('Am7-open', [-1, 0, 2, 0, 1, 0], ['A2', 'E3', 'G3', 'C4', 'E4'], [-1, 0, 2, 0, 1, 0], 1, 'Open (Am-shape)'),
                        v('Am7-barre-5', [5, 7, 5, 5, 5, 5], ['A2', 'E3', 'G3', 'C4', 'E4', 'A4'], [1, 3, 1, 1, 1, 1], 5, 'Barre (Em-shape)'),
                        v('Am7-shell', [5, -1, 5, 5, -1, -1], ['A2', 'G3', 'C4'], [1, -1, 2, 3, -1, -1], 5, 'Shell'),
                        v('Am7-Cm-shape', [-1, 12, 10, 12, 10, -1], ['A3', 'C4', 'G4', 'C5'], [-1, 3, 1, 4, 1, -1], 10, 'Cm-shape'),
                        v('Am7-Dm-shape', [-1, -1, 7, 9, 8, 8], ['A3', 'E4', 'G4', 'C5'], [-1, -1, 1, 3, 2, 2], 7, 'Dm-shape'),
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
                        v('Bdim-E-shape', [7, 8, 9, -1, -1, -1], ['B2', 'F3', 'B3'], [1, 2, 3, -1, -1, -1], 7, 'E-shape (Triad)'),
                    ]
                },
                {
                    name: 'Bm7b5',
                    quality: 'dim',
                    voicings: [
                        v('Bm7b5-open', [-1, 2, 3, 2, 3, -1], ['B2', 'F3', 'A3', 'D4'], [-1, 1, 3, 2, 4, -1], 2, 'Open Shell'),
                        v('Bm7b5-barre-7', [-1, 7, 8, 7, 8, 7], ['B2', 'F3', 'A3', 'D4', 'F4'], [-1, 1, 2, 1, 3, 1], 7, 'Barre (Em-shape)'),
                        v('Bm7b5-shell', [-1, 7, -1, 7, 8, -1], ['B2', 'A3', 'D4'], [-1, 1, -1, 2, 3, -1], 7, 'Shell'),
                        v('Bm7b5-E-shape', [7, x, 7, 7, 6, x], ['B2', 'A3', 'D4', 'F4'], [2, -1, 3, 4, 1, -1], 6, 'E-shape'),
                    ]
                },
                {
                    name: 'Bdim7',
                    quality: 'dim',
                    voicings: [
                        v('Bdim7-open', [-1, 2, 0, 1, 0, 1], ['B2', 'D3', 'Ab3', 'D4', 'F4'], [-1, 2, 0, 1, 0, 1], 1, 'Open'),
                        v('Bdim7-x2313x', [-1, 2, 3, 1, 3, -1], ['B2', 'F3', 'Ab3', 'D4'], [-1, 2, 3, 1, 4, -1], 1, 'Jazz'),
                        v('Bdim7-E-shape', [7, x, 6, 7, 6, x], ['B2', 'Ab3', 'D4', 'F4'], [2, -1, 1, 3, 1, -1], 6, 'E-shape'),
                    ]
                }
            ]
        }
    ]
};

// --- Helper Functions for Transposition ---

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function getNoteIndex(note: string): number {
    // Handle flats by converting to sharps
    const flatMap: Record<string, string> = {
        'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#'
    };
    const n = flatMap[note] || note;
    return NOTES.indexOf(n);
}

function transposeNote(note: string, semitones: number): string {
    // Extract octave if present (e.g. "C3")
    const match = note.match(/^([A-G][#b]?)(-?\d+)?$/);
    if (!match) return note;

    const pitch = match[1];
    const octave = match[2] ? parseInt(match[2]) : undefined;

    const idx = getNoteIndex(pitch);
    if (idx === -1) return note;

    let newIdx = (idx + semitones) % 12;
    if (newIdx < 0) newIdx += 12;

    const newPitch = NOTES[newIdx];

    // Handle octave shift
    if (octave !== undefined) {
        // If semitones is negative, Math.floor correctly handles it (e.g. -1/12 -> -1)
        // But we need to be careful with the modulo logic above which wraps 0-11
        // Let's re-calculate absolute index to be safe
        const absIdx = idx + (octave * 12) + semitones;
        const newOctave = Math.floor(absIdx / 12);
        return `${newPitch}${newOctave}`;
    }

    return newPitch;
}

function transposeRoot(root: string, semitones: number): string {
    return transposeNote(root, semitones);
}

function transposeKey(baseKey: Key, semitones: number, newName: string): Key {
    const newRoots = baseKey.roots.map(group => {
        const newRoot = transposeRoot(group.root, semitones);

        const newChords = group.chords.map(chord => {
            // Transpose Chord Name (e.g. "Cmaj7" -> "Dmaj7")
            // Simple regex to replace the root part
            const rootRegex = new RegExp(`^${group.root}`);
            const newChordName = chord.name.replace(rootRegex, newRoot);

            const newVoicings = chord.voicings.map(voicing => {
                // Transpose Frets
                const newFrets = voicing.frets.map(f => f === -1 ? -1 : f + semitones);

                // Transpose Notes
                const newNotes = voicing.notes.map(n => transposeNote(n, semitones));

                // Update ID and Label if they contain the root
                // Ideally IDs should be generic, but they are like 'C-open'
                const newId = voicing.id.replace(new RegExp(`^${group.root}`), newRoot);

                return {
                    ...voicing,
                    id: newId,
                    frets: newFrets,
                    notes: newNotes,
                    // Position might need adjustment if it was 0 (open) and now is barred
                    // But for simple transposition of shapes, we just shift frets.
                    // If original position was 1, new is 1 + semitones? 
                    // Actually, 'position' in the data seems to be the fret number of the first finger or barre.
                    // So yes, position shifts.
                    position: voicing.position ? voicing.position + semitones : undefined
                };
            });

            return {
                ...chord,
                name: newChordName,
                voicings: newVoicings
            };
        });

        return {
            root: newRoot,
            chords: newChords
        };
    });

    return {
        name: newName,
        scale: baseKey.scale,
        roots: newRoots
    };
}

// Generate all 12 keys based on Circle of Fifths
// C -> G -> D -> A -> E -> B -> F# -> Db -> Ab -> Eb -> Bb -> F
const KEYS_TO_GENERATE = [
    { name: 'C Major', semitones: 0 },
    { name: 'G Major', semitones: 7 },
    { name: 'D Major', semitones: 2 },
    { name: 'A Major', semitones: 9 },
    { name: 'E Major', semitones: 4 },
    { name: 'B Major', semitones: 11 },
    { name: 'F# Major', semitones: 6 },
    { name: 'Db Major', semitones: 1 },
    { name: 'Ab Major', semitones: 8 },
    { name: 'Eb Major', semitones: 3 },
    { name: 'Bb Major', semitones: 10 },
    { name: 'F Major', semitones: 5 },
];

export const CHORD_LIBRARY: Record<string, Key> = {};

KEYS_TO_GENERATE.forEach(k => {
    CHORD_LIBRARY[k.name] = transposeKey(C_MAJOR_KEY, k.semitones, k.name);
});
