import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const D_MINOR_KEY: Key = {
    name: 'D Minor',
    scale: 'minor',
    roots: [
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'D') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'D') },
                { name: 'Dm6', quality: 'm6', voicings: generateVoicings('D', 'm6', 'D') },
                { name: 'Dm9', quality: 'm9', voicings: generateVoicings('D', 'm9', 'D') },
                { name: 'Dm11', quality: 'm11', voicings: generateVoicings('D', 'm11', 'D') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'D') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'D') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em7b5', quality: 'm7b5', voicings: generateVoicings('E', 'm7b5', 'D') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'D') },
                { name: 'Fmaj7', quality: 'maj7', voicings: generateVoicings('F', 'maj7', 'D') },
                { name: 'F6', quality: '6', voicings: generateVoicings('F', '6', 'D') },
                { name: 'Fadd9', quality: 'add9', voicings: generateVoicings('F', 'add9', 'D') },
                { name: 'Fmaj9', quality: 'maj9', voicings: generateVoicings('F', 'maj9', 'D') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'D') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'D') },
                { name: 'Gm9', quality: 'm9', voicings: generateVoicings('G', 'm9', 'D') },
                { name: 'Gm11', quality: 'm11', voicings: generateVoicings('G', 'm11', 'D') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'D') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'D') },
                { name: 'A7', quality: 'dominant', voicings: generateVoicings('A', 'dominant', 'D') },
                { name: 'A9', quality: '9', voicings: generateVoicings('A', '9', 'D') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'D') },
                { name: 'Bbmaj7', quality: 'maj7', voicings: generateVoicings('Bb', 'maj7', 'D') },
                { name: 'Bb6', quality: '6', voicings: generateVoicings('Bb', '6', 'D') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'D') },
                { name: 'C7', quality: 'dominant', voicings: generateVoicings('C', 'dominant', 'D') },
            ]
        }
    ]
};
