import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <main id="main">
      <Hero />

      {/* Placeholder sections — replaced in subsequent steps. */}
      <Section id="story" className="bg-bg-primary">
        <p className="text-content-secondary">Section 03 — The Personal Story</p>
      </Section>

      <Section id="platform" className="bg-bg-secondary">
        <p className="text-content-secondary">Section 05 — Product Experience</p>
      </Section>

      <Section id="vision" className="bg-bg-primary">
        <p className="text-content-secondary">Section 08 — Our Bigger Vision</p>
      </Section>

      <Section id="waitlist" className="bg-bg-secondary">
        <p className="text-content-secondary">Section 10 — Join the Movement</p>
      </Section>
    </main>
  );
}