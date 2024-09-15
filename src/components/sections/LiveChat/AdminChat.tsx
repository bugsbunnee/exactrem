'use client';

import { Dialog, VisuallyHidden, Skeleton, Box, Badge } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

import { ChatResponse } from '@/utils/models';

import AdminChatChannel from './AdminChatChannel';
import ChatProvider from '@/providers/ChatProvider';


const AdminChat = () => {
    const { isFetching, data: chatData } = useAdminChat();

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
                <Badge color={chatData.unreadCount > 0 ? 'red' : 'green'} size='3'>
                    {chatData.unreadCount} Unread Chats
                </Badge>
            </Dialog.Trigger>
    
            <Dialog.Content data-aos="zoom-in" className="w-11/12 p-4">
                <VisuallyHidden>
                    <Dialog.Title>Chat with <span className='text-primary'>Users</span></Dialog.Title>
                    <Dialog.Description>You are now chatting with the User.</Dialog.Description>
                </VisuallyHidden>
    
                <ChatProvider userId={chatData.id} userToken={chatData.token}>
                    <AdminChatChannel />
                </ChatProvider>
            </Dialog.Content>
        </Dialog.Root>
    );
};



const useAdminChat = () => {
    return useQuery<ChatResponse>({
		queryKey: ['admin-chat'],
		queryFn: () => axios.post<ChatResponse>('/api/live-chat/admin').then((response) => response.data),
		staleTime: 5000 * 1_000,
		retry: 3,
	});
};

export default AdminChat;