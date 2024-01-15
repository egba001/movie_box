"use client";
import Link from 'next/link';
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {


    return (
        <div className="w-full fixed top-0 left-0 text-white bg-lgray px-6 lg:px-10 justify-between py-3 lg:py-5 flex items-center">
            <h1 className=" font-bold text-xl cursor-pointer"><Link href="/">Where in the world?</Link></h1>
            <button className='text-white transition-all duration-200 flex items-center space-x-3'>
                <BsFillMoonFill />
                <span>Dark Mode</span>
            </button>
        </div>
    )
}

export default Navbar;