import TripTemplate from "@/components/TripTemplate";

const highlights = [
  "Experience Srinagar, Gulmarg, Pahalgam and Sonamarg.",
  "Shikara ride on the beautiful Dal Lake.",
  "Snow peaks, meadows and unforgettable Himalayan landscapes.",
  "Comfortable stays with thoughtfully planned sightseeing.",
  "Perfect for families, couples and nature lovers.",
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Srinagar",
    description:
      "Arrive in Srinagar, check in to your hotel or houseboat and enjoy an evening Shikara ride on Dal Lake.",
  },
  {
    day: "Day 2",
    title: "Gulmarg Excursion",
    description:
      "Visit Gulmarg, enjoy the scenic meadows, Gondola ride and return to Srinagar.",
  },  {
    day: "Day 3",
    title: "Pahalgam",
    description:
      "Drive through the Lidder Valley, visit Betaab Valley, Aru Valley and enjoy the peaceful Himalayan surroundings.",
  },
  {
    day: "Day 4",
    title: "Sonamarg",
    description:
      "Visit Sonamarg, the 'Meadow of Gold', surrounded by glaciers, rivers and snow-covered peaks.",
  },
  {
    day: "Day 5",
    title: "Departure",
    description:
      "After breakfast, transfer to Srinagar Airport with unforgettable memories of Kashmir.",
  },
];

export default function KashmirPremiumPage() {
  return (
    <TripTemplate
      title="Kashmir Premium"
      subtitle="Discover the timeless beauty of Kashmir with handpicked experiences, scenic landscapes and memorable Himalayan hospitality."
      duration="5 Days / 4 Nights"
      region="Jammu & Kashmir"
      difficulty="Easy"
      bestSeason="March – October"
      highlights={highlights}
      itinerary={itinerary}
    />
  );
}
