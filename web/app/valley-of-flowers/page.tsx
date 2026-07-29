import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Valley of Flowers & Hemkund Sahib | Trip Mosaic",
  description:
    "Approved 6 Days / 5 Nights Valley of Flowers and Hemkund Sahib itinerary from Haridwar.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/919183269700?text=${encodeURIComponent(
  "Namaste Trip Mosaic, mujhe Valley of Flowers & Hemkund Sahib 6D/5N trek ke baare mein jaankari chahiye."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Valley_of_flowers_national_park%2C_Uttarakhand%2C_India_03.jpg?width=1920";

const quickFacts = [
  ["Duration", "6 Days / 5 Nights"],
  ["Pickup & Drop", "Haridwar"],
  ["Maximum Altitude", "4,329 m"],
  ["Trek Distance", "Approx. 38 km"],
  ["Difficulty", "Moderate"],
  ["Best Season", "July – September"],
  ["Accommodation", "Hotel & Guest House"],
  ["Group Size", "Maximum 30"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Haridwar → Govindghat",
    description:
      "Drive through Rishikesh, Devprayag, Rudraprayag, Karnaprayag, Nandprayag and Joshimath before reaching Govindghat.",
    highlights: ["Scenic Himalayan drive", "Five Prayag confluences", "Alaknanda River", "Joshimath"],
    meals: "Dinner",
  },
  {
    day: "Day 2",
    title: "Govindghat → Ghangaria",
    description:
      "Trek from Govindghat to Ghangaria through forests, waterfalls and the beautiful Lakshman Ganga valley.",
    highlights: ["Pulna Village", "Lakshman Ganga River", "Waterfalls", "Mountain forest trail"],
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 3",
    title: "Ghangaria → Valley of Flowers → Ghangaria",
    description:
      "Begin an early trek into the UNESCO World Heritage Site. Explore colourful alpine meadows filled with Himalayan flowers before returning to Ghangaria.",
    highlights: ["Valley of Flowers National Park", "Alpine meadows", "Rare Himalayan flora", "Waterfalls", "Photography"],
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Ghangaria → Hemkund Sahib → Ghangaria",
    description:
      "A steep climb leads to the sacred Hemkund Sahib beside the pristine glacial lake at 4,329 metres. After darshan and exploration, descend back to Ghangaria.",
    highlights: ["Hemkund Sahib", "Hemkund Lake", "Brahma Kamal (seasonal)", "Panoramic Himalayan views"],
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Ghangaria → Govindghat → Haridwar",
    description:
      "Descend to Govindghat and begin the return drive towards Haridwar through the scenic Himalayan valleys.",
    highlights: ["Final trek descent", "Mountain landscapes", "Alaknanda Valley", "Journey back"],
    meals: "Breakfast",
  },
  {
    day: "Day 6",
    title: "Arrival at Haridwar",
    description: "Arrive at Haridwar, marking the completion of the Himalayan journey.",
    highlights: ["Tour ends", "Departure assistance"],
    meals: "—",
  },
];

const inclusions = [
  "Haridwar to Haridwar transportation",
  "Hotel & guest house accommodation",
  "Trek leader",
  "Certified local guide",
  "Forest entry permits",
  "Valley of Flowers entry",
  "Basic medical kit",
  "Emergency oxygen cylinder",
  "Meals as per itinerary",
  "Guest-house sleeping arrangement",
  "Trip coordination & support",
];

const exclusions = [
  "Travel to Haridwar",
  "Lunch & personal snacks",
  "Porter / mule charges",
  "Personal expenses",
  "Personal trekking equipment",
  "Travel insurance",
  "Emergency evacuation cost",
  "Camera fees, if applicable",
  "GST, if applicable",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Carry a valid Government Photo ID.",
  "Entry inside Valley of Flowers is permitted only during park timings.",
  "Weather in the Himalayas changes rapidly.",
  "Plastic waste is strictly prohibited.",
  "Smoking and alcohol are not permitted during the trek.",
  "Follow the Trek Leader's instructions at all times.",
  "The itinerary may change due to weather, road conditions or safety concerns.",
  "Hemkund Sahib remains subject to weather and local-authority permissions.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Entrance_to_the_Valley_of_Flowers.jpg?width=1600",
    alt: "Entrance trail to Valley of Flowers National Park",
    caption: "Valley of Flowers entrance trail",
    credit: "Manas Jaitly",
    source: "https://commons.wikimedia.org/wiki/File:Entrance_to_the_Valley_of_Flowers.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hemkund_Sahib_Gurudwara_with_reflection_on_lake.jpg?width=1600",
    alt: "Hemkund Sahib Gurudwara reflected in Hemkund Lake",
    caption: "Hemkund Sahib and the glacial lake",
    credit: "Wiki maddymadhavan",
    source: "https://commons.wikimedia.org/wiki/File:Hemkund_Sahib_Gurudwara_with_reflection_on_lake.jpg",
  },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-950 sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function ValleyOfFlowersPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-300/20 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-xl font-black tracking-[0.14em] text-amber-300 sm:text-2xl">TRIP MOSAIC</Link>
          <Link href="/#experiences" className="text-sm font-semibold text-stone-300 hover:text-amber-300">← All Journeys</Link>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-black px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.68) 52%, rgba(0,0,0,0.42) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Approved Signature Trek · TM-D001</p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Valley of Flowers <span className="block text-amber-300">& Hemkund Sahib</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 6 Days / 5 Nights Himalayan trek from Haridwar through Govindghat and Ghangaria to colourful alpine meadows and the sacred Hemkund Sahib.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Haridwar to Haridwar", "Moderate", "July – September", "4,329 m"].map((item) => (
              <span key={item} className="rounded-full border border-amber-300/30 bg-black/45 px-4 py-2 text-sm backdrop-blur">{item}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-amber-300 px-7 py-4 text-center font-bold text-black hover:bg-amber-200">Enquire on WhatsApp</a>
            <a href={`tel:${PHONE}`} className="rounded-full border border-amber-300/60 px-7 py-4 text-center font-semibold text-amber-300 hover:bg-amber-300/10">Call +91 91832 69700</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickFacts.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{label}</p>
              <p className="mt-2 font-semibold text-stone-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Journey Gallery" title="Nature, trail and sacred altitude" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              {/* Wikimedia Commons files approved for this itinerary. */}
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-72 w-full object-cover sm:h-96" />
              <figcaption className="p-5">
                <p className="font-serif text-xl font-semibold">{photo.caption}</p>
                <p className="mt-2 text-sm text-stone-500">
                  Photo: {photo.credit} · CC BY-SA 4.0 ·{" "}
                  <a href={photo.source} target="_blank" rel="noreferrer" className="text-amber-700 underline underline-offset-4">Wikimedia Commons</a>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-stone-500">
          Hero photo: Rohit Sharma, CC BY-SA 4.0, Wikimedia Commons. Images are displayed without implying photographer endorsement.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Approved Plan" title="Day-wise itinerary" />
        <div className="mt-8 space-y-5">
          {itinerary.map((item) => (
            <article key={item.day} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="w-fit rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-black">{item.day}</span>
                <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 max-w-4xl leading-7 text-stone-600">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700">{highlight}</span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-amber-700">Meals: {item.meals}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#090909] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/20 bg-white/5 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">Package Includes</p>
            <ul className="mt-6 space-y-3 text-stone-300">{inclusions.map((item) => <li key={item}>✓ {item}</li>)}</ul>
          </div>
          <div className="rounded-3xl border border-rose-400/20 bg-white/5 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-400">Package Excludes</p>
            <ul className="mt-6 space-y-3 text-stone-300">{exclusions.map((item) => <li key={item}>× {item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionTitle eyebrow="Before You Travel" title="Important notes" />
            <ul className="mt-7 space-y-4">
              {notes.map((note) => (
                <li key={note} className="flex gap-3 leading-7 text-stone-600"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />{note}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl bg-amber-100 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-amber-800">Booking Information</p>
            <dl className="mt-6 space-y-5">
              <div><dt className="text-sm text-stone-600">Reporting Point</dt><dd className="mt-1 font-semibold">Haridwar</dd></div>
              <div><dt className="text-sm text-stone-600">Reporting Time</dt><dd className="mt-1 font-semibold">As communicated before departure</dd></div>
              <div><dt className="text-sm text-stone-600">Minimum Age</dt><dd className="mt-1 font-semibold">10 Years</dd></div>
              <div><dt className="text-sm text-stone-600">Meal Plan</dt><dd className="mt-1 font-semibold">Breakfast & Dinner as per itinerary</dd></div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Cancellation and refund will be processed according to Trip Mosaic&apos;s official cancellation policy after verification of applicable supplier charges.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Trip Mosaic Support</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">Plan the trek with clear, human-reviewed guidance.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">Final availability, price and services will be confirmed in writing before booking.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-amber-300 px-7 py-4 font-bold text-black hover:bg-amber-200">WhatsApp Trip Mosaic</a>
            <a href={`tel:${PHONE}`} className="rounded-full border border-amber-300/50 px-7 py-4 font-semibold text-amber-300">Call +91 91832 69700</a>
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
