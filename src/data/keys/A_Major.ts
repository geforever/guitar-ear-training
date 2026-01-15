import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const A_MAJOR_KEY: Key = {
    name: 'A Major',
    scale: 'major',
    roots: [
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'A') },
                { name: 'Amaj7', quality: 'maj7', voicings: generateVoicings('A', 'maj7', 'A') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'A') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'A') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'A') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'A') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'A') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'A') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'A') },
                { name: 'Dmaj7', quality: 'maj7', voicings: generateVoicings('D', 'maj7', 'A') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'A') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'A') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'A') },
                { name: 'E7', quality: 'dominant', voicings: generateVoicings('E', 'dominant', 'A') },
                { name: 'Esus2', quality: 'sus2', voicings: generateVoicings('E', 'sus2', 'A') },
                { name: 'Esus4', quality: 'sus4', voicings: generateVoicings('E', 'sus4', 'A') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'A') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'A') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#dim', quality: 'dim', voicings: generateVoicings('G#', 'dim', 'A') },
                { name: 'G#m7b5', quality: 'm7b5', voicings: generateVoicings('G#', 'm7b5', 'A') },
            ]
        }
    ]
};
