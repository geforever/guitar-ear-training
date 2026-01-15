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
                { name: 'Gsus2', quality: 'sus2', voicings: generateVoicings('G', 'sus2', 'G') },
                { name: 'Gsus4', quality: 'sus4', voicings: generateVoicings('G', 'sus4', 'G') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'G') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'G') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bm', quality: 'minor', voicings: generateVoicings('B', 'minor', 'G') },
                { name: 'Bm7', quality: 'm7', voicings: generateVoicings('B', 'm7', 'G') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'G') },
                { name: 'Cmaj7', quality: 'maj7', voicings: generateVoicings('C', 'maj7', 'G') },
                { name: 'Csus2', quality: 'sus2', voicings: generateVoicings('C', 'sus2', 'G') },
                { name: 'Csus4', quality: 'sus4', voicings: generateVoicings('C', 'sus4', 'G') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'D', quality: 'major', voicings: generateVoicings('D', 'major', 'G') },
                { name: 'D7', quality: 'dominant', voicings: generateVoicings('D', 'dominant', 'G') },
                { name: 'Dsus2', quality: 'sus2', voicings: generateVoicings('D', 'sus2', 'G') },
                { name: 'Dsus4', quality: 'sus4', voicings: generateVoicings('D', 'sus4', 'G') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'G') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'G') },
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
