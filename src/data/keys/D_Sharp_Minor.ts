import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const D_SHARP_MINOR_KEY: Key = {
    name: 'D# Minor',
    scale: 'minor',
    roots: [
        {
            root: 'D#',
            chords: [
                { name: 'D#m', quality: 'minor', voicings: generateVoicings('D#', 'minor', 'D#') },
                { name: 'D#m7', quality: 'm7', voicings: generateVoicings('D#', 'm7', 'D#') },
                { name: 'D#m6', quality: 'm6', voicings: generateVoicings('D#', 'm6', 'D#') },
                { name: 'D#m9', quality: 'm9', voicings: generateVoicings('D#', 'm9', 'D#') },
                { name: 'D#m11', quality: 'm11', voicings: generateVoicings('D#', 'm11', 'D#') },
                { name: 'D#sus2', quality: 'sus2', voicings: generateVoicings('D#', 'sus2', 'D#') },
                { name: 'D#sus4', quality: 'sus4', voicings: generateVoicings('D#', 'sus4', 'D#') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'Fm7b5', quality: 'm7b5', voicings: generateVoicings('F', 'm7b5', 'D#') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#', quality: 'major', voicings: generateVoicings('F#', 'major', 'D#') },
                { name: 'F#maj7', quality: 'maj7', voicings: generateVoicings('F#', 'maj7', 'D#') },
                { name: 'F#6', quality: '6', voicings: generateVoicings('F#', '6', 'D#') },
                { name: 'F#add9', quality: 'add9', voicings: generateVoicings('F#', 'add9', 'D#') },
                { name: 'F#maj9', quality: 'maj9', voicings: generateVoicings('F#', 'maj9', 'D#') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'D#') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'D#') },
                { name: 'G#m9', quality: 'm9', voicings: generateVoicings('G#', 'm9', 'D#') },
                { name: 'G#m11', quality: 'm11', voicings: generateVoicings('G#', 'm11', 'D#') },
            ]
        },
        {
            root: 'A#',
            chords: [
                { name: 'A#m', quality: 'minor', voicings: generateVoicings('A#', 'minor', 'D#') },
                { name: 'A#m7', quality: 'm7', voicings: generateVoicings('A#', 'm7', 'D#') },
                { name: 'A#7', quality: 'dominant', voicings: generateVoicings('A#', 'dominant', 'D#') },
                { name: 'A#9', quality: '9', voicings: generateVoicings('A#', '9', 'D#') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'D#') },
                { name: 'Bmaj7', quality: 'maj7', voicings: generateVoicings('B', 'maj7', 'D#') },
                { name: 'B6', quality: '6', voicings: generateVoicings('B', '6', 'D#') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#', quality: 'major', voicings: generateVoicings('C#', 'major', 'D#') },
                { name: 'C#7', quality: 'dominant', voicings: generateVoicings('C#', 'dominant', 'D#') },
            ]
        }
    ]
};
