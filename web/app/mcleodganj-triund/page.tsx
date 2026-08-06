import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title:
    "Delhi to McLeodganj & Triund Trek 5 Days / 4 Nights | Trip Mosaic",
  description:
    "Approved Delhi to McLeodganj and Triund Trek itinerary featuring local sightseeing, trekking, camping and Volvo transfers.",
};

const PHONE = "+919183269700";

const WHATSAPP = `https://wa.me/917389842730?text=${encodeURIComponent(
  "TM-WEB | Hello Trip Mosaic, I'm interested in the Delhi to McLeodganj & Triund Trek 5 Days / 4 Nights itinerary listed on your website. Please share the available dates, complete itinerary, Volvo arrangements, hotel and campsite details, inclusions, exclusions, pricing, preparation guidance, and booking process."
)}`;

const quickFacts = [
  ["Duration", "5 Days / 4 Nights"],
  ["Pickup & Drop", "Delhi"],
  ["Destination", "McLeodganj & Triund"],
  ["Maximum Altitude", "Approx. 2,850 m"],
  ["Difficulty", "Easy to Moderate"],
  ["Trek Distance", "Approx. 9 km"],
  ["Transport", "Volvo Bus"],
  ["Best Season", "March–June & September–December"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Delhi → McLeodganj",
    description:
      "Report at the designated boarding point in Delhi during the evening and board the overnight Volvo bus to McLeodganj. Relax during the journey through the Himalayan foothills.",
    highlights: [
      "Volvo Journey",
      "Comfortable Overnight Travel",
      "Himalayan Road Trip Begins",
    ],
    stay: "Overnight Volvo Bus",
    meals: "Not Included",
  },
  {
    day: "Day 2",
    title: "Arrival at McLeodganj & Local Sightseeing",
    description:
      "Arrive in McLeodganj in the morning and check into the hotel. After freshening up, explore the important attractions of McLeodganj and Dharamshala.",
    highlights: [
      "Dalai Lama Temple",
      "Namgyal Monastery",
      "Bhagsu Waterfall",
      "Naddi View Point",
      "Local Tibetan Market",
      "Tibetan Culture",
    ],
    stay: "Hotel · McLeodganj",
    meals: "Dinner",
  },
  {
    day: "Day 3",
    title: "Triund Trek & Camping",
    description:
      "After breakfast, drive to the trek starting point and begin the scenic trek towards Triund. Walk through oak and rhododendron forests while enjoying views of the Dhauladhar Range. Reach the campsite for sunset, weather-permitting bonfire, stargazing and overnight camping.",
    highlights: [
      "Triund Trek",
      "Dhauladhar Mountain Views",
      "Forest Trail",
      "Sunset Point",
      "Bonfire · Weather Permitting",
      "Stargazing",
      "Himalayan Camping",
    ],
    stay: "Campsite · Triund",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Triund → McLeodganj → Delhi",
    description:
      "Wake up early for the Himalayan sunrise. After breakfast, descend to McLeodganj. Enjoy free time for cafés, shopping or local exploration before boarding the evening Volvo bus to Delhi.",
    highlights: [
      "Sunrise at Triund",
      "Scenic Descent",
      "McLeodganj Café Culture",
      "Local Shopping",
      "Overnight Volvo Journey",
    ],
    stay: "Overnight Volvo Bus",
    meals: "Breakfast",
  },
  {
    day: "Day 5",
    title: "Arrival in Delhi",
    description:
      "Arrive in Delhi in the morning, marking the completion of the McLeodganj and Triund Himalayan journey.",
    highlights: ["Arrival in Delhi", "Tour Concludes"],
    stay: "Tour Ends",
    meals: "Not Included",
  },
];

const inclusions = [
  "Delhi–McLeodganj–Delhi Volvo bus tickets",
  "One night hotel accommodation in McLeodganj",
  "One night camping at Triund",
  "Twin or double sharing accommodation",
  "Two breakfasts and two dinners",
  "Sightseeing as per itinerary",
  "Trek guide and operational support",
  "Bonfire, subject to weather and local regulations",
  "Stargazing experience",
  "Toll taxes, parking and driver allowance",
];

const exclusions = [
  "Lunch and meals not mentioned in the itinerary",
  "Personal expenses and shopping",
  "Entry tickets",
  "Adventure activities",
  "Travel insurance",
  "Camera charges, wherever applicable",
  "Emergency evacuation and hospitalization expenses",
  "Anything not specifically mentioned under Package Includes",
];

const thingsToCarry = [
  "Warm jacket and fleece jacket",
  "Rain jacket or poncho",
  "Thermal wear during winter",
  "Trek pants and extra T-shirts",
  "Woollen cap, gloves and extra socks",
  "Trekking shoes with proper grip",
  "Backpack and small day pack",
  "Sunglasses and sunscreen",
  "Water bottle and head torch",
  "Power bank and mobile charger",
  "Personal medicines",
  "Valid Government Photo ID",
  "Energy bars and dry fruits",
];

const notes = [
  "Carry a valid Government Photo ID.",
  "The trek operates unless weather or local authorities declare conditions unsafe.",
  "Bonfire is subject to local regulations and weather conditions.",
  "Camping may be provided on twin or triple sharing basis.",
  "Mobile connectivity may be weak at Triund.",
  "The itinerary may change due to weather, road conditions or government advisories.",
  "Trekking shoes with proper grip are strongly recommended.",
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

export default function McleodganjTriundPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.96),rgba(20,20,20,0.88),rgba(0,0,0,0.98))]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved Himalayan Trek · TM-D010
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            McLeodganj
            <span className="block text-amber-300">& Triund Trek</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A 5 Days / 4 Nights Himalayan experience from Delhi combining
            Tibetan culture, local sightseeing, forest trekking, Triund
            camping, stargazing and panoramic views of the Dhauladhar Range.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Delhi to Delhi",
              "5 Days / 4 Nights",
              "Beginner Friendly",
              "Hotel + Campsite",
              "Volvo Transfers",
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
        <div className="grid gap-6 lg:grid-cols-2">
          <DetailCard title="Things to Carry" items={thingsToCarry} />
          <DetailCard title="Important Notes" items={notes} />
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black p-8 text-center text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Trip Mosaic Trek Support
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan your McLeodganj and Triund journey with clear guidance.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final dates, Volvo availability, hotel, campsite, trek operations
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
