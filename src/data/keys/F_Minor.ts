import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const F_MINOR_KEY: Key = {
    name: 'F Minor',
    scale: 'minor',
    roots: [
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'F') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'F') },
                { name: 'Fm6', quality: 'm6', voicings: generateVoicings('F', 'm6', 'F') },
                { name: 'Fm9', quality: 'm9', voicings: generateVoicings('F', 'm9', 'F') },
                { name: 'Fm11', quality: 'm11', voicings: generateVoicings('F', 'm11', 'F') },
                { name: 'Fsus2', quality: 'sus2', voicings: generateVoicings('F', 'sus2', 'F') },
                { name: 'Fsus4', quality: 'sus4', voicings: generateVoicings('F', 'sus4', 'F') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm7b5', quality: 'm7b5', voicings: generateVoicings('G', 'm7b5', 'F') },
            ]
        },
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'F') },
                { name: 'Abmaj7', quality: 'maj7', voicings: generateVoicings('Ab', 'maj7', 'F') },
                { name: 'Ab6', quality: '6', voicings: generateVoicings('Ab', '6', 'F') },
                { name: 'Abadd9', quality: 'add9', voicings: generateVoicings('Ab', 'add9', 'F') },
                { name: 'Abmaj9', quality: 'maj9', voicings: generateVoicings('Ab', 'maj9', 'F') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bbm', quality: 'minor', voicings: generateVoicings('Bb', 'minor', 'F') },
                { name: 'Bbm7', quality: 'm7', voicings: generateVoicings('Bb', 'm7', 'F') },
                { name: 'Bbm9', quality: 'm9', voicings: generateVoicings('Bb', 'm9', 'F') },
                { name: 'Bbm11', quality: 'm11', voicings: generateVoicings('Bb', 'm11', 'F') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'F') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'F') },
                { name: 'C7', quality: 'dominant', voicings: generateVoicings('C', 'dominant', 'F') },
                { name: 'C9', quality: '9', voicings: generateVoicings('C', '9', 'F') },
            ]
        },
        {
            root: 'Db',
            chords: [
                { name: 'Db', quality: 'major', voicings: generateVoicings('Db', 'major', 'F') },
                { name: 'Dbmaj7', quality: 'maj7', voicings: generateVoicings('Db', 'maj7', 'F') },
                { name: 'Db6', quality: '6', voicings: generateVoicings('Db', '6', 'F') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Eb', quality: 'major', voicings: generateVoicings('Eb', 'major', 'F') },
                { name: 'Eb7', quality: 'dominant', voicings: generateVoicings('Eb', 'dominant', 'F') },
            ]
        }
    ]
};
