import * as Tone from 'tone';

class AudioEngine {
    private synth: Tone.PolySynth | null = null;
    private isInitialized = false;

    constructor() {
        // Singleton pattern
    }

    async init() {
        if (this.isInitialized) return;

        await Tone.start();

        // Using a PolySynth with a custom synth to simulate a plucked string
        // A "pluck" usually has a sharp attack and a decay.
        this.synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: "triangle" // Triangle is good for guitar body
            },
            envelope: {
                attack: 0.005, // Very fast attack for the "pick" sound
                decay: 0.3,    // Quick initial decay
                sustain: 0.1,  // Low sustain
                release: 1.5   // Long release for ringing out
            }
        }).toDestination();

        // Add some effects for realism
        const reverb = new Tone.Reverb({
            decay: 2.0,
            preDelay: 0.01,
            wet: 0.3
        }).toDestination();

        // A subtle EQ to boost mids/highs for "pick" definition
        const eq = new Tone.EQ3({
            low: -3,
            mid: 2,
            high: 3
        }).toDestination();

        this.synth.connect(eq);
        eq.connect(reverb);

        this.isInitialized = true;
    }

    playChord(notes: string[], duration: string = "1n") {
        if (!this.synth) return;
        this.synth.triggerAttackRelease(notes, duration);
    }

    // Simulate a strum
    async strumChord(notes: string[], duration: string = "1n", strumSpeed: number = 0.06) {
        if (!this.synth) return;

        const now = Tone.now();
        // Randomize strum speed slightly for human feel
        const speed = strumSpeed + (Math.random() * 0.02 - 0.01);

        notes.forEach((note, index) => {
            // Add tiny random velocity variation
            const velocity = 0.8 + Math.random() * 0.2;
            this.synth!.triggerAttackRelease(note, duration, now + index * speed, velocity);
        });
    }
}

export const audioEngine = new AudioEngine();
