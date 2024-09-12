import { NextAuthOptions } from 'next-auth';

import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account && account.provider === "google") {
                if (!profile || !profile.email) return false;

                return profile.email.endsWith(process.env.ALLOWED_SIGNIN_DOMAIN as string) || profile.email === process.env.ALLOWED_SIGNIN_USER;
            }

            return true;
          },
    }
};

export default authOptions;