import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const E_MAJOR_KEY: Key = {
    name: 'E Major',
    scale: 'major',
    roots: [
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'E') },
                { name: 'Emaj7', quality: 'maj7', voicings: generateVoicings('E', 'maj7', 'E') },
                { name: 'Esus2', quality: 'sus2', voicings: generateVoicings('E', 'sus2', 'E') },
                { name: 'Esus4', quality: 'sus4', voicings: generateVoicings('E', 'sus4', 'E') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'E') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'E') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'E') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'E') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'E') },
                { name: 'Amaj7', quality: 'maj7', voicings: generateVoicings('A', 'maj7', 'E') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'E') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'E') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'E') },
                { name: 'B7', quality: 'dominant', voicings: generateVoicings('B', 'dominant', 'E') },
                { name: 'Bsus2', quality: 'sus2', voicings: generateVoicings('B', 'sus2', 'E') },
                { name: 'Bsus4', quality: 'sus4', voicings: generateVoicings('B', 'sus4', 'E') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'E') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'E') },
            ]
        },
        {
            root: 'D#',
            chords: [
                { name: 'D#dim', quality: 'dim', voicings: generateVoicings('D#', 'dim', 'E') },
                { name: 'D#m7b5', quality: 'm7b5', voicings: generateVoicings('D#', 'm7b5', 'E') },
            ]
        }
    ]
};
