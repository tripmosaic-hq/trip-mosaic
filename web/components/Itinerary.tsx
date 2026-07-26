type ItineraryItem = {
  day: string;
  title: string;
  description: string;
};

type ItineraryProps = {
  itinerary: ItineraryItem[];
};

export default function Itinerary({
  itinerary,
}: ItineraryProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <h2 className="text-3xl font-bold text-stone-900">
        Day-wise Itinerary
      </h2>      <div className="mt-8 space-y-6">
        {itinerary.map((item) => (
          <div
            key={item.day}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white">
                {item.day}
              </span>

              <h3 className="text-xl font-semibold text-stone-900">
                {item.title}
              </h3>
            </div>

            <p className="mt-4 leading-7 text-stone-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>    </section>
  );
}
