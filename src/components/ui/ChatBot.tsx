"use client";

import React, { useEffect, useRef } from 'react';

import { ChatBubbleIcon, PaperPlaneIcon, MagnifyingGlassIcon, PersonIcon, DesktopIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Avatar, Box, Callout, Dialog, Flex, IconButton, Text, TextField, VisuallyHidden } from '@radix-ui/themes';
import { useChat } from 'ai/react';

import Conditional from '@/components/common/Conditional';

const ChatBot: React.FC = () => {
  const chatContainer= useRef<HTMLDivElement>(null);
  
  const { error, messages, handleInputChange, handleSubmit, input, isLoading } = useChat({
    api: '/api/chat-gpt',
    keepLastMessageOnError: true,
  });

  useEffect(() => {
    if (chatContainer.current) {
        const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
        if (scrollHeight > (scrollTop + offsetHeight)) {
            chatContainer.current.scrollTo(0, scrollHeight + 200);
        }
    }
  }, [messages]);

  return (
    <Conditional isVisible={false}>
        <Dialog.Root>
            <Dialog.Trigger>
                <IconButton radius='full' size='3' className="animate__animated animate__bounce w-14 h-14 rounded-full bg-primary text-white fixed bottom-10 right-10">
                    <ChatBubbleIcon width="20" height="20" />
                </IconButton>
            </Dialog.Trigger>

            <Dialog.Content data-aos="zoom-in" className="max-w-96 p-4">
                <Box className='border-stone-300 dark:border-white border-b'>
                    <Dialog.Title>Chat with <span className='text-primary'>Us</span></Dialog.Title>
                    <VisuallyHidden>
                        <Dialog.Description>A chatbot</Dialog.Description>
                    </VisuallyHidden>
                </Box>

                <Box className='py-3 max-h-96 overflow-y-scroll' ref={chatContainer}>
                    {error && (
                        <Callout.Root color="red" className="mb-5 text-sm">
                            <Callout.Icon>
                                <InfoCircledIcon />
                            </Callout.Icon>
                            <Callout.Text>{error.message} An error occured</Callout.Text>
                        </Callout.Root>
                    )}
                    
                    {messages.map((message) => (
                        message.role === 'user' ? (
                            <Flex align='center' className='my-4' key={message.id} justify='end' gap='2'>
                                <Box className='bg-primary rounded-sm border-0 dark:border dark:border-white py-2 px-4 text-sm text-white text-right'>
                                    <Text>{message.content}</Text>
                                </Box>
                                <Avatar fallback={<PersonIcon className="text-black dark:text-primary"  />} className='bg-stone-100 dark:bg-white' radius="full" size="2" />
                            </Flex>
                        ) : (
                            <Flex align='start' className='my-4' key={message.id} justify='start' gap='2'>
                                <Avatar fallback={<DesktopIcon className="text-black dark:text-white" />} className='bg-stone-100 dark:bg-primary' radius="full" size="2" />
                                <Box className='bg-stone-100 border border-stone-200 dark:bg-[#222] rounded-sm py-2 px-4 text-sm text-left'>
                                    <Text>{message.content}</Text>
                                </Box>
                            </Flex> 
                        )
                    ))}
                </Box>

                <form onSubmit={handleSubmit}>
                    <TextField.Root 
                        placeholder="Ask me anything"
                        size='3' 
                        radius="full"
                        variant="soft"
                        className="animate__animated animate__fadeIn bg-stone-100 h-12 mt-10 dark:bg-[#222] text-sm focus:outline-0"
                        value={input}
                        onChange={handleInputChange}
                    >
                        <TextField.Slot>
                            <MagnifyingGlassIcon />
                        </TextField.Slot>
                        <TextField.Slot>
                            <IconButton loading={isLoading} size="2" variant="solid" className='bg-primary text-white' type='submit'>
                                <PaperPlaneIcon  />
                            </IconButton>
                        </TextField.Slot>
                    </TextField.Root>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    </Conditional>
  );
};

export default ChatBot;
