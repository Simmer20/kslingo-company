"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AccessibilityMenu } from "@/components/ui/accessibility-menu";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Our Story", href: "#story" },
  { label: "The Platform", href: "#platform" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "glass-strong py-2" : "bg-transparent py-4"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10"
        >
          <Link
            href="#top"
            className="font-heading text-lg font-semibold tracking-tight text-content-primary"
            aria-label="KSLingo home"
          >
            KSLingo
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-content-secondary transition-colors
                             hover:text-content-primary focus-visible:text-content-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <AccessibilityMenu className="hidden sm:block" />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 glass-strong pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-3 text-xl font-heading
                             text-content-primary hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <AccessibilityMenu />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}