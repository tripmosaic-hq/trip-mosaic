const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Globe Travels",
    review:
      "Trip Mosaic transformed how we manage itineraries and bookings. It is incredibly intuitive.",
  },
  {
    name: "Rahul Sharma",
    company: "Explore India",
    review:
      "The AI trip planner saves us hours every week. Highly recommended.",
  },
  {
    name: "Emily Chen",
    company: "SkyRoute Holidays",
    review:
      "A beautiful platform with powerful analytics and seamless traveller management.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted by modern travel teams.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            See how travel professionals use Trip Mosaic to work faster and
            deliver better journeys.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-lg text-cyan-400">★★★★★</p>

              <p className="mt-6 leading-8 text-slate-200">
                “{testimonial.review}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 font-bold text-cyan-300 ring-1 ring-cyan-400/30">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}D