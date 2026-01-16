import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const G_SHARP_MINOR_KEY: Key = {
    name: 'G# Minor',
    scale: 'minor',
    roots: [
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'G#') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'G#') },
                { name: 'G#m6', quality: 'm6', voicings: generateVoicings('G#', 'm6', 'G#') },
                { name: 'G#m9', quality: 'm9', voicings: generateVoicings('G#', 'm9', 'G#') },
                { name: 'G#m11', quality: 'm11', voicings: generateVoicings('G#', 'm11', 'G#') },
                { name: 'G#sus2', quality: 'sus2', voicings: generateVoicings('G#', 'sus2', 'G#') },
                { name: 'G#sus4', quality: 'sus4', voicings: generateVoicings('G#', 'sus4', 'G#') },
            ]
        },
        {
            root: 'A#',
            chords: [
                { name: 'A#m7b5', quality: 'm7b5', voicings: generateVoicings('A#', 'm7b5', 'G#') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'G#') },
                { name: 'Bmaj7', quality: 'maj7', voicings: generateVoicings('B', 'maj7', 'G#') },
                { name: 'B6', quality: '6', voicings: generateVoicings('B', '6', 'G#') },
                { name: 'Badd9', quality: 'add9', voicings: generateVoicings('B', 'add9', 'G#') },
                { name: 'Bmaj9', quality: 'maj9', voicings: generateVoicings('B', 'maj9', 'G#') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'G#') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'G#') },
                { name: 'C#m9', quality: 'm9', voicings: generateVoicings('C#', 'm9', 'G#') },
                { name: 'C#m11', quality: 'm11', voicings: generateVoicings('C#', 'm11', 'G#') },
            ]
        },
        {
            root: 'D#',
            chords: [
                { name: 'D#m', quality: 'minor', voicings: generateVoicings('D#', 'minor', 'G#') },
                { name: 'D#m7', quality: 'm7', voicings: generateVoicings('D#', 'm7', 'G#') },
                { name: 'D#7', quality: 'dominant', voicings: generateVoicings('D#', 'dominant', 'G#') },
                { name: 'D#9', quality: '9', voicings: generateVoicings('D#', '9', 'G#') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'G#') },
                { name: 'Emaj7', quality: 'maj7', voicings: generateVoicings('E', 'maj7', 'G#') },
                { name: 'E6', quality: '6', voicings: generateVoicings('E', '6', 'G#') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#', quality: 'major', voicings: generateVoicings('F#', 'major', 'G#') },
                { name: 'F#7', quality: 'dominant', voicings: generateVoicings('F#', 'dominant', 'G#') },
            ]
        }
    ]
};
