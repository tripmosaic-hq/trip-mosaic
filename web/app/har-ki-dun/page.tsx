import type { Metadata } from "next";
import TripTemplate from "@/components/TripTemplate";

export const metadata: Metadata = {
  title: "Har Ki Dun Trek 7 Days / 6 Nights | Trip Mosaic",
  description:
    "Approved Har Ki Dun Trek itinerary from Dehradun covering Sankri, Osla, Kalkatiyadhaar and the Valley of Gods in Uttarakhand.",
};

const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Har_Ki_Dun.jpg?width=1920",
    alt: "Har Ki Dun Valley with river and Swargarohini mountain views",
    caption: "Har Ki Dun Valley and Swargarohini",
    photographer: "Metanish",
    resolution: "1600 × 1184 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Har_Ki_Dun.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Entering_Har_Ki_Dun.JPG?width=1600",
    alt: "Entering Har Ki Dun Valley in the Garhwal Himalayas",
    caption: "Entering the Valley of Gods",
    photographer: "Omkar",
    resolution: "5184 × 2916 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Entering_Har_Ki_Dun.JPG",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Village_osla.jpg?width=1600",
    alt: "Osla village along the Har Ki Dun trekking route",
    caption: "Traditional Himalayan life at Osla",
    photographer: "Anuj19",
    resolution: "2736 × 3648 px",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Village_osla.jpg",
  },
];

export default function HarKiDunPage() {
  return (
    <TripTemplate
      title="Har Ki Dun Trek"
      subtitle="A journey through ancient Himalayan villages, pine forests, alpine meadows and the magnificent Valley of Gods."
      eyebrow="TM-D003 · Approved Master Itinerary"
      heroImage={photos[0].src}
      region="Uttarkashi, Uttarakhand"
      duration="7 Days / 6 Nights"
      bestSeason="March–June & September–December"
      overview={[
        "Beginning and ending in Dehradun, the Har Ki Dun Trek travels through Sankri, Gangarh, Osla and Kalkatiyadhaar before reaching the spectacular Har Ki Dun Valley inside Govind Pashu Vihar National Park.",
        "The route combines Himalayan village culture, dense forests, glacial rivers, waterfalls, alpine meadows and panoramic views of Swargarohini, Kala Nag, Bandarpunch and Hata Peak.",
      ]}
      facts={[
        {
          label: "Pickup & Drop",
          value: "Dehradun",
        },
        {
          label: "Maximum Altitude",
          value: "3,566 m",
        },
        {
          label: "Trek Distance",
          value: "Approx. 40–45 km",
        },
        {
          label: "Difficulty",
          value: "Moderate",
        },
        {
          label: "Accommodation",
          value: "Guest House, Homestay & Alpine Camps",
        },
        {
          label: "Group / Age",
          value: "Max 30 · Min 10 years",
        },
      ]}
      highlights={[
        "Explore Har Ki Dun, popularly known as the Valley of Gods.",
        "Walk through Govind Pashu Vihar National Park and traditional Himalayan villages.",
        "Visit Osla and experience its ancient architecture and cultural heritage.",
        "Enjoy views of Swargarohini, Kala Nag, Bandarpunch and Hata Peak.",
        "Trek through forests, rivers, waterfalls, wooden bridges and alpine meadows.",
        "Travel with a trek leader, certified local guide and Trip Mosaic operational support.",
      ]}
      photos={photos}
      itinerary={[
        {
          day: "Day 1",
          title: "Dehradun → Sankri",
          description:
            "Begin with a scenic drive from Dehradun to Sankri through Mussoorie, Barkot, Purola, Mori and Netwar. Arrive at the beautiful Himalayan village of Sankri.",
          stay: "Guest House · Sankri",
          meals: "Dinner",
        },
        {
          day: "Day 2",
          title: "Sankri → Gangarh → Osla",
          description:
            "Drive to Gangarh and begin trekking beside the Rupin River. Walk through forests, waterfalls, wooden bridges and traditional villages before reaching Osla.",
          stay: "Homestay / Camp · Osla",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 3",
          title: "Osla → Kalkatiyadhaar",
          description:
            "Gradually climb through forests, mountain ridges and open meadows. Enjoy views of the Supin–Ruinsara confluence, Kala Nag and Bandarpunch before reaching Kalkatiyadhaar.",
          stay: "Alpine Camp · Kalkatiyadhaar",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 4",
          title: "Kalkatiyadhaar → Har Ki Dun Valley → Kalkatiyadhaar",
          description:
            "Hike through alpine meadows and rhododendron forests to reach Har Ki Dun Valley. Experience panoramic Himalayan views before returning to Kalkatiyadhaar.",
          stay: "Alpine Camp · Kalkatiyadhaar",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 5",
          title: "Kalkatiyadhaar → Osla",
          description:
            "Descend towards Osla while enjoying peaceful forests, mountain streams, rivers and traditional village landscapes.",
          stay: "Homestay / Camp · Osla",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 6",
          title: "Osla → Gangarh → Sankri",
          description:
            "Complete the final trekking section to Gangarh and continue by vehicle to Sankri for the final evening of the expedition.",
          stay: "Guest House · Sankri",
          meals: "Breakfast, Lunch & Dinner",
        },
        {
          day: "Day 7",
          title: "Sankri → Dehradun",
          description:
            "Drive back to Dehradun through the Himalayan landscapes, bringing the memorable Valley of Gods journey to an end.",
          stay: "Tour concludes",
          meals: "Breakfast",
        },
      ]}
      includes={[
        "Dehradun-to-Dehradun transportation",
        "Guest house, homestay and camping accommodation",
        "Trek leader",
        "Certified local guide",
        "Forest entry permits",
        "Govind National Park entry fees",
        "Camping equipment",
        "Sleeping bag and sleeping mat",
        "All meals as per itinerary",
        "First-aid kit",
        "Emergency oxygen cylinder",
        "Trip coordination and operational support",
      ]}
      excludes={[
        "Travel to and from Dehradun",
        "Personal expenses",
        "Porter and mule charges",
        "Personal trekking equipment",
        "Gear rental",
        "Travel insurance",
        "Emergency evacuation expenses",
        "GST, if applicable",
        "Anything not mentioned under Package Includes",
      ]}
      packing={[
        "Quick-dry T-shirts and trek pants",
        "Thermal wear, fleece jacket and down jacket",
        "Raincoat or poncho",
        "Woollen cap, gloves and extra socks",
        "Trekking shoes and floaters",
        "Backpack 50–60 litres and day pack",
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
        "Participants should have good physical fitness for long walking hours and moderate ascents.",
        "Follow the Trek Leader's instructions throughout the journey.",
        "Mountain weather may change without prior notice.",
        "Plastic waste must not be left on the trail.",
        "Smoking and alcohol are strictly prohibited during the trek.",
        "The itinerary may change due to weather, road conditions or safety considerations.",
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
