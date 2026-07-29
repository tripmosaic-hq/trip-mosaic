const phoneNumber = "+919183269700";

const whatsappMessage =
  "Namaste Trip Mosaic, mujhe apni trip plan karni hai. Kripya guide karein.";

export default function Hero() {
  const whatsappUrl = `https://wa.me/919183269700?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="home" className="bg-black pt-20 text-white">
      <div className="mx-auto w-full max-w-[1920px] overflow-hidden">
        <img
          src="/trip-mosaic-banner.png"
          alt="Trip Mosaic Himalayan journeys banner"
          className="h-[68vh] w-full object-cover object-center sm:h-auto"
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-amber-300 px-7 py-4 text-center font-bold text-black"
        >
          Plan on WhatsApp
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="rounded-full border border-amber-300/60 px-7 py-4 text-center font-semibold text-amber-300"
        >
          Call +91 91832 69700
        </a>
      </div>

      <p className="px-6 pb-10 text-center text-sm text-stone-400">
        Direct consultation. No pressure selling. Final plans are personally
        reviewed.
      </p>
    </section>
  );
}
