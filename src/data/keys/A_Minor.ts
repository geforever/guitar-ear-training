import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const A_MINOR_KEY: Key = {
    name: 'A Minor',
    scale: 'minor',
    roots: [
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'A') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'A') },
                { name: 'Am6', quality: 'm6', voicings: generateVoicings('A', 'm6', 'A') },
                { name: 'Am9', quality: 'm9', voicings: generateVoicings('A', 'm9', 'A') },
                { name: 'Am11', quality: 'm11', voicings: generateVoicings('A', 'm11', 'A') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'A') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'A') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm7b5', quality: 'm7b5', voicings: generateVoicings('B', 'm7b5', 'A') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'A') },
                { name: 'Cmaj7', quality: 'maj7', voicings: generateVoicings('C', 'maj7', 'A') },
                { name: 'C6', quality: '6', voicings: generateVoicings('C', '6', 'A') },
                { name: 'Cadd9', quality: 'add9', voicings: generateVoicings('C', 'add9', 'A') },
                { name: 'Cmaj9', quality: 'maj9', voicings: generateVoicings('C', 'maj9', 'A') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'A') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'A') },
                { name: 'Dm9', quality: 'm9', voicings: generateVoicings('D', 'm9', 'A') },
                { name: 'Dm11', quality: 'm11', voicings: generateVoicings('D', 'm11', 'A') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'A') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'A') },
                { name: 'E7', quality: 'dominant', voicings: generateVoicings('E', 'dominant', 'A') },
                { name: 'E9', quality: '9', voicings: generateVoicings('E', '9', 'A') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'A') },
                { name: 'Fmaj7', quality: 'maj7', voicings: generateVoicings('F', 'maj7', 'A') },
                { name: 'F6', quality: '6', voicings: generateVoicings('F', '6', 'A') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'A') },
                { name: 'G7', quality: 'dominant', voicings: generateVoicings('G', 'dominant', 'A') },
            ]
        }
    ]
};
