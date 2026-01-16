import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const D_MAJOR_KEY: Key = {
    name: 'D Major',
    scale: 'major',
    roots: [
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'D') },
                { name: 'Dmaj7', quality: 'maj7', voicings: generateVoicings('D', 'maj7', 'D') },
                { name: 'D6', quality: '6', voicings: generateVoicings('D', '6', 'D') },
                { name: 'Dadd9', quality: 'add9', voicings: generateVoicings('D', 'add9', 'D') },
                { name: 'Dmaj9', quality: 'maj9', voicings: generateVoicings('D', 'maj9', 'D') },
                { name: 'Dmaj13', quality: 'maj13', voicings: generateVoicings('D', 'maj13', 'D') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'D') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'D') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'D') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'D') },
                { name: 'Em6', quality: 'm6', voicings: generateVoicings('E', 'm6', 'D') },
                { name: 'Em9', quality: 'm9', voicings: generateVoicings('E', 'm9', 'D') },
                { name: 'Em11', quality: 'm11', voicings: generateVoicings('E', 'm11', 'D') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#m', quality: 'minor', voicings: generateVoicings('F#', 'minor', 'D') },
                { name: 'F#m7', quality: 'm7', voicings: generateVoicings('F#', 'm7', 'D') },
                { name: 'F#m11', quality: 'm11', voicings: generateVoicings('F#', 'm11', 'D') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'D') },
                { name: 'Gmaj7', quality: 'maj7', voicings: generateVoicings('G', 'maj7', 'D') },
                { name: 'G6', quality: '6', voicings: generateVoicings('G', '6', 'D') },
                { name: 'Gadd9', quality: 'add9', voicings: generateVoicings('G', 'add9', 'D') },
                { name: 'Gmaj9', quality: 'maj9', voicings: generateVoicings('G', 'maj9', 'D') },
                { name: 'Gsus2', quality: 'sus2', voicings: generateVoicings('G', 'sus2', 'D') },
                { name: 'Gsus4', quality: 'sus4', voicings: generateVoicings('G', 'sus4', 'D') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'A', quality: 'major', voicings: generateVoicings('A', 'major', 'D') },
                { name: 'A7', quality: 'dominant', voicings: generateVoicings('A', 'dominant', 'D') },
                { name: 'A9', quality: '9', voicings: generateVoicings('A', '9', 'D') },
                { name: 'A11', quality: '11', voicings: generateVoicings('A', '11', 'D') },
                { name: 'A13', quality: '13', voicings: generateVoicings('A', '13', 'D') },
                { name: 'Asus2', quality: 'sus2', voicings: generateVoicings('A', 'sus2', 'D') },
                { name: 'Asus4', quality: 'sus4', voicings: generateVoicings('A', 'sus4', 'D') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'D') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'D') },
                { name: 'Bm9', quality: 'm9', voicings: generateVoicings('B', 'm9', 'D') },
                { name: 'Bm11', quality: 'm11', voicings: generateVoicings('B', 'm11', 'D') },
            ]
        },
        {
            root: 'C#',
            chords: [
                { name: 'C#dim', quality: 'dim', voicings: generateVoicings('C#', 'dim', 'D') },
                { name: 'C#m7b5', quality: 'm7b5', voicings: generateVoicings('C#', 'm7b5', 'D') },
            ]
        }
    ]
};
