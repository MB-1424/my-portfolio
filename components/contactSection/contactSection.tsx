import { Footer } from "@/components/contactSection/footer";
import React, { useRef } from "react";
import Magentic from "@/components/ui/magentic";
import { BgImagesContainer } from "@/components/contactSection/bgImagesContainer";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Header } from "../header";
import { Bulge } from "../bulge";
import { links } from "@/data/data";
export function ContactSection({ sectionIndex }: { sectionIndex?: number }) {
  const { suscribe } = useAppSelector((state) => state.fullpageReducer.third);
  const bgImagesSharedRef = useRef<gsap.core.Tween | null>(null);

  return (
    <section
      className={`section home-scroll-section section__5 third darkGradient ${sectionIndex !== undefined ? `s${sectionIndex}` : ""}`}
      id="contact"
    >
      <Bulge type="Light" />
      <Header color="Light"></Header>

      <Magentic // href="mailto:email.coex@gmail.com"
        href={links.contact}
        target="_blank"
        rel="noreferrer"
        className="footer__heading anime cursor-pointer"
        onMouseEnter={() => {
          bgImagesSharedRef.current?.restart(true);
        }}
        onMouseLeave={() => {
          bgImagesSharedRef.current?.reverse();
        }}
      >
        <span className="shapka mask">
          <span className="inline-block text-left whitespace-pre-line">
            Contact
            {"\n"}
            With me
          </span>
        </span>
      </Magentic>
      <BgImagesContainer bgImagesSharedRef={bgImagesSharedRef} />
      <Footer />
    </section>
  );
}
