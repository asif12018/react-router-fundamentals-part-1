import { Link, NavLink } from "react-router-dom";
import  './Header.css'

const Header = () => {
    return (
        <div className="min-h-screen/2 min-w-screen border-2 flex flex-col justify-center items-center ">
            <h2>NavBar</h2>
            <nav className="flex gap-4">
                {/* using link to prevent from reload page and using navlink to add css so that user can understand where te navigated to*/}
                <NavLink className="text-lg font-bold text-blue-400" to="/">Home</NavLink>
                <NavLink className="text-lg font-bold text-blue-400" to="/about">About</NavLink>
                <NavLink className="text-lg font-bold text-blue-400" to="/contact">Contact Us</NavLink>
                <Link className="text-lg font-bold text-blue-400" to="/users">Users</Link>
                <Link className="text-lg font-bold text-blue-400" to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;