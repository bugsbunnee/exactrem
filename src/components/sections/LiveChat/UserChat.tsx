'use client';

import { Dialog, VisuallyHidden, IconButton, Box, Skeleton } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';

import { ChatResponse } from '@/utils/models';

import axios from 'axios';

import ChatProvider from '@/providers/ChatProvider';
import UserChatChannel from './UserChatChannel';

const UserChat = () => {
    const { isFetching, chatData } = useChat();

    if (isFetching) {
        return (
            <Box className='animate__animated animate__bounce w-14 h-14 flex items-center justify-center bg-stone-50 border border-stone-200 rounded-full fixed bottom-10 right-10'>
                <Skeleton className='w-5 h-5' />
            </Box>
        );
    }

    if (!chatData || !chatData.id) return null;

    return (
            <Dialog.Root>
                <Dialog.Trigger>
                    <IconButton radius='full' size='3' className="animate__animated animate__bounce w-14 h-14 rounded-full bg-primary text-white fixed bottom-10 right-10">
                        <ChatBubbleIcon width="20" height="20" />
                    </IconButton>
                </Dialog.Trigger>
        
                <Dialog.Content data-aos="zoom-in" className="max-w-96 p-4">
                    <VisuallyHidden>
                        <Dialog.Title>Chat with <span className='text-primary'>Us</span></Dialog.Title>
                        <Dialog.Description>You are now chatting with Exactrem.</Dialog.Description>
                    </VisuallyHidden>
        
                    <ChatProvider userId={chatData.id} userToken={chatData.token}>
                        <UserChatChannel userId={chatData.id} />
                    </ChatProvider>
                </Dialog.Content>
            </Dialog.Root>
    );
};

const useChat = () => {
    return useQuery<ChatResponse>({
		queryKey: ['chat'],
		queryFn: () => axios.post<ChatResponse>('/api/live-chat/admin').then((response) => response.data),
		staleTime: 5000 * 1_000,
	});
};

export default UserChat;