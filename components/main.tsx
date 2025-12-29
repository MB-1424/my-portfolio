import React from "react";
import { HeroSection } from "@/components/heroSection/heroSection";
import { ContactSection } from "@/components/contactSection/contactSection";
import { WorkScroller } from "@/components/workPage/workScroller";
import { HomeSnapController } from "@/components/homeSnapController";
import ExperienceSection from "@/components/experience/ExperienceSection";
import AboutSection from "@/components/about/AboutSection";

export function Main() {
  return (
    <>
      <HomeSnapController />
      <HeroSection />
      <section className="home-scroll-section work-home-section">
        <WorkScroller enableSnap={false} />
      </section>
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
