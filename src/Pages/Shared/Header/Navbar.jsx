import { BsFlower1 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const navMenu = <>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/portfolio'>Our Portfolio</NavLink></li>
<li><NavLink to='/team'>Our Team</NavLink></li>
<li><NavLink to='/contact'>Contact Us</NavLink></li>
</>
const Navbar = () => {
    return (
        <div className=" flex items-center lg:px-64  w-full p-[0.5rem] min-h-16 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm uppercase dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu}
                    </ul>
                </div>
                <div className="flex items-center text-pink-600">
                    <BsFlower1 className="text-3xl"></BsFlower1>
                <a className=" ml-2 uppercase font-bold text-3xl">Aymans</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu uppercase menu-horizontal px-1">
                {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-pink-600">Login</a>
            </div>
        </div>
    );
};

export default Navbar;