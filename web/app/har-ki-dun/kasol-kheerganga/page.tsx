import type { Metadata } from "next";
import TripTemplate from "@/components/TripTemplate";

export const metadata: Metadata = {
  title: "Kasol Kheerganga Trek 3 Days / 2 Nights | Trip Mosaic",
  description:
    "Approved Kasol to Kheerganga Trek itinerary covering Barshaini, Nakthan Village, Rudranag, Parvati Valley and the Kheerganga campsite.",
};

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kheerganga.JPG?width=1920",
    alt: "Kheerganga campsite surrounded by Himalayan mountains",
    caption: "Kheerganga Himalayan campsite",
    photographer: "Slopetrotter",
    resolution: "4032 × 3024 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Kheerganga.JPG",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rudranag_waterfall%2C_Himachal_Pradesh.jpg?width=1600",
    alt: "Rudranag waterfall on the Kheerganga trekking route",
    caption: "Rudranag waterfall",
    photographer: "Yuvraj Anand",
    resolution: "3120 × 4160 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Rudranag_waterfall,_Himachal_Pradesh.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kasol_Parvati_Valley.jpg?width=1600",
    alt: "Mountain landscape of Parvati Valley near Kasol",
    caption: "Kasol and Parvati Valley",
    photographer: "Atulshishodia",
    resolution: "1080 × 1350 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Kasol_Parvati_Valley.jpg",
  },
];

export default function KasolKheergangaPage() {
  return (
    <TripTemplate
      title="Kasol – Kheerganga Trek"
      subtitle="A beginner-friendly Himalayan journey through Parvati Valley, pine forests, mountain villages, waterfalls and the peaceful Kheerganga campsite."
      eyebrow="TM-D004 · Approved Master Itinerary"
      heroImage={photos[0].src}
      region="Parvati Valley, Himachal Pradesh"
      duration="3 Days / 2 Nights"
      bestSeason="March–June & September–November"
      overview={[
        "Beginning and ending in Kasol, this journey travels to Barshaini before following the scenic trekking trail through Nakthan Village, Rudranag Temple, waterfalls and dense pine forests to Kheerganga.",
        "The trek combines Himalayan landscapes, camping, sunrise views and time to explore the peaceful surroundings of Kheerganga at an altitude of 2,960 metres.",
      ]}
      facts={[
        {
          label: "Pickup & Drop",
          value: "Kasol",
        },
        {
          label: "Maximum Altitude",
          value: "2,960 m",
        },
        {
          label: "Trek Distance",
          value: "Approx. 24 km round trip",
        },
        {
          label: "Difficulty",
          value: "Easy to Moderate",
        },
        {
          label: "Accommodation",
          value: "Camp / Guest House",
        },
        {
          label: "Group / Age",
          value: "Max 25 · Min 10 years",
        },
      ]}
      highlights={[
        "Trek through the beautiful Parvati Valley.",
        "Walk past Nakthan Village, Rudranag Temple and mountain waterfalls.",
        "Experience dense pine forests and riverside trails.",
        "Stay at the scenic Kheerganga campsite.",
        "Enjoy Himalayan sunrise and panoramic mountain views.",
        "Travel with a trek leader, certified local guide and Trip Mosaic support.",
      ]}
      photos={photos}
      itinerary={[
        {
          day: "Day 1",
          title: "Kasol → Barshaini → Kheerganga",
          description:
            "Drive from Kasol to Barshaini and begin trekking through Nakthan Village, pine forests, waterfalls and Rudranag before reaching the scenic Kheerganga campsite.",
          stay: "Camp · Kheerganga",
          meals: "Dinner",
        },
        {
          day: "Day 2",
          title: "Explore Kheerganga",
          description:
            "Enjoy sunrise over the Himalayas, explore nearby viewpoints, relax around the campsite and spend the day experiencing the peaceful mountain surroundings.",
          stay: "Camp · Kheerganga",
          meals: "Breakfast & Dinner",
        },
        {
          day: "Day 3",
          title: "Kheerganga → Barshaini → Kasol",
          description:
            "Descend through the same scenic forest trail to Barshaini and continue by vehicle to Kasol, bringing the Himalayan journey to an end.",
          stay: "Tour concludes",
          meals: "Breakfast",
        },
      ]}
      includes={[
        "Kasol-to-Kasol transportation",
        "Camp or guest-house accommodation",
        "Trek leader",
        "Certified local guide",
        "Breakfast and dinner as per itinerary",
        "Forest entry fees",
        "First-aid kit",
        "Trip coordination and operational support",
      ]}
      excludes={[
        "Travel to and from Kasol",
        "Lunch and personal snacks",
        "Personal expenses",
        "Porter charges",
        "Personal trekking equipment",
        "Travel insurance",
        "Emergency evacuation charges",
        "GST, if applicable",
        "Anything not mentioned under Package Includes",
      ]}
      packing={[
        "Quick-dry T-shirts",
        "Trek pants",
        "Fleece jacket and warm jacket",
        "Raincoat or poncho",
        "Extra socks",
        "Trekking shoes and slippers",
        "Backpack 40–50 litres",
        "Water bottle",
        "Sunglasses and sunscreen SPF 50+",
        "Lip balm and toiletries",
        "Headlamp and power bank",
        "Personal medicines",
        "Energy bars and dry fruits",
      ]}
      importantNotes={[
        "Carry a valid Government Photo ID.",
        "Participants should have basic physical fitness for moderate ascents and uneven trails.",
        "Follow the Trek Leader's instructions throughout the journey.",
        "Mountain weather may change without prior notice.",
        "Do not litter and respect the natural environment.",
        "Smoking and alcohol are strictly prohibited during the trek.",
        "The itinerary may change due to weather or operational conditions.",
        "Reporting time will be communicated before departure.",
      ]}
      cancellation={[
        "Cancellation and refunds apply according to Trip Mosaic's official cancellation policy.",
        "Eligible refunds will be processed after verification.",
        "Trip Mosaic Operations Team remains available for operational coordination and emergency assistance.",
      ]}
    />
  );
}
