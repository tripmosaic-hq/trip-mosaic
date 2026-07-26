import TripTemplate from "@/components/TripTemplate";

const highlights = [
  "Trek to Everest Base Camp through the legendary Khumbu region.",
  "Experience Namche Bazaar, Tengboche and traditional Sherpa villages.",
  "Enjoy iconic views of Everest, Lhotse, Ama Dablam and surrounding peaks.",
  "Follow a carefully planned route with acclimatization days.",
  "A world-class Himalayan expedition for experienced trekkers.",
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Kathmandu",
    description:
      "Arrive in Kathmandu, complete the trek briefing and prepare for the expedition.",
  },
  {
    day: "Day 2",
    title: "Fly to Lukla and Trek to Phakding",
    description:
      "Take the scenic flight to Lukla and begin the trek through the Dudh Koshi Valley to Phakding.",
  },
  {
    day: "Day 3",
    title: "Phakding to Namche Bazaar",
    description:
      "Cross suspension bridges and climb through Sagarmatha National Park to reach Namche Bazaar.",
  },  {
    day: "Day 4",
    title: "Namche Acclimatization",
    description:
      "Spend the day acclimatizing, exploring Namche Bazaar and enjoying panoramic Himalayan views.",
  },
  {
    day: "Day 5 onwards",
    title: "Everest Base Camp Expedition",
    description:
      "Continue through Tengboche, Dingboche, Lobuche and Gorakshep before reaching Everest Base Camp and Kala Patthar. Return via the same route to Lukla.",
  },
];

export default function EverestBaseCampPage() {
  return (
    <TripTemplate
      title="Everest Base Camp Trek"
      subtitle="The world's most iconic trekking adventure through the heart of the Himalayas."
      duration="12 Days"
      region="Nepal"
      difficulty="Challenging"
      bestSeason="March–May | September–November"
      highlights={highlights}
      itinerary={itinerary}
    />
  );
}
