"use client";
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {

    const { session } = useSession();

    return (
        <div className="w-full fixed top-0 left-0 text-white bg-lgray px-6 lg:px-10 justify-between py-3 lg:py-5 flex items-center">
            <h1 className=" font-bold text-xl cursor-pointer"><Link href="/">Where in the world?</Link></h1>
            <div>
            {!session ? (
            <div className='flex space-x-6 flex-col lg:flex-row'>
              <Link href="/signin">
                <li>Login</li>
              </Link>
              <Link href="/signup">
                <li>Register</li>
              </Link>
              <Link href="/main">
                <li>Countries</li>
              </Link>
            </div>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
            </div>
            {/* <button className='text-white transition-all duration-200 flex items-center space-x-3'>
                <BsFillMoonFill />
                <span>Dark Mode</span>
            </button> */}
        </div>
    )
}

export default Navbar;