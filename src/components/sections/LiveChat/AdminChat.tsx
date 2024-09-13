'use client';

import { Dialog, VisuallyHidden, IconButton, Skeleton, Box } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

import AdminChatChannel from './AdminChatChannel';
import ChatProvider from '@/providers/ChatProvider';

import useChats from '@/hooks/useChats';

const AdminChat = () => {
    const { isLoading, chatSession } = useChats();

    if (isLoading) {
        return (
            <Box className='animate__animated animate__bounce w-14 h-14 flex items-center justify-center bg-stone-50 border border-stone-200 rounded-full fixed bottom-10 right-10'>
                <Skeleton className='w-5 h-5' />
            </Box>
        );
    }

    if (!chatSession.userId) return null;

  return (
        <Dialog.Root>
            <Dialog.Trigger>
                <IconButton radius='full' size='3' className="animate__animated animate__bounce w-14 h-14 rounded-full bg-primary text-white fixed bottom-10 right-10">
                    <ChatBubbleIcon width="20" height="20" />
                </IconButton>
            </Dialog.Trigger>
    
            <Dialog.Content data-aos="zoom-in" className="w-11/12 p-4">
                <VisuallyHidden>
                    <Dialog.Title>Chat with <span className='text-primary'>Users</span></Dialog.Title>
                    <Dialog.Description>You are now chatting with the User.</Dialog.Description>
                </VisuallyHidden>
    
                <ChatProvider userId={chatSession.userId} userToken={chatSession.userToken}>
                    <AdminChatChannel />
                </ChatProvider>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default AdminChat;