type TripCTAProps = {
  title?: string;
};

const PHONE = "+919183269700";

export default function TripCTA({
  title = "Ready to plan your Himalayan journey?",
}: TripCTAProps) {
  
const whatsappMessage =
  `TM-WEB | Hello Trip Mosaic, I’m interested in this itinerary listed on your website: ${title}. Please share the available dates, complete itinerary, inclusions, exclusions, pricing, and booking guidance.`;

const whatsappUrl = `https://wa.me/917389842730?text=${encodeURIComponent(
  whatsappMessage
)}`;
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="rounded-3xl bg-black p-8 text-center text-white">
        <h2 className="text-3xl font-bold">
          {title}
        </h2>        <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-300">
          Talk directly with Trip Mosaic for honest guidance and a journey
          planned around your expectations.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-amber-300 px-7 py-4 font-bold text-black transition hover:bg-amber-200"
          >
            Plan on WhatsApp
          </a>

          <a
            href={`tel:${PHONE}`}
            className="rounded-full border border-amber-300/50 px-7 py-4 font-semibold text-amber-300 transition hover:bg-amber-300/10"
          >
            Call +91 91832 69700
          </a>
        </div>      </div>

      <div className="mt-8 text-center">
        <p className="font-serif text-xl text-amber-600">
          Trip Mosaic
        </p>

        <p className="mt-2 text-sm tracking-wide text-stone-600">
          Mountains. Memories. Crafted by Trip Mosaic.
        </p>
      </div>
    </section>
  );
}
