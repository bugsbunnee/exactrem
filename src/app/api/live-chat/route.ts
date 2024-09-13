import { NextRequest, NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

export async function POST(request: NextRequest) {
    if (!process.env.NEXT_PUBLIC_STREAM_API_KEY || !process.env.NEXT_PUBLIC_STREAM_API_SECRET) {
        return NextResponse.json({ error: 'Config error!.' }, { status: 500 });
    }

    const serverClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY, process.env.NEXT_PUBLIC_STREAM_API_SECRET);

    const userId = 'user-' + Date.now();
    const response = await serverClient.getUnreadCount(userId);

    return NextResponse.json({ 
        token: serverClient.createToken(userId), 
        unreadCount: response.total_unread_count, 
        id: userId,
    });
}