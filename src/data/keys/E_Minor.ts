import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const E_MINOR_KEY: Key = {
    name: 'E Minor',
    scale: 'minor',
    roots: [
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'E') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'E') },
                { name: 'Em6', quality: 'm6', voicings: generateVoicings('E', 'm6', 'E') },
                { name: 'Em9', quality: 'm9', voicings: generateVoicings('E', 'm9', 'E') },
                { name: 'Em11', quality: 'm11', voicings: generateVoicings('E', 'm11', 'E') },
                { name: 'Esus2', quality: 'sus2', voicings: generateVoicings('E', 'sus2', 'E') },
                { name: 'Esus4', quality: 'sus4', voicings: generateVoicings('E', 'sus4', 'E') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m7b5', quality: 'm7b5', voicings: generateVoicings('F#', 'm7b5', 'E') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'E') },
                { name: 'Gmaj7', quality: 'maj7', voicings: generateVoicings('G', 'maj7', 'E') },
                { name: 'G6', quality: '6', voicings: generateVoicings('G', '6', 'E') },
                { name: 'Gadd9', quality: 'add9', voicings: generateVoicings('G', 'add9', 'E') },
                { name: 'Gmaj9', quality: 'maj9', voicings: generateVoicings('G', 'maj9', 'E') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'E') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'E') },
                { name: 'Am9', quality: 'm9', voicings: generateVoicings('A', 'm9', 'E') },
                { name: 'Am11', quality: 'm11', voicings: generateVoicings('A', 'm11', 'E') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'E') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'E') },
                { name: 'B7', quality: 'dominant', voicings: generateVoicings('B', 'dominant', 'E') },
                { name: 'B9', quality: '9', voicings: generateVoicings('B', '9', 'E') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'E') },
                { name: 'Cmaj7', quality: 'maj7', voicings: generateVoicings('C', 'maj7', 'E') },
                { name: 'C6', quality: '6', voicings: generateVoicings('C', '6', 'E') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'E') },
                { name: 'D7', quality: 'dominant', voicings: generateVoicings('D', 'dominant', 'E') },
            ]
        }
    ]
};
