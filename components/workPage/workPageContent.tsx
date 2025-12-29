"use client";

import React from "react";
import { ProjectModal } from "@/components/workPage/ProjectModal";
import {
  WorkSection,
  type WorkProject,
} from "@/components/workPage/workSection";

export const workProjectsData: WorkProject[] = [
  {
    id: "huna-aseer",
    title: <>Huna Aseer</>,
    description: "WebPage",
    link: "https://www.yieldstone.ai/",
    imageLink: "/img/projects/HonaAsser1.png",
    modalTitle: "Huna Aseer WebPage",
    subtitle:
      "A digital platform connecting tourists with certified local tour guides in the Aseer region, offering curated destinations, tourism services, and guided booking experiences.",
    tags: ["Tourism", "Web Experience", "Travel"],
    problem:
      "Tourists visiting Aseer lack a single, trusted platform to discover attractions, explore local services, and book tours with verified local guides in a simple and organized way.",
    solution:
      "Huna Aseer provides a centralized web experience where visitors can explore destinations, view tourism services, and book guided experiences directly with local tour guides through a modern, user-friendly interface.",
    highlights: [
      "Discover Aseer attractions and tourism services",
      "Connect tourists with local tour guides",
      "Simple guide browsing and booking flow",
      "Clean, modern, and responsive UI",
    ],
    techStack: [
      "Frontend web technologies",
      "Modern UI framework",
      "Responsive design system",
      "Cloud-based deployment",
    ],
    role: "Designed and developed the platform experience, including UI/UX design, frontend implementation, and content structure.",
    outcomes: [
      "Created a scalable tourism platform concept for Aseer",
      "Enhanced user experience for guide discovery and booking",
      "Strengthened skills in tourism-focused platform design",
    ],
    gallery: [
      "/img/projects/HonaAsser1.png",
      "/img/projects/HonaAsser2.png",
      "/img/projects/HonaAsser3.png",
      "/img/projects/HonaAsser4.png",
    ],
  },
  {
    id: "cura-lm",
    title: (
      <>
        CuraLM
        <br /> Assistant
      </>
    ),
    description: "AI medical assistant ",
    link: "https://www.figma.com/community/plugin/1380643582596908985/simple-font-replacer",
    imageLink: "/img/projects/curaLM1.png",
    modalTitle: "CuraLM Assistant",
    subtitle:
      "An intelligent AI-powered medical assistant that supports preliminary diagnosis and personalized treatment planning using explainable deep learning models.",
    tags: ["AI", "Healthcare", "Explainability"],
    problem:
      "Doctors face challenges in analyzing complex and diverse medical data quickly and accurately. Existing general AI models are not medically validated and lack explainability, making them unsuitable for clinical environments.",
    solution:
      "CuraLm is a specialized medical AI system that analyzes patient symptoms, generates differential diagnoses, and suggests personalized treatment plans using biomedical language models integrated with a medical knowledge graph and explainable AI.",
    highlights: [
      "AI-assisted preliminary diagnosis",
      "Personalized treatment recommendations",
      "Explainable medical reasoning (XAI)",
      "Knowledge-graph–validated outputs",
      "Clean and intuitive clinical UI",
    ],
    techStack: [
      "Deep Learning & NLP (BioMistral / BioBERT / ClinicalBERT)",
      "Knowledge Graphs for medical validation",
      "Explainable AI (SHAP, LIME)",
      "Python, PyTorch, TensorFlow",
      "Medical datasets (MIMIC-III, PubMed, UMLS)",
    ],
    role: "Contributed to system design, AI model integration, explainability module implementation, and front-end user experience for clinical decision support.",
    outcomes: [
      "Delivered a reliable and explainable AI medical system",
      "Improved trust and transparency in AI-driven diagnosis",
      "Demonstrated practical use of generative AI in healthcare",
      "Strengthened skills in medical AI and explainable systems",
    ],
    gallery: [
      "/img/projects/curaLM1.png",
      "/img/projects/curaLM2.png",
      "/img/projects/curaLM3.png",
      "/img/projects/curaLM4.png",
    ],
  },
  {
    id: "optiurban",
    title: (
      <>
        OPTIURBAN <br /> Graduation <br /> Project
      </>
    ),
    description: "Urban Planning Tool",
    link: "https://generator.andytoken.com/",
    imageLink: "/img/projects/optiurban.png",
    modalTitle: "OPTIURBAN",
    subtitle:
      "An intelligent urban planning platform that predicts neighborhood service demand and identifies optimal locations to improve coverage, equity, and cost efficiency.",
    tags: ["Urban Planning", "Data", "Optimization"],
    problem:
      "Urban planners often rely on static planning methods that lead to poor service placement, budget waste, and unequal access to essential services across neighborhoods.",
    solution:
      "OptiUrban uses data-driven forecasting and spatial analysis to estimate future service demand and recommend optimal service locations through an interactive, explainable web platform.",
    highlights: [
      "Demand estimation across multiple time horizons",
      "Intelligent service allocation and site ranking",
      "Interactive map-based visualization",
      "Scenario comparison (what-if analysis)",
      "Clear, explainable planning insights",
    ],
    techStack: [
      "Data-driven models for demand forecasting",
      "Spatial analysis & GIS-based visualization",
      "Web-based interactive UI",
      "Cloud-ready architecture",
    ],
    role: "Contributed to system design, estimation logic, service allocation workflow, and user interface development for the planning platform.",
    outcomes: [
      "Reduced planning inefficiencies and service gaps",
      "Improved service accessibility and equity",
      "Delivered a scalable smart-city planning solution",
      "Strengthened skills in AI-driven urban optimization",
    ],
    gallery: [
      "/img/projects/optiurban0.png",
      "/img/projects/optiurban1.png",
      "/img/projects/optiurban2.png",
      "/img/projects/optiurban3.jpeg",
    ],
  },
  {
    id: "iot-monitoring",
    title: (
      <>
        IoT Monitoring <br /> System
      </>
    ),
    description: "AI/IoT Monitoring Project",
    link: "https://ponkecoin-ninetyeight.webflow.io/",
    imageLink: "/img/projects/IOT.png",
    modalTitle: "IoT Monitoring System",
    subtitle:
      "AI-enabled IoT system for real-time environmental monitoring, intelligent analytics, and gesture-based interaction.",
    tags: ["IoT", "AI", "Dashboard"],
    problem:
      "Traditional monitoring systems rely on static controls and lack intelligent analysis, real-time alerts, and natural human interaction methods.",
    solution:
      "Designed an IoT system that collects real-time sensor data (temperature, humidity, motion), analyzes it using AI logic, and visualizes insights through a live dashboard with alerting and gesture-based control.",
    highlights: [
      "Real-time sensor data capture",
      "Interactive monitoring dashboard",
      "AI-based inference and analytics",
      "Hand gesture recognition for control",
      "Automated alerts and system feedback",
    ],
    techStack: [
      "Arduino / Raspberry Pi",
      "Sensors (Temperature, Motion, Humidity)",
      "Python for data processing & AI logic",
      "Computer Vision for gesture recognition",
      "Web dashboard for visualization",
    ],
    role: "Built and integrated the IoT hardware setup, implemented sensor data processing and AI logic in Python, and developed the real-time monitoring dashboard and alert system.",
    outcomes: [
      "Demonstrated practical integration of IoT and AI",
      "Improved real-time monitoring and control efficiency",
      "Strengthened skills in embedded systems, AI, and dashboards",
    ],
    gallery: [
      "/img/projects/IOT.png",
      "/img/projects/IOT1.JPG",
      "/img/projects/IOT2.JPG",
      "/img/projects/IOT3.jpg",
    ],
  },

  {
    id: "business-services",
    title: (
      <>
        Business <br />
        Services
        <br />
        Website
      </>
    ),
    description: "Company Services Website",
    link: "https://amanfx.webflow.io/",
    imageLink: "/img/projects/CompanyServices.png",
    modalTitle: "FlxCode – Startup Services Platform",
    subtitle:
      "A modern Next.js web platform designed to showcase startup services and streamline service requests through a premium liquid-glass user experience.",
    tags: ["Next.js", "Web", "Liquid Glass"],
    problem:
      "The startup relied on an outdated website that failed to reflect its technical capabilities, lacked visual identity, and did not provide a clear or efficient way for clients to request services.",
    solution:
      "Redesigned and rebuilt the company website using Next.js with a modern liquid-glass UI, presenting services clearly and enabling users to submit structured service requests through interactive modals and forms.",
    highlights: [
      "Modern liquid-glass (glassmorphism) design",
      "Clear service presentation and categorization",
      "Interactive service request flow",
      "Responsive layout for all devices",
      "Smooth UI transitions and overlays",
    ],
    techStack: [
      "Next.js",
      "React + TypeScript",
      "Modern CSS (Glassmorphism / Blur effects)",
      "Form validation & UI state handling",
      "Deployed on modern hosting platform",
    ],
    role: "Identified UX and visual gaps in the existing website, designed the new interface, and developed the full frontend experience using Next.js, focusing on usability, aesthetics, and client conversion.",
    outcomes: [
      "Transformed the startup’s digital presence",
      "Improved clarity of services and user trust",
      "Enabled faster and more organized client requests",
      "Delivered a scalable, modern frontend foundation",
    ],
    gallery: [
      "/img/projects/CompanyServices.png",
      "/img/projects/CompanyServices1.png",
      "/img/projects/CompanyServices2.png",
      "/img/projects/CompanyServices3.png",
    ],
  },
  {
    id: "flxcode",
    title: (
      <>
        FlxCode – <br /> UI/UX Design
      </>
    ),
    description: "Figma Design",
    link: "https://www.figma.com/proto/Tzz9bwrjHtSza87b1l3D0i/Inner-Strength-UI-Design?type=design&node-id=37-10&t=pq2KDLjYbMU4LFgA-1&scaling=min-zoom&page-id=0%3A1&mode=design",
    imageLink: "/img/projects/flxcode.png",
    modalTitle: "FlxCode – UI/UX Design (Figma)",
    subtitle:
      "Modern service-based website design created in Figma using a liquid-glass visual style.",
    tags: ["Figma", "UI/UX", "Liquid Glass"],
    problem:
      "The existing visual identity lacked a modern look and did not clearly present the company’s services or value.",
    solution:
      "Designed a clean, dark UI with glassmorphism elements to clearly showcase services and guide users toward action.",
    highlights: [
      "Liquid glass (glassmorphism) UI",
      "Clear service cards layout",
      "Strong call-to-action sections",
      "Modern dark color palette",
    ],
    techStack: ["Figma", "Component-based design", "Auto Layout"],
    role: "Designed the full UI concept, layout structure, and visual style in Figma.",
    outcomes: [
      "Clear and modern service presentation",
      "Ready-to-develop UI for frontend implementation",
    ],
    gallery: [
      "/img/projects/flxcode.png",
      "/img/projects/flxcode1.jpeg",
      "/img/projects/flxcode2.jpeg",
      "/img/projects/flxcode.png",
    ],
  },
];

export function WorkPageContent({
  startIndex = 0,
  containerRef,
}: {
  startIndex?: number;
  containerRef?: React.RefObject<HTMLDivElement>;
}) {
  const [activeProject, setActiveProject] = React.useState<WorkProject | null>(
    null,
  );

  return (
    <div id="fullpage" ref={containerRef}>
      <div className="background">
        MAHYOUB
        <br />
        MAHYOUB
      </div>

      {workProjectsData.map((item, index) => (
        <WorkSection
          key={item.id}
          item={item}
          index={index}
          sectionIndex={startIndex + index}
          length={workProjectsData.length}
          color={index % 2 !== 0 ? "Light" : "Dark"}
          onShowMore={setActiveProject}
        />
      ))}

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
