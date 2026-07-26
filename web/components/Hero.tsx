const phoneNumber = "+919183269700";

const whatsappMessage =
  "Namaste Trip Mosaic, mujhe apni trip plan karni hai. Kripya guide karein.";

export default function Hero() {
  const whatsappUrl = `https://wa.me/919183269700?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 pb-24 pt-28 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.96))]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300 sm:text-sm">
            Curated Himalayan Journeys
          </p>

          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Mountains. Memories.
            <span className="block text-amber-300">
              Crafted by Trip Mosaic.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            Thoughtfully planned treks, bike expeditions, family holidays and
            spiritual journeys—built around real experience, trusted partners,
            transparent communication and personal support.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-300 px-7 py-4 text-center font-bold text-black transition hover:bg-amber-200"
            >
              Plan on WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="rounded-full border border-amber-300/50 px-7 py-4 text-center font-semibold text-amber-300 transition hover:bg-amber-300/10"
            >
              Call +91 91832 69700
            </a>
          </div>

          <p className="mt-5 text-sm text-stone-400">
            Direct consultation. No pressure selling. Final plans are personally
            reviewed.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "Real Experience",
              "Trusted Partners",
              "Transparent Planning",
              "Personal Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-amber-300/15 bg-white/[0.04] px-4 py-4 text-sm text-stone-200 backdrop-blur"
              >
                <span className="mr-2 text-amber-300">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/15 via-stone-900 to-black p-8 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-300">
              Featured Portfolio
            </p>

            <h2 className="mt-4 font-serif text-3xl text-white">
              From weekend escapes to legendary expeditions.
            </h2>

            <div className="mt-7 space-y-4">
              {[
                "Valley of Flowers & Hemkund Sahib",
                "Spiti Valley Bike Expedition",
                "Chopta–Tungnath–Chandrashila",
                "Kashmir Premium",
                "Everest Base Camp",
              ].map((trip, index) => (
                <div
                  key={trip}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 font-bold text-black">
                    {index + 1}
                  </span>
                  <span className="text-stone-200">{trip}</span>
                </div>
              ))}
            </div>

            <a
              href="#experiences"
              className="mt-7 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              Explore selected journeys →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
