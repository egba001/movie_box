// "use client";
import { useContext } from 'react';
import { ThemeContext } from '../../context/display';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = () => {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className="w-full bg-lgray px-6 lg:px-10 justify-between py-3 lg:py-5 flex items-center">
            <h1 className="text-white font-bold text-xl cursor-pointer">Where in the world?</h1>
            <button onClick={toggleDarkMode} className='text-white transition-all duration-200 flex items-center space-x-3'>
                { darkMode ? <BsFillSunFill /> : <BsFillMoonFill /> }
                { darkMode === true ? <span>Light Mode</span> : <span>Dark Mode</span> }
            </button>
        </div>
    )
}

export default Navbar;