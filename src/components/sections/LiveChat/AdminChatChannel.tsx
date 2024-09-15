import React from 'react';
import { Box, Flex } from '@radix-ui/themes';

import { ChannelFilters, ChannelOptions, ChannelSort } from 'stream-chat';
import { Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';

const sort: ChannelSort= { 
    last_message_at: -1 
};
  
const options: ChannelOptions = {
    limit: 10,
};

const filters: ChannelFilters = { 
    type: 'messaging', members: {$in: [process.env.NEXT_PUBLIC_ADMIN_CHAT_ID as string]} 
};

const AdminChatChannel: React.FC= () => {
    return ( 
        <Flex align='start' justify='start'>
            <ChannelList filters={filters} sort={sort} options={options} showChannelSearch />
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