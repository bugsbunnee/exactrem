import { NextRequest, NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { getServerSession } from 'next-auth';


export async function POST(request: NextRequest) {
    if (!process.env.NEXT_PUBLIC_STREAM_API_KEY || !process.env.NEXT_PUBLIC_STREAM_API_SECRET) {
        return NextResponse.json({ error: 'Config error!.' }, { status: 500 });
    }

    const session = await getServerSession();
    if (!session) return NextResponse.json({}, { status: 401 });

    const serverClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY, process.env.NEXT_PUBLIC_STREAM_API_SECRET);

    const adminId = process.env.NEXT_PUBLIC_ADMIN_CHAT_ID as string;
    const response = await serverClient.getUnreadCount(adminId);
    const adminToken = serverClient.createToken(adminId);

    return NextResponse.json({ 
        token: adminToken, 
        unreadCount: response.total_unread_count, 
        id: adminId,
    });
}