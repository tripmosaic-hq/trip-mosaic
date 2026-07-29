import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Everest Base Camp Trek 14 Days / 13 Nights | Trip Mosaic",
  description:
    "Approved Everest Base Camp trek itinerary from Kathmandu via Lukla, Namche Bazaar, Tengboche, Dingboche, Lobuche, Gorakshep and Kala Patthar.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/919183269700?text=${encodeURIComponent(
  "Namaste Trip Mosaic, mujhe Everest Base Camp Trek 14D/13N ke baare mein jaankari chahiye."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/EVEREST_BASE_CAMP.jpg?width=1920";

const quickFacts = [
  ["Duration", "14 Days / 13 Nights"],
  ["Start & End", "Kathmandu"],
  ["Maximum Altitude", "5,545 m · Kala Patthar"],
  ["EBC Altitude", "5,364 m"],
  ["Trek Distance", "Approx. 130 km round trip"],
  ["Difficulty", "Challenging"],
  ["Accommodation", "Hotels & Tea Houses"],
  ["Best Season", "March–May & September–November"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Kathmandu",
    description:
      "Arrive at Tribhuvan International Airport and transfer to the hotel. Meet the expedition team for a detailed trek briefing and equipment check.",
    highlights: ["Airport Pickup", "Kathmandu City", "Trek Briefing", "Equipment Check"],
    stay: "Hotel · Kathmandu",
    meals: "Breakfast",
  },
  {
    day: "Day 2",
    title: "Kathmandu → Lukla → Phakding",
    description:
      "Take the scenic mountain flight to Lukla and begin trekking through Sherpa villages towards Phakding.",
    highlights: ["Lukla Airport", "Dudh Koshi River", "Suspension Bridges", "Sherpa Villages"],
    stay: "Tea House · Phakding",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 3",
    title: "Phakding → Namche Bazaar",
    description:
      "Trek through forest trails and cross suspension bridges before reaching Namche Bazaar, the gateway to Everest.",
    highlights: [
      "Sagarmatha National Park",
      "Hillary Suspension Bridge",
      "First Everest View",
      "Namche Bazaar",
    ],
    stay: "Tea House · Namche Bazaar",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 4",
    title: "Acclimatization at Namche Bazaar",
    description:
      "Spend the day acclimatizing with a short hike towards Everest View Hotel or Khumjung Village.",
    highlights: ["Everest View Hotel", "Khumjung Village", "Sherpa Museum", "Acclimatization"],
    stay: "Tea House · Namche Bazaar",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 5",
    title: "Namche Bazaar → Tengboche",
    description:
      "Trek through rhododendron forests to the famous Tengboche Monastery, with Himalayan scenery along the route.",
    highlights: ["Tengboche Monastery", "Ama Dablam Views", "Himalayan Forests"],
    stay: "Tea House · Tengboche",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 6",
    title: "Tengboche → Dingboche",
    description:
      "Continue ascending through Pangboche village towards Dingboche in the Imja Valley.",
    highlights: ["Pangboche Village", "Imja Valley", "Mountain Landscapes"],
    stay: "Tea House · Dingboche",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 7",
    title: "Acclimatization at Dingboche",
    description:
      "Complete a short acclimatization hike to improve altitude adaptation before continuing higher.",
    highlights: [
      "Nangkartshang Peak Viewpoint",
      "Acclimatization Walk",
      "Himalayan Panorama",
    ],
    stay: "Tea House · Dingboche",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 8",
    title: "Dingboche → Lobuche",
    description:
      "Gradually climb through rocky trails and memorial sites dedicated to Everest climbers.",
    highlights: ["Thukla Pass", "Everest Memorials", "Glacier Views"],
    stay: "Tea House · Lobuche",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 9",
    title: "Lobuche → Gorakshep → Everest Base Camp → Gorakshep",
    description:
      "Continue to Gorakshep and reach the legendary Everest Base Camp before returning to Gorakshep.",
    highlights: [
      "Khumbu Glacier",
      "Everest Base Camp",
      "Prayer Flags",
      "World’s Highest Peak Region",
    ],
    stay: "Tea House · Gorakshep",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 10",
    title: "Kala Patthar → Pheriche",
    description:
      "Begin early for the sunrise viewpoint at Kala Patthar, then descend towards Pheriche.",
    highlights: ["Kala Patthar", "Mount Everest Sunrise", "Nuptse", "Pumori", "Pheriche"],
    stay: "Tea House · Pheriche",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 11",
    title: "Pheriche → Namche Bazaar",
    description:
      "Descend through mountain villages, forest trails and river landscapes back to Namche Bazaar.",
    highlights: ["Sherpa Villages", "Forest Trails", "Mountain Rivers"],
    stay: "Tea House · Namche Bazaar",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 12",
    title: "Namche Bazaar → Lukla",
    description:
      "Complete the final trekking day and reach Lukla, marking the successful completion of the trail.",
    highlights: ["Final Trek", "Lukla Market", "Expedition Celebration"],
    stay: "Tea House · Lukla",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 13",
    title: "Lukla → Kathmandu",
    description:
      "Fly back to Kathmandu and enjoy free time for shopping, sightseeing or rest.",
    highlights: ["Scenic Mountain Flight", "Kathmandu Markets", "Leisure Time"],
    stay: "Hotel · Kathmandu",
    meals: "Breakfast",
  },
  {
    day: "Day 14",
    title: "Departure",
    description:
      "Transfer to Kathmandu International Airport for the onward journey.",
    highlights: ["Airport Transfer", "Expedition Concludes"],
    stay: "—",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Kathmandu–Lukla–Kathmandu flights",
  "Airport transfers",
  "Twin-sharing hotel accommodation in Kathmandu",
  "Tea house accommodation during the trek",
  "Breakfast in Kathmandu",
  "Breakfast, lunch and dinner during the trek",
  "Licensed English-speaking trek leader",
  "One porter for every two trekkers",
  "Sagarmatha National Park permit",
  "Khumbu Rural Municipality permit",
  "First-aid kit",
  "Pulse oximeter",
  "Trek completion certificate",
];

const exclusions = [
  "International airfare",
  "Nepal visa fee",
  "Travel insurance · mandatory",
  "Personal trekking gear",
  "Hot shower charges",
  "Wi-Fi charges",
  "Battery charging charges",
  "Laundry",
  "Personal expenses",
  "Beverages",
  "Tips for guides and porters",
  "Emergency evacuation",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Passport must be valid for at least six months.",
  "Nepal visa is required.",
  "Comprehensive travel insurance covering high-altitude trekking is mandatory.",
  "Lukla flights are weather-dependent.",
  "The itinerary may change due to weather, flight delays or safety concerns.",
  "Acclimatization days are essential and should not be skipped.",
  "Mobile connectivity is limited in remote sections.",
  "Follow the trek leader’s instructions at all times.",
  "This is a challenging high-altitude trek intended for experienced trekkers with suitable fitness and medical readiness.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Namche_Bazaar%2C_Nepal.jpg?width=1600",
    alt: "Namche Bazaar in the Khumbu region of Nepal",
    caption: "Namche Bazaar · Gateway to Everest",
    source: "https://commons.wikimedia.org/wiki/File:Namche_Bazaar,_Nepal.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mount_Everest_from_Kala_Patther.jpg?width=1600",
    alt: "Mount Everest viewed from Kala Patthar",
    caption: "Mount Everest from Kala Patthar",
    source: "https://commons.wikimedia.org/wiki/File:Mount_Everest_from_Kala_Patther.jpg",
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

export default function EverestBaseCampPage() {
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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 52%, rgba(0,0,0,0.35) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved International Expedition · TM-I001
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Everest Base Camp
            <span className="block text-amber-300">Trek</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 14 Days / 13 Nights high-altitude expedition through the Khumbu
            region, reaching Everest Base Camp and the Kala Patthar viewpoint.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Kathmandu to Kathmandu",
              "5,545 m",
              "Approx. 130 km",
              "Challenging",
              "Minimum Age 16",
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
          title="Namche Bazaar and the Everest viewpoint"
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
            href="https://commons.wikimedia.org/wiki/File:EVEREST_BASE_CAMP.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Osamu Suzuki
          </a>{" "}
          · CC BY-SA 4.0;{" "}
          <a
            href={photos[0].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Vyacheslav Argenberg
          </a>{" "}
          · CC BY 4.0;{" "}
          <a
            href={photos[1].source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Goutam1962
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
            <SectionTitle eyebrow="High-Altitude Safety" title="Important notes" />
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
                <dd className="mt-1 font-semibold">Kathmandu</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Reporting Time</dt>
                <dd className="mt-1 font-semibold">
                  As communicated before departure
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Accommodation</dt>
                <dd className="mt-1 font-semibold">Hotel & Tea Houses</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Passport</dt>
                <dd className="mt-1 font-semibold">Mandatory</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Travel Insurance</dt>
                <dd className="mt-1 font-semibold">
                  Mandatory · High-altitude trekking coverage required
                </dd>
              </div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Final flight, permit, tea-house and operational availability will be
              confirmed in writing before booking.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-amber-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
            Emergency Support
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-stone-600">
            Trip Mosaic’s expedition team provides operational coordination, first-aid
            support and altitude monitoring during the trek. Evacuation coordination
            will be arranged when required; helicopter or medical evacuation charges
            remain payable by the traveller or through valid travel insurance.
          </p>
          <p className="mt-4 text-sm font-semibold text-stone-800">
            Cancellation and refunds apply under Trip Mosaic’s official international
            tour cancellation policy.
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Expedition Support
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan Everest Base Camp with preparation, acclimatization and clear support.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final dates, flight operations, permits, fitness requirements and
            availability will be reviewed before booking confirmation.
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
