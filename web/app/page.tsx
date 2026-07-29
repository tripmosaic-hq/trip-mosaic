import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Annapurna Base Camp Trek 7 Days / 6 Nights | Trip Mosaic",
  description:
    "Approved Annapurna Base Camp trek itinerary from Pokhara via Jhinu Danda, Chhomrong, Machhapuchhre Base Camp and Annapurna Base Camp.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/919183269700?text=${encodeURIComponent(
  "Namaste Trip Mosaic, mujhe Annapurna Base Camp Trek 7D/6N ke baare mein jaankari chahiye."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Annapurna_Base_camp.jpg?width=1920";

const quickFacts = [
  ["Duration", "7 Days / 6 Nights"],
  ["Start & End", "Pokhara"],
  ["Maximum Altitude", "4,130 m"],
  ["Trek Distance", "Approx. 65–70 km"],
  ["Difficulty", "Moderate"],
  ["Best Season", "March–May & September–November"],
  ["Accommodation", "Tea Houses / Mountain Lodges"],
  ["Meals", "Breakfast, Lunch & Dinner during trek"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Pokhara → Jhinu Danda → Chhomrong",
    description:
      "Meet the Trip Mosaic team in Pokhara and drive to Jhinu Danda. Begin trekking through villages and stone staircases towards Chhomrong while enjoying the first views of the Annapurna range.",
    highlights: ["Scenic drive", "Jhinu Danda", "Chhomrong Village", "Gurung culture", "Mountain views"],
    stay: "Tea House · Chhomrong",
    meals: "Lunch & Dinner",
  },
  {
    day: "Day 2",
    title: "Chhomrong → Himalaya",
    description:
      "Descend towards Chhomrong Khola, cross the suspension bridge and continue through lush forest, Bamboo and Dovan before reaching Himalaya.",
    highlights: ["Suspension bridge", "Bamboo forest", "Dovan", "Modi Khola Valley"],
    stay: "Tea House · Himalaya",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 3",
    title: "Himalaya → Machhapuchhre Base Camp",
    description:
      "Climb gradually through Deurali and glacial landscapes to Machhapuchhre Base Camp at 3,700 m, with close views of the sacred Fishtail Mountain.",
    highlights: ["Deurali", "Glacier valley", "Machhapuchhre views", "Alpine landscape"],
    stay: "Tea House · MBC",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 4",
    title: "MBC → Annapurna Base Camp → Bamboo",
    description:
      "Start early for Annapurna Base Camp at 4,130 m. Spend time in the Annapurna Sanctuary, surrounded by Annapurna I, Annapurna South, Hiunchuli and Machhapuchhre, before descending to Bamboo.",
    highlights: ["Annapurna Base Camp", "Annapurna Sanctuary", "Sunrise views", "Himalayan panorama", "Descent to Bamboo"],
    stay: "Tea House · Bamboo",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 5",
    title: "Bamboo → Jhinu Danda",
    description:
      "Descend through Bamboo, Sinuwa and Chhomrong to Jhinu Danda. An optional visit to the natural hot springs near the Modi River may be taken.",
    highlights: ["Sinuwa", "Chhomrong", "Jhinu Hot Springs · Optional", "Riverside relaxation"],
    stay: "Tea House · Jhinu Danda",
    meals: "Breakfast, Lunch & Dinner",
  },
  {
    day: "Day 6",
    title: "Jhinu Danda → Pokhara",
    description:
      "Complete a short walk to the road head and return to Pokhara by private vehicle. Hotel stay in Pokhara is not included unless booked separately.",
    highlights: ["Scenic drive", "Pokhara", "Trek completion"],
    stay: "Own arrangement · Pokhara",
    meals: "Breakfast",
  },
  {
    day: "Day 7",
    title: "Departure from Pokhara",
    description:
      "Depart from Pokhara for the onward journey. Travellers may extend their stay independently for local sightseeing.",
    highlights: ["Departure", "Tour concludes"],
    stay: "—",
    meals: "Breakfast · If accommodation is booked",
  },
];

const inclusions = [
  "Private vehicle between Pokhara and Jhinu Danda",
  "Tea house / cottage accommodation",
  "Breakfast, lunch and dinner during the trek",
  "Licensed English/Hindi-speaking trek guide",
  "Annapurna Conservation Area Permit · ACAP",
  "TIMS / required trekking permits",
  "Guide salary, food and accommodation",
  "Basic first-aid kit",
  "Pulse oximeter",
  "Trek completion certificate",
];

const exclusions = [
  "Transportation to and from Pokhara",
  "Nepal travel and medical insurance",
  "Personal porter · Available on request",
  "Personal trekking equipment",
  "Hot shower, Wi-Fi and charging charges",
  "Drinking water and beverages",
  "Laundry and personal shopping",
  "Tips for guide and porter",
  "Emergency evacuation costs",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Passport is mandatory for foreign nationals.",
  "Carry original identification throughout the trek.",
  "Mountain weather can change rapidly.",
  "Hot showers, Wi-Fi and charging facilities are usually chargeable at tea houses.",
  "The itinerary may change due to weather, trail conditions or participant safety.",
  "Travel and medical insurance covering high-altitude trekking is strongly recommended.",
  "Optional porter services can be arranged on request.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Machhapuchhre_Base_Camp.jpg?width=1600",
    alt: "Machhapuchhre Base Camp in Nepal",
    caption: "Machhapuchhre Base Camp · Day 3",
    source: "https://commons.wikimedia.org/wiki/File:Machhapuchhre_Base_Camp.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Annapurna_Base_camp.jpg?width=1600",
    alt: "Annapurna Base Camp in Nepal",
    caption: "Annapurna Base Camp · Day 4",
    source: "https://commons.wikimedia.org/wiki/File:Annapurna_Base_camp.jpg",
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

export default function AnnapurnaBaseCampPage() {
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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.68) 52%, rgba(0,0,0,0.35) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Approved Nepal Trek · TM-I002</p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Annapurna Base Camp
            <span className="block text-amber-300">Trek</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 7 Days / 6 Nights trek from Pokhara through Gurung villages, forest trails, Machhapuchhre Base Camp and the Annapurna Sanctuary.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Pokhara to Pokhara", "4,130 m", "Approx. 65–70 km", "Moderate", "March–May & Sep–Nov"].map((item) => (
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
        <SectionTitle eyebrow="Journey Gallery" title="Machhapuchhre and Annapurna Base Camp" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-72 w-full object-cover sm:h-96" />
              <figcaption className="p-5"><p className="font-serif text-xl font-semibold">{photo.caption}</p></figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-stone-500">
          Photo credits: <a href={photos[1].source} target="_blank" rel="noreferrer" className="underline underline-offset-4">Bishow11</a> · CC BY-SA 3.0; <a href={photos[0].source} target="_blank" rel="noreferrer" className="underline underline-offset-4">Jodhani.micky</a> · CC BY-SA 3.0 · Photos sourced from Wikimedia Commons.
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
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-amber-700">
                <span>Stay: {item.stay}</span><span>Meals: {item.meals}</span>
              </div>
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
            <SectionTitle eyebrow="Before You Trek" title="Important notes" />
            <ul className="mt-7 space-y-4">
              {notes.map((note) => (
                <li key={note} className="flex gap-3 leading-7 text-stone-600"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />{note}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl bg-amber-100 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-amber-800">Booking Information</p>
            <dl className="mt-6 space-y-5">
              <div><dt className="text-sm text-stone-600">Reporting Point</dt><dd className="mt-1 font-semibold">Pokhara</dd></div>
              <div><dt className="text-sm text-stone-600">Transportation</dt><dd className="mt-1 font-semibold">Private vehicle · Pokhara–Jhinu Danda–Pokhara</dd></div>
              <div><dt className="text-sm text-stone-600">Accommodation</dt><dd className="mt-1 font-semibold">Tea Houses / Cottages</dd></div>
              <div><dt className="text-sm text-stone-600">Government ID</dt><dd className="mt-1 font-semibold">Mandatory</dd></div>
              <div><dt className="text-sm text-stone-600">Passport</dt><dd className="mt-1 font-semibold">Required for foreign nationals</dd></div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">Final permit, guide, tea-house and transport availability will be confirmed in writing before booking.</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-amber-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Cancellation & Emergency Support</p>
          <p className="mt-4 max-w-4xl leading-7 text-stone-600">The approved cancellation schedule applies. Trek permits are non-refundable once issued. Trip Mosaic’s expedition team provides operational support, basic first aid and pulse-oximeter monitoring; evacuation costs remain the traveller’s responsibility unless insured.</p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Trip Mosaic Nepal Support</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">Walk into the heart of the Annapurna Sanctuary.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">Final dates, permits, fitness requirements and mountain conditions will be reviewed before booking confirmation.</p>
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
