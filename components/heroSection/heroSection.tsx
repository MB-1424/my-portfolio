import React, { useRef } from "react";

import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
// import { ImageSequence } from "@/components/heroSection/imageSequence";
import LiquidEther from "@/LiquidEther";

export function HeroSection({}) {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className="section home-scroll-section section__1 s0 darkGradient first relative z-0 px-paddingX text-colorLight"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <LiquidEther
          colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      <Bulge type="Light" />
      <Header color="Light" />
      <HeroWrapper />
      {/* <ImageSequence sectionRef={sectionRef} /> Statue animation disabled */}
    </section>
  );
}
