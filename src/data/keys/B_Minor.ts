import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const B_MINOR_KEY: Key = {
    name: 'B Minor',
    scale: 'minor',
    roots: [
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'B') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'B') },
                { name: 'Bm6', quality: 'm6', voicings: generateVoicings('B', 'm6', 'B') },
                { name: 'Bm9', quality: 'm9', voicings: generateVoicings('B', 'm9', 'B') },
                { name: 'Bm11', quality: 'm11', voicings: generateVoicings('B', 'm11', 'B') },
                { name: 'Bsus2', quality: 'sus2', voicings: generateVoicings('B', 'sus2', 'B') },
                { name: 'Bsus4', quality: 'sus4', voicings: generateVoicings('B', 'sus4', 'B') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m7b5', quality: 'm7b5', voicings: generateVoicings('C#', 'm7b5', 'B') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'B') },
                { name: 'Dmaj7', quality: 'maj7', voicings: generateVoicings('D', 'maj7', 'B') },
                { name: 'D6', quality: '6', voicings: generateVoicings('D', '6', 'B') },
                { name: 'Dadd9', quality: 'add9', voicings: generateVoicings('D', 'add9', 'B') },
                { name: 'Dmaj9', quality: 'maj9', voicings: generateVoicings('D', 'maj9', 'B') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'B') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'B') },
                { name: 'Em9', quality: 'm9', voicings: generateVoicings('E', 'm9', 'B') },
                { name: 'Em11', quality: 'm11', voicings: generateVoicings('E', 'm11', 'B') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'B') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'B') },
                { name: 'F#7', quality: 'dominant', voicings: generateVoicings('F#', 'dominant', 'B') },
                { name: 'F#9', quality: '9', voicings: generateVoicings('F#', '9', 'B') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'B') },
                { name: 'Gmaj7', quality: 'maj7', voicings: generateVoicings('G', 'maj7', 'B') },
                { name: 'G6', quality: '6', voicings: generateVoicings('G', '6', 'B') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'B') },
                { name: 'A7', quality: 'dominant', voicings: generateVoicings('A', 'dominant', 'B') },
            ]
        }
    ]
};
