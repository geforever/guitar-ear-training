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
                { name: 'E6', quality: '6', voicings: generateVoicings('E', '6', 'E') },
                { name: 'Eadd9', quality: 'add9', voicings: generateVoicings('E', 'add9', 'E') },
                { name: 'Emaj9', quality: 'maj9', voicings: generateVoicings('E', 'maj9', 'E') },
                { name: 'Emaj13', quality: 'maj13', voicings: generateVoicings('E', 'maj13', 'E') },
                { name: 'Esus2', quality: 'sus2', voicings: generateVoicings('E', 'sus2', 'E') },
                { name: 'Esus4', quality: 'sus4', voicings: generateVoicings('E', 'sus4', 'E') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'E') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'E') },
                { name: 'F#m6', quality: 'm6', voicings: generateVoicings('F#', 'm6', 'E') },
                { name: 'F#m9', quality: 'm9', voicings: generateVoicings('F#', 'm9', 'E') },
                { name: 'F#m11', quality: 'm11', voicings: generateVoicings('F#', 'm11', 'E') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'E') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'E') },
                { name: 'G#m11', quality: 'm11', voicings: generateVoicings('G#', 'm11', 'E') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'E') },
                { name: 'Amaj7', quality: 'maj7', voicings: generateVoicings('A', 'maj7', 'E') },
                { name: 'A6', quality: '6', voicings: generateVoicings('A', '6', 'E') },
                { name: 'Aadd9', quality: 'add9', voicings: generateVoicings('A', 'add9', 'E') },
                { name: 'Amaj9', quality: 'maj9', voicings: generateVoicings('A', 'maj9', 'E') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'E') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'E') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'E') },
                { name: 'B7', quality: 'dominant', voicings: generateVoicings('B', 'dominant', 'E') },
                { name: 'B9', quality: '9', voicings: generateVoicings('B', '9', 'E') },
                { name: 'B11', quality: '11', voicings: generateVoicings('B', '11', 'E') },
                { name: 'B13', quality: '13', voicings: generateVoicings('B', '13', 'E') },
                { name: 'Bsus2', quality: 'sus2', voicings: generateVoicings('B', 'sus2', 'E') },
                { name: 'Bsus4', quality: 'sus4', voicings: generateVoicings('B', 'sus4', 'E') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'E') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'E') },
                { name: 'C#m9', quality: 'm9', voicings: generateVoicings('C#', 'm9', 'E') },
                { name: 'C#m11', quality: 'm11', voicings: generateVoicings('C#', 'm11', 'E') },
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
