import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Winter Spiti Expedition 8 Nights / 9 Days | Trip Mosaic",
  description:
    "Approved Winter Spiti Expedition from Delhi through Shimla, Sarahan, Sangla, Chitkul, Nako, Tabo, Kaza, Kalpa and the Hindustan-Tibet route.",
};

const PHONE = "+919183269700";

const WHATSAPP = `https://wa.me/917389842730?text=${encodeURIComponent(
  "TM-WEB | Hello Trip Mosaic, I'm interested in the Winter Spiti Expedition 8 Nights / 9 Days itinerary listed on your website. Please share the available dates, complete itinerary, Volvo transfers, expedition vehicle, hotels, guest houses, homestays, inclusions, exclusions, pricing, winter preparation guidance, and booking process."
)}`;

const quickFacts = [
  ["Duration", "8 Nights / 9 Days"],
  ["Pickup & Drop", "Delhi"],
  ["Destination", "Winter Spiti Valley"],
  ["Maximum Altitude", "Approx. 4,587 m"],
  ["Difficulty", "Moderate to Challenging"],
  ["Best Season", "October–January"],
  ["Accommodation", "Hotels · Guest Houses · Homestays"],
  ["Transport", "Volvo + Tempo Traveller / SUV"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Delhi → Shimla",
    description:
      "Report at the designated boarding point in Delhi during the evening and begin the overnight journey to Shimla by Volvo bus. Meet the Trip Mosaic coordination team or designated group representative before departure.",
    highlights: [
      "Group Reporting and Briefing",
      "Overnight Volvo Journey",
      "Introduction to Fellow Travellers",
      "Himalayan Expedition Begins",
    ],
    stay: "Overnight Volvo Bus",
    meals: "Not Included",
  },
  {
    day: "Day 2",
    title: "Shimla → Sarahan",
    description:
      "Arrive in Shimla and transfer to the expedition vehicle. Travel through mountain roads, deodar forests, river valleys and traditional Himachali settlements before reaching Sarahan. Subject to arrival time and weather, explore the village and Bhimakali Temple area.",
    highlights: [
      "Scenic Mountain Drive",
      "Sutlej Valley Views",
      "Sarahan Village",
      "Bhimakali Temple",
      "Shrikhand Mahadev Range",
    ],
    stay: "Hotel / Guest House · Sarahan",
    meals: "Dinner",
  },
  {
    day: "Day 3",
    title: "Sarahan → Chitkul → Sangla",
    description:
      "After breakfast, travel towards Sangla Valley and continue to Chitkul, subject to road accessibility. The route passes through apple orchards, narrow mountain roads, rocky valleys and the Baspa River. Return to Sangla for the night.",
    highlights: [
      "Sangla Valley",
      "Baspa River",
      "Chitkul Village",
      "Snow-Covered Landscapes",
      "Apple Orchards",
      "Indo-Tibetan Border Region",
    ],
    stay: "Hotel / Guest House · Sangla",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Sangla → Nako → Tabo",
    description:
      "Begin the journey towards the cold-desert landscape of Spiti Valley. Follow the Sutlej River and stop at Khab Sangam before continuing to Nako. Visit Nako Lake and the village surroundings, subject to weather and road conditions, before reaching Tabo.",
    highlights: [
      "Khab Sangam",
      "Nako Village",
      "Nako Lake",
      "Nako Monastery",
      "Entry into Spiti Valley",
      "Traditional Homestay Experience",
    ],
    stay: "Homestay / Guest House · Tabo",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Tabo → Gue → Dhankar → Kaza",
    description:
      "Visit Tabo Monastery before travelling towards Gue Village to see the naturally preserved mummy, subject to road access. Continue to Dhankar Village and Monastery before reaching Kaza.",
    highlights: [
      "Tabo Monastery",
      "Ancient Buddhist Art",
      "Gue Village",
      "Naturally Preserved Mummy",
      "Dhankar Monastery",
      "Spiti River Valley",
      "Arrival at Kaza",
    ],
    stay: "Hotel / Homestay · Kaza",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 6",
    title: "Kaza Local Sightseeing",
    description:
      "Enjoy a full-day excursion around Kaza. Visit Key Monastery, Kibber, Chicham Bridge, Hikkim, Komic and Langza wherever road, snowfall and local-authority conditions permit. Return to Kaza in the evening.",
    highlights: [
      "Key Monastery",
      "Kibber Village",
      "Chicham Bridge",
      "Hikkim Post Office",
      "Komic Village",
      "Langza Buddha Statue",
      "Winter Spiti Landscapes",
    ],
    stay: "Hotel / Homestay · Kaza",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 7",
    title: "Kaza → Kalpa",
    description:
      "Begin the return journey towards Kalpa through the remote valleys of Spiti and Kinnaur. Travel across frozen stretches, rocky mountain faces and narrow highways. Snow chains may be used wherever required.",
    highlights: [
      "High-Altitude Winter Drive",
      "Khab Bridge",
      "Snow-Covered Roads",
      "Roghi Village",
      "Kinnaur Kailash Views",
      "Kalpa Village",
    ],
    stay: "Hotel / Guest House · Kalpa",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 8",
    title: "Kalpa → Shimla → Delhi",
    description:
      "After breakfast, travel towards Shimla through the Sutlej Valley, winding roads and deodar forests. Transfer to the designated Volvo boarding point and begin the overnight journey to Delhi.",
    highlights: [
      "Sutlej Valley Drive",
      "Deodar Forests",
      "Return to Shimla",
      "Overnight Volvo Journey",
    ],
    stay: "Overnight Volvo Bus",
    meals: "Breakfast",
  },
  {
    day: "Day 9",
    title: "Arrival in Delhi",
    description:
      "Arrive in Delhi in the morning, marking the completion of the Winter Spiti Expedition. Arrival time may vary because of traffic, weather, road diversions and Volvo operations.",
    highlights: [
      "Arrival in Delhi",
      "Expedition Concludes",
      "Departure Assistance",
    ],
    stay: "Tour Ends",
    meals: "Not Included",
  },
];

const inclusions = [
  "Delhi to Shimla and Shimla to Delhi Volvo transfers",
  "Ground transportation by Tempo Traveller or SUV",
  "Six nights accommodation in hotels, guest houses or homestays",
  "Double or triple sharing accommodation as selected",
  "Breakfast and dinner as mentioned in the itinerary",
  "Inner Line Permits wherever required",
  "Driver allowance, toll taxes and parking charges",
  "Trip Captain or Group Leader",
  "Oxygen cylinder for emergency use",
  "Snow chains in the expedition vehicle",
  "Basic first-aid support",
  "Trip coordination and operational assistance",
];

const exclusions = [
  "Airfare, train fare or travel not specifically mentioned",
  "Lunch, snacks and meals not mentioned",
  "Personal expenses and shopping",
  "Alcoholic and non-alcoholic beverages",
  "Laundry and room-heater charges",
  "Travel insurance",
  "Emergency evacuation expenses",
  "Expenses caused by landslides, roadblocks, weather or vehicle breakdown",
  "GST, if applicable",
  "Anything not specifically mentioned under Package Includes",
];

const thingsToCarry = [
  "Heavy down jacket",
  "Fleece jacket or woollen sweater",
  "Thermal innerwear",
  "Quick-dry T-shirts",
  "Warm trek pants or track pants",
  "Woollen cap and balaclava",
  "Muffler or neck warmer",
  "Waterproof gloves",
  "Multiple pairs of warm socks",
  "Raincoat or poncho",
  "Waterproof trekking shoes with strong grip",
  "Backpack or duffel bag with rain cover",
  "Small day pack",
  "Valid Government Photo ID",
  "Head torch",
  "UV-protected sunglasses",
  "Sunscreen, cold cream and lip balm",
  "Water bottle",
  "Personal medicines",
  "Energy bars, dry fruits and electrolytes",
  "Power bank and mobile charger",
];

const notes = [
  "Winter Spiti is an extreme cold-weather destination and proper winter clothing is mandatory.",
  "Access to Chitkul, Gue, Dhankar, Hikkim, Komic, Langza and other locations is subject to snowfall and road conditions.",
  "Alternative sightseeing may be arranged when a scheduled destination is inaccessible.",
  "The itinerary may change due to weather, roadblocks, landslides, government advisories, traffic or participant safety.",
  "Accommodation in remote areas may provide basic facilities only.",
  "Continuous electricity, hot water, Wi-Fi, mobile connectivity and room heating cannot be guaranteed.",
  "Triple-sharing accommodation may include an additional mattress.",
  "Vehicles operate according to the fixed itinerary and are not available for personal disposal.",
  "Participants must follow the Trip Captain and driver's instructions.",
  "Travellers with heart, respiratory, blood-pressure or other medical conditions should consult a doctor before booking.",
  "Travel insurance with high-altitude and emergency coverage is strongly recommended.",
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

function DetailCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
      <h3 className="font-serif text-2xl font-semibold text-stone-950">
        {title}
      </h3>

      <ul className="mt-6 space-y-3 text-stone-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7">
            <span className="text-amber-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WinterSpitiExpeditionPage() {
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

      <section className="relative overflow-hidden bg-black px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.24),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.98),rgba(15,23,42,0.92),rgba(0,0,0,0.98))]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved Winter Road Expedition · TM-D007
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Winter Spiti
            <span className="block text-amber-300">
              Expedition · 8 Nights / 9 Days
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A supported high-altitude winter journey from Delhi through
            Kinnaur and Spiti, featuring snow-covered roads, remote villages,
            ancient monasteries, traditional homestays and dramatic cold-desert
            landscapes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Delhi to Delhi",
              "8 Nights / 9 Days",
              "Kinnaur + Spiti",
              "Winter Road Expedition",
              "Volvo + Expedition Vehicle",
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
            eyebrow="Approved Winter Route"
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
        <div className="grid gap-6 lg:grid-cols-2">
          <DetailCard title="Winter Things to Carry" items={thingsToCarry} />
          <DetailCard title="Important Notes" items={notes} />
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Winter Expedition Support
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan Winter Spiti with realistic, safety-reviewed guidance.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final departure, route accessibility, Volvo seats, expedition
            vehicle, accommodation and price will be confirmed in writing
            before booking.
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
