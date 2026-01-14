// Music Theory Utilities

export const NOTES_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const NOTES_FLAT = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Map of keys to their preferred accidentals
const KEY_ACCIDENTALS: Record<string, 'sharp' | 'flat'> = {
    'C': 'sharp', // Neutral
    'G': 'sharp', 'D': 'sharp', 'A': 'sharp', 'E': 'sharp', 'B': 'sharp', 'F#': 'sharp',
    'F': 'flat', 'Bb': 'flat', 'Eb': 'flat', 'Ab': 'flat', 'Db': 'flat', 'Gb': 'flat', 'Cb': 'flat'
};

// Standard Intervals (semitones)
const INTERVALS = {
    '1': 0, 'b2': 1, '2': 2, 'b3': 3, '3': 4, '4': 5, 'b5': 6, '5': 7, '#5': 8, 'b6': 8, '6': 9, 'b7': 10, '7': 11
};

// Scale Formulas (intervals)
const SCALES = {
    'major': ['1', '2', '3', '4', '5', '6', '7'],
    'minor': ['1', '2', 'b3', '4', '5', 'b6', 'b7'],
};

// Chord Formulas (intervals)
export const CHORD_FORMULAS: Record<string, string[]> = {
    'major': ['1', '3', '5'],
    'minor': ['1', 'b3', '5'],
    'dim': ['1', 'b3', 'b5'],
    'aug': ['1', '3', '#5'],
    'sus2': ['1', '2', '5'],
    'sus4': ['1', '4', '5'],
    'maj7': ['1', '3', '5', '7'],
    'm7': ['1', 'b3', '5', 'b7'],
    '7': ['1', '3', '5', 'b7'],
    'm7b5': ['1', 'b3', 'b5', 'b7'],
    'dim7': ['1', 'b3', 'b5', '6'], // bb7 is 6
    '6': ['1', '3', '5', '6'],
    'm6': ['1', 'b3', '5', '6'],
    '9': ['1', '3', '5', 'b7', '2'], // 9 is 2
    'maj9': ['1', '3', '5', '7', '2'],
    'm9': ['1', 'b3', '5', 'b7', '2'],
    'add9': ['1', '3', '5', '2'],
    'madd9': ['1', 'b3', '5', '2'],
    '11': ['1', '3', '5', 'b7', '2', '4'],
    '13': ['1', '3', '5', 'b7', '2', '4', '6'],
};

/**
 * Get the chromatic index of a note (0-11)
 */
export function getNoteIndex(note: string): number {
    // Normalize: remove octave
    const pitch = note.replace(/\d+$/, '');
    let idx = NOTES_SHARP.indexOf(pitch);
    if (idx === -1) idx = NOTES_FLAT.indexOf(pitch);
    return idx;
}

/**
 * Get the correct note name for a given semitone index in a specific key context
 */
export function getNoteName(chromaticIndex: number, keyRoot: string): string {
    const normalizedIndex = (chromaticIndex % 12 + 12) % 12;
    const type = KEY_ACCIDENTALS[keyRoot] || 'sharp';
    return type === 'sharp' ? NOTES_SHARP[normalizedIndex] : NOTES_FLAT[normalizedIndex];
}

/**
 * Get the notes of a scale
 */
export function getScaleNotes(root: string, scaleType: 'major' | 'minor' = 'major'): string[] {
    const rootIdx = getNoteIndex(root);
    if (rootIdx === -1) throw new Error(`Invalid root note: ${root}`);

    const intervals = SCALES[scaleType];
    return intervals.map(interval => {
        const semitones = INTERVALS[interval as keyof typeof INTERVALS];
        return getNoteName(rootIdx + semitones, root);
    });
}

/**
 * Get the notes of a chord
 */
export function getChordNotes(root: string, quality: string): string[] {
    const rootIdx = getNoteIndex(root);
    if (rootIdx === -1) throw new Error(`Invalid root note: ${root}`);

    // Map quality to formula key
    let formulaKey = quality;
    if (quality === 'dominant') formulaKey = '7';
    if (quality === 'sus') formulaKey = 'sus4'; // Default sus to sus4

    const formula = CHORD_FORMULAS[formulaKey] || CHORD_FORMULAS['major'];

    return formula.map(interval => {
        const semitones = INTERVALS[interval as keyof typeof INTERVALS];
        return getNoteName(rootIdx + semitones, root);
    });
}
