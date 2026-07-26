import TripHero from "./TripHero";
import QuickFacts from "./QuickFacts";
import Highlights from "./Highlights";
import Itinerary from "./Itinerary";
import TripCTA from "./TripCTA";

type ItineraryItem = {
  day: string;
  title: string;
  description: string;
};

type TripTemplateProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  duration: string;
  region: string;
  difficulty: string;
  bestSeason: string;
  highlights: string[];
  itinerary: ItineraryItem[];
};

export default function TripTemplate({
  title,
  subtitle,
  imageUrl,
  duration,
  region,
  difficulty,
  bestSeason,
  highlights,
  itinerary,
}: TripTemplateProps) {
  return (
    <>
      <TripHero
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
        location={region}
        duration={duration}
        bestSeason={bestSeason}
      />

      <QuickFacts
        duration={duration}
        region={region}
        difficulty={difficulty}
        bestSeason={bestSeason}
      />

      <Highlights items={highlights} />

      <Itinerary itinerary={itinerary} />

      <TripCTA title={`Plan your ${title} journey`} />
    </>
  );
}
