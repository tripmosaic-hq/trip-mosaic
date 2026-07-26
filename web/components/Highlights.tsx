type HighlightsProps = {
  items: string[];
};

export default function Highlights({
  items,
}: HighlightsProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <h2 className="text-3xl font-bold text-stone-900">
        Trip Highlights
      </h2>

      <p className="mt-3 text-stone-600">
        Carefully crafted experiences that make this journey unforgettable.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />

            <p className="text-stone-700 leading-7">
              {item}
            </p>
          </div>
        ))}
      </div>    </section>
  );
}
