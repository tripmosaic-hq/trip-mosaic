import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Chopta Tungnath Chandrashila Trek | Trip Mosaic",
  description:
    "Approved 3 Days / 2 Nights Chopta, Tungnath and Chandrashila itinerary from Rishikesh.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/919183269700?text=${encodeURIComponent(
  "Namaste Trip Mosaic, mujhe Chopta Tungnath Chandrashila 3D/2N trek ke baare mein jaankari chahiye."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chopta_-_Mini_Switzerland_of_India.jpg?width=1920";

const quickFacts = [
  ["Duration", "3 Days / 2 Nights"],
  ["Pickup & Drop", "Rishikesh"],
  ["Maximum Altitude", "4,130 m"],
  ["Trek Distance", "Approx. 9–10 km round trip"],
  ["Difficulty", "Easy to Moderate"],
  ["Best Season", "March–June & September–March"],
  ["Accommodation", "Alpine Camps"],
  ["Group / Age", "Max 30 · Min 10 years"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Rishikesh → Chopta",
    description:
      "Begin the scenic drive from Rishikesh through Devprayag, Srinagar, Rudraprayag and Ukhimath before reaching Chopta. Check into the alpine camp and relax amid mountain meadows and sunset views.",
    highlights: [
      "Devprayag Sangam",
      "Rudraprayag",
      "Ukhimath",
      "Kedarnath Wildlife Sanctuary",
      "Chopta Meadows",
      "Sunset Views",
    ],
    stay: "Alpine Camp",
    meals: "Dinner",
  },
  {
    day: "Day 2",
    title: "Chopta → Tungnath → Chandrashila → Chopta",
    description:
      "Start early after breakfast and trek through rhododendron and alpine forests to Tungnath Temple at 3,680 metres. Continue to Chandrashila Summit at 4,130 metres for broad Himalayan views before descending to Chopta.",
    highlights: [
      "Rhododendron Forest",
      "Tungnath Temple",
      "Panch Kedar",
      "Chandrashila Summit",
      "Nanda Devi",
      "Chaukhamba",
      "Trishul",
      "Kedar Peak",
    ],
    stay: "Alpine Camp",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 3",
    title: "Chopta → Rishikesh",
    description:
      "Enjoy breakfast with final Himalayan views, check out and drive back through Ukhimath, Rudraprayag, Srinagar and Devprayag to Rishikesh.",
    highlights: [
      "Morning Himalayan Views",
      "Garhwal Valleys",
      "Scenic Return Drive",
      "Devprayag",
      "Tour Concludes",
    ],
    stay: "—",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Pickup and drop from Rishikesh",
  "Transportation for the complete tour",
  "Twin-sharing alpine camp accommodation",
  "Breakfast and dinner as stated in the itinerary",
  "Trek guide and support staff",
  "Trekking permits",
  "Forest entry fees",
  "Basic first-aid kit",
  "Applicable taxes as per the package",
];

const exclusions = [
  "Personal expenses",
  "Lunch",
  "Snacks, mineral water and soft drinks",
  "Personal trekking equipment",
  "Travel or medical insurance",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Carry a valid Government Photo ID.",
  "Weather in the Himalayas can change rapidly.",
  "Snow conditions vary during the winter season.",
  "The itinerary may change due to weather, road conditions or government advisories.",
  "Respect local customs and religious traditions while visiting Tungnath Temple.",
  "Trekking shoes with good grip are strongly recommended.",
  "Emergency evacuation or hospital expenses are borne by the participant unless insured.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tungnath_Temple.jpg?width=1600",
    alt: "Historic stone Tungnath Temple in the Himalayas",
    caption: "Tungnath Temple - Day 2",
    source: "https://commons.wikimedia.org/wiki/File:Tungnath_Temple.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chandrashila_summit_%281_of_1%29.jpg?width=1600",
    alt: "Panoramic Himalayan view from Chandrashila summit",
    caption: "Chandrashila summit panorama - Day 2",
    source:
      "https://commons.wikimedia.org/wiki/File:Chandrashila_summit_(1_of_1).jpg",
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

export default function ChoptaTungnathPage() {
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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.69) 52%, rgba(0,0,0,0.43) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved Signature Trek · TM-D009
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Chopta · Tungnath
            <span className="block text-amber-300">· Chandrashila</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 3 Days / 2 Nights Himalayan journey from Rishikesh combining alpine meadows,
            the sacred Tungnath Temple and panoramic Chandrashila summit views.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Rishikesh to Rishikesh",
              "Easy to Moderate",
              "4,130 m",
              "Alpine Camps",
              "10+ years",
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
          title="Alpine meadows, sacred temple and summit views"
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
            href="https://commons.wikimedia.org/wiki/File:Chopta_-_Mini_Switzerland_of_India.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Deepak Malik
          </a>
          ,{" "}
          <a
            href={photos[0].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Akshat Bhattacharjee
          </a>{" "}
          &{" "}
          <a
            href={photos[1].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Dr Ashok Kolluru
          </a>{" "}
          · CC BY-SA 3.0 / 4.0 · Photos sourced from Wikimedia Commons.
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
                <dd className="mt-1 font-semibold">Rishikesh</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Reporting Time</dt>
                <dd className="mt-1 font-semibold">As communicated before departure</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Accommodation</dt>
                <dd className="mt-1 font-semibold">Alpine Camp · Twin Sharing</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Maximum Group</dt>
                <dd className="mt-1 font-semibold">30 Participants</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Minimum Age</dt>
                <dd className="mt-1 font-semibold">10 Years</dd>
              </div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Final availability, camp arrangement, weather conditions and service details will
              be confirmed in writing before booking.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Support
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan a short Himalayan journey with clear, human-reviewed guidance.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final availability, price, weather conditions and services will be confirmed in
            writing before booking.
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
        <p className="font-serif text-xl font-semibold text-amber-300">TRIP MOSAIC</p>
        <p className="mt-2">Mountains. Memories. Crafted by Trip Mosaic.</p>
        <p className="mt-4">© 2026 Trip Mosaic · tripmosaic@gmail.com</p>
      </footer>

      <StickyContact />
    </main>
  );
}
