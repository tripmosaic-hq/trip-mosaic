import TripTemplate from "@/components/TripTemplate";

const highlights = [
  "Ride through the legendary Himalayan roads of Kinnaur and Spiti.",
  "Explore Chitkul, Kalpa, Tabo, Kaza and Chandratal Lake.",
  "Cross high-altitude passes including Kunzum Pass.",
  "Experience remote villages, monasteries and dramatic mountain landscapes.",
  "Supported by a road captain, mechanic and backup vehicle.",
];

const itinerary = [
  {
    day: "Day 1",
    title: "Shimla to Chitkul",
    description:
      "Begin the expedition from Shimla and ride through scenic mountain roads towards Chitkul, the last inhabited village near the Indo-Tibetan border.",
  },
  {
    day: "Day 2",
    title: "Chitkul to Kalpa",
    description:
      "Ride through the beautiful Kinnaur Valley to Kalpa, known for its traditional villages and views of the Kinner Kailash range.",
  },  {
    day: "Day 3",
    title: "Kalpa to Tabo",
    description:
      "Ride deeper into the Trans-Himalayan region through Nako and scenic high-altitude roads before reaching the ancient village of Tabo.",
  },
  {
    day: "Day 4",
    title: "Tabo to Kaza",
    description:
      "Visit the historic Tabo Monastery and continue towards Kaza, the administrative and cultural centre of Spiti Valley.",
  },
  {
    day: "Day 5",
    title: "Kaza Local Exploration",
    description:
      "Explore Key Monastery, Kibber, Hikkim, Komic and Langza while experiencing the unique culture and landscapes of Spiti.",
  },  {
    day: "Day 6",
    title: "Kaza to Chandratal",
    description:
      "Ride via Kunzum Pass to the breathtaking Chandratal Lake and enjoy an unforgettable Himalayan camping experience.",
  },
  {
    day: "Day 7",
    title: "Chandratal to Manali",
    description:
      "Complete the expedition by riding through Batal, Atal Tunnel and finally reaching Manali.",
  },
];

export default function SpitiBikeExpeditionPage() {
  return (
    <TripTemplate
      title="Spiti Bike Expedition"
      subtitle="Ride through one of the world's most spectacular Himalayan landscapes on an unforgettable motorcycle adventure."
      duration="7 Days / 6 Nights"
      region="Himachal Pradesh"
      difficulty="Challenging"
      bestSeason="June – September"
      highlights={highlights}
      itinerary={itinerary}
    />
  );
}
