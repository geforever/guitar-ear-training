import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const Bb_MINOR_KEY: Key = {
    name: 'Bb Minor',
    scale: 'minor',
    roots: [
        {
            root: 'Bb',
            chords: [
                { name: 'Bbm', quality: 'minor', voicings: generateVoicings('Bb', 'minor', 'Bb') },
                { name: 'Bbm7', quality: 'm7', voicings: generateVoicings('Bb', 'm7', 'Bb') },
                { name: 'Bbm6', quality: 'm6', voicings: generateVoicings('Bb', 'm6', 'Bb') },
                { name: 'Bbm9', quality: 'm9', voicings: generateVoicings('Bb', 'm9', 'Bb') },
                { name: 'Bbm11', quality: 'm11', voicings: generateVoicings('Bb', 'm11', 'Bb') },
                { name: 'Bbsus2', quality: 'sus2', voicings: generateVoicings('Bb', 'sus2', 'Bb') },
                { name: 'Bbsus4', quality: 'sus4', voicings: generateVoicings('Bb', 'sus4', 'Bb') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm7b5', quality: 'm7b5', voicings: generateVoicings('C', 'm7b5', 'Bb') },
            ]
        },
        {
            root: 'Db',
            chords: [
                { name: 'Db', quality: 'major', voicings: generateVoicings('Db', 'major', 'Bb') },
                { name: 'Dbmaj7', quality: 'maj7', voicings: generateVoicings('Db', 'maj7', 'Bb') },
                { name: 'Db6', quality: '6', voicings: generateVoicings('Db', '6', 'Bb') },
                { name: 'Dbadd9', quality: 'add9', voicings: generateVoicings('Db', 'add9', 'Bb') },
                { name: 'Dbmaj9', quality: 'maj9', voicings: generateVoicings('Db', 'maj9', 'Bb') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Ebm', quality: 'minor', voicings: generateVoicings('Eb', 'minor', 'Bb') },
                { name: 'Ebm7', quality: 'm7', voicings: generateVoicings('Eb', 'm7', 'Bb') },
                { name: 'Ebm9', quality: 'm9', voicings: generateVoicings('Eb', 'm9', 'Bb') },
                { name: 'Ebm11', quality: 'm11', voicings: generateVoicings('Eb', 'm11', 'Bb') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'Bb') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'Bb') },
                { name: 'F7', quality: 'dominant', voicings: generateVoicings('F', 'dominant', 'Bb') },
                { name: 'F9', quality: '9', voicings: generateVoicings('F', '9', 'Bb') },
            ]
        },
        {
            root: 'Gb',
            chords: [
                { name: 'Gb', quality: 'major', voicings: generateVoicings('Gb', 'major', 'Bb') },
                { name: 'Gbmaj7', quality: 'maj7', voicings: generateVoicings('Gb', 'maj7', 'Bb') },
                { name: 'Gb6', quality: '6', voicings: generateVoicings('Gb', '6', 'Bb') },
            ]
        },
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'Bb') },
                { name: 'Ab7', quality: 'dominant', voicings: generateVoicings('Ab', 'dominant', 'Bb') },
            ]
        }
    ]
};
