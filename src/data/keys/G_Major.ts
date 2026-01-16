import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const G_MAJOR_KEY: Key = {
    name: 'G Major',
    scale: 'major',
    roots: [
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'G') },
                { name: 'Gmaj7', quality: 'maj7', voicings: generateVoicings('G', 'maj7', 'G') },
                { name: 'G6', quality: '6', voicings: generateVoicings('G', '6', 'G') },
                { name: 'Gadd9', quality: 'add9', voicings: generateVoicings('G', 'add9', 'G') },
                { name: 'Gmaj9', quality: 'maj9', voicings: generateVoicings('G', 'maj9', 'G') },
                { name: 'Gmaj13', quality: 'maj13', voicings: generateVoicings('G', 'maj13', 'G') },
                { name: 'Gsus2', quality: 'sus2', voicings: generateVoicings('G', 'sus2', 'G') },
                { name: 'Gsus4', quality: 'sus4', voicings: generateVoicings('G', 'sus4', 'G') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'G') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'G') },
                { name: 'Am6', quality: 'm6', voicings: generateVoicings('A', 'm6', 'G') },
                { name: 'Am9', quality: 'm9', voicings: generateVoicings('A', 'm9', 'G') },
                { name: 'Am11', quality: 'm11', voicings: generateVoicings('A', 'm11', 'G') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'G') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'G') },
                { name: 'Bm11', quality: 'm11', voicings: generateVoicings('B', 'm11', 'G') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'G') },
                { name: 'Cmaj7', quality: 'maj7', voicings: generateVoicings('C', 'maj7', 'G') },
                { name: 'C6', quality: '6', voicings: generateVoicings('C', '6', 'G') },
                { name: 'Cadd9', quality: 'add9', voicings: generateVoicings('C', 'add9', 'G') },
                { name: 'Cmaj9', quality: 'maj9', voicings: generateVoicings('C', 'maj9', 'G') },
                { name: 'Csus2', quality: 'sus2', voicings: generateVoicings('C', 'sus2', 'G') },
                { name: 'Csus4', quality: 'sus4', voicings: generateVoicings('C', 'sus4', 'G') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'G') },
                { name: 'D7', quality: 'dominant', voicings: generateVoicings('D', 'dominant', 'G') },
                { name: 'D9', quality: '9', voicings: generateVoicings('D', '9', 'G') },
                { name: 'D11', quality: '11', voicings: generateVoicings('D', '11', 'G') },
                { name: 'D13', quality: '13', voicings: generateVoicings('D', '13', 'G') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'G') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'G') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'G') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'G') },
                { name: 'Em9', quality: 'm9', voicings: generateVoicings('E', 'm9', 'G') },
                { name: 'Em11', quality: 'm11', voicings: generateVoicings('E', 'm11', 'G') },
            ]
        },
        {
            root: 'F#',
            chords: [
                { name: 'F#dim', quality: 'dim', voicings: generateVoicings('F#', 'dim', 'G') },
                { name: 'F#m7b5', quality: 'm7b5', voicings: generateVoicings('F#', 'm7b5', 'G') },
            ]
        }
    ]
};
