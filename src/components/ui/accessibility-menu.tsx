"use client";

import { useEffect, useRef, useState } from "react";
import { useAccessibility } from "./accessibility-provider";
import { cn } from "@/lib/cn";

export function AccessibilityMenu({ className }: { className?: string }) {
  const { textScale, setTextScale, highContrast, toggleHighContrast } =
    useAccessibility();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Accessibility settings"
        className="glass flex h-10 w-10 items-center justify-center rounded-full
                   text-content-primary hover:bg-white/10 light:hover:bg-black/5
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
      >
        <AccessibilityIcon />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          className="glass-strong absolute right-0 mt-3 w-72 rounded-lg p-4 text-sm"
        >
          <p className="mb-3 font-heading text-base font-semibold">Accessibility</p>

          <div className="mb-4">
            <p className="mb-2 text-content-secondary">Text size</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTextScale(textScale - 0.125)}
                className="glass h-8 w-8 rounded-full text-base"
                aria-label="Decrease text size"
              >
                A−
              </button>
              <div className="flex-1 text-center tabular-nums">
                {Math.round(textScale * 100)}%
              </div>
              <button
                onClick={() => setTextScale(textScale + 0.125)}
                className="glass h-8 w-8 rounded-full text-base"
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>
          </div>

          <label className="flex cursor-pointer items-center justify-between">
            <span>High contrast</span>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={toggleHighContrast}
              className="h-4 w-4 accent-(--accent-blue)"
            />
          </label>
        </div>
      )}
    </div>
  );
}

function AccessibilityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M19 13v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2M12 7v14M8 21l4-7 4 7" />
    </svg>
  );
}