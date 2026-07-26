export default function CTA() {
  return (
    <section id="get-started" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-16 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get Started
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Ready to run your travel business smarter?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Bring planning, travellers, bookings and insights together in one
            powerful platform.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              Start Free
            </a>

            <a
              href="#features"
              className="w-full rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}