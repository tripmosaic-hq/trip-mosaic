import TripTemplate from "@/components/TripTemplate";

const highlights = [
  "Trek to the sacred Tungnath Temple, one of the highest Shiva temples.",
  "Continue to Chandrashila for panoramic Himalayan views.",
  "Perfect short Himalayan trek for beginners and weekend travellers.",
  "Experience alpine meadows, forest trails and peaceful mountain stays.",
  "A compact journey combining adventure, spirituality and nature.",
];

const itinerary = [
  {
    day: "Day 1",
    title: "Rishikesh to Chopta",
    description:
      "Begin the journey from Rishikesh and drive through scenic mountain roads to Chopta. Check in, relax and prepare for the trek.",
  },
  {
    day: "Day 2",
    title: "Tungnath and Chandrashila Trek",
    description:
      "Start early for the trek to Tungnath Temple and continue towards Chandrashila summit for panoramic Himalayan views. Return to Chopta.",
  },  {
    day: "Day 3",
    title: "Return to Rishikesh",
    description:
      "After breakfast, check out and drive back to Rishikesh with unforgettable Himalayan memories.",
  },
];

export default function ChoptaTungnathPage() {
  return (
    <TripTemplate
      title="Chopta – Tungnath Trek"
      subtitle="A perfect Himalayan escape combining trekking, spirituality and breathtaking mountain landscapes."
      duration="3 Days / 2 Nights"
      region="Uttarakhand"
      difficulty="Easy to Moderate"
      bestSeason="March – June | September – November"
      highlights={highlights}
      itinerary={itinerary}
    />
  );
}
