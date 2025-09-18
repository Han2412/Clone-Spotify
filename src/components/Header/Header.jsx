import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { IoIosPeople } from "react-icons/io";
import NOE1 from "../../assets/Noe1.jpg";

import NavItem from "../Sidebar/NavItem";
import spotifyLogo from "../../assets/spotifylogo.svg";
function Header({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-black h-16 flex items-center px-6 justify-between mt-3">
      {/* left side logo */}
      <div className="p-6">
        <img src={spotifyLogo} alt="Spotify" className="h-10" />
      </div>
      {/* Center Search */}
      <div className="flex items-center mx-4 gap-2">
        <button className="w-11 h-11 flex items-center justify-center rounded-full bg-[#242424]">
          <HomeIcon className="h-6 w-6 text-white" />
        </button>
        {/* <NavItem icon={<HomeIcon  className="h-6 w-6" />} /> */}
        <div className="relative bg-[#242424] px-4 py-2 ml-2 rounded-full w-[615px]  hover:border-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-white absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="ml-6 text-white w-full outline-none "
          />
        </div>
      </div>

      {/* Ride-side install and profile */}
      <div className="flex items-center text-gray-300 gap-8 m-8">
        <BellIcon className="h-7 w-7  hover:text-white" />
        <IoIosPeople className="h-7 w-7  hover:text-white" />
        <div className="flex items-center space-x-2">
          <img
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
            src={NOE1}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
