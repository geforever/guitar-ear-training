import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const C_MINOR_KEY: Key = {
    name: 'C Minor',
    scale: 'minor',
    roots: [
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'C') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'C') },
                { name: 'Cm6', quality: 'm6', voicings: generateVoicings('C', 'm6', 'C') },
                { name: 'Cm9', quality: 'm9', voicings: generateVoicings('C', 'm9', 'C') },
                { name: 'Cm11', quality: 'm11', voicings: generateVoicings('C', 'm11', 'C') },
                { name: 'Csus2', quality: 'sus2', voicings: generateVoicings('C', 'sus2', 'C') },
                { name: 'Csus4', quality: 'sus4', voicings: generateVoicings('C', 'sus4', 'C') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm7b5', quality: 'm7b5', voicings: generateVoicings('D', 'm7b5', 'C') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Eb', quality: 'major', voicings: generateVoicings('Eb', 'major', 'C') },
                { name: 'Ebmaj7', quality: 'maj7', voicings: generateVoicings('Eb', 'maj7', 'C') },
                { name: 'Eb6', quality: '6', voicings: generateVoicings('Eb', '6', 'C') },
                { name: 'Ebadd9', quality: 'add9', voicings: generateVoicings('Eb', 'add9', 'C') },
                { name: 'Ebmaj9', quality: 'maj9', voicings: generateVoicings('Eb', 'maj9', 'C') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'C') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'C') },
                { name: 'Fm9', quality: 'm9', voicings: generateVoicings('F', 'm9', 'C') },
                { name: 'Fm11', quality: 'm11', voicings: generateVoicings('F', 'm11', 'C') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'C') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'C') },
                { name: 'G7', quality: 'dominant', voicings: generateVoicings('G', 'dominant', 'C') },
                { name: 'G9', quality: '9', voicings: generateVoicings('G', '9', 'C') },
            ]
        },
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'C') },
                { name: 'Abmaj7', quality: 'maj7', voicings: generateVoicings('Ab', 'maj7', 'C') },
                { name: 'Ab6', quality: '6', voicings: generateVoicings('Ab', '6', 'C') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'C') },
                { name: 'Bb7', quality: 'dominant', voicings: generateVoicings('Bb', 'dominant', 'C') },
            ]
        }
    ]
};
