import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const G_MINOR_KEY: Key = {
    name: 'G Minor',
    scale: 'minor',
    roots: [
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'G') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'G') },
                { name: 'Gm6', quality: 'm6', voicings: generateVoicings('G', 'm6', 'G') },
                { name: 'Gm9', quality: 'm9', voicings: generateVoicings('G', 'm9', 'G') },
                { name: 'Gm11', quality: 'm11', voicings: generateVoicings('G', 'm11', 'G') },
                { name: 'Gsus2', quality: 'sus2', voicings: generateVoicings('G', 'sus2', 'G') },
                { name: 'Gsus4', quality: 'sus4', voicings: generateVoicings('G', 'sus4', 'G') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am7b5', quality: 'm7b5', voicings: generateVoicings('A', 'm7b5', 'G') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'G') },
                { name: 'Bbmaj7', quality: 'maj7', voicings: generateVoicings('Bb', 'maj7', 'G') },
                { name: 'Bb6', quality: '6', voicings: generateVoicings('Bb', '6', 'G') },
                { name: 'Bbadd9', quality: 'add9', voicings: generateVoicings('Bb', 'add9', 'G') },
                { name: 'Bbmaj9', quality: 'maj9', voicings: generateVoicings('Bb', 'maj9', 'G') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'G') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'G') },
                { name: 'Cm9', quality: 'm9', voicings: generateVoicings('C', 'm9', 'G') },
                { name: 'Cm11', quality: 'm11', voicings: generateVoicings('C', 'm11', 'G') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'G') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'G') },
                { name: 'D7', quality: 'dominant', voicings: generateVoicings('D', 'dominant', 'G') },
                { name: 'D9', quality: '9', voicings: generateVoicings('D', '9', 'G') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Eb', quality: 'major', voicings: generateVoicings('Eb', 'major', 'G') },
                { name: 'Ebmaj7', quality: 'maj7', voicings: generateVoicings('Eb', 'maj7', 'G') },
                { name: 'Eb6', quality: '6', voicings: generateVoicings('Eb', '6', 'G') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'G') },
                { name: 'F7', quality: 'dominant', voicings: generateVoicings('F', 'dominant', 'G') },
            ]
        }
    ]
};
