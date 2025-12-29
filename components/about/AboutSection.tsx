"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import LogoLoop from "@/components/ui/LogoLoop";

import {
  SiPython,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiR,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiPytorch,
  SiVscodium,
  SiGit,
  SiFigma,
  SiUnity,
  SiNetlify,
  SiGooglecolab,
} from "react-icons/si";
import TiltedCard from "@/components/ui/TiltedCard";
import GlareHover from "@/components/ui/GlareHover";

const techLogos = [
  // Programming
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiOpenjdk />, title: "Java", href: "https://www.java.com" },
  {
    node: <SiC />,
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  { node: <SiR />, title: "R", href: "https://www.r-project.org" },
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiPostgresql />,
    title: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
  },

  // Frameworks & Libraries
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },

  // Tools
  {
    node: <SiVscodium />,
    title: "VS Code",
    href: "https://code.visualstudio.com",
  },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiUnity />, title: "Unity", href: "https://unity.com" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com" },
  {
    node: <SiGooglecolab />,
    title: "Google Colab",
    href: "https://colab.research.google.com",
  },
];

const experiences = [
  {
    title: "KKU Deanship of Electronic Services",
    logoSrc: "/img/logos/E-kku.png",
    subtitle: "2025 • Library Services Dept",
    bullets: [
      <>
        Supported and configured the university’s{" "}
        <span className="font-semibold">
          digital library / e-resources systems
        </span>
        .
      </>,
      <>
        Resolved <span className="font-semibold">user access issues</span> and
        improved the overall <span className="font-semibold">support flow</span>
        .
      </>,
      <>
        Enhanced{" "}
        <span className="font-semibold">documentation + troubleshooting</span>{" "}
        steps to reduce <span className="font-semibold">response time</span> for
        e-resource requests.
      </>,
    ],
  },
  {
    title: "FlxCode Company",
    logoSrc: "/img/logos/flxCode.jpg",
    subtitle: "2025",
    bullets: [
      <>
        Collaborated on a{" "}
        <span className="font-semibold">Next.js web application</span> and
        turned <span className="font-semibold">Figma prototypes</span> into
        responsive UI.
      </>,
      <>
        Implemented features using{" "}
        <span className="font-semibold">React + TypeScript</span>, styling with{" "}
        <span className="font-semibold">Tailwind CSS</span>.
      </>,
      <>
        Focused on <span className="font-semibold">clean UX</span> execution:{" "}
        <span className="font-semibold">consistent components</span>, clear
        layout, and <span className="font-semibold">smooth interaction</span>.
      </>,
    ],
  },
];

export default function AboutSection() {
  return (
    <>
      <style jsx global>{`
        @media (max-width: 639px) {
          #about {
            overflow-y: auto !important;
            height: auto !important;
            min-height: auto !important;
          }
        }
      `}</style>
      <section
        id="about"
        className="section home-scroll-section relative w-full bg-colorDark py-16 text-colorLight sm:py-20 md:py-24"
      >
        <div className="mx-auto w-[92vw] max-w-[560px] px-3 sm:w-full sm:max-w-maxWidth sm:px-6 md:px-paddingX">
          {/* Block 1: Skills & Framework */}
          <SectionTitle title="SKILLS & FRAMEWORK" />
          <div className="mt-8 flex justify-center sm:mt-10">
            <LogoLoop
              logos={techLogos}
              direction="left"
              speed={120}
              logoHeight={56}
              gap={44}
              hoverSpeed={0}
              scaleOnHover={false}
              fadeOut={false}
              fadeOutColor="#ffffff"
              ariaLabel="Skills & Framework"
              className="mx-auto w-full max-w-[1200px]"
            />
          </div>
          {/* spacing */}
          <div className="my-10 sm:my-14 md:my-20" />
          {/* Block 2: About Me */}
          <SectionTitle title="EXPERIENCE" />
          <div className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:gap-6 md:gap-8">
            {experiences.map((experience) => (
              <GlareHover
                key={experience.title}
                glareColor="#ffffff"
                glareOpacity={0.18}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{ borderRadius: "32px" }}
                className="w-full"
              >
                <div className="w-full rounded-[32px] border border-white/15 bg-white/[0.06] p-3 sm:p-4 md:p-[17px]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:gap-8">
                    <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
                      <div className="space-y-1">
                        <h3 className="break-words text-base font-semibold text-white sm:text-xl md:text-2xl">
                          {experience.title}
                        </h3>
                        {experience.subtitle && (
                          <p className="text-xs font-medium text-white/70 sm:text-sm">
                            {experience.subtitle}
                          </p>
                        )}
                      </div>
                      <ul className="max-w-2xl list-disc space-y-1 pl-4 text-xs leading-relaxed text-white/80 sm:space-y-2 sm:text-sm md:text-base">
                        {experience.bullets?.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mx-auto mt-3 h-20 w-20 self-start sm:mx-0 sm:mt-0 sm:h-24 sm:w-24 md:h-[120px] md:w-[120px] md:self-auto">
                      <TiltedCard
                        imageSrc={experience.logoSrc}
                        altText={`${experience.title} logo`}
                        captionText={experience.title}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={39}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        imageClassName="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
