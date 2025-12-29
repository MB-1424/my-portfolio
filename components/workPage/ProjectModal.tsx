"use client";

import React, { useEffect, useState } from "react";
import type { WorkProject } from "@/components/workPage/workSection";

type ProjectModalProps = {
  project: WorkProject | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!project) return;
    setHasScrolled(false);

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const stopPropagation = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  const handleBodyScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    setHasScrolled(target.scrollTop > 8);
  };

  const gallery = project?.gallery?.length ? project.gallery : [null, null, null, null];

  const detailSections = [
    {
      heading: "THE PROBLEM",
      body:
        project.problem ??
        `Placeholder problem statement for ${project.modalTitle}.`,
    },
    {
      heading: "THE SOLUTION",
      body:
        project.solution ??
        `Placeholder solution outline showcasing how ${project.modalTitle} addressed the brief.`,
    },
    {
      heading: "KEY HIGHLIGHTS",
      items:
        project.highlights && project.highlights.length > 0
          ? project.highlights
          : ["Bulleted or short highlights will live here. Swap in real outcomes later."],
    },
    {
      heading: "TECH STACK",
      items:
        project.techStack && project.techStack.length > 0
          ? project.techStack
          : ["List the core tools, frameworks, and integrations used on this project."],
    },
    {
      heading: "MY ROLE",
      body:
        project.role ??
        "Describe responsibilities, ownership, and collaboration notes here.",
    },
    {
      heading: "OUTCOMES & IMPACT",
      items:
        project.outcomes && project.outcomes.length > 0
          ? project.outcomes
          : ["Summarize metrics, learnings, and impact once they are ready."],
    },
  ];

  return (
    <div
      className="project-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.modalTitle} details`}
      onClick={onClose}
      onWheel={stopPropagation}
      onTouchMove={stopPropagation}
      onScroll={stopPropagation}
    >
      <div className="requestCard modalCard" onClick={stopPropagation}>
        <button
          className="modalClose"
          aria-label="Close project details"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          X
        </button>

        <div className={`modalImageContainer ${hasScrolled ? "isScrolled" : ""}`}>
          <div className="modalImageGrid">
            {gallery.map((src, index) => (
              <div
                key={`${project.id}-image-${index}`}
                className={`modalImagePlaceholder ${src ? "hasImage" : ""}`}
                style={src ? { backgroundImage: `url(${src})` } : undefined}
              >
                {!src ? "Project image coming soon" : null}
              </div>
            ))}
          </div>
        </div>

        <div className="modalHeader">
          <h3 className="modalTitle">{project.modalTitle}</h3>
          {project.subtitle ? <p className="modalSubtitle">{project.subtitle}</p> : null}
          {project.tags?.length ? (
            <div className="modalTags">
              {project.tags.map((tag) => (
                <span key={tag} className="modalTag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="modalBody" onScroll={handleBodyScroll}>
          {detailSections.map((section) => (
            <div key={section.heading} className="modalSection">
              <p className="modalSectionLabel">{section.heading}</p>
              {section.items?.length ? (
                <div className="modalSectionList">
                  {section.items.map((item) => (
                    <p key={item} className="modalSectionText">
                      {item}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="modalSectionText">{section.body}</p>
              )}
            </div>
          ))}
          <div className="modalScrollFade" aria-hidden="true">
            <span className={`modalScrollArrow ${hasScrolled ? "is-hidden" : ""}`}>↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
