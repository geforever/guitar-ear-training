import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const F_SHARP_MAJOR_KEY: Key = {
    name: 'F# Major',
    scale: 'major',
    roots: [
        {
            root: 'F#',
            chords: [
                { name: 'F#', quality: 'major', voicings: generateVoicings('F#', 'major', 'F#') },
                { name: 'F#maj7', quality: 'maj7', voicings: generateVoicings('F#', 'maj7', 'F#') },
                { name: 'F#sus2', quality: 'sus2', voicings: generateVoicings('F#', 'sus2', 'F#') },
                { name: 'F#sus4', quality: 'sus4', voicings: generateVoicings('F#', 'sus4', 'F#') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'F#') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'F#') },
            ]
        },
        {
            root: 'A#',
            chords: [
                { name: 'A#m', quality: 'minor', voicings: generateVoicings('A#', 'minor', 'F#') },
                { name: 'A#m7', quality: 'm7', voicings: generateVoicings('A#', 'm7', 'F#') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'F#') },
                { name: 'Bmaj7', quality: 'maj7', voicings: generateVoicings('B', 'maj7', 'F#') },
                { name: 'Bsus2', quality: 'sus2', voicings: generateVoicings('B', 'sus2', 'F#') },
                { name: 'Bsus4', quality: 'sus4', voicings: generateVoicings('B', 'sus4', 'F#') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#', quality: 'major', voicings: generateVoicings('C#', 'major', 'F#') },
                { name: 'C#7', quality: 'dominant', voicings: generateVoicings('C#', 'dominant', 'F#') },
                { name: 'C#sus2', quality: 'sus2', voicings: generateVoicings('C#', 'sus2', 'F#') },
                { name: 'C#sus4', quality: 'sus4', voicings: generateVoicings('C#', 'sus4', 'F#') },
            ]
        },
        {
            root: 'D#',
            chords: [
                { name: 'D#m', quality: 'minor', voicings: generateVoicings('D#', 'minor', 'F#') },
                { name: 'D#m7', quality: 'm7', voicings: generateVoicings('D#', 'm7', 'F#') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fdim', quality: 'dim', voicings: generateVoicings('F', 'dim', 'F#') },
                { name: 'Fm7b5', quality: 'm7b5', voicings: generateVoicings('F', 'm7b5', 'F#') },
            ]
        }
    ]
};
