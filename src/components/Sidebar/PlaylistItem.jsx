import React from "react";
import { BsPinAngleFill } from "react-icons/bs";

import {
  FaPlay,
} from "react-icons/fa";
function PlaylistItem({ title, type, count, image }) {
  return (
    <div className="flex items-center p-1 mx-2 rounded group  hover:bg-gray-500">
     <div className="relative w-14 h-14">
        <img src={image} className="w-14 h-14 rounded" />
        <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded opacity-0 group-hover:opacity-100 transition">
          <FaPlay className="text-white text-lg" />
        </button>
      </div>
      <div className="ml-2 flex flex-col text-left">
        <p className="text-white font-medium">{title}</p>
        <div className="flex items-center">
          <BsPinAngleFill  className="text-[#1DB954] inline-block mr-1" />
          <p className="text-gray-400 text-sm">
          {type}.{count}
        </p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
