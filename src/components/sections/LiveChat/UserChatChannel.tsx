'use client';

import React, { useEffect, useState } from 'react';

import { Channel as StreamChannel } from 'stream-chat';
import { Channel, ChannelHeader, MessageInput, MessageList, Thread, Window, useChatContext } from 'stream-chat-react';

interface Props {
    userId: string;
}

const ChatChannel: React.FC<Props> = ({ userId }) => {
    const [channel, setChannel] = useState<StreamChannel>();

    const { client } = useChatContext();

    useEffect(() => {
        if (!client || !!channel) return;

        const newChannel = client.channel('messaging', { members: [userId, process.env.NEXT_PUBLIC_ADMIN_CHAT_ID as string] });
        setChannel(newChannel);
    }, [client, userId, channel]);

    return ( 
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput focus />
            </Window>
            <Thread />
        </Channel>
     );
};
 
export default ChatChannel;