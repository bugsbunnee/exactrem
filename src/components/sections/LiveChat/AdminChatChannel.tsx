'use client';

import { Box, Flex } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';

import { ChannelOptions, ChannelSort, Channel as StreamChannel } from 'stream-chat';
import { Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';


const sort: ChannelSort= { 
    last_message_at: -1 
};
  
const options: ChannelOptions = {
    limit: 10,
};

const AdminChatChannel: React.FC<Props> = ({ client }) => {
    const [channel, setChannel] = useState<StreamChannel>();

    useEffect(() => {
        if (!client) return;

        const channel = client.channel('livestream');

        setChannel(channel);
    }, [client]);

    return ( 
        <Flex align='start' justify='start'>
            <ChannelList sort={sort} options={options} />
            <Box className='flex-1'>
                <Channel channel={channel} EmojiPicker={EmojiPicker}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Box>
        </Flex>
    );
};
 
export default AdminChatChannel;