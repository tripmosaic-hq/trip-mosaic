import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          Cancellation Policy
        </p>

        <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-6xl">
          Cancellation & Refund Policy
        </h1>

        <p className="mt-6 leading-8 text-stone-300">
          We understand that travel plans may change. Our cancellation policy
          is designed to be fair while considering advance bookings made with
          hotels, transport providers and local partners.
        </p>

        <div className="mt-10 space-y-8 text-stone-300">
          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Cancellation Requests
            </h2>

            <p className="mt-3 leading-7">
              All cancellation requests must be submitted through the official
              Trip Mosaic contact number or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Refund Eligibility
            </h2>

            <p className="mt-3 leading-7">
              Refunds, where applicable, depend on booking stage, partner
              policies and non-refundable advance payments already made.
            </p>
          </section>          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Weather & Operational Changes
            </h2>

            <p className="mt-3 leading-7">
              If a trip is affected by weather, road conditions, government
              restrictions or safety concerns, Trip Mosaic may modify the
              itinerary or offer the best possible alternative.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Refund Processing
            </h2>

            <p className="mt-3 leading-7">
              Approved refunds will be processed after applicable deductions
              and after settlement with hotels, transport providers and other
              partners.
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
