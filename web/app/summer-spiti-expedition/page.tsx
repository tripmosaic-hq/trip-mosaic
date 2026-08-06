import type { Metadata } from "next";
import Link from "next/link";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "Summer Spiti Expedition 8 Nights / 9 Days | Trip Mosaic",
  description:
    "Approved Summer Spiti Expedition from Delhi through Shimla, Kinnaur, Spiti Valley, Chandratal Lake, Atal Tunnel and Manali.",
};

const PHONE = "+919183269700";

const WHATSAPP = `https://wa.me/917389842730?text=${encodeURIComponent(
  "TM-WEB | Hello Trip Mosaic, I'm interested in the Summer Spiti Expedition 8 Nights / 9 Days itinerary listed on your website. Please share the available dates, complete itinerary, Volvo transfers, vehicle arrangements, hotels, homestays, Chandratal camp, permits, inclusions, exclusions, pricing, preparation guidance, and booking process."
)}`;

const quickFacts = [
  ["Duration", "8 Nights / 9 Days"],
  ["Pickup & Drop", "Delhi"],
  ["Destination", "Summer Spiti Valley"],
  ["Maximum Altitude", "Approx. 4,587 m"],
  ["Difficulty", "Moderate"],
  ["Best Season", "May–October"],
  ["Accommodation", "Hotels · Homestays · Camps"],
  ["Transport", "Volvo + Tempo Traveller / SUV"],
];

const itinerary = [
  {
    day: "Day 1",
    title: "Delhi → Shimla",
    description:
      "Report at the designated boarding point in Delhi during the evening and board the overnight Volvo coach to Shimla. Meet the Trip Mosaic coordinator and fellow travellers before beginning the Himalayan expedition.",
    highlights: [
      "Overnight Volvo Journey",
      "Group Introduction",
      "Expedition Briefing",
      "Himalayan Journey Begins",
    ],
    stay: "Overnight Volvo Bus",
    meals: "Not Included",
  },
  {
    day: "Day 2",
    title: "Shimla → Sangla via Tranda Dhank",
    description:
      "Arrive in Shimla and transfer to the expedition vehicle. Drive along the historic Hindustan–Tibet Highway through deep valleys, mountain roads and hydroelectric landscapes. Cross Tranda Dhank and Karcham Dam before entering Sangla Valley beside the Baspa River.",
    highlights: [
      "Hindustan–Tibet Highway",
      "Tranda Dhank",
      "Karcham Dam",
      "Baspa River",
      "Sangla Valley",
    ],
    stay: "Hotel / Homestay · Sangla",
    meals: "Dinner",
  },
  {
    day: "Day 3",
    title: "Sangla → Chitkul → Kalpa",
    description:
      "After breakfast, visit Chitkul, one of the last inhabited villages near the Indo-Tibetan border. Continue towards Kalpa via Roghi Point and Reckong Peo. Reach Kalpa by evening and enjoy views of the Kinnaur Kailash range.",
    highlights: [
      "Chitkul Village",
      "Indo-Tibetan Border Region",
      "Baspa Valley",
      "Roghi Point",
      "Reckong Peo",
      "Kinnaur Kailash Views",
    ],
    stay: "Hotel · Kalpa",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 4",
    title: "Kalpa → Nako → Tabo",
    description:
      "Begin the drive towards Spiti Valley and witness the landscape gradually changing from green mountain valleys to the dramatic cold desert terrain. Visit Nako Village, Nako Lake and Nako Monastery before continuing to Tabo.",
    highlights: [
      "Sutlej Valley",
      "Nako Lake",
      "Nako Village",
      "Nako Monastery",
      "Entry into Spiti Valley",
    ],
    stay: "Hotel / Homestay · Tabo",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 5",
    title: "Tabo → Gue → Dhankar → Kaza",
    description:
      "Visit the ancient Tabo Monastery before travelling to Gue Village to see the naturally preserved mummy. Continue to Dhankar Monastery, situated above the confluence of the Spiti and Pin rivers, before reaching Kaza.",
    highlights: [
      "Tabo Monastery",
      "Gue Village",
      "Naturally Preserved Mummy",
      "Dhankar Monastery",
      "Pin–Spiti Confluence",
      "Scenic Mountain Drive",
    ],
    stay: "Hotel / Homestay · Kaza",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 6",
    title: "Kaza → Langza → Hikkim → Komic → Kaza",
    description:
      "Enjoy a full-day excursion to Spiti's famous high-altitude villages. Visit Langza and its giant Buddha statue, continue to Hikkim and its high-altitude post office, and explore Komic before returning to Kaza.",
    highlights: [
      "Langza Village",
      "Buddha Statue",
      "Marine Fossil Region",
      "Hikkim Post Office",
      "Komic Village",
      "High-Altitude Landscapes",
    ],
    stay: "Hotel / Homestay · Kaza",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 7",
    title:
      "Kaza → Key Monastery → Kibber → Chicham → Kunzum Pass → Chandratal",
    description:
      "Visit the iconic Key Monastery before continuing towards Kibber Village and Chicham Bridge. Cross Kunzum Pass and proceed to Chandratal Lake. Enjoy a short walk near the lake and spend the night at a fixed campsite, subject to weather and road conditions.",
    highlights: [
      "Key Monastery",
      "Kibber Village",
      "Chicham Bridge",
      "Kunzum Pass",
      "Chandratal Lake",
      "Himalayan Camping",
    ],
    stay: "Swiss Camp / Fixed Camp · Chandratal",
    meals: "Breakfast & Dinner",
  },
  {
    day: "Day 8",
    title: "Chandratal → Atal Tunnel → Manali → Delhi",
    description:
      "Wake up amidst the Himalayan landscape and begin the drive towards Manali. Travel through the Chandra Valley and cross the Atal Tunnel before reaching Manali. Board the overnight Volvo coach to Delhi.",
    highlights: [
      "Morning at Chandratal",
      "Chandra River",
      "Atal Tunnel",
      "Manali Valley",
      "Overnight Volvo Journey",
    ],
    stay: "Overnight Volvo Bus",
    meals: "Breakfast",
  },
  {
    day: "Day 9",
    title: "Arrival in Delhi",
    description:
      "Arrive in Delhi in the morning with unforgettable memories of the Summer Spiti Expedition.",
    highlights: ["Arrival in Delhi", "Expedition Ends"],
    stay: "Tour Ends",
    meals: "Not Included",
  },
];

const inclusions = [
  "Delhi to Shimla Volvo transfer",
  "Manali to Delhi Volvo transfer",
  "Ground transportation by Tempo Traveller or SUV",
  "Six nights accommodation in hotels or homestays",
  "One night fixed camp stay near Chandratal",
  "Breakfast and dinner as mentioned in the itinerary",
  "Inner Line Permits, wherever required",
  "Driver allowance, toll taxes and parking charges",
  "Trip Captain and operational coordination",
  "Mechanical support during the expedition",
  "Oxygen cylinder and oximeter",
  "Basic first-aid kit",
];

const exclusions = [
  "Airfare and train fare",
  "GST, if applicable",
  "Lunch, snacks and beverages",
  "Personal expenses and shopping",
  "Entry tickets and camera charges",
  "Adventure activities",
  "Laundry charges",
  "Travel insurance",
  "Expenses caused by road closures, landslides or weather",
  "Emergency evacuation and hospitalization expenses",
  "Anything not specifically mentioned under Package Includes",
];

const thingsToCarry = [
  "Warm jacket and fleece jacket",
  "Thermal innerwear",
  "Quick-dry T-shirts and trek pants",
  "Woollen cap, balaclava and gloves",
  "Extra pairs of warm socks",
  "Rain jacket or poncho",
  "Trekking shoes with proper grip",
  "Backpack and small day pack",
  "Valid Government Photo ID",
  "Head torch and power bank",
  "UV-protected sunglasses",
  "Sunscreen, cold cream and lip balm",
  "Water bottle",
  "Personal medicines",
  "Dry fruits and energy bars",
];

const notes = [
  "Chandratal Lake and Kunzum Pass are accessible only during the summer season and remain subject to road and weather conditions.",
  "Visits to Hikkim, Komic, Langza and other high-altitude villages may be modified during adverse weather.",
  "Accommodation in remote villages may provide basic facilities.",
  "Electricity, hot water, Wi-Fi and mobile connectivity may be limited.",
  "Triple-sharing accommodation may include an additional mattress.",
  "Vehicles operate according to the fixed itinerary and are not available for personal disposal.",
  "Air conditioning remains switched off in hilly regions.",
  "The itinerary may change due to weather, road conditions, government advisories or participant safety.",
  "Travel insurance with suitable high-altitude coverage is strongly recommended.",
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

export default function SummerSpitiExpeditionPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.24),transparent_38%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.97),rgba(28,20,8,0.9),rgba(0,0,0,0.98))]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Approved Himalayan Road Expedition · TM-D008
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Summer Spiti
            <span className="block text-amber-300">
              Expedition · 8 Nights / 9 Days
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 sm:text-lg">
            A complete Himalayan road journey from Delhi through Kinnaur and
            Spiti Valley, covering high-altitude villages, ancient monasteries,
            Chandratal Lake, Kunzum Pass, Atal Tunnel and Manali.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Delhi to Delhi",
              "8 Nights / 9 Days",
              "Kinnaur + Spiti",
              "Chandratal Camp",
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
            Trip Mosaic Expedition Support
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            Plan your Summer Spiti expedition with clear, reviewed guidance.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
            Final departure dates, Volvo seats, expedition vehicle, hotel,
            homestay, Chandratal camp and price will be confirmed in writing
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
