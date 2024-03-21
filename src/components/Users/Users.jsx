import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Our User {users.length}</h2>
            <p>this is user page</p>
            <div className="space-y-4 grid grid-cols-3">
            {
                users.map((user,index) => <User key={index} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;