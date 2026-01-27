"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
// import { ImageSequence } from "@/components/heroSection/imageSequence";
const LiquidEtherLazy = dynamic(() => import("@/LiquidEther"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden />,
});

export function HeroSection({}) {
  const sectionRef = useRef(null);
  const [shouldRenderWebgl, setShouldRenderWebgl] = useState(false);
  const hasTriggeredRef = useRef(false);

  const triggerRender = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setShouldRenderWebgl(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interactionHandler = () => triggerRender();
    window.addEventListener("pointerdown", interactionHandler, { once: true });
    window.addEventListener("touchstart", interactionHandler, { once: true, passive: true });
    window.addEventListener("scroll", interactionHandler, {
      once: true,
      passive: true,
    });

    // Faster idle callback for mobile devices
    const idleCb =
      (window as any).requestIdleCallback ||
      ((cb: () => void) => window.setTimeout(cb, 300));
    const cancelIdleCb =
      (window as any).cancelIdleCallback || ((id: number) => clearTimeout(id));
    const idleId = idleCb(() => triggerRender());

    let observer: IntersectionObserver | null = null;
    const sectionEl = sectionRef.current;
    if (sectionEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            triggerRender();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(sectionEl);
    }

    return () => {
      window.removeEventListener("pointerdown", interactionHandler);
      window.removeEventListener("touchstart", interactionHandler);
      window.removeEventListener("scroll", interactionHandler);
      cancelIdleCb(idleId);
      observer?.disconnect();
    };
  }, [triggerRender]);

  return (
    <section
      ref={sectionRef}
      className="section home-scroll-section section__1 s0 darkGradient first relative z-0 px-paddingX text-colorLight"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {shouldRenderWebgl ? (
          <LiquidEtherLazy
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
        ) : (
          <div className="h-full w-full" aria-hidden />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      <Bulge type="Light" />
      <Header color="Light" />
      <HeroWrapper />
      {/* <ImageSequence sectionRef={sectionRef} /> Statue animation disabled */}
    </section>
  );
}
