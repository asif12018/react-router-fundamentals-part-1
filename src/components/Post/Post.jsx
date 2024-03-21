import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {userId,id,title,body} = post
    return (
        <div className="bg-blue-400 w-[400px] mx-auto p-4 text-center rounded-xl">
            <p>userId:{userId}</p>
            <p>Id: {id}</p>
            <h3 className="text-xl font-bold">title:{title}</h3>
            <button className="btn bg-white p-3 rounded-full mt-4"><Link to={`/posts/${id}`}>see more</Link></button>
        </div>
    );
};

export default Post;