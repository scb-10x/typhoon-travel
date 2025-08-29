import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { typhoon } from '@/app/lib/typhoon';
import { extractResultFromThinking } from '@/lib/utils';

export async function POST(req: Request) {
  try {
    const { messages, language } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Missing or invalid messages' },
        { status: 400 }
      );
    }

    // Add or update system message to use markdown formatting
    const systemMessageIndex = messages.findIndex(msg => msg.role === 'system');
    const markdownInstructions = 'Use Markdown formatting in your responses. Utilize **bold** for emphasis, *italics* for locations, ## headings for sections, bullet points for lists, and `code` for specific details like hours or prices. Create tables when comparing options.';
    
    // Use language passed from frontend, default to English if not provided
    const userLanguage = language || 'English';
    const languageInstruction = `Respond in ${userLanguage} language based on the user's language preference.`;
    
    if (systemMessageIndex >= 0) {
      messages[systemMessageIndex].content += ` ${markdownInstructions} ${languageInstruction}`;
    } else {
      messages.unshift({
        role: 'system',
        content: `You are a knowledgeable travel consultant. Provide helpful advice about destinations, accommodations, activities, and local cuisine. ${markdownInstructions} ${languageInstruction}`
      });
    }

    const { text } = await generateText({
      model: typhoon(process.env.TYPHOON_MODEL || 'typhoon-v2.1-12b-instruct'),
      messages: messages,
      temperature: 0.7,
      maxTokens: 1000,
    });
    return NextResponse.json({ response: extractResultFromThinking(text.trim())  });
  } catch (error) {
    console.error('Error in chat:', error);
    return NextResponse.json(
      { error: 'Failed to process chat' },
      { status: 500 }
    );
  }
} 