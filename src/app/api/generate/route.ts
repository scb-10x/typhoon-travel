import { NextResponse } from "next/server";
import { streamText } from "ai";
import { typhoon } from "@/app/lib/typhoon";

function calculateDurationInDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Include both start and end days
}

export async function POST(req: Request) {
  try {
    const { destination, startDate, endDate, interests, budget, language } =
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
    
    Please start with an engaging prelude that tells a story about this journey - describe the motivation behind this trip, create a narrative that makes the traveler excited about the experience they're about to have, and mention why this destination is perfect for their interests.
    
    Then include:
    - Day-by-day plan with morning, afternoon, and evening activities
    - Recommended attractions, restaurants, and experiences
    - Approximate timing for each activity
    - Brief descriptions of places and why they are worth visiting
    - Budget-conscious recommendations appropriate for a ${budget} budget level
    - Any special seasonal considerations for this time period
    
    Format the itinerary in a clear, day-by-day structure that's easy to follow.
    `;

    // Use language passed from frontend, default to English if not provided
    const userLanguage = language || 'English';
    const languageInstruction = `Respond in ${userLanguage} language based on the user's language preference.`;

    const systemPrompt = `You are a knowledgeable travel planner with expertise in destinations worldwide. Create detailed, personalized travel itineraries based on user preferences. 
    Follow these guidelines:
    1. Begin with an engaging narrative prelude that tells a story about the journey, creates excitement, and explains why this destination perfectly matches the traveler's interests
    2. Write this prelude in a personal, immersive style as if speaking directly to the traveler about their upcoming adventure
    3. Then provide a brief overview of the destination and trip highlights
    4. Break down each day into morning, afternoon, and evening activities
    5. Include specific attractions with estimated visit durations
    6. Add restaurant recommendations for meals
    7. Include practical tips like transportation between locations
    8. Note any special considerations (weather, crowds, etc.)
    9. Format the response with clear headings and bullet points
    10. Include estimated costs for major activities
    11. Add local tips and cultural notes where relevant
    
    ${languageInstruction}`;

    const result = streamText({
      model: typhoon(process.env.TYPHOON_MODEL || 'typhoon-v2.1-12b-instruct'),
      system: systemPrompt,
      prompt: prompt,
      temperature: 0.7,
      maxTokens: 6000,
    });

    // Return a streaming response using the built-in Vercel AI SDK method
    return result.toTextStreamResponse({
      headers: {
        'Content-Type': 'text/event-stream',
      },
    });
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return NextResponse.json(
      { error: "Failed to generate itinerary" },
      { status: 500 }
    );
  }
}
