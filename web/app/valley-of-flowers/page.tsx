import TripTemplate from "@/components/TripTemplate";

const highlights = [
  "Walk through the UNESCO-listed Valley of Flowers National Park.",
  "Visit the sacred Hemkund Sahib at high altitude.",
  "Experience Himalayan villages, waterfalls and alpine landscapes.",
  "Stay along the Govindghat–Ghangaria trekking route.",
  "A thoughtfully planned journey with Trip Mosaic support.",
];

const itinerary = [
  {
    day: "Day 1",
    title: "Haridwar to Govindghat",
    description:
      "Begin the journey from Haridwar and travel through the mountain roads of Uttarakhand to Govindghat. Check in and rest for the night.",
  },
  {
    day: "Day 2",
    title: "Govindghat to Ghangaria",
    description:
      "Travel to the trek starting point and continue towards Ghangaria, the base village for Valley of Flowers and Hemkund Sahib.",
  },  {
    day: "Day 3",
    title: "Valley of Flowers Exploration",
    description:
      "Spend the day exploring the Valley of Flowers, known for its alpine blooms, scenic trails and breathtaking Himalayan views.",
  },
  {
    day: "Day 4",
    title: "Hemkund Sahib Excursion",
    description:
      "Early morning trek to Hemkund Sahib and return to Ghangaria after the visit.",
  },
  {
    day: "Day 5",
    title: "Return Journey",
    description:
      "Descend to Govindghat and continue the return journey with unforgettable mountain memories.",
  },
];export default function ValleyOfFlowersPage() {
  return (
    <TripTemplate
      title="Valley of Flowers Trek"
      subtitle="A breathtaking Himalayan journey through colourful alpine meadows, waterfalls and the sacred Hemkund Sahib."
      duration="6 Days / 5 Nights"
      region="Uttarakhand"
      difficulty="Moderate"
      bestSeason="July – September"
      highlights={highlights}
      itinerary={itinerary}
    />
  );
}
