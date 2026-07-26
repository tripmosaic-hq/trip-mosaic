import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

const phoneNumber = "+919183269700";

const whatsappUrl =
  "https://wa.me/919183269700?text=Namaste%20Trip%20Mosaic%2C%20mujhe%20apni%20trip%20plan%20karni%20hai.";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          Contact Trip Mosaic
        </p>

        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
          Your next memorable journey
          <span className="block text-amber-300">
            begins with a conversation.
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-300">
          Tell us where you would like to go, who is travelling with you and
          what kind of memories you would love to create.
        </p>        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-stone-800 p-6 transition hover:border-amber-300"
          >
            <h3 className="text-xl font-semibold text-amber-300">
              WhatsApp
            </h3>
            <p className="mt-3 text-stone-300">
              Plan your journey directly with Trip Mosaic.
            </p>
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="rounded-2xl border border-stone-800 p-6 transition hover:border-amber-300"
          >
            <h3 className="text-xl font-semibold text-amber-300">
              Call Us
            </h3>
            <p className="mt-3 text-stone-300">
              +91 91832 69700
            </p>
          </a>
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
