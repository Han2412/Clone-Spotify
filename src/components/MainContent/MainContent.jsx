import { FaPlay } from "react-icons/fa";
import TKCS from "../../assets/TKCS.jpg";
import likesongs from "../../assets/image_likesongs.jpg";
import yourepisodes from "../../assets/your image.png";
import yuki from "../../assets/YUKI.JPG";
import PLAYLIST from "../../assets/Playlist Chill.jpg";
import DECADE from "../../assets/Decade.jpg";
import MTP from "../../assets/MTP.jpg";
import ATSH from "../../assets/ATSH.jpg";
import BLACKPINK from "../../assets/BLACKPINK.png";
import BGOrange from "../../assets/orange-la-ai-4.jpg";
import Orange from "../../assets/Orange.webp";
import SevenYears from "../../assets/SevenYears.jpg";
import BTST from "../../assets/BGST.webp";
import LUCAS from "../../assets/LuKas Graham.webp";

import { IoAddCircleOutline } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaVolumeMute, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Nếu dùng HeroIcons
import { useState } from "react";

function MainContent() { 
  // Mock data cho section Made For You
  // MAKE FOR YOU
  const recommendations = [
    {
      id: 1,
      title: "List Sơn Tùng M-TP",
      artist: "Sơn Tùng M-TP",
      image: MTP,
    },
    {
      id: 2,
      title: "Anh Trai Say Hi",
      artist: "Mix",
      image: ATSH,
    },
    {
      id: 3,
      title: "List BLACKPINK",
      artist: "Mix",
      image: BLACKPINK,
    },
  ];
  // Thêm các bài hát khác...
  const [fillters, setFillters] = useState([
    { id: 1, label: "All", isActive: true },
    { id: 2, label: "Music", isActive: false },
    { id: 3, label: "Podcast", isActive: false },
  ]);

  const handleFilterClick = (id) => {
    const updatedFilters = fillters.map((filter) =>
      filter.id === id
        ? { ...filter, isActive: true }
        : { ...filter, isActive: false }
    );

    setFillters(updatedFilters);
  };

  const contentItems = [
    {
      id: 1,
      title: "Liked Songs",
      type: "Playlist",
      image: likesongs,
    },
    {
      id: 2,
      title: "Nhìn đời bằng ...",
      type: "Podcast",
      image: TKCS,
    },
    {
      id: 3,
      title: "Your Episodes",
      type: "Radio",
      image: yourepisodes,
    },
    {
      id: 4,
      title: "kamen Rider Yuki ",
      type: "Playlist",
      image: yuki,
    },
    {
      id: 5,
      title: "Playlist Chill",
      type: "Mix",
      image: PLAYLIST,
    },
    {
      id: 6,
      title: "List Lucas Graham",
      type: "Mix",
      image: LUCAS,
    },
    {
      id: 7,
      title: "List Kamen Rider",
      type: "Mix",
      image: DECADE,
    },
    {
      id: 8,
      title: "Seven Years",
      type: "Mix",
      image: SevenYears,
    },
  ];

  return (
    <>
      <div className="relative flex flex-col w-full bg-gradient-to-b from-[#1F1F1F] to-[#121212] scrollbar-custom rounded-t-2xl mt-3 overflow-y-auto">
        {/* Fillter Button */}
        <div
          className=" z-50 w-[41.0625rem] fixed top-22 flex flex-1 gap-2 bg-gradient-to-b from-[#1F1F1F]
             to-[#121212] opacity-75 rounded-t-2xl p-5  "
        >
          <div className="flex gap-2 ml-7">
            {fillters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={` px-4 py-2 rounded-full ${
                filter.isActive
                  ? "bg-gray-400 text-black "
                  : "bg-[#282828] text-white "
              }`}
            >
              {filter.label}
            </button>
          ))}
          </div>
        </div>

        <div className="relative rounded-2xl ">
          {/* Playlist items and button*/}
          <div className="grid grid-cols-2 gap-2 pb-16 mt-20 px-12 ">
            {contentItems.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between bg-[#3d3b3b] hover:bg-[#282828] 
                     transition-colors rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex items-center justify-between ml-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  {/* <p className="text-gray-400 text-sm">{item.type}</p> */}
                  <div className="right-0 mr-2"></div>
                </div>
                <button
                  className="bottom-2 right-4 mr-2  bg-green-500 hover:bg-green-400 rounded-full 
                w-12 h-12 flex items-center justify-center shadow-lg  opacity-0 group-hover:opacity-100
                 transition-opacity"
                >
                  <FaPlay className="text-black text-2xl ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Section Made For You */}
          <section>
            <div className="flex justify-between items-center px-8 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white hover:underline">
                  Made For you
                </h2>
              </div>
              <div>
                <button className="border-none outline-none focus:outline-none focus:ring-0 text-gray-400 hover:underline hover:text-white ">
                  Show all
                </button>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-6 px-4 group/section overflow-x-auto">
              <button
                className="w-10 h-10 absolute left-2 top-1/2 z-10 px-3 bg-[#4e4242] rounded-full 
               group-hover/section:opacity-100 opacity-0 transition-opacity "
              >
                <FaChevronLeft />
              </button>
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="  group rounded-lg p-4 hover:bg-[#282828] transition-all cursor-pointer"
                >
                  <div className="mb-4 relative ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <button
                      className="absolute bottom-2 right-2  bg-green-500 hover:bg-green-400 
                    rounded-full w-12 h-12 flex items-center justify-center shadow-lg  opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaPlay className="text-black text-2xl ml-1" />
                    </button>
                  </div>
                  <h3 className="text white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.artist}</p>
                </div>
              ))}
              <button
                className="w-10 h-10 px-3 text-white absolute top-1/2 right-2  z-10  bg-[#4e4242] rounded-full
              group-hover/section:opacity-100 opacity-0 transition-opacity "
              >
                <FaChevronRight />
              </button>
            </div>
          </section>

          {/* Section Your Top Mixes */}
          <section>
            <div className="flex justify-between items-center my-4 px-8 mb-4 group/sect">
              <h2 className="text-2xl font-bold text-white hover:underline">
                Your Top Mixes
              </h2>
              <button className="border-none text-gray-400 hover:text-white hover:underline">
                Show all
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6  px-4">
              <button
                className="w-10 h-10 absolute left-2 top-1/2 z-10 px-3 bg-[#4e4242] rounded-full 
               group-hover/sect:opacity-100 opacity-0 transition-opacity "
              >
                <FaChevronLeft />
              </button>

              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-lg p-4 hover:bg-[#282828] transition-all cursor-pointer"
                >
                  <div className="mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <button
                      className=" absolute bottom-2 right-2  bg-green-500 hover:bg-green-400 rounded-full 
                    w-12 h-12 flex items-center justify-center shadow-lg  opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaPlay className="text-black text-2xl ml-1" />
                    </button>
                  </div>
                  <h3 className="text white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.artist}</p>
                </div>
              ))}

              <button
                className="w-10 h-10 px-3 text-white absolute top-1/2 right-2  z-10  bg-[#4e4242] rounded-full
              group-hover/section:opacity-100 opacity-0 transition-opacity "
              >
                <FaChevronRight />
              </button>
            </div>
          </section>

          {/* Section Made For You 3*/}
          <section>
            <div className="flex justify-between items-center my-4 px-8 mb-4">
              <h2 className="text-2xl font-bold text-white hover:underline">
                Best of 2025 VietNam
              </h2>
              <button className="text-gray-400 hover:text-white hover:underline">
                Show all
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 px-4">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-lg p-4 my-4 hover:bg-[#282828] transition-all cursor-pointer"
                >
                  <div className="mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <button
                      className=" absolute bottom-2 right-2  bg-green-500 hover:bg-green-400 
                    rounded-full w-12 h-12 flex items-center justify-center shadow-lg  opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaPlay className="text-black text-2xl ml-1" />
                    </button>
                  </div>
                  <h3 className="text white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.artist}</p>
                </div>
              ))}
            </div>
          </section>

          {/* More like Orange */}
          <section className="flex justify-center">
            <div
              className="group relative w-[520px] h-[500px]  mx-15 mb-20 bg-[#282828] rounded-2xl"
              style={{ backgroundImage: `url(${BGOrange})` }}
            >
              {/* header */}
              <div class="flex items-center  p-8 ">
                <div>
                  <img src={Orange} class="w-30 h-20 object-cover rounded-lg" />
                </div>
                s
                <div class="ml-4 text-white">
                  <h2 class="text-2xl">Orange Radio</h2>
                  <span>Playlist. Spotify</span>
                </div>
              </div>
              {/* content */}

              {/* footer */}
              <div
                className="absolute bottom-[-80px] left-10 right-10 opacity-0 group-hover:bottom-4 
                group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-between"
              >
                <div>
                  <button class="bg-black rounded-2xl py-0.75 px-3 flex items-center gap-2">
                    <FaVolumeMute className="text-white" />
                    Preview
                  </button>
                </div>
                <div class=" flex items-center gap-2">
                  <IoAddCircleOutline class="text-white w-8 h-8" />
                  <FiMoreHorizontal class="text-white w-8 h-8" />
                  <button
                    className="bg-white hover:bg-white rounded-full w-12 h-12 flex items-center justify-center 
                    shadow-lg  transition-opacity"
                  >
                    <FaPlay className="text-black text-2xl ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* More like Sơn Tùng */}
          <section className="flex justify-center">
            <div
              class="relative w-[520px] h-[500px]  mx-15 mb-20 bg-[#282828] rounded-2xl"
              style={{ backgroundImage: `url(${BTST})` }}
            >
              {/* header */}
              <div class="flex items-center  p-8 ">
                <div>
                  <img src={MTP} class="w-30 h-20 object-cover rounded-lg" />
                </div>
                <div class="ml-4 text-white">
                  <h2 class="text-2xl">Sơn Tùng Radio</h2>
                  <span>Playlist. Spotify</span>
                </div>
              </div>
              {/* content */}
              <div class="w-full "></div>
              {/* footer */}
              <div class="w-[440px] absolute bottom-4 flex items-center justify-between ml-10 mr-25">
                <div>
                  <button class="bg-black rounded-2xl py-0.75 px-2 flex items-center gap-2">
                    <FaVolumeMute className="text-white" />
                    Preview
                  </button>
                </div>
                <div class=" flex items-center gap-2">
                  <IoAddCircleOutline class="text-white w-8 h-8" />
                  <FiMoreHorizontal class="text-white w-8 h-8" />
                  <button
                    className=" bg-white hover:bg-white rounded-full w-12 h-12 flex items-center 
                    justify-center shadow-lg  transition-opacity"
                  >
                    <FaPlay className="text-black text-2xl ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-center">
            <div class="relative w-[520px] h-[500px]  mx-15 mb-20 bg-[#282828] rounded-2xl">
              {/* header */}
              <div class="flex items-center  p-8 ">
                <div>
                  <img src={Orange} class="w-30 h-20 object-cover rounded-lg" />
                </div>
                <div class="ml-4 text-white">
                  <h2 class="text-2xl">Orange Radio</h2>
                  <span>Playlist. Spotify</span>
                </div>
              </div>
              {/* content */}
              <div class="w-full "></div>
              {/* footer */}
              <div class="w-[440px] absolute bottom-4 flex items-center justify-between ml-10 mr-25">
                <div>
                  <button class="bg-black rounded-2xl py-0.75 px-4">
                    Preview
                  </button>
                </div>
                <div class=" flex items-center gap-2">
                  <IoAddCircleOutline class="text-white w-8 h-8" />
                  <FiMoreHorizontal class="text-white w-8 h-8" />
                  <button
                    className="bg-white hover:bg-white rounded-full 
                    w-12 h-12 flex items-center justify-center shadow-lg  transition-opacity"
                  >
                    <FaPlay className="text-black text-2xl ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MainContent;
