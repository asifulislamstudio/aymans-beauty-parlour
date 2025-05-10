import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Header/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;