"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";

const defaultAnchors = ["first", "second", "third", "fourth", "fifth", "sixth"];

const FullpageProviderWork = ({
  children,
  anchors = defaultAnchors,
  embedded = false,
  rootRef,
  wrapperRef,
  isActive,
}: {
  children: React.ReactNode;
  anchors?: string[];
  embedded?: boolean;
  rootRef?: React.RefObject<HTMLElement>;
  wrapperRef?: React.RefObject<HTMLElement>;
  isActive?: boolean;
}) => {
  const opts = {
    // In embedded mode we start with native scroll, and re-enable fullpage only while the work block is in view.
    autoScrolling: embedded ? false : true,
    scrollOverflow: false,
    scrollHorizontally: false,
    fixedElements: ".background",
    navigation: false,
    navigationPosition: "left",
    scrollingSpeed: 1300,
    easingcss3: "cubic-bezier(.70,0,.30,1)",
    anchors,
    licenseKey: "gplv3-license",
    credits: {
      enabled: false,
    },
  };
  const fullpageApiRef = useRef<any>(null);
  const activeIndexRef = useRef(0);
  const autoScrollingRef = useRef(!embedded);
  const lastExitDirectionRef = useRef<"up" | "down" | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const [apiReady, setApiReady] = useState(false);
  const boundaryRef = wrapperRef ?? rootRef;

  const enableAutoScrollIfPossible = () => {
    if (!fullpageApiRef.current) return;
    fullpageApiRef.current.setAutoScrolling(true);
    fullpageApiRef.current.setKeyboardScrolling(true);
    fullpageApiRef.current.setAllowScrolling(true);
    fullpageApiRef.current.setFitToSection?.(true);
    fullpageApiRef.current.setMouseWheelScrolling?.(true);
    autoScrollingRef.current = true;
  };

  const disableAutoScroll = (direction: "up" | "down") => {
    if (!fullpageApiRef.current) return;
    fullpageApiRef.current?.setAutoScrolling(false);
    fullpageApiRef.current?.setKeyboardScrolling(false);
    fullpageApiRef.current?.setAllowScrolling(true);
    fullpageApiRef.current?.setFitToSection?.(false);
    fullpageApiRef.current?.setMouseWheelScrolling?.(false);
    autoScrollingRef.current = false;
    lastExitDirectionRef.current = direction;
    // Small nudge to hand control back to native scroll immediately.
    requestAnimationFrame(() => {
      window.scrollBy({ top: direction === "down" ? 160 : -160, behavior: "auto" });
    });
  };
  const onLeave = function (index: any, nextIndex: any, direction: any) {
    console.log(nextIndex.index);

    if (direction == "down") {
      gsap
        .timeline()
        .from(`.s${nextIndex.index} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.s${nextIndex.index} .anime`,
          {
            y: "30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: 0.03,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    } else {
      gsap
        .timeline()
        .from(`.s${nextIndex.index} .anime`, {
          duration: 0.3,
        })
        .fromTo(
          `.s${nextIndex.index} .anime`,
          {
            y: "-30vh",
          },
          {
            y: "0vh",
            duration: 1.1,
            stagger: -0.03,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    }

    var flex = typeof window !== "undefined" && screen.width > 540 ? 17 : 5;
    if (direction == "down") {
      console.log();

      gsap
        .timeline()
        .from(`.s${nextIndex.index} .rounded__div__down`, {
          duration: 0.1,
        })
        .fromTo(
          `.s${nextIndex.index} .rounded__div__down`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    } else {
      gsap
        .timeline()
        .from(`.s${nextIndex.index} .rounded__div__up`, {
          duration: 0.1,
        })
        .fromTo(
          `.s${nextIndex.index} .rounded__div__up`,
          {
            height: `${flex}vh`,
          },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    }
  };

  useEffect(() => {
    if (!embedded || !rootRef?.current) return;

    const handleWheel = (event: WheelEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) return;
      if (!fullpageApiRef.current) return;
      if (embedded && isActive === false) return;

      // If user is inside work after native scroll, grab control immediately so animations fire without delay.
      if (!autoScrollingRef.current) {
        enableAutoScrollIfPossible();
      }

      const lastIndex = anchors.length - 1;
      const currentIndex = activeIndexRef.current;

      // At top or bottom of work stack: release control so page can scroll normally to hero/contact.
      if ((currentIndex === 0 && event.deltaY < 0) || (currentIndex === lastIndex && event.deltaY > 0)) {
        disableAutoScroll(event.deltaY > 0 ? "down" : "up");
      }
    };

    const node = rootRef.current;
    node.addEventListener("wheel", handleWheel, { passive: true });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [embedded, anchors.length, rootRef]);

  useEffect(() => {
    if (!embedded || !rootRef?.current) return;

    const handleTouchStart = (event: TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) return;
      if (embedded && isActive === false) return;
      touchStartYRef.current = event.touches?.[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) return;
      if (embedded && isActive === false) return;
      if (touchStartYRef.current === null) return;
      if (!fullpageApiRef.current) return;

      if (!autoScrollingRef.current) {
        enableAutoScrollIfPossible();
      }

      const deltaY = touchStartYRef.current - (event.touches?.[0]?.clientY ?? touchStartYRef.current);
      const lastIndex = anchors.length - 1;
      const currentIndex = activeIndexRef.current;

      if ((currentIndex === 0 && deltaY < 0) || (currentIndex === lastIndex && deltaY > 0)) {
        disableAutoScroll(deltaY > 0 ? "down" : "up");
      }
    };

    const node = rootRef.current;
    node.addEventListener("touchstart", handleTouchStart, { passive: true });
    node.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchmove", handleTouchMove);
    };
  }, [embedded, anchors.length, rootRef, isActive]);

  useEffect(() => {
    if (!embedded || !boundaryRef?.current || isActive !== undefined) return;
    const boundaryNode = boundaryRef.current;
    if (!boundaryNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!autoScrollingRef.current && fullpageApiRef.current) {
              enableAutoScrollIfPossible();
              // Snap to the correct edge slide when re-entering from top/bottom so animations keep the same feel.
              if (lastExitDirectionRef.current === "down") {
                fullpageApiRef.current?.moveTo(anchors.length);
              } else if (lastExitDirectionRef.current === "up") {
                fullpageApiRef.current?.moveTo(1);
              }
              lastExitDirectionRef.current = null;
            }
          } else {
            if (autoScrollingRef.current && fullpageApiRef.current) {
              disableAutoScroll(entry.boundingClientRect.top < 0 ? "down" : "up");
            }
          }
        });
      },
      // Small threshold so we re-enable fullpage as soon as the work block is visible.
      { threshold: 0.05 },
    );

    observer.observe(boundaryNode);
    return () => observer.disconnect();
  }, [embedded, boundaryRef, isActive]);

  // In embedded mode, mirror page visibility so Work hijacks scroll only while it's onscreen.
  useEffect(() => {
    if (!embedded || isActive === undefined || !apiReady || !fullpageApiRef.current) return;

    if (isActive) {
      if (!autoScrollingRef.current) {
        enableAutoScrollIfPossible();
        if (lastExitDirectionRef.current === "down") {
          fullpageApiRef.current?.moveTo(anchors.length);
        } else if (lastExitDirectionRef.current === "up") {
          fullpageApiRef.current?.moveTo(1);
        }
        lastExitDirectionRef.current = null;
      }
    } else if (autoScrollingRef.current) {
      disableAutoScroll(lastExitDirectionRef.current ?? "down");
      fullpageApiRef.current?.setMouseWheelScrolling?.(false);
      fullpageApiRef.current?.setKeyboardScrolling(false);
      fullpageApiRef.current?.setAllowScrolling(true);
    }
  }, [embedded, isActive, anchors.length, apiReady]);

  return (
    <ReactFullpage
      {...opts}
      onLeave={(origin, destination, direction) => {
        if (destination?.index !== undefined) {
          activeIndexRef.current = destination.index;
        }
        onLeave(origin, destination, direction);
      }}
      afterLoad={(origin, destination) => {
        if (destination?.index !== undefined) {
          activeIndexRef.current = destination.index;
        }
      }}
      render={({ fullpageApi }) => {
        if (!fullpageApiRef.current && fullpageApi) {
          fullpageApiRef.current = fullpageApi;
          if (embedded) {
            fullpageApiRef.current?.setAutoScrolling(false);
            fullpageApiRef.current?.setKeyboardScrolling(false);
            fullpageApiRef.current?.setAllowScrolling(true);
            fullpageApiRef.current?.setMouseWheelScrolling?.(false);
            autoScrollingRef.current = false;
          }
          setApiReady(true);
        }
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

export default FullpageProviderWork;
