import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const B_MAJOR_KEY: Key = {
    name: 'B Major',
    scale: 'major',
    roots: [
        {
            root: 'B',
            chords: [
                { name: 'B', quality: 'major', voicings: generateVoicings('B', 'major', 'B') },
                { name: 'Bmaj7', quality: 'maj7', voicings: generateVoicings('B', 'maj7', 'B') },
                { name: 'B6', quality: '6', voicings: generateVoicings('B', '6', 'B') },
                { name: 'Badd9', quality: 'add9', voicings: generateVoicings('B', 'add9', 'B') },
                { name: 'Bmaj9', quality: 'maj9', voicings: generateVoicings('B', 'maj9', 'B') },
                { name: 'Bmaj13', quality: 'maj13', voicings: generateVoicings('B', 'maj13', 'B') },
                { name: 'Bsus2', quality: 'sus2', voicings: generateVoicings('B', 'sus2', 'B') },
                { name: 'Bsus4', quality: 'sus4', voicings: generateVoicings('B', 'sus4', 'B') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#m', quality: 'minor', voicings: generateVoicings('C#', 'minor', 'B') },
                { name: 'C#m7', quality: 'm7', voicings: generateVoicings('C#', 'm7', 'B') },
                { name: 'C#m6', quality: 'm6', voicings: generateVoicings('C#', 'm6', 'B') },
                { name: 'C#m9', quality: 'm9', voicings: generateVoicings('C#', 'm9', 'B') },
                { name: 'C#m11', quality: 'm11', voicings: generateVoicings('C#', 'm11', 'B') },
            ]
        },
        {
            root: 'D#',
            chords: [
                { name: 'D#m', quality: 'minor', voicings: generateVoicings('D#', 'minor', 'B') },
                { name: 'D#m7', quality: 'm7', voicings: generateVoicings('D#', 'm7', 'B') },
                { name: 'D#m11', quality: 'm11', voicings: generateVoicings('D#', 'm11', 'B') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'E', quality: 'major', voicings: generateVoicings('E', 'major', 'B') },
                { name: 'Emaj7', quality: 'maj7', voicings: generateVoicings('E', 'maj7', 'B') },
                { name: 'E6', quality: '6', voicings: generateVoicings('E', '6', 'B') },
                { name: 'Eadd9', quality: 'add9', voicings: generateVoicings('E', 'add9', 'B') },
                { name: 'Emaj9', quality: 'maj9', voicings: generateVoicings('E', 'maj9', 'B') },
                { name: 'Esus2', quality: 'sus2', voicings: generateVoicings('E', 'sus2', 'B') },
                { name: 'Esus4', quality: 'sus4', voicings: generateVoicings('E', 'sus4', 'B') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#', quality: 'major', voicings: generateVoicings('F#', 'major', 'B') },
                { name: 'F#7', quality: 'dominant', voicings: generateVoicings('F#', 'dominant', 'B') },
                { name: 'F#9', quality: '9', voicings: generateVoicings('F#', '9', 'B') },
                { name: 'F#11', quality: '11', voicings: generateVoicings('F#', '11', 'B') },
                { name: 'F#13', quality: '13', voicings: generateVoicings('F#', '13', 'B') },
                { name: 'F#sus2', quality: 'sus2', voicings: generateVoicings('F#', 'sus2', 'B') },
                { name: 'F#sus4', quality: 'sus4', voicings: generateVoicings('F#', 'sus4', 'B') },
            ]
        },
        {
            root: 'G#',
            chords: [
                { name: 'G#m', quality: 'minor', voicings: generateVoicings('G#', 'minor', 'B') },
                { name: 'G#m7', quality: 'm7', voicings: generateVoicings('G#', 'm7', 'B') },
                { name: 'G#m9', quality: 'm9', voicings: generateVoicings('G#', 'm9', 'B') },
                { name: 'G#m11', quality: 'm11', voicings: generateVoicings('G#', 'm11', 'B') },
            ]
        },
        {
            root: 'A#',
            chords: [
                { name: 'A#dim', quality: 'dim', voicings: generateVoicings('A#', 'dim', 'B') },
                { name: 'A#m7b5', quality: 'm7b5', voicings: generateVoicings('A#', 'm7b5', 'B') },
            ]
        }
    ]
};
