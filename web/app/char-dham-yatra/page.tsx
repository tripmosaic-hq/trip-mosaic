import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Char Dham Yatra 10 Days / 9 Nights | Trip Mosaic",
  description:
    "Approved Char Dham Yatra itinerary from Haridwar covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
};

const PHONE = "+919183269700";

const WHATSAPP = `https://wa.me/917389842730?text=${encodeURIComponent(
  "TM-WEB | Hello Trip Mosaic, I'm interested in the Char Dham Yatra 10 Days / 9 Nights itinerary listed on your website. Please share the available dates, complete itinerary, accommodation, transportation, registration guidance, inclusions, exclusions, pricing, and booking process."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kedarnath_shrine.jpg?width=1920";

const quickFacts = [
  ["Duration", "10 Days / 9 Nights"],
  ["Pickup & Drop", "Haridwar"],
  ["Dhams Covered", "Yamunotri · Gangotri · Kedarnath · Badrinath"],
  ["Maximum Altitude", "Approx. 3,583 m"],
  ["Difficulty", "Moderate"],
  ["Best Season", "May–June & September–October"],
  ["Accommodation", "Hotels · Guest Houses · Camps"],
  ["Meal Plan", "Breakfast & Dinner · Vegetarian"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Haridwar → Barkot",
    description:
      "Begin the spiritual journey from Haridwar and drive through Mussoorie and Kempty Falls before reaching Barkot.",
    highlights: [
      "Scenic Himalayan Drive",
      "Mussoorie",
      "Kempty Falls",
      "Barkot",
    ],
    stay: "Hotel · Barkot",
    meals: "Dinner",
  },
  {
    day: "Day 2",
    title: "Barkot → Yamunotri → Barkot",
    description:
      "Drive to Jankichatti and begin the trek to Yamunotri. Pony or palki services may be hired directly. Visit Yamunotri Temple, Surya Kund and Jamunabai Kund before returning to Barkot.",
    highlights: [
      "Jankichatti",
      "Yamunotri Temple",
      "Surya Kund",
      "Jamunabai Kund",
      "Yamuna River Origin",
    ],
    stay: "Hotel · Barkot",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 3",
    title: "Barkot → Uttarkashi",
    description:
      "Drive to Uttarkashi and visit Kashi Vishwanath Temple and Shakti Temple. Attend the evening aarti before the overnight stay.",
    highlights: [
      "Kashi Vishwanath Temple",
      "Shakti Temple",
      "Evening Aarti",
      "Bhagirathi River",
    ],
    stay: "Hotel · Uttarkashi",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Uttarkashi → Gangotri → Uttarkashi",
    description:
      "Travel through Harsil Valley and visit Ganganani Hot Springs before reaching Gangotri Temple for darshan. Return to Uttarkashi in the evening.",
    highlights: [
      "Ganganani Hot Springs",
      "Harsil Valley",
      "Gangotri Temple",
      "Bhagirathi River",
    ],
    stay: "Hotel · Uttarkashi",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Uttarkashi → Guptkashi",
    description:
      "Drive towards Guptkashi through scenic Himalayan valleys while following the Mandakini River. Visit the sacred Ardh Narishwar Temple.",
    highlights: [
      "Mandakini River",
      "Ardh Narishwar Temple",
      "Himalayan Valleys",
      "Guptkashi",
    ],
    stay: "Hotel · Guptkashi",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 6",
    title: "Guptkashi → Kedarnath",
    description:
      "Drive to Sonprayag and continue to Gaurikund by local shuttle. Begin the 19 km trek to Kedarnath or use an optional helicopter service at additional cost. Attend evening darshan and aarti.",
    highlights: [
      "Sonprayag",
      "Gaurikund",
      "Kedarnath Trek",
      "Kedarnath Temple",
      "Evening Aarti",
    ],
    stay: "Hotel / Camp · Kedarnath",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 7",
    title: "Kedarnath → Guptkashi",
    description:
      "Attend early morning darshan before descending to Gaurikund. Continue by road to Guptkashi for rest.",
    highlights: [
      "Morning Darshan",
      "Himalayan Sunrise",
      "Scenic Trek Descent",
      "Guptkashi",
    ],
    stay: "Hotel · Guptkashi",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 8",
    title: "Guptkashi → Badrinath",
    description:
      "Drive to Badrinath and visit Tapt Kund before seeking blessings at Badrinath Temple. Later explore Mana Village, Bhimkund and Vyas Gufa.",
    highlights: [
      "Badrinath Temple",
      "Tapt Kund",
      "Mana Village",
      "Bhimkund",
      "Vyas Gufa",
      "Evening Aarti",
    ],
    stay: "Hotel · Badrinath",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 9",
    title: "Badrinath → Rishikesh",
    description:
      "Begin the return journey after breakfast. Visit Joshimath en route before reaching Rishikesh.",
    highlights: [
      "Joshimath",
      "Alaknanda Valley",
      "Scenic Himalayan Drive",
      "Rishikesh",
    ],
    stay: "Hotel · Rishikesh",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 10",
    title: "Rishikesh → Haridwar",
    description:
      "After breakfast, drive to Haridwar where the sacred Char Dham pilgrimage concludes.",
    highlights: ["Ganga River", "Haridwar", "Tour Concludes"],
    stay: "Tour Ends",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Hotel, guest-house and camp accommodation on twin sharing",
  "Breakfast and dinner on vegetarian meal plan",
  "Transportation as per the approved itinerary",
  "Complete sightseeing as per itinerary",
  "Toll taxes, parking and driver allowance",
  "First-aid kit and oxygen cylinder",
  "Yatra registration assistance",
  "Government permits and applicable taxes",
  "24×7 Trip Mosaic operational support",
];

const exclusions = [
  "Lunch, snacks and beverages",
  "Helicopter charges",
  "Pony, palki and porter charges",
  "Personal expenses and shopping",
  "Travel insurance",
  "Emergency evacuation and hospitalization expenses",
  "Expenses caused by road closures, weather or natural calamities",
  "Anything not specifically mentioned under Package Includes",
];

const notes = [
  "Complete Char Dham registration before departure.",
  "Carry an original Government Photo ID.",
  "Helicopter services are optional and subject to availability and weather.",
  "Mountain weather and road conditions may change rapidly.",
  "Road closures may require changes to the approved itinerary.",
  "Follow temple dress codes, local customs and operational instructions.",
  "Senior citizens and travellers with medical conditions should consult a physician before travelling.",
];

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function CharDhamYatraPage() {
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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.38) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved Sacred Himalayan Journey · TM-D012
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Char Dham Yatra
            <span className="block text-amber-300">
              Yamunotri · Gangotri · Kedarnath · Badrinath
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 10 Days / 9 Nights pilgrimage from Haridwar through sacred
            Himalayan shrines, holy river valleys, ancient temples and
            culturally significant mountain settlements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Haridwar to Haridwar",
              "10 Days / 9 Nights",
              "Four Sacred Dhams",
              "Vegetarian Meals",
              "Registration Assistance",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-amber-300/30 bg-black/45 px-4 py-2 text-sm"
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
              className="rounded-full bg-amber-300 px-7 py-4 text-center font-bold text-black transition hover:bg-amber-200"
            >
              Enquire on WhatsApp
            </a>

            <a
              href={`tel:${PHONE}`}
              className="rounded-full border border-amber-300/60 px-7 py-4 text-center font-semibold text-amber-300"
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">
                {label}
              </p>

              <p className="mt-2 font-semibold leading-6 text-stone-900">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Approved Route Plan"
            title="Day-wise itinerary"
          />

          <div className="mt-8 space-y-5">
            {itinerary.map((item) => (
              <article
                key={item.day}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex w-fit rounded-full bg-black px-4 py-2 text-sm font-bold text-amber-300">
                    {item.day}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-4xl leading-7 text-stone-600">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={`${item.day}-${highlight}`}
                          className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                      <span className="rounded-full bg-stone-100 px-4 py-2">
                        Stay: {item.stay}
                      </span>

                      <span className="rounded-full bg-amber-50 px-4 py-2 text-amber-800">
                        Meals: {item.meals}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-300/30 bg-[#090909] p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Package Includes
            </p>

            <ul className="mt-6 space-y-3 text-stone-300">
              {inclusions.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="text-emerald-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-rose-300/30 bg-[#090909] p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-400">
              Package Excludes
            </p>

            <ul className="mt-6 space-y-3 text-stone-300">
              {exclusions.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="text-rose-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-amber-100 p-7 sm:p-9">
          <SectionTitle
            eyebrow="Before You Travel"
            title="Important notes"
          />

          <ul className="mt-7 space-y-4 text-stone-700">
            {notes.map((note) => (
              <li key={note} className="flex gap-3 leading-7">
                <span className="text-amber-700">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Pilgrimage Support
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan your Char Dham Yatra with clear, human-reviewed guidance.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final availability, hotel category, vehicle, registration support
            and price will be confirmed in writing before booking.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-300 px-8 py-4 font-bold text-black"
            >
              WhatsApp Trip Mosaic
            </a>

            <a
              href={`tel:${PHONE}`}
              className="rounded-full border border-amber-300/60 px-8 py-4 font-semibold text-amber-300"
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
