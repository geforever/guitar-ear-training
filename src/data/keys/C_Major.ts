import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const C_MAJOR_KEY: Key = {
    name: 'C Major',
    scale: 'major',
    roots: [
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'C') },
                { name: 'Cmaj7', quality: 'maj7', voicings: generateVoicings('C', 'maj7', 'C') },
                { name: 'Csus2', quality: 'sus', voicings: generateVoicings('C', 'sus2', 'C') },
                { name: 'Csus4', quality: 'sus', voicings: generateVoicings('C', 'sus4', 'C') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'C') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'C') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'C') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'C') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'C') },
                { name: 'Fmaj7', quality: 'maj7', voicings: generateVoicings('F', 'maj7', 'C') },
                { name: 'Fsus2', quality: 'sus', voicings: generateVoicings('F', 'sus2', 'C') },
                { name: 'Fsus4', quality: 'sus', voicings: generateVoicings('F', 'sus4', 'C') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'C') },
                { name: 'G7', quality: 'dominant', voicings: generateVoicings('G', 'dominant', 'C') },
                { name: 'Gsus2', quality: 'sus', voicings: generateVoicings('G', 'sus2', 'C') },
                { name: 'Gsus4', quality: 'sus', voicings: generateVoicings('G', 'sus4', 'C') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'C') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'C') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bdim', quality: 'dim', voicings: generateVoicings('B', 'dim', 'C') },
                { name: 'Bm7b5', quality: 'm7b5', voicings: generateVoicings('B', 'm7b5', 'C') },
            ]
        }
    ]
};
