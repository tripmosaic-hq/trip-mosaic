import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Kashmir Premium 5 Nights / 6 Days | Trip Mosaic",
  description:
    "Approved Kashmir Premium itinerary covering Srinagar, Sonamarg, Gulmarg, Pahalgam and Dal Lake.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/919183269700?text=${encodeURIComponent(
  "Namaste Trip Mosaic, mujhe Kashmir Premium 5N/6D package ke baare mein jaankari chahiye."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal_Lake%2C_Srinagar%2C_Jammu_and_Kashmir.jpg?width=1920";

const quickFacts = [
  ["Duration", "5 Nights / 6 Days"],
  ["Pickup & Drop", "Srinagar Airport"],
  ["Destinations", "Srinagar · Sonamarg · Gulmarg · Pahalgam · Dal Lake"],
  ["Accommodation", "Deluxe Hotels & Premium Houseboat"],
  ["Meal Plan", "MAP · Breakfast & Dinner"],
  ["Transport", "Private Non-AC Cab"],
  ["Included Experience", "1-Hour Shikara Ride"],
  ["Best Season", "March–October & December–February"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival at Srinagar & Local Sightseeing",
    description:
      "Meet the representative at Srinagar Airport and transfer to the hotel. After check-in and rest, explore Srinagar, its Mughal gardens, Dal Lake, Boulevard Road and the peaceful surroundings of the Zabarwan Hills.",
    highlights: [
      "Airport Pickup",
      "Nishat Bagh",
      "Shalimar Bagh",
      "Chashme Shahi",
      "Shankaracharya Temple",
      "Dal Lake",
      "Boulevard Road",
      "Tulip Garden (Seasonal)",
    ],
    stay: "Hotel · Srinagar",
    meals: "Dinner",
  },
  {
    day: "Day 2",
    title: "Excursion to Sonamarg",
    description:
      "Travel through valleys, rivers, pine forests and snow-covered mountain scenery to Sonamarg. Thajiwas Glacier visits and pony rides are optional and subject to weather and local-union rules. Return to Srinagar in the evening.",
    highlights: [
      "Sindh River",
      "Sonamarg Valley",
      "Snow-Capped Mountains",
      "Thajiwas Glacier (Optional)",
      "Pony Ride (Optional)",
      "Photography",
    ],
    stay: "Hotel · Srinagar",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 3",
    title: "Excursion to Gulmarg",
    description:
      "Proceed to Gulmarg, known for mountain landscapes, green meadows and seasonal winter activities. Gondola rides, skiing and pony rides are optional. Return to Srinagar by evening.",
    highlights: [
      "Tangmarg",
      "Gulmarg Meadows",
      "Gulmarg Gondola (Optional)",
      "Skiing (Seasonal)",
      "Pony Ride (Optional)",
      "Golf Course",
      "Himalayan Views",
    ],
    stay: "Hotel · Srinagar",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Srinagar → Pahalgam",
    description:
      "Drive through Pampore saffron fields, apple orchards and traditional villages to Pahalgam. Explore the town beside the Lidder River. Betaab Valley, Aru Valley and Chandanwari may be visited by optional local-union taxi.",
    highlights: [
      "Apple Orchards",
      "Pampore Saffron Fields",
      "Lidder River",
      "Betaab Valley (Optional)",
      "Aru Valley (Optional)",
      "Chandanwari (Optional)",
    ],
    stay: "Hotel · Pahalgam",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Pahalgam → Srinagar · Houseboat Stay",
    description:
      "Return to Srinagar and check into a traditional deluxe houseboat on Dal Lake. Relax in the lake surroundings and enjoy the included one-hour Shikara ride while observing floating gardens and local life.",
    highlights: [
      "Deluxe Houseboat Stay",
      "Dal Lake",
      "Floating Gardens",
      "Included Shikara Ride",
      "Sunset Views",
    ],
    stay: "Deluxe Houseboat · Dal Lake",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 6",
    title: "Departure from Srinagar",
    description:
      "Begin the day with morning views of Dal Lake. After breakfast, check out from the houseboat and transfer to Srinagar Airport for the onward journey.",
    highlights: ["Morning Lake View", "Airport Transfer", "Tour Concludes"],
    stay: "—",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Srinagar Airport pickup and drop",
  "Private Non-AC cab for the routed itinerary",
  "5 nights accommodation",
  "Deluxe hotels and premium houseboat",
  "Daily breakfast and dinner under MAP plan",
  "1-hour Shikara ride",
  "Driver allowance",
  "Toll taxes and parking charges",
  "Welcome drink on arrival",
  "Trip coordination and operational support",
];

const exclusions = [
  "Airfare or train tickets",
  "Gulmarg Gondola tickets",
  "Pony charges",
  "Chain vehicle charges during snowfall",
  "Pahalgam local-union taxi",
  "Sonamarg local taxi",
  "Entry tickets",
  "Optional activities",
  "Personal expenses",
  "Lunch and laundry",
  "Travel insurance",
  "GST, if applicable",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Carry a valid Government Photo ID.",
  "Only postpaid mobile connections work reliably in many parts of Jammu & Kashmir.",
  "The driver is not a tour guide.",
  "Hotels are subject to availability; similar-category accommodation may be provided.",
  "Gondola tickets are subject to availability.",
  "Pony rides and local-union taxis are payable directly.",
  "AC remains switched off while travelling in hilly regions.",
  "Weather may affect sightseeing schedules.",
  "The itinerary may change due to weather, road conditions or government advisories.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/GulMarg_Kashmir.jpg?width=1600",
    alt: "Green mountain landscape at Gulmarg in Kashmir",
    caption: "Gulmarg landscape · Day 3",
    source: "https://commons.wikimedia.org/wiki/File:GulMarg_Kashmir.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lidder_River_Pahalgam.jpg?width=1600",
    alt: "Lidder River flowing through Pahalgam",
    caption: "Lidder River, Pahalgam · Day 4",
    source: "https://commons.wikimedia.org/wiki/File:Lidder_River_Pahalgam.jpg",
  },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function KashmirPremiumPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-300/20 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            href="/"
            className="font-serif text-xl font-black tracking-[0.14em] text-amber-300 sm:text-2xl"
          >
            TRIP MOSAIC
          </Link>
          <Link
            href="/#experiences"
            className="text-sm font-semibold text-stone-300 hover:text-amber-300"
          >
            ← All Journeys
          </Link>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-black px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.66) 52%, rgba(0,0,0,0.38) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved Premium Holiday · TM-K002
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Kashmir
            <span className="block text-amber-300">Premium</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 5 Nights / 6 Days private-cab holiday covering Srinagar, Sonamarg,
            Gulmarg, Pahalgam and a traditional Dal Lake houseboat stay.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Srinagar Airport",
              "Easy",
              "MAP Meals",
              "Private Cab",
              "1-Hour Shikara Ride",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-amber-300/30 bg-black/45 px-4 py-2 text-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-300 px-7 py-4 text-center font-bold text-black hover:bg-amber-200"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full border border-amber-300/60 px-7 py-4 text-center font-semibold text-amber-300 hover:bg-amber-300/10"
            >
              Call +91 91832 69700
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickFacts.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                {label}
              </p>
              <p className="mt-2 font-semibold text-stone-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <SectionTitle
          eyebrow="Journey Gallery"
          title="Dal Lake, Gulmarg and Pahalgam"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96"
              />
              <figcaption className="p-5">
                <p className="font-serif text-xl font-semibold">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-stone-500">
          Photo credits:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Dal_Lake,_Srinagar,_Jammu_and_Kashmir.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Dashrathgoyal85
          </a>
          ,{" "}
          <a
            href={photos[0].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Ramanathan
          </a>{" "}
          &{" "}
          <a
            href={photos[1].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Vikas Panwar
          </a>{" "}
          · CC BY-SA 4.0 · Photos sourced from Wikimedia Commons.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Approved Plan" title="Day-wise itinerary" />
        <div className="mt-8 space-y-5">
          {itinerary.map((item) => (
            <article
              key={item.day}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="w-fit rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-black">
                  {item.day}
                </span>
                <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 max-w-4xl leading-7 text-stone-600">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-amber-700">
                <span>Stay: {item.stay}</span>
                <span>Meals: {item.meals}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#090909] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/20 bg-white/5 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Package Includes
            </p>
            <ul className="mt-6 space-y-3 text-stone-300">
              {inclusions.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-rose-400/20 bg-white/5 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-400">
              Package Excludes
            </p>
            <ul className="mt-6 space-y-3 text-stone-300">
              {exclusions.map((item) => (
                <li key={item}>× {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionTitle eyebrow="Before You Travel" title="Important notes" />
            <ul className="mt-7 space-y-4">
              {notes.map((note) => (
                <li key={note} className="flex gap-3 leading-7 text-stone-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl bg-amber-100 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-amber-800">
              Booking Information
            </p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-stone-600">Reporting Point</dt>
                <dd className="mt-1 font-semibold">Srinagar Airport</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Reporting Time</dt>
                <dd className="mt-1 font-semibold">
                  As communicated before departure
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Accommodation</dt>
                <dd className="mt-1 font-semibold">
                  Deluxe Hotels & Premium Houseboat
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Advance Payment</dt>
                <dd className="mt-1 font-semibold">
                  Minimum 30% for booking confirmation
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Balance Payment</dt>
                <dd className="mt-1 font-semibold">100% before arrival</dd>
              </div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Final hotel, houseboat, transport, sightseeing availability and price
              will be confirmed in writing before booking.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Cancellation" title="Cancellation policy" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["More than 45 days", "No cancellation charges"],
            ["31–44 days", "25% charges"],
            ["21–30 days", "50% charges"],
            ["11–20 days", "75% charges"],
            ["Within 10 days", "100% charges"],
          ].map(([period, charge]) => (
            <div
              key={period}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-stone-900">{period}</p>
              <p className="mt-2 text-sm text-stone-600">{charge}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Support
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan Kashmir with clear inclusions, verified services and human review.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final availability, price, local-union services, weather conditions and
            accommodation will be confirmed before booking.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-300 px-7 py-4 font-bold text-black hover:bg-amber-200"
            >
              WhatsApp Trip Mosaic
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full border border-amber-300/50 px-7 py-4 font-semibold text-amber-300"
            >
              Call +91 91832 69700
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] px-5 py-10 text-center text-sm text-stone-500">
        <p className="font-serif text-xl font-semibold text-amber-300">
          TRIP MOSAIC
        </p>
        <p className="mt-2">Mountains. Memories. Crafted by Trip Mosaic.</p>
        <p className="mt-4">© 2026 Trip Mosaic · tripmosaic@gmail.com</p>
      </footer>

      <StickyContact />
    </main>
  );
}
