// icon
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { FaListUl, FaPlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { PiListBold } from "react-icons/pi";
import { BsGrid3X3GapFill, BsGridFill } from "react-icons/bs";

import NavItem from "./NavItem";
import PlaylistItem from "./PlaylistItem";
// image
import TKCS from "../../assets/TKCS.jpg";
import likesongs from "../../assets/image_likesongs.jpg";
import yourepisodes from "../../assets/your image.png";
import PLAYLIST from "../../assets/Playlist Chill.jpg";
import DECADE from "../../assets/Decade.jpg";
import LUCAS from "../../assets/LuKas Graham.webp";

import React, { useState, useRef, useEffect } from "react";

const Sidebar = () => {
  const playlist = [
    {
      id: 1,
      title: "Liked Songs",
      type: "Playlist",
      count: 101,
      image: likesongs,
    },
    {
      id: 2,
      title: "Tri kỹ cảm xúc",
      type: "Podcast.Web5ngay ",
      count: 85,
      image: TKCS,
    },
    {
      id: 3,
      title: "Your Espisodes",
      type: "Playlist",
      count: 60,
      image: yourepisodes,
    },
    {
      id: 4,
      title: "List Chill",
      type: "Playlist",
      count: 40,
      image: PLAYLIST,
    },

    {
      id: 5,
      title: "List Kamen Rider",
      type: "Playlist",
      count: 72,
      image: DECADE,
    },
    {
      id: 6,
      title: "LuKas Graham",
      type: "Playlist",
      count: 50,
      image: LUCAS,
    },
    {
      id: 7,
      title: "Study Focus",
      type: "Playlist",
      count: 50,
      image: "images/study-focus.jpg",
    },
    {
      id: 8,
      title: "Study Focus",
      type: "Playlist",
      count: 50,
      image: "images/study-focus.jpg",
    },
  ];
  // buttons state sidebar
  const [activeButton, setActiveButton] = useState(null);

  const [open, setOpen] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const [selected, setSelected] = useState("Recents");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const buttons = [
    { id: "playlist", label: "Playlist" },
    { id: "podcast", label: "Podcast " },
    { id: "artist", label: "Artist" },
  ];

  return (
    <aside className="relative w-90 flex flex-col 60vh bg-gradient-to-b from-[#1F1F1F] to-[#121212] mx-2 mt-2.5 rounded-2xl text-white">
      <nav>
        <div className="space-y-1">
          {/* Header your library */}
          <div className="w-90 ml-0 group fixed flex flex-col gap-2 rounded-t-xl z-40  bg-[#1F1F1F] drop-shadow-xl/50 ">
            <div className="flex items-center space-x-10 justify-between py-1 my-0.5 mr-2 ">
              <div className="flex items-center group-hover:translate-x-6 gap-3 transition-all duration-100 ease-in-out">
                <HomeIcon className="h-6 w-6 opacity-0 text-gray-300  hover:text-white group-hover:opacity-100" />
                <h2 className="font-bold text-xl">Your Library</h2>
              </div>
              <div className="gap-1 flex items-center">
                <button className=" h-12 w-12 px-2.5 hover:bg-[#1A1A1A] rounded-full ">
                  <PlusIcon className="h-6 w-6" />
                </button>
                <button className=" h-12 w-12 px-2.5 hover:bg-[#1A1A1A] rounded-full">
                  <ArrowUpRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* button Music and podcast  */}
            <div className="flex justify-center gap-2 px-2 pb-2 ">
              {buttons.map((btn) =>
                activeButton === null || activeButton === btn.id ? (
                  <button
                    key={btn.id}
                    onClick={() => setActiveButton(btn.id)}
                    className={`px-6 py-2 text-sm rounded-full drop-shadow-1xl
                    ${
                      activeButton === btn.id
                        ? "bg-white text-black"
                        : "bg-[#282828] text-white hover:bg-[#B3B3B3]"
                    }`}
                  >
                    {btn.label}
                  </button>
                ) : null
              )}

              {/* Hiện nút delete khi đã chọn 1 nút */}
              {activeButton !== null && (
                <>
                  {/* Nút Delete */}
                  <button
                    onClick={() => setActiveButton(null)}
                    className="w-9 h-9 px-2.5 bg-[#212121] rounded-full flex items-center justify-center hover:bg-[#161616 ]"
                    title="Khôi phục"
                  >
                    <FiX className="text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Items for sidebar*/}
        <div className=" h-[75vh] mt-28 mb-20 py-2 px-1 space-y-2 cursor-pointer  transition-all overflow-y-auto scrollbar-custom sidebar-scrollbar-custom">
          <div className="flex flex-col  px-2 ">
            <div className="mt-2 mx-2  flex items-center justify-between space-x-0">
              <div
                className={`relative transition-all duration-300 flex items-center  rounded-lg overflow-hidden outline: none ${
                  openSearch ? "w-64 bg-[#242424]" : "w-10"
                }`}
              >
                {/* Button Search */}
                <button
                  onClick={() => setOpenSearch(!openSearch)}
                  className="text-white p-2 rounded-full hover:bg-[#242424] transition"
                >
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>

                {/* Input Display open */}
                {openSearch && (
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="absolute left-8 top-1/2 -translate-y-1/2 px-4 py-2 rounded-md  text-white outline-none transition-all duration-300"
                  />
                )}
              </div>

              <div className="flex items-center relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((o) => !o)}
                  className="flex items-center gap-2 text-gray-300  hover:text-white pl-3"
                >
                  <span className="text">{selected}</span>
                  <FaListUl className="w-6 h-6"/>
                </button>

                {open && (
                  <div className="absolute right-0 mt-100 w-56 bg-[#282828] text-white rounded shadow-lg z-20">
                    <div className=" text-left px-4 py-2 text-xs text-gray-400">
                      Sort by
                    </div>
                    {[
                      "Recents",
                      "Recently added",
                      "Alphabetical",
                      "Creator",
                    ].map((opt) => (
                      <div
                        key={opt}
                        className="text-left text-xl px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer"
                        onClick={() => {
                          console.log("Chọn", opt);
                          setSelected(opt);
                          setOpen(false);
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                    <div className="border-t border-gray-700 my-1"></div>
                    <div className="text-left px-4 py-2 text-xl text-gray-400">
                      View as
                    </div>

                    <div className="bg-[#282828] flex justify-center items-center gap-1 py-1 mx-4 mb-2 rounded-lg">
                      {[
                        { id: "list", icon: PiListBold },
                        {
                          id: "grid",
                          icon: FaListUl,
                        },
                        {
                          id: "grid3x3",
                          icon: BsGrid3X3GapFill,
                        },
                        {
                          id: "gridFill",
                          icon: BsGridFill,
                        },
                      ].map(({ id, icon: IconComp }) => (
                        <button
                          key={id}
                          onClick={() => {
                            console.log("Chuyển qua", id);
                            setOpen(false);
                          }}
                          className="px-3 py-1 rounded-lg hover:bg-[#282828] "
                        >
                          {IconComp && <IconComp className="w-6 h-6" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {playlist.map((item) => (
            <PlaylistItem
              key={item.id}
              title={item.title}
              type={item.type}
              count={item.count}
              image={item.image}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
