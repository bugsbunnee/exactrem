import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
});

export const sendEmail = async (data: Record<string, string>) => {
    if (!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID) throw new Error('Missing key!');

    return emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, data);
};
