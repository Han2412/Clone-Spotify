// components/RelatedMusic.js
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function RelatedMusic({ items = [] }) {
  
  const scrollRef = useRef();

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-white bg-[#282828] mt-2 rounded-xl p-4 relative">
      <h2 className="font-bold text-lg mb-4">Related Music Videos</h2>
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#121212] rounded-full"
      >
        <FaChevronLeft />
      </button>
      <div
        ref={scrollRef}
        className="flex space-x-4 scroll-smooth overflow-x-scroll no-scrollbar"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="group min-w-[200px] flex-shrink-0 cursor-pointer"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button className="bg-green-500 hover:bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
                  <FaPlay className="text-black ml-1" />
                </button>
              </div>
            </div>
            <h3 className="text-white font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.artist}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#121212] rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
