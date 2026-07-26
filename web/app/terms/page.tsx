import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          Terms & Conditions
        </p>

        <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-6xl">
          Terms of Service
        </h1>

        <p className="mt-6 leading-8 text-stone-300">
          By booking or travelling with Trip Mosaic, you agree to the following
          terms and conditions.
        </p>

        <div className="mt-10 space-y-8 text-stone-300">
          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Booking
            </h2>

            <p className="mt-3 leading-7">
              Bookings are confirmed only after the required advance payment
              and confirmation from Trip Mosaic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Traveller Responsibility
            </h2>

            <p className="mt-3 leading-7">
              Travellers must provide accurate information and follow safety
              instructions throughout the journey.
            </p>
          </section>          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Changes & Cancellations
            </h2>

            <p className="mt-3 leading-7">
              Itineraries may change due to weather, road conditions, government
              regulations or safety requirements. Trip Mosaic will always try to
              provide the best possible alternative.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Liability
            </h2>

            <p className="mt-3 leading-7">
              Adventure travel involves inherent risks. Trip Mosaic is committed
              to responsible planning but cannot be held liable for events beyond
              reasonable operational control.
            </p>
          </section>
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
