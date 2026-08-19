import type { Metadata } from "next";
import { GlitchverseHero } from "./components/GlitchverseHero";
import { GlitchverseSections } from "./components/GlitchverseSections";

export const metadata: Metadata = {
  title: "Codeutsava X.0 — Build Beyond the Screen",
  description:
    "Enter the Glitchverse at Codeutsava X.0, where ideas break the expected and compile into something real.",
};

export default function Home() {
  return (
    <>
      <GlitchverseHero />
      <GlitchverseSections />
    </>
  );
}
