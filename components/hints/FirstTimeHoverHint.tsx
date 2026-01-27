"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import Lottie from "lottie-react";
import {
  readLocalStorageFlag,
  writeLocalStorageFlag,
} from "./useLocalStorageFlag";

type HintPosition = "top" | "bottom" | "left" | "right";

type Offset = {
  x?: number;
  y?: number;
};

export interface FirstTimeHoverHintProps {
  targetSelector: string;
  storageKey?: string;
  lottiePath?: string;
  position?: HintPosition;
  offset?: Offset;
  className?: string;
  onDismiss?: () => void;
}

/**
 * Reusable hint bubble that plays a Lottie animation and auto-dismisses
 * after the user clicks the specified target. Uses localStorage to show
 * only once per visitor.
 */
export default function FirstTimeHoverHint({
  targetSelector,
  storageKey = "hoverHintDismissed",
  lottiePath = "/hover/hoverAnime.json",
  position = "bottom",
  offset,
  className,
  onDismiss,
}: FirstTimeHoverHintProps) {
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

  const targetElRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const effectiveOffset = useMemo(
    () => ({
      x: offset?.x ?? 0,
      y: offset?.y ?? 0,
    }),
    [offset]
  );

  const dismiss = useCallback(() => {
    writeLocalStorageFlag(storageKey, "1");
    setVisible(false);
    onDismiss?.();
  }, [onDismiss, storageKey]);

  // Determine initial visibility on client.
  useEffect(() => {
    const alreadyDismissed = readLocalStorageFlag(storageKey) === "1";
    if (!alreadyDismissed) {
      setVisible(true);
    }
  }, [storageKey]);

  // Load Lottie JSON from the provided path when visible.
  useEffect(() => {
    if (!visible) return;

    const controller = new AbortController();
    let isMounted = true;

    (async () => {
      try {
        const res = await fetch(lottiePath, { signal: controller.signal });
        if (!res.ok) throw new Error(`Failed to load Lottie: ${res.status}`);
        const json = (await res.json()) as Record<string, unknown>;
        if (isMounted) setAnimationData(json);
      } catch (error) {
        // Non-fatal: hint still renders without animation.
        if (process.env.NODE_ENV !== "production") {
          console.error(error);
        }
      }
    })();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [lottiePath, visible]);

  useEffect(() => {
    if (!visible || !targetSelector) return;

    const handleTargetActivate = () => dismiss();

    const attachListener = (): boolean => {
      const el = document.querySelector(targetSelector);
      if (el && el instanceof HTMLElement) {
        // Detach from previous target if any.
        if (targetElRef.current && targetElRef.current !== el) {
          targetElRef.current.removeEventListener("click", handleTargetActivate);
          targetElRef.current.removeEventListener(
            "pointerdown",
            handleTargetActivate,
          );
        }
        targetElRef.current = el;
        const opts: AddEventListenerOptions = { once: true };
        el.addEventListener("pointerdown", handleTargetActivate, opts);
        el.addEventListener("click", handleTargetActivate, opts);
        return true;
      }
      return false;
    };

    const foundImmediately = attachListener();

    // Keep watching for the target to appear (e.g., lazy render).
    if (!foundImmediately) {
      const observer = new MutationObserver(() => {
        if (attachListener()) {
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      observerRef.current = observer;
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (targetElRef.current) {
        targetElRef.current.removeEventListener(
          "click",
          handleTargetActivate,
        );
        targetElRef.current.removeEventListener(
          "pointerdown",
          handleTargetActivate,
        );
        targetElRef.current = null;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [dismiss, targetSelector, visible]);

  const positionStyle = useMemo<CSSProperties>(() => {
    const style: CSSProperties = {};
    const x = effectiveOffset.x ?? 0;
    const y = effectiveOffset.y ?? 0;

    switch (position) {
      case "top":
        style.top = "1.5rem";
        style.left = "50%";
        style.transform = `translate(-50%, 0) translate(${x}px, ${y}px)`;
        break;
      case "left":
        style.left = "1.5rem";
        style.top = "50%";
        style.transform = `translate(0, -50%) translate(${x}px, ${y}px)`;
        break;
      case "right":
        style.right = "1.5rem";
        style.top = "50%";
        style.transform = `translate(0, -50%) translate(${x}px, ${y}px)`;
        break;
      case "bottom":
      default:
        style.bottom = "1.5rem";
        style.left = "50%";
        style.transform = `translate(-50%, 0) translate(${x}px, ${y}px)`;
        break;
    }

    return style;
  }, [effectiveOffset.x, effectiveOffset.y, position]);

  if (!visible) return null;

  return (
    <div
      className={clsx("fixed z-[60]", className)}
      style={positionStyle}
      aria-live="polite"
      role="status"
    >
      <button
        type="button"
        onClick={dismiss}
        className="relative inline-flex items-center pointer-events-auto select-none cursor-pointer transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full"
        aria-label="Click to dismiss hint"
        title="Click to dismiss"
      >
        <div className="h-36 w-36 shrink-0">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div className="h-full w-full animate-pulse rounded-full bg-white/20" />
          )}
        </div>
      </button>
    </div>
  );
}
