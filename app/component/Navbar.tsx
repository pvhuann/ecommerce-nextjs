'use client'

import { useState } from "react";
import SearchBar from "./SearchBar"
import SignOut from "./SignOut";
import { BiSearch } from "react-icons/bi";
import { BsChevronCompactUp } from "react-icons/bs";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-between relative py-4">
                {/*  */}
                <div className="flex items-center lg:space-x-20 md:space-x-10">
                    {/* Logo */}
                    <div className="font-semibold text-2xl">
                        <a href="/">E-CoM</a>
                    </div>
                    {/* menu */}
                    <nav className="max-md:hidden">
                        <ul className="flex items-center lg:space-x-10 space-x-7 opacity-80 text-[16px]">
                            <li>
                                <a href="/" className="py-3 inline-block w-full">Home</a>
                            </li>
                            <li><a href="/filters" className="py-3 inline-block w-full">Filters</a></li>
                            <li><a href="/myProducts" className="py-3 inline-block w-full">My Products</a></li>
                        </ul>
                    </nav>

                </div>
                {/* search */}
                <div className="flex items-center space-x-4">
                    <SearchBar />
                    <Link href='/cart'>
                        <div className='p-2 bg-gray-100 rounded-full'><CiShoppingCart size={20} /></div>
                    </Link>
                    <div className="cursor-pointer relative"
                        onClick={() => setShowProfile(!showProfile)}>
                        <img src="user.jpg" alt="imageUser" className="w-[30px] h-[30px] rounded-full object-cover" />
                        <div className={`absolute z-[2] ${showProfile ? "" : "hidden"}`}>
                            <SignOut />
                        </div>
                    </div>

                    <span className="p-2 bg-gray-100 md:hidden rounded-full" onClick={() => setShowMenu(!showMenu)}>
                        <BsChevronCompactUp className={`transition ease-in duration-150 ${showMenu ? "rotate-180" : "0"}`} />
                    </span>
                </div>
            </div>

            {/* mobile */}
            <div className={`md:hidden ${showMenu ? " pb-4" : "h-0 invisible opacity-0"}`}>
                <nav>
                    <ul className="flex flex-col space-x-7 opacity-80 text-[16px]">
                        <li className="hidden"></li>
                        <li><a href="/shop" className="py-3 inline-block w-full">Home</a></li>
                        <li><a href="/filters" className="py-3 inline-block w-full">Filters</a></li>
                        <li><a href="/myProducts" className="py-3 inline-block w-full">My Products</a></li>
                    </ul>
                </nav>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
                    <input type="text"
                        placeholder="Search"
                        autoComplete="false"
                        className="outline-none bg-transparent w-full ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[12px]"
                    />
                    <button>
                        <BiSearch size={20} className="opacity-60" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar