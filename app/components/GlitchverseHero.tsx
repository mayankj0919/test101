"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import PrismGrid from "@/components/originkit/ui/prism-grid";
import styles from "./GlitchverseHero.module.css";

type HeroStyle = CSSProperties & {
  "--pointer-x": string;
  "--pointer-y": string;
  "--tilt-x": string;
  "--tilt-y": string;
  "--screen-x": string;
  "--screen-y": string;
  "--float-x": string;
  "--float-y": string;
  "--reverse-x": string;
  "--reverse-y": string;
};

const initialHeroStyle: HeroStyle = {
  "--pointer-x": "0px",
  "--pointer-y": "0px",
  "--tilt-x": "0deg",
  "--tilt-y": "0deg",
  "--screen-x": "0px",
  "--screen-y": "0px",
  "--float-x": "0px",
  "--float-y": "0px",
  "--reverse-x": "0px",
  "--reverse-y": "0px",
};

export function GlitchverseHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let animationFrame = 0;

    const followCursor = () => {
      const element = heroRef.current;
      if (!element) {
        animationFrame = 0;
        return;
      }

      current.x += (target.x - current.x) * 0.24;
      current.y += (target.y - current.y) * 0.24;

      element.style.setProperty("--pointer-x", `${current.x * 90}px`);
      element.style.setProperty("--pointer-y", `${current.y * 62}px`);
      element.style.setProperty("--tilt-x", `${current.y * -26}deg`);
      element.style.setProperty("--tilt-y", `${current.x * 34}deg`);
      element.style.setProperty("--screen-x", `${current.x * -28}px`);
      element.style.setProperty("--screen-y", `${current.y * -22}px`);
      element.style.setProperty("--float-x", `${current.x * 50}px`);
      element.style.setProperty("--float-y", `${current.y * 36}px`);
      element.style.setProperty("--reverse-x", `${current.x * -56}px`);
      element.style.setProperty("--reverse-y", `${current.y * -42}px`);

      const moving =
        Math.abs(target.x - current.x) > 0.0001 ||
        Math.abs(target.y - current.y) > 0.0001;
      animationFrame = moving ? requestAnimationFrame(followCursor) : 0;
    };

    const moveMonitor = (event: globalThis.PointerEvent) => {
      if (event.pointerType === "touch") return;

      target.x = Math.max(-0.5, Math.min(0.5, event.clientX / window.innerWidth - 0.5));
      target.y = Math.max(-0.5, Math.min(0.5, event.clientY / window.innerHeight - 0.5));
      if (!animationFrame) animationFrame = requestAnimationFrame(followCursor);
    };

    window.addEventListener("pointermove", moveMonitor, { passive: true });
    return () => {
      window.removeEventListener("pointermove", moveMonitor);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main
      className={styles.hero}
      id="top"
      ref={heroRef}
      style={initialHeroStyle}
    >
      <div className={styles.prismBackdrop} aria-hidden="true">
        <PrismGrid
          backgroundColor="transparent"
          boxSize={62}
          borderWidth={1}
          borderColor="rgba(153, 41, 234, 0.28)"
          rotate={{ x: -10, y: 7 }}
          colors={{
            paletteCount: 4,
            color1: "#000000",
            color2: "#9929EA",
            color3: "#FF5FCF",
            color4: "#FAEB92",
          }}
        />
      </div>
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.cursorGlow} aria-hidden="true" />

      <header className={styles.navbar}>
        <a className={styles.brand} href="#top" aria-label="Codeutsava X.0 home">
          <span className={styles.brandGlyph} aria-hidden="true">
            C<span>/</span>U
          </span>
          <span className={styles.brandText}>
            CODEUTSAVA
            <small>VERSION X.0</small>
          </span>
        </a>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          <a href="#brief">THE BRIEF</a>
          <a href="#signal">THE SIGNAL</a>
          <a href="#join">ENTER</a>
        </nav>

        <a className={styles.navCta} href="#join">
          <span className={styles.liveDot} aria-hidden="true" />
          JOIN THE SIGNAL
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.heroGrid} aria-labelledby="hero-title">
        <div className={styles.copy} id="brief">
          <div className={styles.kicker}>
            <span>CODEUTSAVA X.0</span>
            <span className={styles.kickerRule} />
            <span>THE GLITCHVERSE</span>
          </div>

          <h1 className={styles.title} id="hero-title">
            <span>BUILD</span>
            <span>BEYOND THE</span>
            <span className={styles.screenWord}>SCREEN.</span>
          </h1>

          <div className={styles.copyFooter} id="join">
            <p>
              Reality is only the first draft. Break the expected, compile the
              impossible, and make your next idea impossible to ignore.
            </p>
            <a className={styles.primaryCta} href="#signal">
              <span>ENTER THE GLITCHVERSE</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className={styles.visual} id="signal" aria-label="Interactive CRT transmission">
          <span className={`${styles.codeFragment} ${styles.fragmentOne}`} aria-hidden="true">
            010_X
          </span>
          <span className={`${styles.codeFragment} ${styles.fragmentTwo}`} aria-hidden="true">
            SIGNAL//LIVE
          </span>
          <span className={`${styles.codeFragment} ${styles.fragmentThree}`} aria-hidden="true">
            &lt;/REALITY&gt;
          </span>

          <div className={styles.monitorScene}>
            <div className={styles.monitorOrbit} aria-hidden="true" />
            <div className={styles.monitorFloat}>
              <div className={styles.monitorRig}>
                <div className={styles.monitorHandle} aria-hidden="true" />
                <div className={styles.monitor}>
                  <div className={styles.monitorTop} aria-hidden="true" />

                  <div className={styles.bezel}>
                    <div className={styles.screenShell}>
                      <div className={styles.screen}>
                        <div className={styles.screenGrid} aria-hidden="true" />
                        <div className={styles.scanlines} aria-hidden="true" />
                        <div className={styles.screenSweep} aria-hidden="true" />
                        <div className={styles.glitchBands} aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={styles.glitchNoise} aria-hidden="true" />
                        <div className={styles.signalLoss} aria-hidden="true" />
                        <div className={styles.screenContent}>
                          <span className={styles.screenLabel}>CODEUTSAVA // X.0</span>
                          <strong className={styles.screenHeadline} data-text={"MAKE\nIT REAL"}>
                            <span>MAKE</span>
                            <span>IT REAL</span>
                          </strong>
                          <span className={styles.terminalLine}>&gt; SIGNAL ACQUIRED_</span>
                        </div>
                        <span className={styles.crosshair} aria-hidden="true">
                          +
                        </span>
                      </div>
                    </div>

                    <div className={styles.controls} aria-hidden="true">
                      <div className={styles.controlBrand}>CU.OS</div>
                      <div className={styles.vents}>
                        {Array.from({ length: 6 }, (_, index) => (
                          <span key={index} />
                        ))}
                      </div>
                      <span className={styles.powerLight} />
                      <span className={styles.dial} />
                      <span className={`${styles.dial} ${styles.dialSmall}`} />
                    </div>
                  </div>

                  <div className={styles.monitorSide} aria-hidden="true" />
                  <div className={styles.monitorBottom} aria-hidden="true" />
                </div>

                <div className={styles.stand} aria-hidden="true">
                  <span />
                </div>
                <div className={styles.monitorShadow} aria-hidden="true" />
              </div>
            </div>
          </div>

          <p className={styles.dragHint} aria-hidden="true">
            <span>MOVE CURSOR</span>
            <span>TO BEND REALITY</span>
          </p>
        </div>
      </section>

      <div className={styles.bottomRail}>
        <span>NEXT TRANSMISSION // SOON</span>
        <span className={styles.ticker}>
          <span>IDEATE</span> / <span>DISRUPT</span> / <span>DEPLOY</span>
        </span>
        <span>ONE VIEWPORT // THE WHOLE WORLD</span>
      </div>
    </main>
  );
}
