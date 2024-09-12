
import { NextRequest, NextResponse } from "next/server";

import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(request: NextRequest) {
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: 'Something failed' });

    const body: { messages: CoreMessage[]; } = await request.json();

    const response = await streamText({
        model: openai('gpt-3.5-turbo'),
        system: "You're talking a potential customer. Please response with grace, be friendly and courteous.",
        messages: body.messages,
    });

    return response.toDataStreamResponse();
}