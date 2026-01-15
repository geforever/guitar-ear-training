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
                { name: 'Ebsus2', quality: 'sus2', voicings: generateVoicings('Eb', 'sus2', 'Eb') },
                { name: 'Ebsus4', quality: 'sus4', voicings: generateVoicings('Eb', 'sus4', 'Eb') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'Eb') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'Eb') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'Eb') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'Eb') },
            ]
        },
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'Eb') },
                { name: 'Abmaj7', quality: 'maj7', voicings: generateVoicings('Ab', 'maj7', 'Eb') },
                { name: 'Absus2', quality: 'sus2', voicings: generateVoicings('Ab', 'sus2', 'Eb') },
                { name: 'Absus4', quality: 'sus4', voicings: generateVoicings('Ab', 'sus4', 'Eb') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'Eb') },
                { name: 'Bb7', quality: 'dominant', voicings: generateVoicings('Bb', 'dominant', 'Eb') },
                { name: 'Bbsus2', quality: 'sus2', voicings: generateVoicings('Bb', 'sus2', 'Eb') },
                { name: 'Bbsus4', quality: 'sus4', voicings: generateVoicings('Bb', 'sus4', 'Eb') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'Eb') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'Eb') },
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
