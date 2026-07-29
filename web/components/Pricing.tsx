const trustPoints = [
  {
    number: "01",
    title: "Real Experience",
    description:
      "Our journeys are shaped by genuine Himalayan travel, trekking and riding experience—not copied itineraries.",
  },
  {
    number: "02",
    title: "Verified Partners",
    description:
      "We prefer dependable local partners, clear service standards and reliable ground support over the cheapest option.",
  },
  {
    number: "03",
    title: "Transparent Planning",
    description:
      "Routes, inclusions, exclusions, limitations and important conditions are communicated clearly before booking.",
  },
  {
    number: "04",
    title: "Personal Support",
    description:
      "Your final plan is personally reviewed, with human support available for important decisions and exceptional situations.",
  },
];

const whatsappUrl =
  "https://wa.me/919183269700?text=Hi%20Trip%20Mosaic%2C%20I%20want%20help%20planning%20my%20trip.";

export default function Pricing() {
  return (
    <section
      id="why-us"
      className="bg-[#050505] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
          Why Trip Mosaic
        </p>

        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Travel plans built around
              <span className="block text-amber-400">
                trust, clarity and care.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
              Trip Mosaic is being built as a responsible, experience-led travel
              company. We focus on thoughtful planning, dependable partners,
              transparent communication and personal support.
            </p>
          </div>
<div className="rounded-3xl border-2 border-amber-400/50 bg-amber-400/10 p-7 shadow-[0_0_35px_rgba(251,191,36,0.08)]">
  <p className="font-serif text-3xl font-black leading-tight text-white md:text-4xl">
    “Trip Mosaic का बिजनेस पैकेज से नहीं,{" "}
    <span className="text-amber-400">विश्वास</span> से चलता है।”
  </p>
          

            <p className="mt-5 text-sm leading-6 text-neutral-500">
              No pressure selling. No misleading promises. Important travel
              decisions receive human review.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {trustPoints.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-amber-400/20 bg-[#0d0d0d] p-7"
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="font-serif text-3xl font-semibold">
                  {item.title}
                </h3>

                <span className="font-serif text-3xl text-amber-400/40">
                  {item.number}
                </span>
              </div>

              <p className="mt-5 leading-7 text-neutral-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-400/25 bg-amber-400 px-7 py-9 text-black md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">
              Start with a conversation
            </p>

            <h3 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
              Tell us where you want to go.
            </h3>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-black px-7 py-4 font-semibold text-white md:mt-0"
          >
            Plan on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
