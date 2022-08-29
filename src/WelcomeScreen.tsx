import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Bubble from "./components/shared/Bubble/Bubble";

const WelcomeScreen = () => {
  const [playing, setPlaying] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    if (playAudio && isPlayerReady) {
      setPlaying(true);
    }
  }, [playAudio, isPlayerReady]);

  return (
    <div
      className="relative bg-[url('./assets/images/HomeScreen.png')] bg-cover w-full h-[100vh] overflow-hidden"
      onClick={() => setPlayAudio(true)}
    >
      <div className="w-[45%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          className="w-full"
        />

        <button className="w-[150px] h-[48px] focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
          START
        </button>
        <p className="text-white font-thin mt-[20px]">
          Click anywhere to play audio
        </p>
      </div>
      <Bubble />
      <ReactPlayer
        style={{ display: "none" }}
        url="https://www.youtube.com/watch?v=2T9YM2sDmMA"
        playing={playing}
        onReady={() => setIsPlayerReady(true)}
      />
    </div>
  );
};

export default WelcomeScreen;
