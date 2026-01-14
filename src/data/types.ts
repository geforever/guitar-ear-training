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
