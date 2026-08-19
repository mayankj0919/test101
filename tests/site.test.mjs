import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the experience focused on the requested navbar and hero", async () => {
  const hero = await readFile(
    new URL("../app/components/GlitchverseHero.tsx", import.meta.url),
    "utf8",
  );

  assert.match(hero, /<header className=\{styles\.navbar\}>/);
  assert.match(hero, /BUILD/);
  assert.match(hero, /BEYOND THE/);
  assert.match(hero, /monitorRig/);
  assert.match(hero, /PrismGrid/);
  assert.match(hero, /window\.addEventListener\("pointermove", moveMonitor/);
  assert.match(hero, /requestAnimationFrame\(followCursor\)/);
  assert.match(hero, /target\.x - current\.x\) \* 0\.24/);
  assert.doesNotMatch(hero, /<footer|<article/);
});

test("uses native Next.js without Vite", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.ok(packageJson.dependencies.next);
  assert.equal(packageJson.devDependencies?.vite, undefined);
  assert.equal(packageJson.devDependencies?.vinext, undefined);
});

test("keeps prism-grid interaction keys unique and bounds fading cells", async () => {
  const prismGrid = await readFile(
    new URL("../components/originkit/ui/prism-grid.tsx", import.meta.url),
    "utf8",
  );

  assert.match(prismGrid, /litRef = useRef<Cell \| null>/);
  assert.match(prismGrid, /current\.some\(\(item\) => item\.id === cell\.id\)/);
  assert.match(prismGrid, /current\.slice\(-59\)/);
  assert.match(prismGrid, /onAnimationComplete/);
  assert.doesNotMatch(prismGrid, /setLit\(\(current\)/);
});

test("uses the selected four-color palette", async () => {
  const [hero, styles, globals] = await Promise.all([
    readFile(new URL("../app/components/GlitchverseHero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/GlitchverseHero.module.css", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  const source = `${hero}\n${styles}\n${globals}`.toLowerCase();

  for (const color of ["#000000", "#9929ea", "#ff5fcf", "#faeb92"]) {
    assert.match(source, new RegExp(color));
  }
  assert.doesNotMatch(source, /#d9ff43|#e9e5d7|217, 255, 67/);
});

test("self-hosts and consistently applies the supplied display font", async () => {
  const [styles, globals] = await Promise.all([
    readFile(new URL("../app/components/GlitchverseHero.module.css", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(globals, /\/fonts\/cyber-city\.otf/);
  assert.match(styles, /\.title \{[\s\S]*?font-family: var\(--font-body\)/);
  assert.match(styles, /\.title \.screenWord \{[\s\S]*?font-family: inherit/);
  assert.match(styles, /\.primaryCta > span:first-child \{[\s\S]*?font-family: var\(--font-body\)/);
  assert.match(styles, /var\(--font-brand\)/);
  assert.match(globals, /--font-screen:/);
  assert.match(styles, /font-family: var\(--font-screen\)/);
  assert.doesNotMatch(styles, /var\(--font-accent\)/);
});

test("adds layered CRT glitches with reduced-motion support", async () => {
  const [hero, styles] = await Promise.all([
    readFile(new URL("../app/components/GlitchverseHero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/GlitchverseHero.module.css", import.meta.url), "utf8"),
  ]);

  assert.match(hero, /styles\.glitchBands/);
  assert.match(hero, /styles\.glitchNoise/);
  assert.match(hero, /styles\.signalLoss/);
  assert.match(hero, /data-text=\{"MAKE\\nIT REAL"\}/);
  assert.match(styles, /@keyframes headlineGlitchTop/);
  assert.match(styles, /@keyframes glitchBand/);
  assert.match(styles, /@keyframes screenCrash/);
  assert.match(styles, /@keyframes crashFlash/);
  assert.match(styles, /@keyframes chassisCrash/);
  assert.doesNotMatch(styles, /crashOverlay/);
  assert.match(styles, /prefers-reduced-motion/);
});
