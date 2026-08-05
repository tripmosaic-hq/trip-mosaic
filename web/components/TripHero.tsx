type TripHeroProps = {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  bestSeason: string;
  imageUrl?: string;
};

const phoneNumber = "+919183269700";


export default function TripHero({
  title,
  subtitle,
  location,
  duration,
  bestSeason,
  imageUrl,
}: TripHeroProps) {
  
const whatsappMessage =
  `TM-WEB | Hello Trip Mosaic, I’m interested in the ${title} itinerary listed on your website. Please share the available dates, complete itinerary, inclusions, exclusions, pricing, and booking guidance.`;

const whatsappUrl = `https://wa.me/917389842730?text=${encodeURIComponent(
  whatsappMessage
)}`;
  return (
    <section
      className="relative overflow-hidden bg-black px-5 pb-16 pt-32 text-white sm:px-8 lg:px-12"
      style={
        imageUrl
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.48), rgba(0,0,0,0.96)), url("${imageUrl}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {!imageUrl && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_36%)]" />
      )}

      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300 sm:text-sm">
          Trip Mosaic Signature Journey
        </p>

        <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[location, duration, bestSeason].map((item) => (
            <span
              key={item}
              className="rounded-full border border-amber-300/25 bg-black/45 px-4 py-2 text-sm text-stone-200 backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

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

        <div className="mt-10 border-t border-amber-300/20 pt-6">
          <p className="font-serif text-xl text-amber-300">
            Trip Mosaic
          </p>
          <p className="mt-1 text-sm tracking-wide text-stone-300">
            Mountains. Memories. Crafted by Trip Mosaic.
          </p>
        </div>
      </div>
    </section>
  );
}
