"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SimpleHoverHintProps {
  storageKey?: string;
  lottiePath?: string;
  onDismiss?: () => void;
}

export default function SimpleHoverHint({
  storageKey = "hoverHintDismissed",
  lottiePath = "/hover/hoverAnime.json",
  onDismiss,
}: SimpleHoverHintProps) {
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Check if already dismissed
    const isDismissed = localStorage.getItem(storageKey);
    if (!isDismissed) {
      setVisible(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!visible) return;

    // Load Lottie animation
    fetch(lottiePath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie:", err));
  }, [visible, lottiePath]);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(storageKey, "1");
    onDismiss?.();
  };

  if (!visible || !animationData) return null;

  return (
    <button
      onClick={handleDismiss}
      className="cursor-pointer transition-transform hover:scale-105 focus:outline-none"
      aria-label="Click to dismiss hint"
      title="Click to dismiss"
    >
      <div className="h-24 w-24 md:h-32 md:w-32">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </button>
  );
}
