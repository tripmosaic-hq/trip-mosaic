const steps = [
  {
    number: "01",
    title: "Share Your Plan",
    description:
      "Tell us your destination, travel dates, number of travellers, preferences and expected budget.",
  },
  {
    number: "02",
    title: "Human Review",
    description:
      "Your enquiry is reviewed personally before any important route, service or pricing recommendation is finalized.",
  },
  {
    number: "03",
    title: "Confirm with Clarity",
    description:
      "You receive a clear plan with inclusions, exclusions, important conditions and the next booking steps.",
  },
];

const whatsappUrl =
  "https://wa.me/919183269700?text=Hi%20Trip%20Mosaic%2C%20I%20want%20to%20plan%20a%20trip.";

export default function Testimonials() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
          How We Work
        </p>

        <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Simple planning.
          <span className="block text-amber-400">
            Clear communication.
          </span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
          Trip Mosaic combines AI-supported systems with human judgement.
          Technology helps us work faster, while important travel decisions are
          personally reviewed.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-amber-400/20 bg-[#111111] p-7"
            >
              <span className="font-serif text-4xl text-amber-400/40">
                {item.number}
              </span>

              <h3 className="mt-8 font-serif text-3xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-400/25 bg-[#111111] p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
              Direct Consultation
            </p>

            <h3 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
              Start your journey with a conversation.
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
              No pressure selling. Ask questions, understand the plan and decide
              with clarity.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-amber-400 px-7 py-4 font-semibold text-black md:mt-0"
          >
            Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
