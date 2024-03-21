import { Outlet } from "react-router-dom";
import Header from './../Header/Header';
import Footer from "../Footer/Footer";




const Home = () => {
    return (
        <div className="">
            <h2>this is the home component</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;