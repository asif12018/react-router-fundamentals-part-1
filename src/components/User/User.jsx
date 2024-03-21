import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;

    return (
        <div className=" w-[400px] mx-auto bg-blue-300 p-4 rounded-xl py-12">
            <h2 className="text-lg font-bold">{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button className="btn bg-white p-2 rounded-full mt-2"><Link to={`/users/${id}`}>Show Details</Link></button>
        </div>
    );
};

export default User;