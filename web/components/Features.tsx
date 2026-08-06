// Trigger Vercel deployment
const packages = [
  {
    category: "TREK",
    title: "Valley of Flowers & Hemkund",
    description:
      "A carefully planned Himalayan journey through flower-filled valleys and the sacred Hemkund Sahib route.",
    href: "/valley-of-flowers",
  },
  {
    category: "TREK",
    title: "Har Ki Dun Trek",
    description:
      "A 7-day journey through ancient villages, forests, alpine meadows and the magnificent Valley of Gods.",
    href: "/har-ki-dun",
  },
  {
    category: "TREK",
    title: "Kasol–Kheerganga Trek",
    description:
      "A beginner-friendly 3-day trek through Parvati Valley, mountain villages, waterfalls and pine forests.",
    href: "/kasol-kheerganga",
  },
  {
    category: "TREK",
    title: "Kuari Pass Trek",
    description:
      "A 5-day Himalayan adventure through Joshimath, Tali Camp, Auli and the panoramic Kuari Pass.",
    href: "/kuari-pass",
  },
  {
    category: "BIKE EXPEDITION",
    title: "Spiti Valley Bike Expedition",
    description:
      "Ride through high-altitude roads, remote villages and dramatic landscapes with trusted ground support.",
    href: "/spiti-bike-expedition",
  },
  {
    category: "TREK",
    title: "Chopta–Tungnath–Chandrashila",
    description:
      "A short Himalayan escape featuring ancient Tungnath Temple and panoramic Chandrashila summit views.",
    href: "/chopta-tungnath/",
  },
  {
    category: "FAMILY HOLIDAY",
    title: "Kashmir Premium",
    description:
      "A comfortable Kashmir experience designed around scenic stays, transparent planning and personal support.",
    href: "/kashmir-premium/",
  },
  {
    category: "INTERNATIONAL TREK",
    title: "Everest Base Camp",
    description:
      "A legendary Himalayan expedition planned with preparation, safety guidance and reliable local coordination.",
    href: "/everest-base-camp/",
  },
{
  category: "INTERNATIONAL TREK",
  title: "Annapurna Base Camp",
  description:
    "A classic Himalayan trek from Pokhara through Gurung villages, forests and high-altitude landscapes to Annapurna Base Camp.",
  href: "/annapurna-base-camp/",
},
  ];
const whatsappNumber = "917389842730";
export default function Features() {
  return (
    <section
      id="experiences"
      className="bg-[#080808] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
          Flagship Journeys
        </p>

        <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Signature journeys. One promise:
          <span className="block text-amber-400">
            travel with trust.
          </span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
          Selected Himalayan experiences built around verified partners,
          transparent communication, thoughtful planning and personal support.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item, index) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              
`TM-WEB | Hello Trip Mosaic, I’m interested in the ${item.title} package listed on your website. Please share the itinerary, inclusions, travel dates, pricing, and booking guidance.`
     )}`;
              return (
              <article
                key={item.title}
                className="flex min-h-[330px] flex-col rounded-3xl border border-amber-400/20 bg-[#111111] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-amber-400">
                    {item.category}
                  </span>

                  <span className="font-serif text-3xl text-amber-400/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-3xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 leading-7 text-neutral-400">
                  {item.description}
                </p>

                <a
                  href={item.href ?? whatsappUrl}
                  target={item.href ? undefined : "_blank"}
                  rel={item.href ? undefined : "noreferrer"}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-4 font-semibold text-black transition hover:bg-amber-300"
                >
                  {item.href ? "View Itinerary" : "Enquire on WhatsApp"}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
