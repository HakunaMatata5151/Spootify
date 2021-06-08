import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import reactDom from "react-dom";

const Player = ({
  setsongs,
  setcurrentsong,
  songs,
  songInfo,
  setsongInfo,
  audioref,
  currentsong,
  isPlaying,
  setisPlaying,
}) => {
  const gettime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //states

  //Ref

  //EventHandlers
  const activeLibrayHandler = (nextPrev) => {
    const newsongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setsongs(newsongs);
  };
  const dragHandler = (e) => {
    audioref.current.currentTime = e.target.value;
    setsongInfo({ ...songInfo, currentime: e.target.value });
  };

  const timeuUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setsongInfo({ ...songInfo, currentime: current, duration });
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioref.current.pause();
      setisPlaying(!isPlaying);
    } else {
      audioref.current.play();
      setisPlaying(!isPlaying);
    }
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentsong.id);
    if (direction === "skip-forward") {
      await setcurrentsong(songs[(currentIndex + 1) % songs.length]);
      activeLibrayHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setcurrentsong(songs[songs.length - 1]);
        activeLibrayHandler(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) audioref.current.play();
        return;
      }
      await setcurrentsong(songs[(currentIndex - 1) % songs.length]);
      activeLibrayHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (isPlaying) audioref.current.play();
  };

  return (
    <div className="player">
      <div className="timecontrol">
        <p>{gettime(songInfo.currentime)}</p>
        <div className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentime}
            onChange={dragHandler}
            type="range"
          />
          <div className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? gettime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};
export default Player;
