import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Shri Kedarnath - Badrinath (Do Dham Yatra) 5 Days / 4 Nights | Trip Mosaic",
  description:
    "Shri Kedarnath and Badrinath Do Dham Yatra from Haridwar with hotels, camps, vegetarian meals, transport and Trip Mosaic support.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/917389842730?text=${encodeURIComponent(
  "TM-WEB | Hello Trip Mosaic, I'm interested in the Shri Kedarnath and Badrinath Do Dham Yatra 5 Days / 4 Nights itinerary listed on your website. Please share the available dates, complete itinerary, hotel and camp arrangements, inclusions, exclusions, pricing, registration guidance, and booking process."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kedarnath_shrine.jpg?width=1920";

const quickFacts = [
  ["Duration", "5 Days / 4 Nights"],
  ["Pickup & Drop", "Haridwar"],
  ["Dhams Covered", "Kedarnath & Badrinath"],
  ["Maximum Altitude", "Approx. 3,583 m · Kedarnath"],
  ["Kedarnath Trek", "19 km one way"],
  ["Difficulty", "Moderate"],
  ["Best Season", "May–June & September–October"],
  ["Meals", "Breakfast & Dinner · Vegetarian"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Haridwar → Guptkashi",
    description:
      "Begin the sacred journey from Haridwar and travel through the Garhwal Himalayas. Visit Devprayag Sangam, continue through Rudraprayag and follow the Alaknanda and Mandakini river valleys to Guptkashi.",
    highlights: [
      "Haridwar pickup",
      "Devprayag Sangam",
      "Rudraprayag",
      "Alaknanda & Mandakini views",
      "Ardh Narishwar Temple",
      "Scenic Himalayan drive",
    ],
    stay: "Hotel · Guptkashi",
    meals: "Dinner",
  },
  {
    day: "Day 2",
    title: "Guptkashi → Kedarnath",
    description:
      "Drive to Sonprayag and continue to Gaurikund by local shuttle. Begin the 19 km trek to Kedarnath Temple. Optional helicopter services may be available at additional cost and are subject to availability and weather.",
    highlights: [
      "Sonprayag",
      "Gaurikund",
      "Kedarnath Trek",
      "Optional helicopter",
      "Kedarnath Temple Darshan",
      "Evening Aarti",
    ],
    stay: "Hotel / Camp · Kedarnath",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 3",
    title: "Kedarnath → Guptkashi",
    description:
      "Attend morning darshan, then descend to Gaurikund and return by road to Guptkashi for rest.",
    highlights: [
      "Morning Darshan",
      "Himalayan sunrise",
      "Trek to Gaurikund",
      "Scenic return drive",
      "Leisure evening",
    ],
    stay: "Hotel · Guptkashi",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Guptkashi → Badrinath",
    description:
      "Travel through the mountain valleys to Badrinath. Visit Tapt Kund and Badrinath Temple, followed by nearby spiritual and cultural attractions.",
    highlights: [
      "Badrinath Temple",
      "Evening Aarti",
      "Tapt Kund",
      "Mana Village",
      "Bhim Pul",
      "Saraswati River",
      "Vyas Gufa",
      "Mata Murti Temple",
    ],
    stay: "Hotel · Badrinath",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Badrinath → Haridwar",
    description:
      "Begin the return journey after the morning Himalayan views. Visit Narsingh Temple at Joshimath en route and continue to Haridwar, where the pilgrimage concludes.",
    highlights: [
      "Sunrise at Badrinath",
      "Narsingh Temple",
      "Joshimath",
      "Scenic Himalayan drive",
      "Tour concludes",
    ],
    stay: "—",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Pickup and drop from Haridwar",
  "Complete transportation",
  "Hotel / camp accommodation",
  "Breakfast and dinner · Vegetarian",
  "Sightseeing as per itinerary",
  "Toll taxes",
  "Parking charges",
  "Driver allowance",
  "Basic first-aid kit",
  "Oxygen cylinder",
  "Yatra registration assistance",
  "Required permits",
];

const exclusions = [
  "Lunch",
  "Helicopter charges",
  "Pony / palki charges",
  "Porter charges",
  "Personal expenses",
  "Emergency evacuation",
  "Expenses caused by weather, landslides or road blockages",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Kedarnath Yatra registration is mandatory.",
  "Carry an original Government Photo ID.",
  "Helicopter tickets are optional and subject to availability and weather.",
  "Mountain weather may change rapidly.",
  "Roads may close temporarily due to landslides or heavy rainfall.",
  "Respect temple dress codes and local traditions.",
  "Senior citizens and travellers with medical conditions should consult a physician before travel.",
  "The itinerary may change due to weather, road conditions, government advisories or safety requirements.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Badrinath_shrine.jpg?width=1600",
    alt: "Badrinath Temple in Uttarakhand",
    caption: "Badrinath Temple · Day 4",
    source: "https://commons.wikimedia.org/wiki/File:Badrinath_shrine.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Devprayag_sangam.jpg?width=1600",
    alt: "Devprayag Sangam in Uttarakhand",
    caption: "Devprayag Sangam · Day 1",
    source: "https://commons.wikimedia.org/wiki/File:Devprayag_sangam.jpg",
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

export default function DoDhamYatraPage() {
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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.35) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Sacred Himalayan Journey
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Shri Kedarnath - Badrinath
<span className="block text-amber-300">(Do Dham Yatra)</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 5 Days / 4 Nights pilgrimage from Haridwar covering Kedarnath,
            Badrinath and important spiritual landmarks of the Garhwal Himalayas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Haridwar to Haridwar",
              "5 Days / 4 Nights",
              "Kedarnath & Badrinath",
              "Vegetarian Meals",
              "Registration Assistance",
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
          title="Kedarnath, Badrinath and Devprayag"
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
            href="https://commons.wikimedia.org/wiki/File:Kedarnath_shrine.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            AaS
          </a>{" "}
          · CC BY-SA 4.0;{" "}
          <a
            href={photos[0].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            AaS
          </a>{" "}
          · CC BY-SA 4.0;{" "}
          <a
            href={photos[1].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Anjalikaushal1910
          </a>{" "}
          · CC0 1.0 · Photos sourced from Wikimedia Commons.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Journey Plan" title="Day-wise itinerary" />
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
                <dd className="mt-1 font-semibold">Haridwar</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Reporting Time</dt>
                <dd className="mt-1 font-semibold">
                  As communicated before departure
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Accommodation</dt>
                <dd className="mt-1 font-semibold">Hotels / Camps</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Transportation</dt>
                <dd className="mt-1 font-semibold">Private Vehicle</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Helicopter</dt>
                <dd className="mt-1 font-semibold">
                  Optional · Additional cost · Subject to availability
                </dd>
              </div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Final accommodation, transport, registration and optional helicopter
              availability will be confirmed before booking.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-amber-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
            Cancellation & Emergency Support
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-stone-600">
            Cancellation and refunds apply under Trip Mosaic’s official policy.
            Permit, registration, accommodation and transport charges already paid
            may be deducted where applicable. Trip Mosaic provides operational
            coordination, first-aid assistance, oxygen support and local assistance;
            medical or evacuation expenses remain payable by the traveller unless insured.
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Pilgrimage Support
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Travel with devotion, clear planning and dependable ground support.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final route conditions, registrations, accommodation and traveller
            readiness will be reviewed before booking confirmation.
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
