import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const Bb_MAJOR_KEY: Key = {
    name: 'Bb Major',
    scale: 'major',
    roots: [
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'Bb') },
                { name: 'Bbmaj7', quality: 'maj7', voicings: generateVoicings('Bb', 'maj7', 'Bb') },
                { name: 'Bbsus2', quality: 'sus2', voicings: generateVoicings('Bb', 'sus2', 'Bb') },
                { name: 'Bbsus4', quality: 'sus4', voicings: generateVoicings('Bb', 'sus4', 'Bb') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'Cm', quality: 'minor', voicings: generateVoicings('C', 'minor', 'Bb') },
                { name: 'Cm7', quality: 'm7', voicings: generateVoicings('C', 'm7', 'Bb') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'Bb') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'Bb') },
            ]
        },
        {
            root: 'Eb',
            chords: [
                { name: 'Eb', quality: 'major', voicings: generateVoicings('Eb', 'major', 'Bb') },
                { name: 'Ebmaj7', quality: 'maj7', voicings: generateVoicings('Eb', 'maj7', 'Bb') },
                { name: 'Ebsus2', quality: 'sus2', voicings: generateVoicings('Eb', 'sus2', 'Bb') },
                { name: 'Ebsus4', quality: 'sus4', voicings: generateVoicings('Eb', 'sus4', 'Bb') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'Bb') },
                { name: 'F7', quality: 'dominant', voicings: generateVoicings('F', 'dominant', 'Bb') },
                { name: 'Fsus2', quality: 'sus2', voicings: generateVoicings('F', 'sus2', 'Bb') },
                { name: 'Fsus4', quality: 'sus4', voicings: generateVoicings('F', 'sus4', 'Bb') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'Bb') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'Bb') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Adim', quality: 'dim', voicings: generateVoicings('A', 'dim', 'Bb') },
                { name: 'Am7b5', quality: 'm7b5', voicings: generateVoicings('A', 'm7b5', 'Bb') },
            ]
        }
    ]
};
