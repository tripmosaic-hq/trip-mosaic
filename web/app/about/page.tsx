import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          About Trip Mosaic
        </p>

        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
          We don’t just plan trips.
          <span className="block text-amber-300">
            We craft journeys people remember.
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-300">
          Trip Mosaic was created from real Himalayan experience, a love for
          meaningful travel and a simple belief: every traveller deserves
          honest guidance, thoughtful planning and personal support.
        </p>        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-800 p-6">
            <h3 className="text-xl font-semibold text-amber-300">Our Mission</h3>
            <p className="mt-3 text-stone-300">
              To create safe, authentic and memorable Himalayan journeys built
              on trust rather than sales.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-800 p-6">
            <h3 className="text-xl font-semibold text-amber-300">Our Vision</h3>
            <p className="mt-3 text-stone-300">
              To become India's most trusted Himalayan hospitality brand.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-800 p-6">
            <h3 className="text-xl font-semibold text-amber-300">Our Promise</h3>
            <p className="mt-3 text-stone-300">
              We don't chase bookings. We earn trust through honest guidance
              and carefully crafted journeys.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-2xl text-amber-300">
            Trip Mosaic
          </p>

          <p className="mt-2 text-stone-400">
            Mountains. Memories. Crafted by Trip Mosaic.
          </p>
        </div>
      </section>

      <Footer />
      <StickyContact />
    </main>
  );
}
