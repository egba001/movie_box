'use client'
import { BiChevronDown } from "react-icons/bi"
import { useState } from "react"

const Filter = () => {

    const [ showOptions, setShowOptions ] = useState(false);

    return (
        <div className="relative">
            <div onClick={() => setShowOptions(!showOptions)} className="w-[12rem] py-3 cursor-pointer justify-center bg-lgray flex items-center space-x-3 text-white rounded-xl">
                <span>Filter by Region</span>
                <BiChevronDown />
            </div>
            {
                showOptions &&
                <div className="w-[12rem] mt-3 rounded-xl px-5 py-3 bg-lgray z-20 absolute top-10 text-white shadow-md transition-all duration-300">
                    <ul className="flex-col space-y-2">
                        <li tabIndex={0}>Africa</li>
                        <li tabIndex={0}>America</li>
                        <li tabIndex={0}>Asia</li>
                        <li tabIndex={0}>Europe</li>
                        <li tabIndex={0}>Oceania</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Filter;