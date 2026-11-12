export default function Home() {
  return (
    <main id="main">
      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="eyebrow mb-4">Beyond Words. Beyond Barriers.</p>
          <h1 className="editorial-heading max-w-3xl">
            Everyone deserves to be understood.
          </h1>
        </div>
      </section>

      <section className="min-h-[60vh] px-6 py-24">
        <p className="mx-auto max-w-2xl text-content-secondary">
          Scroll to verify the progress bar and navigation glass effect.
          This content will be replaced by real sections in later steps.
        </p>
      </section>

      <section className="min-h-[60vh] px-6 py-24">
        <p className="mx-auto max-w-2xl text-content-secondary">
          More placeholder content to make the page scrollable.
        </p>
      </section>
    </main>
  );
}