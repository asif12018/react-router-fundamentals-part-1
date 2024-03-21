import { Link, useLoaderData, useNavigate } from "react-router-dom";


const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {userId,id,title,body} = post;

    
    const hanldeGoBack = () =>{
        navigate(-1);
    }


    return (
        <div className="bg-blue-400 w-[400px] mx-auto p-4 text-center rounded-xl">
            <p>userId:{userId}</p>
            <p>Id: {id}</p>
            <h3 className="text-xl font-bold">title:{title}</h3>
            <p>{body}</p>
            <button onClick={hanldeGoBack} className="btn bg-white p-4 rounded-full">Go Back</button>
        </div>
    );
};

export default PostDetail;