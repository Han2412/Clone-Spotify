import { useRef, useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import "./App.css";
import MainPodcast from "./components/MainContent/MainPodcast";

function Home() {
  // const [count, setCount] = useState(0)

  // Hook để quản lý state
  const [searchQuery, setSearchQuery] = useState("");
  //Mock data cho playlists

  const playlists = [
    { id: 1, name: "Liked Songs", songCount: 101, type: "Playlist" },
    { id: 2, name: "HIEUTHUHAI Mix", type: "Mix" },
    { id: 3, name: "Hip-hop Việt 2020", type: "Playlist" },
  ];

  // const [width,setWidth] = useState(320);
  // const isResizing = useRef(false); 
  // const handleMoseDown = () => {
  //   isResizing.current = true;
  // };



  return (
    <div className=" w-screen h-screen bg-black text-white flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex overflow-hidden">
        {/* Sidebar */}
        <div className="h-screen shrink-0">
          <Sidebar playlists={playlists} />
        </div>
        {/* Main content */}
        <div className="w-full">
          <MainPodcast />
        </div>
        {/* ArtistInfo */}
        <div className="shrink-0">
          <ArtistInfo />
        </div>
      </div>
      {/* Player */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
