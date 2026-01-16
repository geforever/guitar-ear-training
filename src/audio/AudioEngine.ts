import * as Tone from "tone";

class AudioEngine {
    private sampler: Tone.Sampler | null = null;
    private isInitialized = false;
    private isLoaded = false;

    constructor() {
        // Singleton pattern
    }

    private loadPromise: Promise<void> | null = null;

    async init() {
        if (this.loadPromise) return this.loadPromise;

        this.loadPromise = new Promise(async (resolve) => {
            if (this.isInitialized && this.isLoaded) {
                resolve();
                return;
            }

            await Tone.start();

            // Create effects chain
            const reverb = new Tone.Reverb({
                decay: 1.5,
                preDelay: 0.01,
                wet: 0.2
            }).toDestination();

            const eq = new Tone.EQ3({
                low: -2,
                mid: 1,
                high: 2
            });

            const gainNode = new Tone.Gain(0.8).toDestination();

            eq.connect(reverb);
            reverb.connect(gainNode);

            // Use Tone.Sampler with acoustic guitar samples
            this.sampler = new Tone.Sampler({
                urls: {
                    "E2": "E2.mp3",
                    "A2": "A2.mp3",
                    "D3": "D3.mp3",
                    "G3": "G3.mp3",
                    "B3": "B3.mp3",
                    "E4": "E4.mp3",
                    "C3": "C3.mp3",
                    "F3": "F3.mp3",
                    "A3": "A3.mp3",
                    "C4": "C4.mp3",
                    "F4": "F4.mp3",
                    "A4": "A4.mp3",
                    "C5": "C5.mp3"
                },
                release: 1,
                baseUrl: "https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_guitar_steel-mp3/",
                onload: () => {
                    this.isLoaded = true;
                    console.log("Guitar samples loaded");
                    resolve();
                }
            });

            this.sampler.connect(eq);
            this.sampler.connect(gainNode);

            this.isInitialized = true;
        });

        return this.loadPromise;
    }

    /**
     * Play a chord simultaneously
     */
    playChord(notes: string[], duration: Tone.Unit.Time = "1n") {
        if (!this.sampler || !this.isLoaded) return;
        this.sampler.triggerAttackRelease(notes, duration);
    }

    /**
     * Simulate a strum
     */
    async strumChord(notes: string[], duration: Tone.Unit.Time = "1n", strumSpeed: number = 0.06) {
        if (!this.sampler || !this.isLoaded) return;

        const now = Tone.now();
        const speed = strumSpeed + (Math.random() * 0.02 - 0.01); // Randomize speed slightly

        notes.forEach((note, index) => {
            this.sampler!.triggerAttackRelease(note, duration, now + index * speed);
        });
    }

    /**
     * 使用拨片从上往下扫弦（Downstroke）
     * @param notes 吉他和弦音符（低音 → 高音）
     * @param sustainSeconds 整体扫弦持续时间（秒），默认 1 秒
     * @param strumDuration 扫弦动作的总时间（秒），默认 0.2 秒
     */
    downStrumWithPick(
        notes: string[],
        sustainSeconds: number = 1,
        strumDuration: number = 0.2
    ) {
        if (!this.sampler || !this.isLoaded) return;

        const now = Tone.now();
        // Calculate interval between each string based on total strum duration
        const interval = notes.length > 1 ? strumDuration / (notes.length - 1) : 0;

        notes.forEach((note, index) => {
            // Randomize velocity slightly for realism
            const velocity = 0.8 + Math.random() * 0.2;

            this.sampler!.triggerAttackRelease(
                note,
                sustainSeconds,
                now + index * interval,
                velocity
            );
        });
    }

    /**
     * Play a single note
     */
    playNote(note: string, duration: Tone.Unit.Time = "2n") {
        if (!this.sampler || !this.isLoaded) return;
        this.sampler.triggerAttackRelease(note, duration);
    }
}

export const audioEngine = new AudioEngine();