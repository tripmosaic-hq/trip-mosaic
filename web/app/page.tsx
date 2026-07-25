import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Trip Mosaic
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">
          Travel planning, operations and intelligence in one place.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Build journeys, manage travellers, track bookings and power your
          travel business with a modern AI-first platform.
        </p>
      </section>

      <Features />
      <Pricing />
    </main>
  );
}