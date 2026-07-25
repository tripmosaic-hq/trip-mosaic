const plans = [
  {
    name: "Starter",
    price: "₹0",
    period: "/month",
    badge: "",
    features: [
      "Up to 100 Trips",
      "Basic Itinerary",
      "Email Support",
      "Cloud Sync",
    ],
  },
  {
    name: "Professional",
    price: "₹999",
    period: "/month",
    badge: "Most Popular",
    features: [
      "Unlimited Trips",
      "AI Trip Planner",
      "Booking Management",
      "Analytics Dashboard",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    badge: "",
    features: [
      "Unlimited Team Members",
      "API Access",
      "Dedicated Manager",
      "Custom Integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Simple pricing for every stage.
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            Start free and upgrade whenever your travel business grows.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.badge
                  ? "border-cyan-400 bg-cyan-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.badge && (
                <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-6 text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>
                <span className="text-slate-400">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}