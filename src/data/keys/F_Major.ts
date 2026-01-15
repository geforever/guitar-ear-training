import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const F_MAJOR_KEY: Key = {
    name: 'F Major',
    scale: 'major',
    roots: [
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'F') },
                { name: 'Fmaj7', quality: 'maj7', voicings: generateVoicings('F', 'maj7', 'F') },
                { name: 'Fsus2', quality: 'sus2', voicings: generateVoicings('F', 'sus2', 'F') },
                { name: 'Fsus4', quality: 'sus4', voicings: generateVoicings('F', 'sus4', 'F') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'F') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'F') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'F') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'F') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'F') },
                { name: 'Bbmaj7', quality: 'maj7', voicings: generateVoicings('Bb', 'maj7', 'F') },
                { name: 'Bbsus2', quality: 'sus2', voicings: generateVoicings('Bb', 'sus2', 'F') },
                { name: 'Bbsus4', quality: 'sus4', voicings: generateVoicings('Bb', 'sus4', 'F') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'F') },
                { name: 'C7', quality: 'dominant', voicings: generateVoicings('C', 'dominant', 'F') },
                { name: 'Csus2', quality: 'sus2', voicings: generateVoicings('C', 'sus2', 'F') },
                { name: 'Csus4', quality: 'sus4', voicings: generateVoicings('C', 'sus4', 'F') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'F') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'F') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Edim', quality: 'dim', voicings: generateVoicings('E', 'dim', 'F') },
                { name: 'Em7b5', quality: 'm7b5', voicings: generateVoicings('E', 'm7b5', 'F') },
            ]
        }
    ]
};
