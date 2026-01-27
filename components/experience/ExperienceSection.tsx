"use client";

import React, { useRef } from "react";
import Image from "next/image";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import SectionTitle from "@/components/ui/SectionTitle";
import VariableProximity from "@/components/ui/VariableProximity";
import dynamic from "next/dynamic";

const SimpleHoverHint = dynamic(
  () => import("@/components/hints/SimpleHoverHint"),
  { ssr: false }
);

export default function ExperienceSection() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const interfaceCardRef = useRef<HTMLDivElement | null>(null);
  const aiCardRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="experience"
      className="section home-scroll-section section__4 experience-section relative w-full !justify-start bg-colorLight text-colorDark max-h-[100vh] overflow-y-auto md:max-h-none md:overflow-visible"
    >
      <div className="mx-auto w-full max-w-maxWidth px-4 pb-14 pt-14 sm:px-6 md:px-paddingX md:pb-20 md:pt-20">
        <SectionTitle title="ABOUT ME" />

        <div
          ref={introRef}
          className="relative mt-10 flex w-full items-center justify-center px-4 sm:px-6 text-center"
        >
          <VariableProximity
            label="I’m Abdulrahman Mahyoub, a Computer Science graduate (AI track) from King Khalid University, graduating with Honors. I combine high-quality React/Next.js frontend development and strong UX thinking with AI/ML prototyping in Python—from data cleaning and analysis to building practical prediction logic."
            className="max-w-3xl text-base leading-relaxed text-colorDark sm:text-2xl"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={introRef}
            radius={100}
            falloff="linear"
            highlightWords={[
              "Abdulrahman",
              "Mahyoub",
              "Computer",
              "Science",
              "King",
              "Khalid",
              "University",
              "Honors",
              "React/Next.js",
              "UX",
              "AI/ML",
              "Python",
            ]}
          />
          {/* Hover hint above intro 
           */}
        <div className="absolute  -top-5  md:-top-5">
              <SimpleHoverHint storageKey="experienceHoverHint_v1" />
          </div>
        </div>

        <div className="my-12 grid w-full gap-8 sm:my-16 lg:grid-cols-[1.1fr,1fr]">
          <div className="flex flex-col gap-6">
            <div ref={interfaceCardRef} className="relative w-full text-left">
              <VariableProximity
                label="I build interfaces that feel premium: responsive layouts, sharp typography, meaningful motion, and UX that communicates instantly. With React/Next.js, I deliver production-ready UI from Figma, connect real APIs, and keep everything fast, clean, and scalable—so the user feels confident from the first second."
                className="block text-base leading-relaxed text-colorDark sm:text-xl"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={interfaceCardRef}
                radius={100}
                falloff="linear"
                highlightWords={[
                  "interfaces",
                  "premium",
                  "UX",
                  "React/Next.js",
                  "Figma",
                  "APIs",
                  "fast",
                  "clean",
                  "scalable",
                ]}
              />
            </div>
            <div ref={aiCardRef} className="relative w-full text-left">
              <VariableProximity
                label="On the AI side, I prototype with Python—from data preparation to ML models—to turn data into features users can actually benefit from. My goal is always the same: reduce friction, make the value obvious, and ship products that are both polished and smart."
                className="block text-base leading-relaxed text-colorDark sm:text-xl"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={aiCardRef}
                radius={100}
                falloff="linear"
                highlightWords={[
                  "AI",
                  "Python",
                  "ML",
                  "features",
                  "reduce",
                  "friction",
                  "value",
                  "polished",
                  "smart",
                ]}
              />
            </div>
          </div>

          {/* Right column: cards */}
          {/* Right column: cards */}
          <div className="relative overflow-visible">
            {/* This wrapper defines the area */}
            <div className="relative h-[380px] overflow-visible sm:h-[520px] lg:h-[620px]">
              {/* This wrapper cancels CardSwap internal translate */}
              <div
                className="
        absolute inset-0
        translate-x-0 translate-y-0
        sm:-translate-x-[12%] sm:-translate-y-[12%]
        md:-translate-x-[5%] md:-translate-y-[20%]
      "
              >
                <CardSwap
                  width={600}
                  height={500}
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                >
                  {/* Card 1 */}
                  <Card className="border-white/10 bg-black text-white">
                    <div className="flex h-full w-full flex-col gap-4 p-6">
                      <h3 className="text-2xl font-semibold">
                        AI & Machine Learning Focus
                      </h3>

                      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <Image
                          src="/card/cardphoto1.png"
                          alt="AI & ML project visual"
                          fill
                          className="h-full w-full object-cover"
                          sizes="(max-width: 768px) 90vw, 500px"
                          priority
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Card 2 */}
                  <Card className="border-white/10 bg-black text-white">
                    <div className="flex h-full w-full flex-col gap-4 p-6">
                      <h3 className="text-2xl font-semibold">
                        Frontend[UI/UX] Interfaces
                      </h3>

                      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <Image
                          src="/card/cardphoto2.jpg"
                          alt="Frontend UI/UX interfaces"
                          fill
                          className="h-full w-full object-cover"
                          sizes="(max-width: 768px) 90vw, 500px"
                          priority
                        />
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .experience-section {
          justify-content: flex-start !important;
        }
      `}</style>
    </section>
  );
}
