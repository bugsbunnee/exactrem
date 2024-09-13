'use client';

import { Spinner } from "@radix-ui/themes";

import { FC, PropsWithChildren } from "react";
import { Chat, useCreateChatClient } from "stream-chat-react";
import { ChatSession } from "@/hooks/useChats";

import { ChatClient } from "@/utils/models";

import 'stream-chat-react/dist/css/v2/index.css';

type Props = PropsWithChildren & ChatSession;

const ChatProvider: FC<Props> = ({ children, userId, userToken }) => {
    const client: ChatClient | null = useCreateChatClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY as string,
        tokenOrProvider: userToken,
        userData: { id: userId },
    });

    if (!client) return <Spinner title='Setting up connection...' />;

    return (
        <Chat client={client} >
            {children}
        </Chat>
    );
};
 
export default ChatProvider;