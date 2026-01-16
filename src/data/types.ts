export type ChordQuality = 'major' | 'minor' | 'dominant' | 'sus' | 'dim' | 'aug' | 'maj7' | 'm7' | 'm7b5' | 'sus2' | 'sus4' | '6' | 'm6' | 'maj9' | '9' | 'm9' | 'maj11' | '11' | 'm11' | 'maj13' | '13' | 'm13' | 'add9';

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
