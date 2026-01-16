import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const Ab_MAJOR_KEY: Key = {
    name: 'Ab Major',
    scale: 'major',
    roots: [
        {
            root: 'Ab',
            chords: [
                { name: 'Ab', quality: 'major', voicings: generateVoicings('Ab', 'major', 'Ab') },
                { name: 'Abmaj7', quality: 'maj7', voicings: generateVoicings('Ab', 'maj7', 'Ab') },
                { name: 'Ab6', quality: '6', voicings: generateVoicings('Ab', '6', 'Ab') },
                { name: 'Abadd9', quality: 'add9', voicings: generateVoicings('Ab', 'add9', 'Ab') },
                { name: 'Abmaj9', quality: 'maj9', voicings: generateVoicings('Ab', 'maj9', 'Ab') },
                { name: 'Abmaj13', quality: 'maj13', voicings: generateVoicings('Ab', 'maj13', 'Ab') },
                { name: 'Absus2', quality: 'sus2', voicings: generateVoicings('Ab', 'sus2', 'Ab') },
                { name: 'Absus4', quality: 'sus4', voicings: generateVoicings('Ab', 'sus4', 'Ab') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bbm', quality: 'minor', voicings: generateVoicings('Bb', 'minor', 'Ab') },
                { name: 'Bbm7', quality: 'm7', voicings: generateVoicings('Bb', 'm7', 'Ab') },
                { name: 'Bbm6', quality: 'm6', voicings: generateVoicings('Bb', 'm6', 'Ab') },
                { name: 'Bbm9', quality: 'm9', voicings: generateVoicings('Bb', 'm9', 'Ab') },
                { name: 'Bbm11', quality: 'm11', voicings: generateVoicings('Bb', 'm11', 'Ab') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'Ab') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'Ab') },
                { name: 'Cm11', quality: 'm11', voicings: generateVoicings('C', 'm11', 'Ab') },
            ]
        },
        {
            root: 'Db',
            chords: [
                { name: 'Db', quality: 'major', voicings: generateVoicings('Db', 'major', 'Ab') },
                { name: 'Dbmaj7', quality: 'maj7', voicings: generateVoicings('Db', 'maj7', 'Ab') },
                { name: 'Db6', quality: '6', voicings: generateVoicings('Db', '6', 'Ab') },
                { name: 'Dbadd9', quality: 'add9', voicings: generateVoicings('Db', 'add9', 'Ab') },
                { name: 'Dbmaj9', quality: 'maj9', voicings: generateVoicings('Db', 'maj9', 'Ab') },
                { name: 'Dbsus2', quality: 'sus2', voicings: generateVoicings('Db', 'sus2', 'Ab') },
                { name: 'Dbsus4', quality: 'sus4', voicings: generateVoicings('Db', 'sus4', 'Ab') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Eb', quality: 'major', voicings: generateVoicings('Eb', 'major', 'Ab') },
                { name: 'Eb7', quality: 'dominant', voicings: generateVoicings('Eb', 'dominant', 'Ab') },
                { name: 'Eb9', quality: '9', voicings: generateVoicings('Eb', '9', 'Ab') },
                { name: 'Eb11', quality: '11', voicings: generateVoicings('Eb', '11', 'Ab') },
                { name: 'Eb13', quality: '13', voicings: generateVoicings('Eb', '13', 'Ab') },
                { name: 'Ebsus2', quality: 'sus2', voicings: generateVoicings('Eb', 'sus2', 'Ab') },
                { name: 'Ebsus4', quality: 'sus4', voicings: generateVoicings('Eb', 'sus4', 'Ab') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm', quality: 'minor', voicings: generateVoicings('F', 'minor', 'Ab') },
                { name: 'Fm7', quality: 'm7', voicings: generateVoicings('F', 'm7', 'Ab') },
                { name: 'Fm9', quality: 'm9', voicings: generateVoicings('F', 'm9', 'Ab') },
                { name: 'Fm11', quality: 'm11', voicings: generateVoicings('F', 'm11', 'Ab') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gdim', quality: 'dim', voicings: generateVoicings('G', 'dim', 'Ab') },
                { name: 'Gm7b5', quality: 'm7b5', voicings: generateVoicings('G', 'm7b5', 'Ab') },
            ]
        }
    ]
};
