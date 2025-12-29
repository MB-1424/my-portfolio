"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const slideEase = CustomEase.create("homeSlide", "M0,0 C0.52,0.01 0.16,1 1,1 ");

export function HomeSnapController() {
  useEffect(() => {
    const snapAllowed = window.matchMedia("(min-width: 768px)").matches;
    if (!snapAllowed) return;

    const ctx = gsap.context(() => {
      // Snap across all sections so each fills the viewport (Hero, Work projects, Contact).
      const sections = gsap.utils.toArray<HTMLElement>(".section");
      if (sections.length < 2) return;

      let snapPoints: number[] = [];

      const computeSnapPoints = () => {
        const docScrollable = ScrollTrigger.maxScroll(window);
        snapPoints = sections
          .map((section) => section.offsetTop / (docScrollable || 1))
          .filter((v) => Number.isFinite(v));
      };

      computeSnapPoints();

      const snapTrigger = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: () => ScrollTrigger.maxScroll(window),
        snap: {
          snapTo: (value) => {
            computeSnapPoints();
            return gsap.utils.snap(snapPoints, value);
          },
          duration: { min: 0.45, max: 0.9 },
          ease: slideEase,
          delay: 0,
        },
      });

      const workSection = document.querySelector(".work-home-section") as HTMLElement | null;
      let workGate: ScrollTrigger | null = null;
      if (workSection) {
        // When inner snap is disabled (home), keep global snap on; when inner snap is enabled (work page), allow fallback.
        workGate = ScrollTrigger.create({
          trigger: workSection,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => snapTrigger.enable(),
          onEnterBack: () => snapTrigger.enable(),
          onLeave: () => snapTrigger.enable(),
          onLeaveBack: () => snapTrigger.enable(),
        });
      }

      ScrollTrigger.addEventListener("refreshInit", computeSnapPoints);
      ScrollTrigger.addEventListener("refresh", computeSnapPoints);

      return () => {
        snapTrigger.kill();
        workGate?.kill();
        ScrollTrigger.removeEventListener("refreshInit", computeSnapPoints);
        ScrollTrigger.removeEventListener("refresh", computeSnapPoints);
      };
    });

    return () => ctx.revert();
  }, []);

  return null;
}
