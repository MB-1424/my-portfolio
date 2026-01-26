import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroMarquee({}) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let resizeHandler: (() => void) | null = null;
    const ctx = gsap.context(() => {
      function roll(
        targets: gsap.TweenTarget,
        vars: gsap.TweenVars,
        reverse?: number,
      ) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() {
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            },
          }),
          elements = gsap.utils.toArray(targets) as HTMLElement[],
          clones = elements.map((el) => {
            let clone = el.cloneNode(true);
            el.parentNode?.appendChild(clone);
            return clone;
          }),
          positionClones = () =>
            elements.forEach((el, i) =>
              gsap.set(clones[i], {
                position: "absolute",
                overwrite: false,
                top: el.offsetTop,
                left: "100%",
              }),
            );
        positionClones();
        elements.forEach((el, i) =>
          tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0),
        );
        resizeHandler = () => {
          let time = tl.totalTime(); // record the current time
          tl.totalTime(0); // rewind and clear out the timeline
          positionClones(); // reposition
          tl.totalTime(time); // jump back to the proper time
        };
        window.addEventListener("resize", resizeHandler);
        return tl;
      }

      roll(".rollingText", { duration: 15 });
    }, marqueeRef);

    return () => {
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      ctx.revert();
    };
  }, []);
  return (
    <div
      ref={marqueeRef}
      className="wrapperRollingText anime pointer-events-none z-20  select-none  rounded-3xl tracking-[-0.1em] "
    >
      <div className="rollingText  md:!text-[200px]">
        - React/Next.js - AI/ML - Data Analysis - UI/UX&nbsp;
      </div>
    </div>
  );
}
