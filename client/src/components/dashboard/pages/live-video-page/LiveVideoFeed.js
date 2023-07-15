import React, { useEffect } from "react";
import "../live-video-page/LiveVideoFeed.css";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import Navbar from "../../../Navbar";
import Sidebar from "../../../Sidebar";

const ffmpegIP = "3.111.213.148";

const LiveVideoFeed = () => {
  useEffect(() => {
    const videoUrl = `ws://${ffmpegIP}:6789/`;
    const player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    console.log(player);

    const videoUrl2 = `ws://${ffmpegIP}:6790/`;
    const player2 = new JSMpeg.VideoElement("#video-canvas1", videoUrl2, {
      autoplay: true,
    });
    console.log(player2);

    return () => {
      try {
        player.destroy();
      } catch (error) {
        console.error("Error occurred while destroying player:", error);
      }

      try {
        player2.destroy();
      } catch (error) {
        console.error("Error occurred while destroying player:", error);
      }
    };
  }, []);

  return (
    <div className="p-6 ml-60 mt-14">
      <Navbar />
      <Sidebar />
      <div className="text-2xl font-semibold mb-4">Live Video Feed</div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <div
            id="video-canvas"
            style={{ height: "200px", width: "340px" }}
          ></div>
          <div className="mt-[10px] text-[16px] font-bold">Channel 1</div>
        </div>

        <div className="flex flex-col items-center">
          <div
            id="video-canvas1"
            style={{ height: "200px", width: "340px" }}
          ></div>
          <div className="mt-[10px] text-[16px] font-bold">Channel 2</div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoFeed;
