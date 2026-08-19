import type { Metadata } from "next";
import { GlitchverseHero } from "./components/GlitchverseHero";
import { TimelineRoad } from "@/components/timeline/TimelineRoad";

export const metadata: Metadata = {
  title: "Codeutsava X.0 — Build Beyond the Screen",
  description:
    "Enter the Glitchverse at Codeutsava X.0, where ideas break the expected and compile into something real.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <GlitchverseHero />
      <TimelineRoad />
    </div>
  );
}
