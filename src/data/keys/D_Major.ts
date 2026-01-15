import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const D_MAJOR_KEY: Key = {
    name: 'D Major',
    scale: 'major',
    roots: [
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'D') },
                { name: 'Dmaj7', quality: 'maj7', voicings: generateVoicings('D', 'maj7', 'D') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'D') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'D') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'D') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'D') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'D') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'D') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'D') },
                { name: 'Gmaj7', quality: 'maj7', voicings: generateVoicings('G', 'maj7', 'D') },
                { name: 'Gsus2', quality: 'sus2', voicings: generateVoicings('G', 'sus2', 'D') },
                { name: 'Gsus4', quality: 'sus4', voicings: generateVoicings('G', 'sus4', 'D') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'D') },
                { name: 'A7', quality: 'dominant', voicings: generateVoicings('A', 'dominant', 'D') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'D') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'D') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'D') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'D') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#dim', quality: 'dim', voicings: generateVoicings('C#', 'dim', 'D') },
                { name: 'C#m7b5', quality: 'm7b5', voicings: generateVoicings('C#', 'm7b5', 'D') },
            ]
        }
    ]
};
