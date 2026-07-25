const features = [
  {
    title: "AI Trip Planner",
    description:
      "Create personalized itineraries faster with intelligent recommendations.",
  },
  {
    title: "Traveller Management",
    description:
      "Keep traveller profiles, preferences and important details organized.",
  },
  {
    title: "Booking Management",
    description:
      "Track flights, hotels, activities and confirmations in one dashboard.",
  },
  {
    title: "Payment Tracking",
    description:
      "Monitor invoices, payments and outstanding balances with clarity.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Understand trips, bookings and performance with useful insights.",
  },
  {
    title: "Cloud Sync",
    description:
      "Access your travel operations securely across devices and teams.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything your travel business needs.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Plan smarter, manage faster and keep every journey connected from
            enquiry to completion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/30" />

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-slate-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}