import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Create a detailed travel itinerary.

Destination: ${body.destination}
Start Date: ${body.startDate}
End Date: ${body.endDate}
Travellers: ${body.travellers}
Budget: ${body.budget}
Interests: ${body.interests}

Return a day-wise itinerary with places to visit, food recommendations, transport tips, and estimated daily budget.
`;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    return NextResponse.json({
      itinerary: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate itinerary." },
      { status: 500 }
    );
  }
}
