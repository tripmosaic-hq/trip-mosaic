import type { Metadata } from "next";
import TripTemplate from "@/components/TripTemplate";

export const metadata: Metadata = {
  title: "Kuari Pass Trek 5 Days / 4 Nights | Trip Mosaic",
  description:
    "Approved Kuari Pass Trek itinerary from Rishikesh covering Joshimath, Tali Camp, Kuari Pass and Auli in Uttarakhand.",
};

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dunagiri_from_Kuari_Pass.jpg?width=1920",
    alt: "Dunagiri mountain viewed from Kuari Pass in Uttarakhand",
    caption: "Dunagiri from Kuari Pass",
    photographer: "Sumodm",
    resolution: "4288 × 2848 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Dunagiri_from_Kuari_Pass.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mountain_Nanda_Devi_seen_from_Auli.jpg?width=1600",
    alt: "Nanda Devi mountain viewed from Auli in Uttarakhand",
    caption: "Nanda Devi view from Auli",
    photographer: "Bibek Raj Pandeya",
    resolution: "4288 × 2391 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mountain_Nanda_Devi_seen_from_Auli.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/JOSHIMATH.jpg?width=1600",
    alt: "Joshimath town surrounded by Himalayan mountains",
    caption: "Joshimath in the Garhwal Himalayas",
    photographer: "Tanuj Namboodri",
    resolution: "3648 × 2736 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:JOSHIMATH.jpg",
  },
];

export default function KuariPassPage() {
  return (
    <TripTemplate
      title="Kuari Pass Trek"
      subtitle="A spectacular Himalayan journey along the historic Lord Curzon Trail, through oak forests, alpine meadows, Tali Camp and the panoramic Kuari Pass."
      eyebrow="TM-D005 · Approved Master Itinerary"
      heroImage={photos[0].src}
      region="Chamoli, Uttarakhand"
      duration="5 Days / 4 Nights"
      bestSeason="December–March & April–June"
      overview={[
        "Beginning and ending in Rishikesh, the Kuari Pass Trek follows a scenic route through Joshimath, mountain villages, dense oak and rhododendron forests, alpine meadows and Tali Camp.",
        "The summit journey reaches Kuari Pass at 4,267 metres and offers panoramic views of Chaukhamba, Neelkanth, Dronagiri, Hathi–Ghoda Peaks, Nilgiri Range and the Nanda Devi region.",
      ]}
      facts={[
        {
          label: "Pickup & Drop",
          value: "Rishikesh",
        },
        {
          label: "Maximum Altitude",
          value: "4,267 m",
        },
        {
          label: "Trek Distance",
          value: "Approx. 33–35 km",
        },
        {
          label: "Difficulty",
          value: "Moderate to Difficult",
        },
        {
          label: "Accommodation",
          value: "Hotel & Alpine Camps",
        },
        {
          label: "Group / Age",
          value: "Max 30 · Min 10 years",
        },
      ]}
      highlights={[
        "Reach the iconic Kuari Pass summit along the historic Lord Curzon Trail.",
        "Enjoy panoramic views of Chaukhamba, Neelkanth and Dronagiri.",
        "Walk through dense oak and rhododendron forests.",
        "Camp amidst the Himalayan landscapes at Tali.",
        "Descend through alpine meadows towards Auli.",
        "Travel with a trek leader, certified local guide and Trip Mosaic operational support.",
      ]}
      photos={photos}
      itinerary={[
        {
          day: "Day 1",
          title: "Rishikesh → Joshimath",
          description:
            "Travel through the scenic Alaknanda Valley, crossing Devprayag, Rudraprayag, Karnaprayag, Nandaprayag and Vishnuprayag before reaching Joshimath.",
          stay: "Hotel / Camp · Joshimath",
          meals: "Dinner",
        },
        {
          day: "Day 2",
          title: "Joshimath → Tali Camp",
          description:
            "Begin trekking through Dakh, Gulling Top, Tugasi Village and Kharchi. Walk through dense oak forests with views of Sleeping Lady Peak and Dronagiri before reaching Tali Camp.",
          stay: "Alpine Camp · Tali",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 3",
          title: "Tali → Kuari Pass Summit → Tali",
          description:
            "Start early for the summit climb to Kuari Pass. Experience panoramic views of Chaukhamba, Neelkanth, Dronagiri, Hathi–Ghoda Peaks and the Nilgiri Range before returning to Tali.",
          stay: "Alpine Camp · Tali",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 4",
          title: "Tali → Auli → Joshimath",
          description:
            "Descend through beautiful forests and Himalayan meadows towards Auli. Enjoy Nanda Devi viewpoints and the ski-resort landscape before returning to Joshimath.",
          stay: "Hotel / Camp · Joshimath",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 5",
          title: "Joshimath → Rishikesh",
          description:
            "Drive back through the mountain highways and the Panch Prayag route to Rishikesh, bringing the Kuari Pass journey to an end.",
          stay: "Tour concludes",
          meals: "Breakfast",
        },
      ]}
      includes={[
        "Rishikesh-to-Rishikesh transportation",
        "Hotel and camping accommodation",
        "Trek leader",
        "Certified local guide",
        "Forest entry permits",
        "Camping equipment",
        "Sleeping bag and sleeping mat",
        "All meals as per itinerary",
        "First-aid kit",
        "Emergency oxygen cylinder",
        "Trip coordination and operational support",
      ]}
      excludes={[
        "Travel to and from Rishikesh",
        "Personal expenses",
        "Porter and mule charges",
        "Trekking equipment rental",
        "Travel insurance",
        "Emergency evacuation expenses",
        "GST, if applicable",
        "Anything not mentioned under Package Includes",
      ]}
      packing={[
        "Quick-dry T-shirts and trek pants",
        "Thermal wear and fleece jacket",
        "Down jacket",
        "Rain jacket or poncho",
        "Woollen cap and gloves",
        "Extra socks",
        "Trekking shoes and slippers",
        "Backpack 50–60 litres",
        "Day pack",
        "Water bottles",
        "Sunglasses and sunscreen SPF 50+",
        "Lip balm and toiletries",
        "Headlamp and power bank",
        "Personal medicines",
        "Energy bars and dry fruits",
        "Trekking pole · Recommended",
      ]}
      importantNotes={[
        "Carry a valid Government Photo ID.",
        "The summit day involves a long trek and requires good physical fitness.",
        "Carry sufficient drinking water before the summit climb.",
        "Follow the Trek Leader's instructions throughout the journey.",
        "Mountain weather may change rapidly.",
        "Smoking and alcohol are strictly prohibited during the trek.",
        "The itinerary may change due to weather, trail conditions or operational requirements.",
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
