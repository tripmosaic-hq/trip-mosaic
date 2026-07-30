import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Hampta Pass Trek 5 Days / 4 Nights | Trip Mosaic",
  description:
    "Approved Hampta Pass trek itinerary from Manali covering Jobra, Chika, Balu Ka Ghera, Hampta Pass, Shea Goru, Chatru and weather-permitting Chandratal Lake.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/919183269700?text=${encodeURIComponent(
  "Namaste Trip Mosaic, mujhe Hampta Pass Trek 5D/4N ke baare mein jaankari chahiye."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hampta_Pass_Himachal_Pradesh_India.jpg?width=1920";

const quickFacts = [
  ["Duration", "5 Days / 4 Nights"],
  ["Pickup & Drop", "Manali"],
  ["Maximum Altitude", "4,300 m · Hampta Pass"],
  ["Trek Distance", "Approx. 26 km"],
  ["Difficulty", "Easy to Moderate"],
  ["Best Season", "June–September"],
  ["Accommodation", "Alpine Camps"],
  ["Meals", "Breakfast, Lunch & Dinner · As per itinerary"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Manali → Jobra → Chika Camp",
    altitude: "3,100 m",
    description:
      "Drive from Manali to Jobra and begin a short trek through pine, maple and birch forest beside the Rani Nallah stream. Reach Chika and settle into the first Himalayan campsite.",
    highlights: [
      "Scenic drive from Manali",
      "Forest trail",
      "Riverside campsite",
      "Introduction & safety briefing",
    ],
    stay: "Alpine Camp · Chika",
    meals: "Lunch & Dinner",
  },
  {
    day: "Day 2",
    title: "Chika → Balu Ka Ghera",
    altitude: "3,600 m",
    description:
      "Trek through alpine meadows and glacier streams while gradually gaining altitude. Reach Balu Ka Ghera and spend the evening acclimatizing.",
    highlights: [
      "Alpine meadows",
      "Stream crossings",
      "Seasonal snow patches",
      "Acclimatization",
    ],
    stay: "Alpine Camp · Balu Ka Ghera",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 3",
    title: "Balu Ka Ghera → Hampta Pass → Shea Goru",
    altitude: "4,300 m",
    description:
      "Start early and ascend towards Hampta Pass. Cross from the green Kullu Valley into the barren Lahaul landscape, then descend carefully towards Shea Goru.",
    highlights: [
      "Hampta Pass",
      "Deo Tibba & Indrasan views",
      "Lahaul Valley",
      "High-altitude descent",
    ],
    stay: "Alpine Camp · Shea Goru",
    meals: "Breakfast, Packed Lunch & Dinner",
  },
  {
    day: "Day 4",
    title: "Shea Goru → Chatru → Chandratal Lake",
    altitude: "Weather and road dependent",
    description:
      "Descend towards Chatru. When weather and road conditions permit, continue by vehicle to Chandratal Lake, spend time near the Moon Lake and return to Chatru for the night.",
    highlights: [
      "Chandratal Lake · Weather permitting",
      "Photography",
      "Lahaul landscape",
      "Scenic mountain drive",
    ],
    stay: "Camp · Chatru",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 5",
    title: "Chatru → Atal Tunnel → Manali",
    altitude: "Return journey",
    description:
      "Drive back to Manali through Himalayan valleys and the Atal Tunnel, bringing the trek to a close.",
    highlights: ["Atal Tunnel", "Himalayan valleys", "Tour concludes"],
    stay: "—",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Manali-to-Manali transportation",
  "Trek leader",
  "Certified local guide",
  "Forest and trek permits",
  "Camping accommodation",
  "Sleeping bag and sleeping mat",
  "All meals during the trek",
  "First-aid kit",
  "Emergency oxygen cylinder",
  "Basic safety equipment",
];

const exclusions = [
  "Travel to and from Manali",
  "Personal expenses",
  "Trekking gear rental",
  "Porter or mule charges",
  "Travel insurance",
  "Emergency evacuation",
  "GST, if applicable",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Carry a valid Government Photo ID.",
  "The Chandratal excursion depends on weather and road conditions.",
  "Follow the trek leader’s instructions throughout the journey.",
  "Himalayan weather may change rapidly.",
  "Plastic waste is strictly prohibited.",
  "Smoking and alcohol are not permitted during the trek.",
  "The itinerary may change for safety, weather or trail conditions.",
  "Participants should be physically prepared for river crossings, altitude and long walking hours.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Way_to_hampta_pass.jpg?width=1600",
    alt: "Mountain trail on the way to Hampta Pass",
    caption: "The trail towards Hampta Pass",
    source: "https://commons.wikimedia.org/wiki/File:Way_to_hampta_pass.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chandratal_lake_of_india.jpg?width=1600",
    alt: "Chandratal Lake in Himachal Pradesh",
    caption: "Chandratal Lake · Weather permitting",
    source: "https://commons.wikimedia.org/wiki/File:Chandratal_lake_of_india.jpg",
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

export default function HamptaPassPage() {
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
            Approved Himalayan Trek · TM-D002
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Hampta Pass
            <span className="block text-amber-300">Trek</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 5 Days / 4 Nights crossover trek from Manali through green valleys,
            glacier streams, Hampta Pass and the dramatic landscapes of Lahaul.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Manali to Manali",
              "4,300 m",
              "Approx. 26 km",
              "Easy to Moderate",
              "June–September",
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
          title="Hampta Pass and Chandratal"
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
            href="https://commons.wikimedia.org/wiki/File:Hampta_Pass_Himachal_Pradesh_India.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Raja Selvaraj
          </a>{" "}
          · CC BY 2.0;{" "}
          <a
            href={photos[0].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Kunalsvnit
          </a>{" "}
          · CC BY-SA 4.0;{" "}
          <a
            href={photos[1].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Subrata Sarkar
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
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Altitude: {item.altitude}
              </p>
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
            <SectionTitle eyebrow="Before You Trek" title="Important notes" />
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
                <dd className="mt-1 font-semibold">Manali</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Reporting Time</dt>
                <dd className="mt-1 font-semibold">
                  As communicated before departure
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Group Size</dt>
                <dd className="mt-1 font-semibold">Maximum 30 participants</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Minimum Age</dt>
                <dd className="mt-1 font-semibold">10 years</dd>
              </div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Final departure, campsite, route and Chandratal access will be
              confirmed after weather and road-condition review.
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
            The Trip Mosaic Operations Team remains available for operational
            coordination and emergency assistance throughout the trek.
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Trek Support
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Cross from Kullu’s green valleys into the dramatic landscapes of Lahaul.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final dates, fitness requirements, campsite availability and weather
            conditions will be reviewed before booking confirmation.
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
