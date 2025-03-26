import { NextResponse } from "next/server";
import { generateText } from "ai";
import { typhoon } from "@/app/lib/typhoon";
import { extractResultFromThinking } from "@/lib/utils";

function calculateDurationInDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Include both start and end days
}

export async function POST(req: Request) {
  try {
    const { destination, startDate, endDate, interests, budget } =
      await req.json();

    if (!destination || !startDate || !endDate || !interests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const durationDays = calculateDurationInDays(startDate, endDate);
    const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const prompt = `
    Create a detailed ${durationDays}-day travel itinerary for ${destination} from ${formattedStartDate} to ${formattedEndDate}.
    
    Interests: ${interests}
    Budget: ${budget}
    
    Please include:
    - Day-by-day plan with morning, afternoon, and evening activities
    - Recommended attractions, restaurants, and experiences
    - Approximate timing for each activity
    - Brief descriptions of places and why they are worth visiting
    - Budget-conscious recommendations appropriate for a ${budget} budget level
    - Any special seasonal considerations for this time period
    
    Format the itinerary in a clear, day-by-day structure that's easy to follow.
    `;

    const systemPrompt = `You are a knowledgeable travel planner with expertise in destinations worldwide. Create detailed, personalized travel itineraries based on user preferences. 
    Follow these guidelines:
    1. Start with a brief overview of the destination and trip highlights
    2. Break down each day into morning, afternoon, and evening activities
    3. Include specific attractions with estimated visit durations
    4. Add restaurant recommendations for meals
    5. Include practical tips like transportation between locations
    6. Note any special considerations (weather, crowds, etc.)
    7. Format the response with clear headings and bullet points
    8. Include estimated costs for major activities
    9. Add local tips and cultural notes where relevant`;

    const { text } = await generateText({
      model: typhoon("typhoon-v2-r1-70b-preview"),
      system: systemPrompt,
      prompt,
      temperature: 0.7,
      maxTokens: 6000,
    });

    return NextResponse.json({
      itinerary: extractResultFromThinking(text.trim()),
    });
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return NextResponse.json(
      { error: "Failed to generate itinerary" },
      { status: 500 }
    );
  }
}
