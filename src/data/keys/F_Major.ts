import type { Key } from '../types';
import { generateVoicings } from '../caged';

export const F_MAJOR_KEY: Key = {
    name: 'F Major',
    scale: 'major',
    roots: [
        {
            root: 'F',
            chords: [
                { name: 'F', quality: 'major', voicings: generateVoicings('F', 'major', 'F') },
                { name: 'Fmaj7', quality: 'maj7', voicings: generateVoicings('F', 'maj7', 'F') },
                { name: 'F6', quality: '6', voicings: generateVoicings('F', '6', 'F') },
                { name: 'Fadd9', quality: 'add9', voicings: generateVoicings('F', 'add9', 'F') },
                { name: 'Fmaj9', quality: 'maj9', voicings: generateVoicings('F', 'maj9', 'F') },
                { name: 'Fmaj13', quality: 'maj13', voicings: generateVoicings('F', 'maj13', 'F') },
                { name: 'Fsus2', quality: 'sus2', voicings: generateVoicings('F', 'sus2', 'F') },
                { name: 'Fsus4', quality: 'sus4', voicings: generateVoicings('F', 'sus4', 'F') },
            ]
        },
        {
            root: 'G',
            chords: [
                { name: 'Gm', quality: 'minor', voicings: generateVoicings('G', 'minor', 'F') },
                { name: 'Gm7', quality: 'm7', voicings: generateVoicings('G', 'm7', 'F') },
                { name: 'Gm6', quality: 'm6', voicings: generateVoicings('G', 'm6', 'F') },
                { name: 'Gm9', quality: 'm9', voicings: generateVoicings('G', 'm9', 'F') },
                { name: 'Gm11', quality: 'm11', voicings: generateVoicings('G', 'm11', 'F') },
            ]
        },
        {
            root: 'A',
            chords: [
                { name: 'Am', quality: 'minor', voicings: generateVoicings('A', 'minor', 'F') },
                { name: 'Am7', quality: 'm7', voicings: generateVoicings('A', 'm7', 'F') },
                { name: 'Am11', quality: 'm11', voicings: generateVoicings('A', 'm11', 'F') },
            ]
        },
        {
            root: 'Bb',
            chords: [
                { name: 'Bb', quality: 'major', voicings: generateVoicings('Bb', 'major', 'F') },
                { name: 'Bbmaj7', quality: 'maj7', voicings: generateVoicings('Bb', 'maj7', 'F') },
                { name: 'Bb6', quality: '6', voicings: generateVoicings('Bb', '6', 'F') },
                { name: 'Bbadd9', quality: 'add9', voicings: generateVoicings('Bb', 'add9', 'F') },
                { name: 'Bbmaj9', quality: 'maj9', voicings: generateVoicings('Bb', 'maj9', 'F') },
                { name: 'Bbsus2', quality: 'sus2', voicings: generateVoicings('Bb', 'sus2', 'F') },
                { name: 'Bbsus4', quality: 'sus4', voicings: generateVoicings('Bb', 'sus4', 'F') },
            ]
        },
        {
            root: 'C',
            chords: [
                { name: 'C', quality: 'major', voicings: generateVoicings('C', 'major', 'F') },
                { name: 'C7', quality: 'dominant', voicings: generateVoicings('C', 'dominant', 'F') },
                { name: 'C9', quality: '9', voicings: generateVoicings('C', '9', 'F') },
                { name: 'C11', quality: '11', voicings: generateVoicings('C', '11', 'F') },
                { name: 'C13', quality: '13', voicings: generateVoicings('C', '13', 'F') },
                { name: 'Csus2', quality: 'sus2', voicings: generateVoicings('C', 'sus2', 'F') },
                { name: 'Csus4', quality: 'sus4', voicings: generateVoicings('C', 'sus4', 'F') },
            ]
        },
        {
            root: 'D',
            chords: [
                { name: 'Dm', quality: 'minor', voicings: generateVoicings('D', 'minor', 'F') },
                { name: 'Dm7', quality: 'm7', voicings: generateVoicings('D', 'm7', 'F') },
                { name: 'Dm9', quality: 'm9', voicings: generateVoicings('D', 'm9', 'F') },
                { name: 'Dm11', quality: 'm11', voicings: generateVoicings('D', 'm11', 'F') },
            ]
        },
        {
            root: 'E',
            chords: [
                { name: 'Edim', quality: 'dim', voicings: generateVoicings('E', 'dim', 'F') },
                { name: 'Em7b5', quality: 'm7b5', voicings: generateVoicings('E', 'm7b5', 'F') },
            ]
        }
    ]
};
