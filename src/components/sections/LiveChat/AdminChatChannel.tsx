'use client';

import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@radix-ui/themes';

import { ChannelOptions, ChannelSort, Channel as StreamChannel } from 'stream-chat';
import { Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window, useChatContext } from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';


const sort: ChannelSort= { 
    last_message_at: -1 
};
  
const options: ChannelOptions = {
    limit: 10,
};

const AdminChatChannel: React.FC= () => {
    const [channel, setChannel] = useState<StreamChannel>();

    const { client } = useChatContext();

    useEffect(() => {
        if (!client) return;

        const newChannel = client.channel('messaging', 'admin-livechat');
        setChannel(newChannel);
    }, [client]);

    return ( 
        <Flex align='start' justify='start'>
            <ChannelList sort={sort} options={options} />
            <Box className='flex-1'>
                <Channel EmojiPicker={EmojiPicker}>
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