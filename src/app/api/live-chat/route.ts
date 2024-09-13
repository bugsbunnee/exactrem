import { NextRequest, NextResponse } from "next/server";
import { StreamChat, User } from "stream-chat";
import { liveChatIds } from "@/utils/constants";
import { getServerSession } from 'next-auth';


export async function POST(request: NextRequest) {
    if (!process.env.NEXT_PUBLIC_STREAM_API_KEY || !process.env.NEXT_PUBLIC_STREAM_API_SECRET) {
        return NextResponse.json({ error: 'Config error!.' }, { status: 500 });
    }

    const session = await getServerSession();
    const serverClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY, process.env.NEXT_PUBLIC_STREAM_API_SECRET);

    if (session) {
        return NextResponse.json({ userToken: serverClient.createToken(process.env.NEXT_PUBLIC_ADMIN_CHAT_ID as string) });
    } 

    const userId = 'user-' + Date.now();
    return NextResponse.json({ userToken: serverClient.createToken(userId) });
}