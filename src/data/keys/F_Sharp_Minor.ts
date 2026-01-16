import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const F_SHARP_MINOR_KEY: Key = {
    name: 'F# Minor',
    scale: 'minor',
    roots: [
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'F#') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'F#') },
                { name: 'F#m6', quality: 'm6', voicings: generateVoicings('F#', 'm6', 'F#') },
                { name: 'F#m9', quality: 'm9', voicings: generateVoicings('F#', 'm9', 'F#') },
                { name: 'F#m11', quality: 'm11', voicings: generateVoicings('F#', 'm11', 'F#') },
                { name: 'F#sus2', quality: 'sus2', voicings: generateVoicings('F#', 'sus2', 'F#') },
                { name: 'F#sus4', quality: 'sus4', voicings: generateVoicings('F#', 'sus4', 'F#') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m7b5', quality: 'm7b5', voicings: generateVoicings('G#', 'm7b5', 'F#') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'F#') },
                { name: 'Amaj7', quality: 'maj7', voicings: generateVoicings('A', 'maj7', 'F#') },
                { name: 'A6', quality: '6', voicings: generateVoicings('A', '6', 'F#') },
                { name: 'Aadd9', quality: 'add9', voicings: generateVoicings('A', 'add9', 'F#') },
                { name: 'Amaj9', quality: 'maj9', voicings: generateVoicings('A', 'maj9', 'F#') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'F#') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'F#') },
                { name: 'Bm9', quality: 'm9', voicings: generateVoicings('B', 'm9', 'F#') },
                { name: 'Bm11', quality: 'm11', voicings: generateVoicings('B', 'm11', 'F#') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'F#') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'F#') },
                { name: 'C#7', quality: 'dominant', voicings: generateVoicings('C#', 'dominant', 'F#') },
                { name: 'C#9', quality: '9', voicings: generateVoicings('C#', '9', 'F#') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'F#') },
                { name: 'Dmaj7', quality: 'maj7', voicings: generateVoicings('D', 'maj7', 'F#') },
                { name: 'D6', quality: '6', voicings: generateVoicings('D', '6', 'F#') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'F#') },
                { name: 'E7', quality: 'dominant', voicings: generateVoicings('E', 'dominant', 'F#') },
            ]
        }
    ]
};
