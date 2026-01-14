import * as Tone from "tone";

class AudioEngine {
    private voices: Tone.PluckSynth[] = [];
    private currentVoiceIndex = 0;
    private isInitialized = false;
    private readonly NUM_VOICES = 6; // Standard guitar has 6 strings

    constructor() {
        // Singleton pattern
    }

    async init() {
        if (this.isInitialized) return;

        await Tone.start();

        // Create effects chain
        const reverb = new Tone.Reverb({
            decay: 2.0,
            preDelay: 0.01,
            wet: 0.3
        }).toDestination();

        const eq = new Tone.EQ3({
            low: -3,
            mid: 3,
            high: 3
        });

        // 在 init() 内
        const gainNode = new Tone.Gain(1).toDestination(); // 0.5 表示 50% 音量


        eq.connect(reverb);
        reverb.connect(gainNode);

        // Create a pool of PluckSynth voices
        for (let i = 0; i < this.NUM_VOICES; i++) {
            const voice = new Tone.PluckSynth({
                attackNoise: 0.3,   // 拨片摩擦感（比手指大）
                dampening: 3500,    // 钢弦亮度
                resonance: 0.95,    // 琴体共鸣
                volume: 4           // 基础音量
            });
            voice.connect(eq);
            voice.connect(gainNode);
            voice.volume.value = 3;
            this.voices.push(voice);
        }

        this.isInitialized = true;
    }

    private getNextVoice(): Tone.PluckSynth | null {
        if (this.voices.length === 0) return null;
        const voice = this.voices[this.currentVoiceIndex];
        this.currentVoiceIndex = (this.currentVoiceIndex + 1) % this.voices.length;
        return voice;
    }

    /**
     * Play a chord simultaneously
     */
    playChord(notes: string[], duration: Tone.Unit.Time = "1n") {
        if (!this.isInitialized) return;

        notes.forEach(note => {
            const voice = this.getNextVoice();
            voice?.triggerAttackRelease(note, duration);
        });
    }

    /**
     * Simulate a strum
     */
    async strumChord(notes: string[], duration: Tone.Unit.Time = "1n", strumSpeed: number = 0.06) {
        if (!this.isInitialized) return;

        const now = Tone.now();
        const speed = strumSpeed + (Math.random() * 0.02 - 0.01); // Randomize speed slightly

        notes.forEach((note, index) => {
            const voice = this.getNextVoice();
            // PluckSynth triggerAttackRelease signature: (note, duration, time)
            voice?.triggerAttackRelease(note, duration, now + index * speed);
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
        if (!this.isInitialized) return;

        const now = Tone.now();
        // Calculate interval between each string based on total strum duration
        // If only 1 note, interval is 0.
        const interval = notes.length > 1 ? strumDuration / (notes.length - 1) : 0;

        notes.forEach((note, index) => {
            const voice = this.getNextVoice();
            if (!voice) return;

            // 模拟拨片力度差异
            voice.volume.value = 4 + Math.random() * 2;

            voice.triggerAttackRelease(
                note,
                sustainSeconds,          // ⭐ 延音核心
                now + index * interval   // 依次拨响
            );
        });
    }

    /**
     * Play a single note
     */
    playNote(note: string, duration: Tone.Unit.Time = "2n") {
        if (!this.isInitialized) return;
        const voice = this.getNextVoice();
        voice?.triggerAttackRelease(note, duration);
    }
}

export const audioEngine = new AudioEngine();