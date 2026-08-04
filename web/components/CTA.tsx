const CALL_NUMBER = "+919183269700";
const WHATSAPP_NUMBER = "917389842730";

const WHATSAPP_MESSAGE =
  "Namaste Trip Mosaic, main website par trip details dekh raha/rahi hoon. Mujhe apni trip plan karni hai. Kripya guide karein.";

export default function CTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section id="contact" className="bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-400/25 bg-[#111111] p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
          Contact Trip Mosaic
        </p>

        <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Ready to plan a journey
          <span className="block text-amber-400">built around you?</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
          Share your destination, dates, number of travellers and preferences.
          We will review your enquiry and guide you through the next steps
          clearly.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-24 items-center justify-center rounded-3xl bg-amber-400 px-7 py-5 text-center text-lg font-semibold text-black"
          >
            Plan on WhatsApp
          </a>

          <a
            href={`tel:${CALL_NUMBER}`}
            className="flex min-h-24 items-center justify-center rounded-3xl border border-amber-400/40 px-7 py-5 text-center text-lg font-semibold text-white"
          >
            Call +91 91832 69700
          </a>
        </div>

        <div className="mt-8 grid gap-4 text-sm leading-6 text-neutral-500 md:grid-cols-3">
          <p>✓ Direct consultation and human review</p>
          <p>✓ Clear inclusions, exclusions and conditions</p>
          <p>✓ No pressure selling or misleading promises</p>
        </div>
      </div>
    </section>
  );
}
