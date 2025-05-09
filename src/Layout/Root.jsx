import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Header/Navbar";


const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;