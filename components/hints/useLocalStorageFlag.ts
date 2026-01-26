"use client";

/**
 * Small helpers to safely read/write a string flag in localStorage.
 * They guard against SSR and storage access errors.
 */
export const readLocalStorageFlag = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeLocalStorageFlag = (key: string, value: string) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Silently ignore storage failures (e.g., private mode)
  }
};
