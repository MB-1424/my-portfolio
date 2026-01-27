"use client";

import React from "react";
import { HeroButton } from "./heroButton";
import { HeroMarquee } from "./heroMarquee";
import dynamic from "next/dynamic";

const SimpleHoverHint = dynamic(
  () => import("@/components/hints/SimpleHoverHint"),
  { ssr: false }
);
export function HeroWrapper({}) {
  return (
    <main className="section1__wrapper relative max-w-maxWidth grow">
      <div className="myImage"></div>
      <HeroButton />
      {/* Hover hint - centered horizontally, middle on mobile, top on desktop */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-16 md:translate-y-0 z-30">
        <SimpleHoverHint storageKey="heroHoverHint_v1" />
      </div>
      <h1 className="left mask pointer-events-none z-20 pt-20 font-extrabold">
        <div className="free anime">
          ABDULRAHMAN
          <br />
          MAHYOUB.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="animation__wrapper anime">
          <span className="animate__this animate__this1 left-0">
            Webflow Developer<span className="yellow__it">.</span>
            <br />
          </span>
          <span className="animate__this animate__this2 left-0">
            Next.js Developer<span className="yellow__it">.</span>
          </span>
          <span>&nbsp;</span>
        </div>
      </h1>
      <HeroMarquee />
    </main>
  );
}
