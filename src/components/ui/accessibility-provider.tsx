"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type AccessibilityContextValue = {
  textScale: number;
  setTextScale: (v: number) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const TEXT_KEY = "kslingo-text-scale";
const HC_KEY = "kslingo-high-contrast";

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [textScale, setTextScaleState] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  // Hydrate from storage
  useEffect(() => {
    const storedScale = Number(localStorage.getItem(TEXT_KEY));
    if (storedScale >= 0.875 && storedScale <= 1.25) setTextScaleState(storedScale);
    setHighContrast(localStorage.getItem(HC_KEY) === "true");
  }, []);

  // Apply to <html>
  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", String(textScale));
    localStorage.setItem(TEXT_KEY, String(textScale));
  }, [textScale]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    localStorage.setItem(HC_KEY, String(highContrast));
  }, [highContrast]);

  const setTextScale = (v: number) =>
    setTextScaleState(Math.min(1.25, Math.max(0.875, v)));

  const toggleHighContrast = () => setHighContrast((p) => !p);

  return (
    <AccessibilityContext.Provider
      value={{ textScale, setTextScale, highContrast, toggleHighContrast }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx)
    throw new Error("useAccessibility must be used inside AccessibilityProvider");
  return ctx;
}