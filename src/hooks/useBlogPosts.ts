import { useEffect, useState } from "react"
import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

interface Blog {
    id: string;
    title: string;
    description: string;
    createdAt: string;
}

const useBlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

    useEffect(() => {
        const blogPostsRef = collection(db, 'blogs');
        
        const unsubscribe = onSnapshot(blogPostsRef, (snapshot) => {
            const blogs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBlogPosts(blogs as Blog[])
        });

        return () => unsubscribe();
    }, []);

    return blogPosts;
};

export default useBlogPosts;