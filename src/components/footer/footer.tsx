import Link from "next/link";
import type { NavLink, SocialLink } from "@/types";
import { ClientYear } from "./client-year";

const FOOTER_LINKS: NavLink[] = [
  { label: "Our Story", href: "#story" },
  { label: "The Platform", href: "#platform" },
  { label: "Our Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
  { label: "Join the Waitlist", href: "#waitlist" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tight">
              KSLingo
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-content-secondary">
              An AI-powered Kenya Sign Language learning and accessibility
              platform. Beyond Words. Beyond Barriers.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-content-secondary">
              Explore
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-content-secondary">
              Connect
            </p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@kslingo.app"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  hello@kslingo.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-content-secondary md:flex-row md:items-center md:justify-between">
          <CopyrightYear />
          <Link href="/privacy" className="hover:text-content-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Isolated so the rest of the footer stays a Server Component.
// The year renders as a static fallback during prerender,
// then updates to the real value once mounted in the browser.
function CopyrightYear() {
  return (
    <p>
      © <ClientYear /> KSLingo. All rights reserved.
    </p>
  );
}

// "use client" can only be at the top of a file,
// so extract the client bit into its own tiny component.