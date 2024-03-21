import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData()
    
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                posts.map((post,index)=><Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;