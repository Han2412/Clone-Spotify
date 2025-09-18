import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
import { FaListUl, FaPlay } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import TKCS155 from "../../assets/TKCS155.jpg";
import TKCS from "../../assets/TKCS.jpg";
import yuki from "../../assets/YUKI.JPG";
import { ShareIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import RelatedMusic from "./RelatedMusic";

// Related Music
const relatedItems = [
  { id: 1, title: "Tình Khúc Cho Em", artist: "Trịnh Công Sơn", image: TKCS },
  { id: 2, title: "Diễm Xưa", artist: "Khánh Ly", image: TKCS },
  // ...
];

import Marquee from "react-fast-marquee";

function ArtistInfo() {
  return (
    <div
      className="relative w-96 h-[85vh] bg-gradient-to-b from-[#1F1F1F] to-[#121212]
     gap-8 mx-2 mt-3 rounded-2xl overflow-y-auto scrollbar-custom"
    >
      {/* Header play currentnow */}
      <div className=" group w-96 z-40 shadow-2xl  fixed bg-[#282828] flex items-center justify-between pr-4 py-6 drop-shadow-xl/50">
        <div className="flex items-center group-hover:translate-x-7 transition-all duration-100 ease-in-out">
          <button className="text-white text-2xl hover:bg-[#282828] rounded mr-2 opacity-0 group-hover:opacity-100">
            <HiOutlineChevronLeft />
          </button>
          <span
            className="text-white font-bold text-xl hover:underline underline-offset-4
           hover:opacity-80 cursor-pointer"
          >
          Tri kỹ cảm xúc
          </span>
        </div>
        <div className="flex items-center z-20 gap-4 ">
          <button className="text-white text-2xl bg-[#282828] rounded p-1">
            <FiMoreHorizontal />
          </button>
          <button className="text-white text-2xl bg-[#282828] rounded p-1">
            <FiMaximize2 />
          </button>
        </div>
      </div>

      <div className="relative h-[500px] w-full mt-14">
        <div className="p-8">
          <img
            src={TKCS155}
            alt="Artist Cover"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/* footer artistinfor */}
        <div className="flex items-center justify-between mx-8.5 gap-2.5 mt-2">
          <div>
            <div class=" hover:underline text-white text-2xl ">
              <Marquee gradient={false} speed={50}>
                Ai rồi cũng sẽ tốt thôi như...
              </Marquee>
            </div>
            <div className="text-xl hover:underline">Tri kỹ cảm xúc</div>
          </div>
          {/*  */}
          <div className="relative group ">
            <div className="flex items-center space-x-2 justify-self-center">
              <ShareIcon className="w-6 h-6 text-white" />
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <div class="mx-4">
        <RelatedMusic items={relatedItems} />
      </div>

      {/* Artist infor */}
      <div class="max-w-sm rounded-xl overflow-hidden bg-[#282828]  shadow-lg text-white p-4 m-4 ">
        <div class="relative">
          <img
            src={TKCS}
            alt="Artist"
            class="w-full h-60 object-cover rounded-2xl"
          />
          <div class="absolute top-4 left-4 text-white text-xl font-semibold">
            About the artist
          </div>
        </div>

        {/* About infor */}
        <div class="right-0 ">
          <div className=" flex items-center gap-2 justify-between">
            <div className="mr-10 pr-4">
              <h2 class="text-xl font-bold mb-1">Hoàng Dũng</h2>
              <p class="text-gray-400 mb-2">1,085,027 monthly listeners</p>{" "}
            </div>
            <div>
              <button class="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm mb-3">
                Follow
              </button>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-300">
              Hoàng Dũng là ca sỹ bước ra từ cuộc thi The Voice - Giọng hát Việt
              2015. Các EP “Tình Ca Mùa Thu”,...
            </p>
          </div>
        </div>
      </div>
      {/* credit */}
      <div class="bg-[#282828] p-4 m-4 rounded-2xl">
        <div className=" ">
          <div class="flex items-center justify-between px-1.5">
            <div class="font-bold text-2xl">Credit</div>
            <div class="text-xl">Show all</div>
          </div>

          <div class="grid justify-between">
            <div class="flex items-center gap-6 justify-between">
              <div className=" mt-2 ">
                <h2 class="text-xl font-bold mb-1">Hoàng Dũng</h2>
                <p class="text-gray-400 mb-2">1,085,027 monthly listeners</p>
              </div>
              <div>
                <button class="border border-white  bg-[#201d1d] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                  Follow
                </button>
              </div>
            </div>
            <div class="flex items-center gap-6 justify-between">
              <div className=" gap-4 mt-2 justify-between">
                <h2 class="text-xl font-bold mb-1">Hoàng Dũng</h2>
                <p class="text-gray-400 mb-2">1,085,027 monthly listeners</p>
              </div>
              <div>
                <button class="border border-white  bg-[#201d1d] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                  Follow
                </button>
              </div>
            </div>
            <div class="flex items-center gap-6 justify-between">
              <div className=" gap-4 mt-2 justify-between">
                <h2 class="text-xl font-bold mb-1">Hoàng Dũng</h2>
                <p class="text-gray-400 mb-2">1,085,027 monthly listeners</p>
              </div>
              <div>
                <button class="border border-white  bg-[#201d1d] text-white px-4 py-2 rounded-full font-semibold text-sm mb-3">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next in queue */}
      <div class="bg-[#282828] p-2 mx-4 mb-15 rounded-2xl">
        <div className=" ">
          <div class="flex items-center justify-between px-1.5 ">
            <div class="font-bold">Next in Queue</div>
            <div class="hover:underline hover:text-white ">Open Queue</div>
          </div>

          <div className="flex items-center space-x-3 p-2 mx-2 mb-rounded group  hover:bg-gray-500">
            <div className="relative w-16 h-12">
              <img src={yuki} className="w-14 h-12 rounded" />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded
               opacity-0 group-hover:opacity-100 transition"
              >
                <FaPlay className="text-white text-lg" />
              </button>
            </div>
            <div>
              <p className="text-white font-medium">
                Kamen Rider Yuki(opening)
              </p>
              <p className="text-gray-400 text-sm"></p>
            </div>
            <div class="opacity-0 group-hover:opacity-100">
              <FaEllipsisVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArtistInfo;
