import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          Privacy Policy
        </p>

        <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-6xl">
          Your privacy matters to us.
        </h1>

        <p className="mt-6 leading-8 text-stone-300">
          Trip Mosaic collects only the information reasonably required to
          respond to enquiries, plan journeys, process bookings and provide
          customer support.
        </p>

        <div className="mt-10 space-y-8 text-stone-300">
          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Information We Collect
            </h2>
            <p className="mt-3 leading-7">
              We may collect your name, phone number, email address, travel
              dates, traveller details, destination preferences and information
              voluntarily shared during trip planning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              How We Use Information
            </h2>
            <p className="mt-3 leading-7">
              Information is used to answer enquiries, prepare itineraries and
              quotations, coordinate bookings, communicate travel updates and
              improve our services.
            </p>
          </section>          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Data Protection
            </h2>
            <p className="mt-3 leading-7">
              We take reasonable measures to protect your personal information.
              We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-300">
              Contact
            </h2>
            <p className="mt-3 leading-7">
              If you have any privacy-related questions, please contact Trip
              Mosaic through our official phone number or WhatsApp.
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
