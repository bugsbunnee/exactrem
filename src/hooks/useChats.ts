import axios from "axios";

import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

import { getSessionChatId } from "@/utils/lib";

interface ChatResponse {
    userToken: string;
}

export interface ChatSession {
    userToken: string;
    userId: string;
}

const useChats = () => {
    const [isLoading, setLoading] = useState(false);
    const [chatSession, setChatSession] = useState<ChatSession>({
        userToken: '',
        userId: '',
    });
    
    useEffect(() => {
        function decodeToken(token: string): { user_id: string } | null {
            try {
                return jwtDecode(token);
            } catch (error) {
                return null;
            }
        }
    
        async function fetchSessionData() {
            try {
                setLoading(true);

                const result = await axios.post<ChatResponse>('http://localhost:4000/api/live-chat');
                const decoded = decodeToken(result.data.userToken);
                if (!decoded) return;
    
                setChatSession({
                    userToken: result.data.userToken,
                    userId: decoded.user_id,
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        function initSession() {
            const token = getSessionChatId();
            if (!token) return fetchSessionData();
    
            const result = decodeToken(token);
            if (!result) return;
    
            setChatSession({
                userId: result.user_id,
                userToken: token,
            })
        }

        initSession();
    }, [])

    return { isLoading, chatSession };
};

export default useChats;