import type { Key, RootGroup, Chord } from './types';
import { getScaleNotes } from './musicTheory';
import { generateVoicings } from './caged';

export function generateKeyData(root: string, scaleType: 'major' | 'minor' = 'major'): Key {
    const scaleNotes = getScaleNotes(root, scaleType);
    const keyName = `${root} ${scaleType.charAt(0).toUpperCase() + scaleType.slice(1)}`;

    // Diatonic Chords for Major Scale
    // I: Major, ii: Minor, iii: Minor, IV: Major, V: Major, vi: Minor, vii: Dim
    const qualities = ['major', 'minor', 'minor', 'major', 'dominant', 'minor', 'dim'];
    // Using 'dominant' for V to include 7ths, though triad is major.
    // Actually, let's stick to basic triads first, then add extensions.

    // We want to populate "roots" based on the scale degrees.
    const roots: RootGroup[] = scaleNotes.map((note: string, index: number) => {
        const degree = index + 1;
        const basicQuality = qualities[index];

        const chords: Chord[] = [];

        // 1. Basic Triad
        // For V, it's Major. For vii, it's Dim.
        let triadQuality = basicQuality;
        if (degree === 5) triadQuality = 'major'; // V is major triad

        chords.push({
            name: note + (triadQuality === 'minor' ? 'm' : triadQuality === 'dim' ? 'dim' : ''),
            quality: triadQuality as any,
            voicings: generateVoicings(note, triadQuality, root)
        });

        // 2. 7th Chords
        // Imaj7, iim7, iiim7, IVmaj7, V7, vim7, viim7b5
        let seventhQuality = '';
        let suffix = '';
        if (degree === 1 || degree === 4) { seventhQuality = 'maj7'; suffix = 'maj7'; }
        else if (degree === 2 || degree === 3 || degree === 6) { seventhQuality = 'm7'; suffix = 'm7'; }
        else if (degree === 5) { seventhQuality = 'dominant'; suffix = '7'; }
        else if (degree === 7) { seventhQuality = 'm7b5'; suffix = 'm7b5'; }

        if (seventhQuality) {
            chords.push({
                name: note + suffix,
                quality: seventhQuality as any,
                voicings: generateVoicings(note, seventhQuality, root)
            });
        }

        // 3. Sus Chords (I, IV, V) - Only for Major chords
        // We check if the basic triad quality is 'major' or 'dominant' (which has major 3rd)
        if (triadQuality === 'major' || triadQuality === 'dominant') {
            chords.push({
                name: note + 'sus2',
                quality: 'sus',
                voicings: generateVoicings(note, 'sus2', root)
            });
            chords.push({
                name: note + 'sus4',
                quality: 'sus',
                voicings: generateVoicings(note, 'sus4', root)
            });
        }

        return {
            root: note,
            chords: chords
        };
    });

    return {
        name: keyName,
        scale: scaleType,
        roots
    };
}
