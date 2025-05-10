import React from 'react';
import { BsFlower1 } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-pink-600 text-white p-10 pb-25 font-semibold">
            <aside>
                <div className="flex items-center text-white">
                    <BsFlower1 className="text-3xl"></BsFlower1>
                    <a className=" ml-2 uppercase font-bold text-3xl">Aymans</a>
                </div>
                <p>
                    Aymans Beauty Parlour
                    <br />
                    Providing reliable Service Since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <div className='w-64'>
                <h5 className='text-xl underline'>About Us</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur sed aperiam? Dolores animi ad ratione nostrum atque veniam ut nesciunt facere consectetur dolorem harum aperiam, saepe odio beatae repellendus!</p>
            </div>
        </footer>
    );
};

export default Footer;