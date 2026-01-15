import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const Db_MAJOR_KEY: Key = {
    name: 'Db Major',
    scale: 'major',
    roots: [
        {
            root: 'Db',
            chords: [
                { name: 'Db', quality: 'major', voicings: generateVoicings('Db', 'major', 'Db') },
                { name: 'Dbmaj7', quality: 'maj7', voicings: generateVoicings('Db', 'maj7', 'Db') },
                { name: 'Dbsus2', quality: 'sus2', voicings: generateVoicings('Db', 'sus2', 'Db') },
                { name: 'Dbsus4', quality: 'sus4', voicings: generateVoicings('Db', 'sus4', 'Db') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Ebm', quality: 'minor', voicings: generateVoicings('Eb', 'minor', 'Db') },
                { name: 'Ebm7', quality: 'm7', voicings: generateVoicings('Eb', 'm7', 'Db') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'Db') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'Db') },
            ]
        },
        {
            root: 'Gb',
            chords: [
                { name: 'Gb', quality: 'major', voicings: generateVoicings('Gb', 'major', 'Db') },
                { name: 'Gbmaj7', quality: 'maj7', voicings: generateVoicings('Gb', 'maj7', 'Db') },
                { name: 'Gbsus2', quality: 'sus2', voicings: generateVoicings('Gb', 'sus2', 'Db') },
                { name: 'Gbsus4', quality: 'sus4', voicings: generateVoicings('Gb', 'sus4', 'Db') },
            ]
        },
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'Db') },
                { name: 'Ab7', quality: 'dominant', voicings: generateVoicings('Ab', 'dominant', 'Db') },
                { name: 'Absus2', quality: 'sus2', voicings: generateVoicings('Ab', 'sus2', 'Db') },
                { name: 'Absus4', quality: 'sus4', voicings: generateVoicings('Ab', 'sus4', 'Db') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bbm', quality: 'minor', voicings: generateVoicings('Bb', 'minor', 'Db') },
                { name: 'Bbm7', quality: 'm7', voicings: generateVoicings('Bb', 'm7', 'Db') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cdim', quality: 'dim', voicings: generateVoicings('C', 'dim', 'Db') },
                { name: 'Cm7b5', quality: 'm7b5', voicings: generateVoicings('C', 'm7b5', 'Db') },
            ]
        }
    ]
};
