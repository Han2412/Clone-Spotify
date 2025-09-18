import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaListUl,
  FaDesktop,
  FaExpand,
  // Mini player
} from "react-icons/fa";
import {
  MdDevices, // Thiết bị (icon đầu tiên, màu xanh)
  MdClosedCaption, // Lyrics/subtitle
  MdVolumeUp, // Âm lượng
  MdFullscreen, // Fullscreen
  MdPictureInPictureAlt, // Mini player
} from "react-icons/md";
import { IoAddCircleOutline, IoCheckmarkCircle } from "react-icons/io5";
import { useState } from "react";
import TKCS155 from "../../assets/TKCS155.jpg";
import { HiMinusCircle } from "react-icons/hi";

// const [progress, setProgress] = useState(60); // giây
const  Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const handleClick = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div className=" fixed bottom-0 h-24 w-full bg-gradient-to-b from-[#1F1F1F] to-[#121212] border-t border-gray-800 flex items-center px-4">
      {/* infor currentplay */}
      <div className="flex item-center flex-1  gap-4">
        <img src={TKCS155} alt="" className="w-18 h-18 rounded"></img>
        <div className="ml-2 text-left">
          <div className="font-medium hover:underline cursor-pointer">
            Ai rồi cũng tốt nếu như...
          </div>
          <div className="text-sm text-gray-400 hover:underline cursor-pointer">
            Tri kỹ cảm xúc
          </div>
        </div>
        <div class="flex gap-3 ml-3 mt-3 text-gray-500">
          <HiMinusCircle class="w-6 h-6 cursor-pointer" />
          {isAdd ? (
            <IoAddCircleOutline
              class="w-6 h-6 cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <IoCheckmarkCircle
              class="w-6 h-6 cursor-pointer text-[#1DB954]"
              onClick={handleClick}
             
            />
          )}
        </div>
      </div>

      {/* control play */}
      <div className="flex-1 flex flex-col items-center ">
        <div className="flex items-center gap-6 mb-1">
          <button className="text-gray-300 hover:text-white">
            <FaRandom className="w-6 h-6" />
          </button>
          <button className="text-gray-300 hover:text-white">
            <FaStepBackward className="w-6 h-6"/>
          </button>
          <button
            className="bg-white text-black rounded-full p-2 mx-2 hover:scale-105 transition"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause className="w-6 h-6" /> : <FaPlay className="w-6 h-6"/>}
          </button>
          <button className="text-gray-300 hover:text-white ">
            <FaStepForward className="w-6 h-6" />
          </button>
          <button className="text-gray-300 hover:text-white">
            <FaRedo className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full flex items-center space-x-2">
          <span>00:00</span>
          <div className="flex-1 h-1 bg-gray-400 rounded-full">
            <div className="w-1/3 h-full bg-white "></div>
          </div>
          <span>03:33</span>
        </div>
      </div>
      {/* Các nút chức năng  */}
      <div className="flex items-center flex-1 justify-end gap-6">
        <button className="text-gray-300 hover:text-white text-2xl">
          <MdClosedCaption className="w-6 h-6" />
        </button>
        <button className="text-gray-300 hover:text-white">
          <FaListUl className="w-6 h-6" />
        </button>
        <button className="text-green-400 hover:text-green-300 text-2xl">
          <MdDevices className="w-6 h-6" />
        </button>
        <button className="text-gray-300 hover:text-white">
          <FaVolumeUp className="w-6 h-6"/>
        </button>
        <div className="w-24 h-1 bg-gray-700 rounded-full relative">
          <div className="h-1 bg-white rounded-full w-3/4"></div>
        </div>
        <button className="text-gray-300 hover:text-white text-2xl">
          <MdPictureInPictureAlt className="w-6 h-6"/>
        </button>
        <button className="text-gray-300 hover:text-white">
          <FaExpand className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
};

export default Footer;
