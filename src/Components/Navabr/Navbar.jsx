import React from 'react';
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-5 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Futures</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-blue-500 font-semibold">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Products</a></li>
                    <li><a>Futures</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <p className="text-2xl"><IoCartOutline></IoCartOutline></p>
                <li><a className="font-semibold">Login</a></li>
                <a className="btn btn-primary bg-linear-to-r from-indigo-500 to-purple-500 rounded-3xl">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;