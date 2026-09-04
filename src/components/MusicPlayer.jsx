import { useEffect, useRef, useState } from "react";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(sakura);

    audio.loop = true;
    audio.volume = 0.4;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <img
        src={isPlaying ? soundon : soundoff}
        alt={isPlaying ? "Pause music" : "Play music"}
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={() => setIsPlaying((prev) => !prev)}
      />
    </div>
  );
};

export default MusicPlayer;