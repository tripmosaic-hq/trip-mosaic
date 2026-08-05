import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Spiti Valley Bike Expedition | Trip Mosaic",
  description:
    "Approved 8 Days / 7 Nights Spiti Valley Bike Expedition from Shimla with road captain, mechanic and backup support.",
};

const PHONE = "+919183269700";
const WHATSAPP = `https://wa.me/917389842730?text=${encodeURIComponent(
  "TM-WEB | Hello Trip Mosaic, I'm interested in the Spiti Valley Bike Expedition 8 Days / 7 Nights itinerary listed on your website. Please share the available dates, complete itinerary, inclusions, exclusions, bike options, pricing, and booking guidance."
)}`;

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bikers_in_Spiti_Valley.jpg?width=1920";

const quickFacts = [
  ["Duration", "8 Days / 7 Nights"],
  ["Pickup & Drop", "Shimla"],
  ["Maximum Altitude", "Approx. 4,551 m"],
  ["Difficulty", "Moderate to Challenging"],
  ["Best Season", "June - October"],
  ["Accommodation", "Hotels, Guest Houses & Camps"],
  ["Group Size", "Maximum 8 Riders"],
  ["Minimum Age", "18 Years with valid licence"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Shimla → Chitkul",
    description:
      "Begin the Himalayan motorcycle expedition from Shimla and ride through scenic valleys, apple orchards and mountain roads to Chitkul, near the Indo-Tibet border region.",
    highlights: ["Kufri", "Narkanda", "Kinnaur Valley", "Baspa River", "Chitkul Village"],
    stay: "Hotel / Guest House",
    meals: "Dinner",
  },
  {
    day: "Day 2",
    title: "Chitkul → Kalpa",
    description:
      "Ride through Sangla Valley and Karcham before reaching Kalpa, known for its traditional villages, apple orchards and views of the Kinner Kailash Range.",
    highlights: ["Sangla Valley", "Karcham", "Roghi Village", "Kinner Kailash Viewpoint", "Apple Orchards"],
    stay: "Hotel / Guest House",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 3",
    title: "Kalpa → Nako → Gue → Tabo",
    description:
      "Enter the Spiti Valley, visit Nako Lake and Gue Monastery, and continue to Tabo, home to one of the oldest Buddhist monasteries in the Himalayas.",
    highlights: ["Khab Sangam", "Nako Lake", "Gue Monastery", "Tabo Monastery", "Spiti landscapes"],
    stay: "Hotel / Guest House",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Tabo → Dhankar → Pin Valley → Kaza",
    description:
      "Ride through Dhankar Village and explore the dramatic landscapes of Pin Valley National Park before reaching Kaza.",
    highlights: ["Dhankar Monastery", "Dhankar Village", "Pin Valley National Park", "Kaza Town", "High-altitude desert"],
    stay: "Hotel / Guest House",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Kaza Local Sightseeing",
    description:
      "Explore the famous attractions around Kaza, including ancient monasteries, high-altitude villages and spectacular viewpoints.",
    highlights: ["Key Monastery", "Kibber", "Chicham Bridge", "Hikkim", "Komic", "Langza", "Fossil Park"],
    stay: "Hotel / Guest House",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 6",
    title: "Kaza → Losar → Kunzum Pass → Chandratal",
    description:
      "Ride through Losar, cross Kunzum Pass and continue to the Chandratal Lake campsite for a high-altitude camping experience.",
    highlights: ["Losar Village", "Kunzum Pass", "Chandratal Lake", "Himalayan landscapes", "Camping"],
    stay: "Camp",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 7",
    title: "Chandratal → Batal → Atal Tunnel → Manali",
    description:
      "Ride through adventurous Himalayan roads, cross Atal Tunnel and arrive in Manali for the final overnight stay of the expedition.",
    highlights: ["Batal", "Chacha Chachi Dhaba", "Atal Tunnel", "Hadimba Temple", "Vashisht Temple", "Old Manali", "Mall Road"],
    stay: "Hotel",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 8",
    title: "Manali → Shimla",
    description:
      "Begin the return journey to Shimla, marking the successful completion of the Spiti Valley Bike Expedition.",
    highlights: ["Scenic Himalayan Highway", "Mountain valleys", "Tour concludes"],
    stay: "—",
    meals: "Breakfast",
  },
];

const inclusions = [
  "Motorcycle as per selected package",
  "Fuel",
  "Backup vehicle",
  "Experienced road captain",
  "Certified mechanic support",
  "Medical assistance",
  "Accommodation during the expedition",
  "Breakfast & dinner as per itinerary",
  "Inner Line Permits, if applicable",
  "Group riding support",
  "Trip coordination & operational support",
];

const exclusions = [
  "Travel to Shimla",
  "Riding jacket, gloves & riding gear",
  "Lunch & personal snacks",
  "Entry fees to monuments",
  "Personal expenses",
  "Travel insurance",
  "Riding damage charges",
  "Motorcycle security deposit, if applicable",
  "GST, if applicable",
  "Anything not mentioned under Package Includes",
];

const notes = [
  "Carry a valid Driving Licence and Government Photo ID.",
  "Follow the Road Captain's instructions throughout the expedition.",
  "Wear approved riding safety gear at all times.",
  "Do not overtake without permission during group rides.",
  "Weather conditions in the Himalayas may change rapidly.",
  "Roads may remain affected by landslides or snowfall.",
  "The itinerary may change due to weather, road conditions or safety considerations.",
  "Mobile network connectivity may be limited in remote areas.",
  "Consumption of alcohol before or during riding is strictly prohibited.",
];

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Key_Monastery_Spiti.jpg?width=1600",
    alt: "Key Monastery in Spiti Valley",
    caption: "Key Monastery - Day 5",
    source: "https://commons.wikimedia.org/wiki/File:Key_Monastery_Spiti.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Drinking_water_of_Chandratal_lake.jpg?width=1600",
    alt: "Blue-green water of Chandratal Lake in Spiti Valley",
    caption: "Blue-green Chandratal Lake - Day 6",
    source: "https://commons.wikimedia.org/wiki/File:Drinking_water_of_Chandratal_lake.jpg",
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

export default function SpitiBikeExpeditionPage() {
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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.68) 52%, rgba(0,0,0,0.42) 100%), url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Approved Bike Expedition · TM-D006</p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Spiti Valley <span className="block text-amber-300">Bike Expedition</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            An 8 Days / 7 Nights supported motorcycle expedition from Shimla through Kinnaur and Spiti to Chandratal, Manali and back to Shimla.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Shimla to Shimla", "Moderate to Challenging", "June - October", "4,551 m", "18+ with licence"].map((item) => (
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
        <SectionTitle eyebrow="Journey Gallery" title="High roads, monasteries and blue-green water" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-72 w-full object-cover sm:h-96" />
              <figcaption className="p-5">
                <p className="font-serif text-xl font-semibold">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-stone-500">
          Photo credits:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Bikers_in_Spiti_Valley.jpg" target="_blank" rel="noreferrer" className="underline underline-offset-4">AjayParkash</a>,{" "}
          <a href={photos[0].source} target="_blank" rel="noreferrer" className="underline underline-offset-4">Shivendujha</a>{" "}
          &{" "}
          <a href={photos[1].source} target="_blank" rel="noreferrer" className="underline underline-offset-4">Shiva Garg</a>{" "}
          · CC BY-SA 4.0 · Photos sourced from Wikimedia Commons.
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
            <SectionTitle eyebrow="Before You Ride" title="Important notes" />
            <ul className="mt-7 space-y-4">
              {notes.map((note) => (
                <li key={note} className="flex gap-3 leading-7 text-stone-600"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />{note}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl bg-amber-100 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-amber-800">Booking Information</p>
            <dl className="mt-6 space-y-5">
              <div><dt className="text-sm text-stone-600">Reporting Point</dt><dd className="mt-1 font-semibold">Shimla</dd></div>
              <div><dt className="text-sm text-stone-600">Reporting Time</dt><dd className="mt-1 font-semibold">As communicated before departure</dd></div>
              <div><dt className="text-sm text-stone-600">Minimum Age</dt><dd className="mt-1 font-semibold">18 Years</dd></div>
              <div><dt className="text-sm text-stone-600">Driving Licence</dt><dd className="mt-1 font-semibold">Mandatory</dd></div>
              <div><dt className="text-sm text-stone-600">Maximum Group</dt><dd className="mt-1 font-semibold">8 Riders</dd></div>
            </dl>
            <p className="mt-7 border-t border-amber-300 pt-6 text-sm leading-6 text-stone-700">
              Final motorcycle variant, availability, applicable deposit and supplier conditions will be confirmed in writing before booking.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Trip Mosaic Support</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">Plan the expedition with clear, human-reviewed guidance.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">Final availability, price, motorcycle variant and services will be confirmed in writing before booking.</p>
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
