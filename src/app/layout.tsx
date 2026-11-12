import type { Metadata, Viewport } from "next";
import { sora, inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AccessibilityProvider } from "@/components/ui/accessibility-provider";
import { Nav } from "@/components/navigation/nav";
import { Footer } from "@/components/footer/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KSLingo — Beyond Words. Beyond Barriers.",
    template: "%s | KSLingo",
  },
  description:
    "KSLingo is an AI-powered Kenya Sign Language learning and accessibility platform making KSL learning more accessible, engaging and inclusive.",
  metadataBase: new URL("https://kslingo.app"), // placeholder, replace with real domain
  openGraph: {
    title: "KSLingo — Beyond Words. Beyond Barriers.",
    description:
      "An AI-powered Kenya Sign Language learning and accessibility platform.",
    url: "https://kslingo.app",
    siteName: "KSLingo",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSLingo — Beyond Words. Beyond Barriers.",
    description:
      "An AI-powered Kenya Sign Language learning and accessibility platform.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#101329" },
    { media: "(prefers-color-scheme: light)", color: "#F7F7FC" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Inline script to prevent theme flash before hydration
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('kslingo-theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    var root = document.documentElement;
    root.classList.remove('light','dark');
    root.classList.add(theme);
    var hc = localStorage.getItem('kslingo-high-contrast') === 'true';
    if (hc) root.classList.add('high-contrast');
    var scale = localStorage.getItem('kslingo-text-scale');
    if (scale) root.style.setProperty('--text-scale', scale);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-bg-primary text-content-primary font-body antialiased">
        <ThemeProvider>
          <AccessibilityProvider>
            <ScrollProgress />
            <Nav />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2"
            >
            Skip to content
            </a>
            <div className="min-h-screen pt-0">{children}</div>
            <Footer />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}