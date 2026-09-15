import { useEffect, useRef, useState } from "react";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(sakura);

    audio.loop = true;
    audio.volume = 0.4;

    audioRef.current = audio;

    const startMusic = () => {
      // Don't restart music if the user manually paused it
      if (userPausedRef.current) return;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          removeListeners();
        })
        .catch(() => {
          // Browser blocked autoplay
        });
    };

    const removeListeners = () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
    };

    // Try autoplay immediately
    startMusic();

    // If browser blocks autoplay, start after first interaction
    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      removeListeners();
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = (event) => {
    event.stopPropagation();

    if (!audioRef.current) return;

    if (isPlaying) {
      // USER IS PAUSING THE MUSIC
      audioRef.current.pause();
      userPausedRef.current = true;
      setIsPlaying(false);
    } else {
      // USER IS STARTING THE MUSIC AGAIN
      userPausedRef.current = false;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Audio playback failed:", error);
        });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <img
        src={isPlaying ? soundon : soundoff}
        alt={isPlaying ? "Pause music" : "Play music"}
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={toggleMusic}
      />
    </div>
  );
};

export default MusicPlayer;