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
                { name: 'A6', quality: '6', voicings: generateVoicings('A', '6', 'A') },
                { name: 'Aadd9', quality: 'add9', voicings: generateVoicings('A', 'add9', 'A') },
                { name: 'Amaj9', quality: 'maj9', voicings: generateVoicings('A', 'maj9', 'A') },
                { name: 'Amaj13', quality: 'maj13', voicings: generateVoicings('A', 'maj13', 'A') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'A') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'A') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'A') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'A') },
                { name: 'Bm6', quality: 'm6', voicings: generateVoicings('B', 'm6', 'A') },
                { name: 'Bm9', quality: 'm9', voicings: generateVoicings('B', 'm9', 'A') },
                { name: 'Bm11', quality: 'm11', voicings: generateVoicings('B', 'm11', 'A') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'A') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'A') },
                { name: 'C#m11', quality: 'm11', voicings: generateVoicings('C#', 'm11', 'A') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'A') },
                { name: 'Dmaj7', quality: 'maj7', voicings: generateVoicings('D', 'maj7', 'A') },
                { name: 'D6', quality: '6', voicings: generateVoicings('D', '6', 'A') },
                { name: 'Dadd9', quality: 'add9', voicings: generateVoicings('D', 'add9', 'A') },
                { name: 'Dmaj9', quality: 'maj9', voicings: generateVoicings('D', 'maj9', 'A') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'A') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'A') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'A') },
                { name: 'E7', quality: 'dominant', voicings: generateVoicings('E', 'dominant', 'A') },
                { name: 'E9', quality: '9', voicings: generateVoicings('E', '9', 'A') },
                { name: 'E11', quality: '11', voicings: generateVoicings('E', '11', 'A') },
                { name: 'E13', quality: '13', voicings: generateVoicings('E', '13', 'A') },
                { name: 'Esus2', quality: 'sus2', voicings: generateVoicings('E', 'sus2', 'A') },
                { name: 'Esus4', quality: 'sus4', voicings: generateVoicings('E', 'sus4', 'A') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'A') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'A') },
                { name: 'F#m9', quality: 'm9', voicings: generateVoicings('F#', 'm9', 'A') },
                { name: 'F#m11', quality: 'm11', voicings: generateVoicings('F#', 'm11', 'A') },
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
