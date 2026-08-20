// Web Audio API Synthesizer: Ultra-Lightweight Retro Chime Engine
// 100% Offline, Zero-Lag, Instant Disconnect & Debounce

class RetroAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private lastChimeTime: number = 0;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // =========================================================================
  // SMOOTH CINEMATIC SPIDER-VERSE DIMENSIONAL PULSE (Warm, Rich, Soft on Ears)
  // Low-pass filtered, zero piercing highs, smooth analog tape glide
  // =========================================================================
  public playStageChime(_stageIndex: number = 0) {
    if (this.isMuted) return;
    const nowMs = performance.now();
    // Debounce to prevent audio stacking on high-speed scroll
    if (nowMs - this.lastChimeTime < 110) return;
    this.lastChimeTime = nowMs;

    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const duration = 0.12;

      // 1. Warm Analog Low-Pass Filter (Eliminates all pointy / piercing high frequencies)
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(850, t);
      filter.frequency.exponentialRampToValueAtTime(220, t + duration);
      filter.Q.setValueAtTime(1.5, t);

      // 2. Smooth Dimensional Gain Envelope (Soft 8ms ease-in, gentle multiverse ripple)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, t);
      masterGain.gain.linearRampToValueAtTime(0.045, t + 0.012);
      // Subtle organic dimension flutter (not harsh clicks)
      masterGain.gain.setValueAtTime(0.038, t + 0.035);
      masterGain.gain.setValueAtTime(0.048, t + 0.055);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      // 3. Warm Triangle Carrier (Deep, satisfying dimensional pitch sweep)
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + duration);

      // 4. Subtle Sub-Bass Dimension Underlay (Adds rich weight to the transition)
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(85, t);
      subOsc.frequency.exponentialRampToValueAtTime(42, t + duration);

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.035, t);
      subGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(filter);
      subOsc.connect(subGain);
      subGain.connect(masterGain);

      // Instant Cleanup on completion
      osc.onended = () => {
        try {
          osc.disconnect();
          subOsc.disconnect();
          subGain.disconnect();
          filter.disconnect();
          masterGain.disconnect();
        } catch {}
      };

      osc.start(t);
      osc.stop(t + duration);
      subOsc.start(t);
      subOsc.stop(t + duration);
    } catch {
      // Audio context silenced or blocked
    }
  }

  // Backward compatibility alias for transition triggers
  public playGlitchTransition(stageIndex: number = 0) {
    this.playStageChime(stageIndex);
  }

  // Single Clean Windows XP Ding
  public playXPDing() {
    this.playStageChime(0);
  }

  // XP Click / Dialog open sound
  public playXPClick() {
    this.playStageChime(0);
  }

  // Time Travel / Road Warp Zoom whoosh
  public playWarp() {
    this.playStageChime(0);
  }
}

export const retroAudio = new RetroAudioEngine();
