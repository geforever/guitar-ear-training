import type { ChordVoicing } from './types';
import { getNoteIndex, getNoteName } from './musicTheory';

// String tuning (Standard E A D G B E)
const STRING_ROOTS = [4, 9, 2, 7, 11, 4]; // Chromatic indices of open strings

// Basic CAGED Shapes (Major)
// Position is defined by the Root Note location.
// C-shape: Root on A string (5). Position is where the root is.
// A-shape: Root on A string (5). Position is where the root is.
// G-shape: Root on E string (6). Position is where the root is.
// E-shape: Root on E string (6). Position is where the root is.
// D-shape: Root on D string (4). Position is where the root is.

// Let's redefine offsets relative to the ROOT NOTE FRET.
// If Root is at fret R.
// E-shape: [R, R+2, R+2, R+1, R, R] (Root on 6)
// A-shape: [x, R, R+2, R+2, R+2, R] (Root on 5)
// D-shape: [x, x, R, R+2, R+3, R+2] (Root on 4)
// C-shape: [x, R, R-1, R-3, R-2, R-3] -> This involves negative offsets if we define relative to root.
// Easier to define relative to a "Capo/Barre" position, and specify where the root is within that shape.

// Quality Modifications (deltas from Major)
// 'b3': flatten 3rd
// 'b7': flatten 7th (which is root-2 semitones usually, or we need interval maps)
// This is getting complicated to generate purely algorithmically without a massive lookup table.
// Given the requirement for "Correct Human Playable Chords", hardcoding the *shapes* for each quality is safer than modifying intervals on the fly.

type ShapeDef = {
    id: string;
    rootString: number; // 6, 5, 4
    frets: number[]; // Relative to "Position". Position is determined by aligning rootString + rootOffset.
    rootFretOffset: number; // Where the root is relative to the "Position" (Barre/Nut).
    label: string;
    omit?: boolean[]; // Optional mask to omit strings (e.g. for shell chords)
};

const SHAPE_LIBRARY: Record<string, ShapeDef[]> = {
    'major': [
        { id: 'E-shape', rootString: 6, frets: [0, 2, 2, 1, 0, 0], rootFretOffset: 0, label: 'E-shape' },
        { id: 'A-shape', rootString: 5, frets: [-1, 0, 2, 2, 2, 0], rootFretOffset: 0, label: 'A-shape' },
        { id: 'D-shape', rootString: 4, frets: [-1, -1, 0, 2, 3, 2], rootFretOffset: 0, label: 'D-shape' },
        { id: 'C-shape', rootString: 5, frets: [-1, 3, 2, 0, 1, 0], rootFretOffset: 3, label: 'C-shape' },
        { id: 'G-shape', rootString: 6, frets: [3, 2, 0, 0, 0, 3], rootFretOffset: 3, label: 'G-shape' },
    ],
    'minor': [
        { id: 'Em-shape', rootString: 6, frets: [0, 2, 2, 0, 0, 0], rootFretOffset: 0, label: 'Em-shape' },
        { id: 'Am-shape', rootString: 5, frets: [-1, 0, 2, 2, 1, 0], rootFretOffset: 0, label: 'Am-shape' },
        { id: 'Dm-shape', rootString: 4, frets: [-1, -1, 0, 2, 3, 1], rootFretOffset: 0, label: 'Dm-shape' },
        { id: 'Cm-shape', rootString: 5, frets: [-1, 3, 1, 0, 1, -1], rootFretOffset: 3, label: 'Cm-shape' }, // Hard to play full, usually shell
        { id: 'Gm-shape', rootString: 6, frets: [3, 1, 0, 0, -1, 3], rootFretOffset: 3, label: 'Gm-shape' }, // Hard
    ],
    '7': [
        { id: 'E7-shape', rootString: 6, frets: [0, 2, 0, 1, 0, 0], rootFretOffset: 0, label: 'E7-shape' },
        { id: 'A7-shape', rootString: 5, frets: [-1, 0, 2, 0, 2, 0], rootFretOffset: 0, label: 'A7-shape' },
        { id: 'D7-shape', rootString: 4, frets: [-1, -1, 0, 2, 1, 2], rootFretOffset: 0, label: 'D7-shape' },
        { id: 'C7-shape', rootString: 5, frets: [-1, 3, 2, 3, 1, -1], rootFretOffset: 3, label: 'C7-shape' },
    ],
    'maj7': [
        { id: 'Emaj7-shape', rootString: 6, frets: [0, 2, 1, 1, 0, 0], rootFretOffset: 0, label: 'Emaj7-shape' }, // Hard barre, usually shell
        { id: 'Amaj7-shape', rootString: 5, frets: [-1, 0, 2, 1, 2, 0], rootFretOffset: 0, label: 'Amaj7-shape' },
        { id: 'Dmaj7-shape', rootString: 4, frets: [-1, -1, 0, 2, 2, 2], rootFretOffset: 0, label: 'Dmaj7-shape' },
        { id: 'Cmaj7-shape', rootString: 5, frets: [-1, 3, 2, 0, 0, 0], rootFretOffset: 3, label: 'Cmaj7-shape' },
    ],
    'm7': [
        { id: 'Em7-shape', rootString: 6, frets: [0, 2, 0, 0, 0, 0], rootFretOffset: 0, label: 'Em7-shape' },
        { id: 'Am7-shape', rootString: 5, frets: [-1, 0, 2, 0, 1, 0], rootFretOffset: 0, label: 'Am7-shape' },
        { id: 'Dm7-shape', rootString: 4, frets: [-1, -1, 0, 2, 1, 1], rootFretOffset: 0, label: 'Dm7-shape' },
    ],
    'sus4': [
        { id: 'Esus4-shape', rootString: 6, frets: [0, 2, 2, 2, 0, 0], rootFretOffset: 0, label: 'Esus4-shape' },
        { id: 'Asus4-shape', rootString: 5, frets: [-1, 0, 2, 2, 3, 0], rootFretOffset: 0, label: 'Asus4-shape' },
        { id: 'Dsus4-shape', rootString: 4, frets: [-1, -1, 0, 2, 3, 3], rootFretOffset: 0, label: 'Dsus4-shape' },
    ],
    'sus2': [
        { id: 'Esus2-shape', rootString: 6, frets: [0, 2, 4, 4, 0, 0], rootFretOffset: 0, label: 'Esus2-shape' }, // Stretch
        { id: 'Asus2-shape', rootString: 5, frets: [-1, 0, 2, 2, 0, 0], rootFretOffset: 0, label: 'Asus2-shape' },
        { id: 'Dsus2-shape', rootString: 4, frets: [-1, -1, 0, 2, 3, 0], rootFretOffset: 0, label: 'Dsus2-shape' },
    ]
};

/**
 * Generate voicings for a specific chord
 */
export function generateVoicings(root: string, quality: string, keyRoot: string): ChordVoicing[] {
    const rootIdx = getNoteIndex(root);
    const shapes = SHAPE_LIBRARY[quality] || SHAPE_LIBRARY['major'];
    const voicings: ChordVoicing[] = [];

    shapes.forEach(shape => {
        // Find the fret for the root on the shape's root string
        // String 6: E (4), String 5: A (9), String 4: D (2)
        const stringOpenNoteIdx = STRING_ROOTS[shape.rootString - 1];

        // Calculate fret needed for the root
        // rootIdx = (stringOpenNoteIdx + fret) % 12
        // fret = (rootIdx - stringOpenNoteIdx + 12) % 12
        let rootFret = (rootIdx - stringOpenNoteIdx + 12) % 12;

        // Adjust for shape's internal offset
        // The "Position" (barre) is at rootFret - shape.rootFretOffset
        let position = rootFret - shape.rootFretOffset;

        // If position is negative, we might need to go up an octave?
        // Or if it's an open chord, position 0 is valid.
        // If position < 0, add 12.
        if (position < 0) position += 12;

        // If position is too high (> 12), try to subtract 12 if possible (unlikely for guitar unless open)
        // We prefer positions <= 12.
        if (position > 9) { // Allow up to 9 (so highest fret is around 12-13)
            // If it's > 9, maybe we can find a lower octave? 
            // If we subtract 12, we might go negative.
            // Let's just filter out high positions later.
        }

        // Calculate actual frets
        const actualFrets = shape.frets.map(f => f === -1 ? -1 : f + position);

        // Check if playable (max fret <= 15, span reasonable)
        const playedFrets = actualFrets.filter(f => f !== -1 && f > 0);
        if (playedFrets.length > 0) {
            const minFret = Math.min(...playedFrets);
            const maxFret = Math.max(...playedFrets);
            if (maxFret > 14) return; // Skip too high
            if (maxFret - minFret > 4) return; // Skip impossible stretches
        }

        // Add octave numbers roughly
        const notesWithOctave = actualFrets.map((fret, stringIdx) => {
            if (fret === -1) return null;
            // Calculate absolute semitones from C0?
            // E2 is 40.
            const baseValues = [40, 45, 50, 55, 59, 64]; // E2, A2, D3, G3, B3, E4
            const absVal = baseValues[stringIdx] + fret;
            const noteName = getNoteName(absVal % 12, keyRoot);
            const octave = Math.floor(absVal / 12) - 1; // MIDI to scientific? C4 is 60. 60/12 = 5. 5-1=4. Correct.
            return `${noteName}${octave}`;
        }).filter((n): n is string => n !== null);


        voicings.push({
            id: `${root}-${quality}-${shape.id}`,
            frets: actualFrets,
            notes: notesWithOctave,
            position: position === 0 ? 1 : position, // If open, position 1. If barre, position is fret.
            label: shape.label
        });
    });

    // Sort voicings by position (low to high)
    return voicings.sort((a, b) => (a.position || 0) - (b.position || 0));
}
