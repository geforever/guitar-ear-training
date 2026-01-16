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
        { id: 'Emaj7-shape', rootString: 6, frets: [0, -1, 1, 1, 0, -1], rootFretOffset: 0, label: 'Emaj7-shape' }, // Simplified shell
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
    ],
    '6': [
        { id: 'E6-shape', rootString: 6, frets: [0, -1, 2, 1, 2, 0], rootFretOffset: 0, label: 'E6-shape' }, // Simplified (omit 5th)
        { id: 'A6-shape', rootString: 5, frets: [-1, 0, 2, 2, 2, 2], rootFretOffset: 0, label: 'A6-shape' },
        { id: 'C6-shape', rootString: 5, frets: [-1, 3, 2, 2, 1, -1], rootFretOffset: 3, label: 'C6-shape' },
    ],
    'm6': [
        { id: 'Em6-shape', rootString: 6, frets: [0, 2, 2, 0, 2, 0], rootFretOffset: 0, label: 'Em6-shape' },
        { id: 'Am6-shape', rootString: 5, frets: [-1, 0, 2, 2, 1, 2], rootFretOffset: 0, label: 'Am6-shape' },
    ],
    'maj9': [
        { id: 'Amaj9-shape', rootString: 5, frets: [-1, 0, 2, 1, 0, 0], rootFretOffset: 0, label: 'Amaj9-shape' },
        { id: 'Cmaj9-shape', rootString: 5, frets: [-1, 3, 2, 4, 3, -1], rootFretOffset: 3, label: 'Cmaj9-shape' },
    ],
    '9': [
        { id: 'E9-shape', rootString: 6, frets: [0, -1, 0, 1, 0, 2], rootFretOffset: 0, label: 'E9-shape' },
        { id: 'C9-shape', rootString: 5, frets: [-1, 3, 2, 3, 3, -1], rootFretOffset: 3, label: 'C9-shape' },
    ],
    'm9': [
        { id: 'Am9-shape', rootString: 5, frets: [-1, 0, 2, 0, 1, 3], rootFretOffset: 0, label: 'Am9-shape' },
        { id: 'Cm9-shape', rootString: 5, frets: [-1, 3, 1, 3, 3, -1], rootFretOffset: 3, label: 'Cm9-shape' },
    ],
    '11': [
        { id: 'A11-shape', rootString: 5, frets: [-1, 0, 0, 0, 0, 0], rootFretOffset: 0, label: 'A11-shape' },
    ],
    'm11': [
        { id: 'Em11-shape', rootString: 6, frets: [0, 0, 0, 0, 0, 0], rootFretOffset: 0, label: 'Em11-shape' },
        { id: 'Am11-shape', rootString: 5, frets: [-1, 0, 0, 0, 1, 0], rootFretOffset: 0, label: 'Am11-shape' },
    ],
    '13': [
        { id: 'E13-shape', rootString: 6, frets: [0, -1, 0, 1, 2, 0], rootFretOffset: 0, label: 'E13-shape' }, // Simplified
        { id: 'A13-shape', rootString: 5, frets: [-1, 0, 2, 0, 2, 2], rootFretOffset: 0, label: 'A13-shape' },
    ],
    'maj13': [
        { id: 'Amaj13-shape', rootString: 5, frets: [-1, 0, 2, 1, 2, 2], rootFretOffset: 0, label: 'Amaj13-shape' },
        { id: 'Emaj13-shape', rootString: 6, frets: [0, -1, 1, 1, 2, -1], rootFretOffset: 0, label: 'Emaj13-shape' },
    ],
    'add9': [
        { id: 'Eadd9-shape', rootString: 6, frets: [0, 2, 4, 1, 0, 0], rootFretOffset: 0, label: 'Eadd9-shape' },
        { id: 'Aadd9-shape', rootString: 5, frets: [-1, 0, 2, 4, 2, 0], rootFretOffset: 0, label: 'Aadd9-shape' },
    ]
};

/**
 * Generate voicings for a specific chord
 */
export function generateVoicings(root: string, quality: string, keyRoot: string): ChordVoicing[] {
    const rootIdx = getNoteIndex(root);
    const shapes = SHAPE_LIBRARY[quality] || SHAPE_LIBRARY['major'];
    const voicings: ChordVoicing[] = [];
    const seenFretPatterns = new Set<string>();

    shapes.forEach(shape => {
        // Find the fret for the root on the shape's root string
        // String 6: E (4), String 5: A (9), String 4: D (2)
        const stringOpenNoteIdx = STRING_ROOTS[6 - shape.rootString];

        // Calculate fret needed for the root
        let rootFret = (rootIdx - stringOpenNoteIdx + 12) % 12;

        // Adjust for shape's internal offset
        let position = rootFret - shape.rootFretOffset;

        if (position < 0) position += 12;

        // Calculate actual frets
        const actualFrets = shape.frets.map(f => f === -1 ? -1 : f + position);

        // Check if playable (max fret <= 15, span reasonable)
        const playedFrets = actualFrets.filter(f => f !== -1 && f > 0);
        if (playedFrets.length > 0) {
            const minFret = Math.min(...playedFrets);
            const maxFret = Math.max(...playedFrets);
            if (maxFret > 14) return; // Skip too high
            if (maxFret - minFret > 4) return; // Skip impossible stretches

            // Additional check for "too many fingers" (e.g. barre + 4 fingers)
            // A barre is assumed if multiple strings have the same fret value (minFret)
            const uniqueFrets = new Set(playedFrets);
            const nonBarreFrets = playedFrets.filter(f => f !== minFret);
            const uniqueNonBarreFrets = new Set(nonBarreFrets);

            // If we have a barre (more than one string at minFret), we have 3 fingers left.
            // If we don't have a barre, we have 4 fingers total.
            const hasBarre = playedFrets.filter(f => f === minFret).length > 1;
            if (hasBarre) {
                if (uniqueNonBarreFrets.size > 3) return;
            } else {
                if (uniqueFrets.size > 4) return;
            }
        }

        // Deduplication: check if we've seen this exact fret pattern
        const fretPattern = actualFrets.join(',');
        if (seenFretPatterns.has(fretPattern)) return;
        seenFretPatterns.add(fretPattern);

        // Add octave numbers roughly
        const notesWithOctave = actualFrets.map((fret, stringIdx) => {
            if (fret === -1) return null;
            const baseValues = [40, 45, 50, 55, 59, 64]; // E2, A2, D3, G3, B3, E4
            const absVal = baseValues[stringIdx] + fret;
            const noteName = getNoteName(absVal % 12, keyRoot);
            const octave = Math.floor(absVal / 12) - 1;
            return `${noteName}${octave}`;
        }).filter((n): n is string => n !== null);


        voicings.push({
            id: `${root}-${quality}-${shape.id}`,
            frets: actualFrets,
            notes: notesWithOctave,
            position: position === 0 ? 1 : position,
            label: shape.label
        });
    });

    // Sort voicings by position (low to high)
    return voicings.sort((a, b) => (a.position || 0) - (b.position || 0));
}
