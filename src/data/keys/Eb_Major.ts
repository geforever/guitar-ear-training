import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const Eb_MAJOR_KEY: Key = {
    name: 'Eb Major',
    scale: 'major',
    roots: [
        {
            root: 'Eb',
            chords: [
                { name: 'Eb', quality: 'major', voicings: generateVoicings('Eb', 'major', 'Eb') },
                { name: 'Ebmaj7', quality: 'maj7', voicings: generateVoicings('Eb', 'maj7', 'Eb') },
                { name: 'Eb6', quality: '6', voicings: generateVoicings('Eb', '6', 'Eb') },
                { name: 'Ebadd9', quality: 'add9', voicings: generateVoicings('Eb', 'add9', 'Eb') },
                { name: 'Ebmaj9', quality: 'maj9', voicings: generateVoicings('Eb', 'maj9', 'Eb') },
                { name: 'Ebmaj13', quality: 'maj13', voicings: generateVoicings('Eb', 'maj13', 'Eb') },
                { name: 'Ebsus2', quality: 'sus2', voicings: generateVoicings('Eb', 'sus2', 'Eb') },
                { name: 'Ebsus4', quality: 'sus4', voicings: generateVoicings('Eb', 'sus4', 'Eb') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'Eb') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'Eb') },
                { name: 'Fm6', quality: 'm6', voicings: generateVoicings('F', 'm6', 'Eb') },
                { name: 'Fm9', quality: 'm9', voicings: generateVoicings('F', 'm9', 'Eb') },
                { name: 'Fm11', quality: 'm11', voicings: generateVoicings('F', 'm11', 'Eb') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'Eb') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'Eb') },
                { name: 'Gm11', quality: 'm11', voicings: generateVoicings('G', 'm11', 'Eb') },
            ]
        },
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'Eb') },
                { name: 'Abmaj7', quality: 'maj7', voicings: generateVoicings('Ab', 'maj7', 'Eb') },
                { name: 'Ab6', quality: '6', voicings: generateVoicings('Ab', '6', 'Eb') },
                { name: 'Abadd9', quality: 'add9', voicings: generateVoicings('Ab', 'add9', 'Eb') },
                { name: 'Abmaj9', quality: 'maj9', voicings: generateVoicings('Ab', 'maj9', 'Eb') },
                { name: 'Absus2', quality: 'sus2', voicings: generateVoicings('Ab', 'sus2', 'Eb') },
                { name: 'Absus4', quality: 'sus4', voicings: generateVoicings('Ab', 'sus4', 'Eb') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'Eb') },
                { name: 'Bb7', quality: 'dominant', voicings: generateVoicings('Bb', 'dominant', 'Eb') },
                { name: 'Bb9', quality: '9', voicings: generateVoicings('Bb', '9', 'Eb') },
                { name: 'Bb11', quality: '11', voicings: generateVoicings('Bb', '11', 'Eb') },
                { name: 'Bb13', quality: '13', voicings: generateVoicings('Bb', '13', 'Eb') },
                { name: 'Bbsus2', quality: 'sus2', voicings: generateVoicings('Bb', 'sus2', 'Eb') },
                { name: 'Bbsus4', quality: 'sus4', voicings: generateVoicings('Bb', 'sus4', 'Eb') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'Eb') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'Eb') },
                { name: 'Cm9', quality: 'm9', voicings: generateVoicings('C', 'm9', 'Eb') },
                { name: 'Cm11', quality: 'm11', voicings: generateVoicings('C', 'm11', 'Eb') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Ddim', quality: 'dim', voicings: generateVoicings('D', 'dim', 'Eb') },
                { name: 'Dm7b5', quality: 'm7b5', voicings: generateVoicings('D', 'm7b5', 'Eb') },
            ]
        }
    ]
};
