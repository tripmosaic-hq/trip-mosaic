/* eslint-disable @next/next/no-img-element */

import TripHero from "./TripHero";
import Highlights from "./Highlights";
import TripCTA from "./TripCTA";

type QuickFact = {
  label: string;
  value: string;
};

type TripPhoto = {
  src: string;
  alt: string;
  caption: string;
  photographer: string;
  resolution: string;
  license: string;
  sourceUrl: string;
};

type ItineraryItem = {
  day: string;
  title: string;
  description: string;
  stay?: string;
  meals?: string;
};

type TripTemplateProps = {
  title: string;
  subtitle: string;

  // Old page support
  imageUrl?: string;
  difficulty?: string;

  // New page support
  eyebrow?: string;
  heroImage?: string;
  overview?: string[];
  facts?: QuickFact[];
  photos?: TripPhoto[];
  includes?: string[];
  excludes?: string[];
  packing?: string[];
  importantNotes?: string[];
  cancellation?: string[];

  duration: string;
  region: string;
  bestSeason: string;
  highlights: string[];
  itinerary: ItineraryItem[];
};

function DetailCard({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
      <h2 className="font-serif text-2xl font-semibold text-stone-900">
        {title}
      </h2>

      <ul className="mt-6 space-y-3 text-stone-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TripTemplate({
  title,
  subtitle,
  imageUrl,
  heroImage,
  eyebrow,
  duration,
  region,
  difficulty,
  bestSeason,
  overview,
  facts,
  highlights,
  photos,
  itinerary,
  includes,
  excludes,
  packing,
  importantNotes,
  cancellation,
}: TripTemplateProps) {
  const resolvedImage = heroImage ?? imageUrl;

  const resolvedDifficulty =
    difficulty ??
    facts?.find((fact) => fact.label.toLowerCase() === "difficulty")?.value ??
    "Moderate";

  const resolvedFacts: QuickFact[] =
    facts?.length
      ? facts
      : [
          { label: "Duration", value: duration },
          { label: "Region", value: region },
          { label: "Difficulty", value: resolvedDifficulty },
          { label: "Best Season", value: bestSeason },
        ];

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900">
      <TripHero
        title={title}
        subtitle={subtitle}
        imageUrl={resolvedImage}
        location={region}
        duration={duration}
        bestSeason={bestSeason}
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        {eyebrow && (
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
            {eyebrow}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {resolvedFacts.map((fact) => (
            <div
              key={`${fact.label}-${fact.value}`}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                {fact.label}
              </p>
              <p className="mt-2 font-semibold leading-6 text-stone-900">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {overview?.length ? (
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
              Trip Overview
            </p>

            <div className="mt-5 max-w-4xl space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Highlights items={highlights} />

      {photos?.length ? (
        <section className="bg-[#080808] px-5 py-16 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Journey Gallery
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
              Places along the route
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {photos.map((photo) => (
                <figure
                  key={photo.sourceUrl}
                  className="overflow-hidden rounded-3xl border border-amber-300/15 bg-[#111111]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-72 w-full object-cover"
                  />

                  <figcaption className="p-5">
                    <p className="font-semibold text-amber-300">
                      {photo.caption}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      Photo: {photo.photographer} · {photo.license}
                    </p>

                    <a
                      href={photo.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm underline underline-offset-4"
                    >
                      View source and licence
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-stone-100 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
            Route Plan
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Day-wise itinerary
          </h2>

          <div className="mt-8 space-y-5">
            {itinerary.map((item) => (
              <article
                key={`${item.day}-${item.title}`}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex w-fit rounded-full bg-black px-4 py-2 text-sm font-semibold text-amber-300">
                    {item.day}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-stone-600">
                      {item.description}
                    </p>

                    {(item.stay || item.meals) && (
                      <div className="mt-5 flex flex-wrap gap-3 text-sm">
                        {item.stay && (
                          <span className="rounded-full bg-stone-100 px-4 py-2">
                            Stay: {item.stay}
                          </span>
                        )}

                        {item.meals && (
                          <span className="rounded-full bg-amber-50 px-4 py-2 text-amber-800">
                            Meals: {item.meals}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <DetailCard title="Package Includes" items={includes} />
          <DetailCard title="Package Excludes" items={excludes} />
          <DetailCard title="Things to Carry" items={packing} />
          <DetailCard title="Important Notes" items={importantNotes} />
        </div>

        {cancellation?.length ? (
          <div className="mt-6">
            <DetailCard
              title="Cancellation & Emergency Support"
              items={cancellation}
            />
          </div>
        ) : null}
      </section>

      <TripCTA title={`Plan your ${title} journey`} />
    </main>
  );
}
