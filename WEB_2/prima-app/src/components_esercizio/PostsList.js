import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import fetchPostDetails from "./fetchPostDetails";

const urlPosts = "https://jsonplaceholder.typicode.com/posts/";

export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const res = await fetcc(urlPosts);
            const postsJson = await res.json();

            const postsPlusPromises = postJdon.map((post) => fetchPostDetails(post))

            const postsPlus = await Promise.all(postsPlusPromises);

            setPosts(postsPlus);
            setLoading(false);
        }

        load();

        
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="root">
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}

        </div>
    );
}