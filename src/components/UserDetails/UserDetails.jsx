import { Link, useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetail = useLoaderData();
    
    return (
        <div className="w-[800px] mx-auto bg-blue-300 text-center mt-36 py-12 rounded-2xl space-y-4">
            <h2 className="text-2xl font-bold">Name:{userDetail.name}</h2>
            <p>User Name: {userDetail.username}</p>
            <p>Email: {userDetail.email}</p>
            <button className="btn bg-white p-2 rounded-full"><Link to='/'>Back</Link></button>
        </div>
    );
};

export default UserDetails;