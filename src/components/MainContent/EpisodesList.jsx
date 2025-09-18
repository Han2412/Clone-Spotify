import HLCS from "../../assets/HLCS.png";
import { FaPlay } from "react-icons/fa";
import { IoAddCircleOutline} from "react-icons/io5";

const EpisodesList = () => {
  const episodes = [
    {
      id: 1,
      title: 'Tạm Biệt Phiên Bản "Tôi Không Hài Lòng Với Cuộc Sống" - #390',
      channel: "Tri Kỷ Cảm Xúc",
      src: HLCS,
      about: "Tâm sự kinh doanh được phát sống 8h sáng thứ 2",
    },
    {
      id: 2,
      title: "Bạn Không Phải Là Một Sai Lầm - #389",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Tâm sự kinh doanh được phát sống 8h sáng thứ 2",
    },
    {
      id: 3,
      title: "Cách Để Vượt Qua Nỗi Sợ Thất Bại - #388",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Chia sẻ góc nhìn để bước ra khỏi vùng an toàn",
    },
    {
      id: 4,
      title: "Học Cách Buông Bỏ Và Tiến Tới - #387",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Khi bạn chấp nhận buông bỏ, cơ hội mới sẽ mở ra",
    },
    {
      id: 5,
      title: "Đừng So Sánh Bản Thân Với Người Khác - #386",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Mỗi người là một câu chuyện riêng biệt",
    },
    {
      id: 6,
      title: "Tìm Lại Động Lực Sau Thất Bại - #385",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Đứng dậy và đi tiếp sau mỗi lần vấp ngã",
    },
    {
      id: 7,
      title: "Làm Chủ Cảm Xúc Của Chính Mình - #384",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Cảm xúc là công cụ, không phải là kẻ điều khiển",
    },
    {
      id: 8,
      title: "Giá Trị Của Sự Kiên Nhẫn - #383",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Kiên nhẫn là yếu tố dẫn đến thành công bền vững",
    },
    {
      id: 9,
      title: "Đối Diện Với Sự Cô Đơn - #382",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Cô đơn không đáng sợ nếu bạn hiểu và chấp nhận nó",
    },
    {
      id: 10,
      title: "Sức Mạnh Của Lòng Biết Ơn - #381",
      channel: "Tri Kỷ Cảm Xúc",
      thumbnail: "https://via.placeholder.com/80x80",
      about: "Lòng biết ơn thay đổi cách bạn nhìn thế giới",
    },

    // thêm tập khác...
  ];

  return (
    <div className="  bg-gradient-to-b from-[#1F1F1F] to-[#121212] mx-3">
      {episodes.map((ep) => (
        <div
          key={ep.id}
          className="flex p-4 rounded-lg  hover:bg-gray-700  hover:bg-opacity-80 transition border-t-1 border-gray-600"
        >
          <img
            src={ep.src}
            alt={`Episodes ${ep.id}`}
            className="w-30 h-30 rounded-lg top-0"
          />

          <div className="flex-col ml-6 text-left w-full">
            <h3>{ep.title}</h3>
            <p>{ep.channel}</p>
            <p>{ep.about}</p>

            <div className="flex items-center justify-between mt-15 ">
              <button className=" bottom-2 rounded-full w-8 h-8 flex items-center justify-center shadow-lg  transition-opacity">
                <IoAddCircleOutline class="w-8 h-8 cursor-pointer" />
              </button>

              <button className=" bottom-2 right-0  bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg  transition-opacity">
                <FaPlay className="text-black text-2xl ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodesList;
