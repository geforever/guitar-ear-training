import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const C_MAJOR_KEY: Key = {
    name: 'C Major',
    scale: 'major',
    roots: [
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'C') },
                { name: 'Cmaj7', quality: 'maj7', voicings: generateVoicings('C', 'maj7', 'C') },
                { name: 'C6', quality: '6', voicings: generateVoicings('C', '6', 'C') },
                { name: 'Cadd9', quality: 'add9', voicings: generateVoicings('C', 'add9', 'C') },
                { name: 'Cmaj9', quality: 'maj9', voicings: generateVoicings('C', 'maj9', 'C') },
                { name: 'Cmaj13', quality: 'maj13', voicings: generateVoicings('C', 'maj13', 'C') },
                { name: 'Csus2', quality: 'sus2', voicings: generateVoicings('C', 'sus2', 'C') },
                { name: 'Csus4', quality: 'sus4', voicings: generateVoicings('C', 'sus4', 'C') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'C') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'C') },
                { name: 'Dm6', quality: 'm6', voicings: generateVoicings('D', 'm6', 'C') },
                { name: 'Dm9', quality: 'm9', voicings: generateVoicings('D', 'm9', 'C') },
                { name: 'Dm11', quality: 'm11', voicings: generateVoicings('D', 'm11', 'C') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Em', quality: 'minor', voicings: generateVoicings('E', 'minor', 'C') },
                { name: 'Em7', quality: 'm7', voicings: generateVoicings('E', 'm7', 'C') },
                { name: 'Em11', quality: 'm11', voicings: generateVoicings('E', 'm11', 'C') },
            ]
        },
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'C') },
                { name: 'Fmaj7', quality: 'maj7', voicings: generateVoicings('F', 'maj7', 'C') },
                { name: 'F6', quality: '6', voicings: generateVoicings('F', '6', 'C') },
                { name: 'Fadd9', quality: 'add9', voicings: generateVoicings('F', 'add9', 'C') },
                { name: 'Fmaj9', quality: 'maj9', voicings: generateVoicings('F', 'maj9', 'C') },
                { name: 'Fsus2', quality: 'sus2', voicings: generateVoicings('F', 'sus2', 'C') },
                { name: 'Fsus4', quality: 'sus4', voicings: generateVoicings('F', 'sus4', 'C') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'G', quality: 'major', voicings: generateVoicings('G', 'major', 'C') },
                { name: 'G7', quality: 'dominant', voicings: generateVoicings('G', 'dominant', 'C') },
                { name: 'G9', quality: '9', voicings: generateVoicings('G', '9', 'C') },
                { name: 'G11', quality: '11', voicings: generateVoicings('G', '11', 'C') },
                { name: 'G13', quality: '13', voicings: generateVoicings('G', '13', 'C') },
                { name: 'Gsus2', quality: 'sus2', voicings: generateVoicings('G', 'sus2', 'C') },
                { name: 'Gsus4', quality: 'sus4', voicings: generateVoicings('G', 'sus4', 'C') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'C') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'C') },
                { name: 'Am9', quality: 'm9', voicings: generateVoicings('A', 'm9', 'C') },
                { name: 'Am11', quality: 'm11', voicings: generateVoicings('A', 'm11', 'C') },
            ]
        },
        {
            root: 'B',
            chords: [
                { name: 'Bdim', quality: 'dim', voicings: generateVoicings('B', 'dim', 'C') },
                { name: 'Bm7b5', quality: 'm7b5', voicings: generateVoicings('B', 'm7b5', 'C') },
            ]
        }
    ]
};
