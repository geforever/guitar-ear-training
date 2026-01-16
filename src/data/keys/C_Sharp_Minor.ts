import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const C_SHARP_MINOR_KEY: Key = {
    name: 'C# Minor',
    scale: 'minor',
    roots: [
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'C#') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'C#') },
                { name: 'C#m6', quality: 'm6', voicings: generateVoicings('C#', 'm6', 'C#') },
                { name: 'C#m9', quality: 'm9', voicings: generateVoicings('C#', 'm9', 'C#') },
                { name: 'C#m11', quality: 'm11', voicings: generateVoicings('C#', 'm11', 'C#') },
                { name: 'C#sus2', quality: 'sus2', voicings: generateVoicings('C#', 'sus2', 'C#') },
                { name: 'C#sus4', quality: 'sus4', voicings: generateVoicings('C#', 'sus4', 'C#') },
            ]
        },
        {
            root: 'D#',
            chords: [
                { name: 'D#m7b5', quality: 'm7b5', voicings: generateVoicings('D#', 'm7b5', 'C#') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'C#') },
                { name: 'Emaj7', quality: 'maj7', voicings: generateVoicings('E', 'maj7', 'C#') },
                { name: 'E6', quality: '6', voicings: generateVoicings('E', '6', 'C#') },
                { name: 'Eadd9', quality: 'add9', voicings: generateVoicings('E', 'add9', 'C#') },
                { name: 'Emaj9', quality: 'maj9', voicings: generateVoicings('E', 'maj9', 'C#') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'C#') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'C#') },
                { name: 'F#m9', quality: 'm9', voicings: generateVoicings('F#', 'm9', 'C#') },
                { name: 'F#m11', quality: 'm11', voicings: generateVoicings('F#', 'm11', 'C#') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'C#') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'C#') },
                { name: 'G#7', quality: 'dominant', voicings: generateVoicings('G#', 'dominant', 'C#') },
                { name: 'G#9', quality: '9', voicings: generateVoicings('G#', '9', 'C#') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'C#') },
                { name: 'Amaj7', quality: 'maj7', voicings: generateVoicings('A', 'maj7', 'C#') },
                { name: 'A6', quality: '6', voicings: generateVoicings('A', '6', 'C#') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'C#') },
                { name: 'B7', quality: 'dominant', voicings: generateVoicings('B', 'dominant', 'C#') },
            ]
        }
    ]
};
