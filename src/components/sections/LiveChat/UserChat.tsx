'use client';

import { Dialog, VisuallyHidden, IconButton, Box, Skeleton } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

import ChatProvider from '@/providers/ChatProvider';
import UserChatChannel from './UserChatChannel';

import useChats from '@/hooks/useChats';

const UserChat = () => {
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
        
                <Dialog.Content data-aos="zoom-in" className="max-w-96 p-4">
                    <VisuallyHidden>
                        <Dialog.Title>Chat with <span className='text-primary'>Us</span></Dialog.Title>
                        <Dialog.Description>You are now chatting with Exactrem.</Dialog.Description>
                    </VisuallyHidden>
        
                    <ChatProvider userId={chatSession.userId} userToken={chatSession.userToken}>
                        <UserChatChannel userId={chatSession.userId} />
                    </ChatProvider>
                </Dialog.Content>
            </Dialog.Root>
    );
};

export default UserChat;