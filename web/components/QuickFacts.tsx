type QuickFactsProps = {
  duration: string;
  region: string;
  difficulty: string;
  bestSeason: string;
};

export default function QuickFacts({
  duration,
  region,
  difficulty,
  bestSeason,
}: QuickFactsProps) {
  const facts = [
    {
      title: "Duration",
      value: duration,
    },
    {
      title: "Region",
      value: region,
    },
    {
      title: "Difficulty",
      value: difficulty,
    },
    {
      title: "Best Season",
      value: bestSeason,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.title}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >            <p className="text-sm text-stone-500">
              {fact.title}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-stone-900">
              {fact.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
