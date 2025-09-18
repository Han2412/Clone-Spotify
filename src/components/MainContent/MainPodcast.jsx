import TKCS from "../../assets/TKCS.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoAddCircleOutline, IoCheckmarkCircle } from "react-icons/io5";
import EpisodesList from "./EpisodesList";
const MainPodcast = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-scroll  bg-gradient-to-b from-[#1F1F1F] to-[#121212] scrollbar-custom  mt-3">
      {/* Header */}
      <div className="flex items-center rounded-t-lg  pt-8 pb-8 px-4 drop-shadow-2xl bg-gradient-to-b from-[#d62d00] to-[#421212]">
        <img src={TKCS} className="w-45 h-45 ml-2 rounded-lg" />
        <div className="flex flex-col mt-12 items-start justify-between text-left ml-5 gap-3">
          <div className="">Podcast</div>
          <h1 className="font-bold text-5xl">Tri kỹ cảm xúc</h1>
          <div className="font-bold text-2xl">web.5.ngay</div>
        </div>
      </div>
      {/* button and follow */}
      <div className="bg-gradient-to-b from-[#671a05] to-[#121212]">
        <div className="flex items-center justify-between  px-4 pt-4 ">
          <button className="rounded-2xl text-center text-white border-solid border-1  py-1.25 px-3">
            Following
          </button>
        </div>
        <div className="text-left ml-4 mt-3">
          <div className="  text-xl font-bold text-white">About</div>
          <div className="mt-2 text-white mx-1.5">
            <span>
              Từ tập 182, chương trình Tâm Sự Kinh Doanh chính thức đổi tên
              thành Tri Kỷ Cảm Xúc. Kênh Youtube: 🔗
              https://youtube.com/Web5Ngay
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 mt-4">
          <button className=" bg-[#282828] border-0.5 rounded-2xl py-1 px-3">
            5,7k
          </button>
          <button className=" bg-[#282828] border-0.5  rounded-2xl py-1 px-3">
            busines
          </button>
          <button className=" bg-[#282828] border-0.5  rounded-2xl py-1 px-3 ">
            selhelp
          </button>
        </div>

        <div className="flex items-center justify-between mt-4 px-5 pb-4">
          <div className="flex items-center">
            <button>All Episods</button>
            <IoIosArrowDown className="mt-1.5 ml-2" />
          </div>
          <div className="flex items-center ">
            <button>Newest to oldest </button>
            <IoIosArrowDown className="mt-1.5 ml-2" />
          </div>
        </div>
      </div>

      <EpisodesList />
    </div>
  );
};

export default MainPodcast;
