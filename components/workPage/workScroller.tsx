"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import { WorkPageContent } from "@/components/workPage/workPageContent";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const slideEase = CustomEase.create("workSlide", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type Direction = "up" | "down";

const runSectionAnimation = (index: number, direction: Direction) => {
  const target = `.s${index} .anime`;
  const rounded = direction === "down" ? `.s${index} .rounded__div__down` : `.s${index} .rounded__div__up`;
  const yFrom = direction === "down" ? "30vh" : "-30vh";
  const stagger = direction === "down" ? 0.03 : -0.03;
  const flex = screen.width > 540 ? 17 : 5;

  gsap
    .timeline()
    .from(target, { duration: 0.3 })
    .fromTo(
      target,
      { y: yFrom },
      {
        y: "0vh",
        duration: 1.1,
        stagger,
        ease: slideEase,
      },
    );

  gsap
    .timeline()
    .from(rounded, { duration: 0.1 })
    .fromTo(
      rounded,
      { height: `${flex}vh` },
      {
        height: "0vh",
        duration: 1.2,
        ease: slideEase,
      },
    );
};

export function WorkScroller({ enableSnap = true }: { enableSnap?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const snapAllowed = window.matchMedia("(min-width: 768px)").matches;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".work-scroll-section", container);

      // Trigger section animations on enter/enterBack to mirror the fullpage behavior without hijacking scroll.
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => runSectionAnimation(i, "down"),
          onEnterBack: () => runSectionAnimation(i, "up"),
        });
      });

      // Smooth snap to each work section while the block is in view, then release to native scroll when leaving.
      if (enableSnap && snapAllowed && sections.length > 1) {
        const snapPoints = sections.map((sec) => {
          const top = sec.offsetTop - container.offsetTop;
          return top / Math.max(container.offsetHeight, 1);
        });

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom top",
          invalidateOnRefresh: true,
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.45, max: 0.9 },
            ease: slideEase,
            delay: 0,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return <WorkPageContent containerRef={containerRef} />;
}
