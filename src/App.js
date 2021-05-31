import React,{useState,useRef} from "react";
//adding components
import Player from "../src/Components/Player"
import Song from "../src/Components/Song"
import Library from "./Components/Library"
//importing styles
import './styles/app.scss'
//importing util
import data from './util'
function App() {
  //Reference variable
  const audioref = useRef(null);
  //States
  const [songs,setsongs]= useState(data()); 
  const [currentsong, setcurrentsong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [songInfo, setsongInfo] = useState({currentime:0,duration:0,})
  //handler from Player
  const timeuUpdateHandler=(e)=>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    setsongInfo({...songInfo,currentime:current,duration});  
  };

  return (
   <div className="App">
      <Song currentsong={currentsong}/>
      <Player songInfo={songInfo} setsongInfo={setsongInfo} audioref={audioref} currentsong={currentsong} isPlaying={isPlaying} setisPlaying={setisPlaying}/> 
      <Library audioref={audioref} songs={songs} setcurrentsong={setcurrentsong} isPlaying={isPlaying} setsongs={setsongs}/> 
      <audio
              onTimeUpdate={timeuUpdateHandler}
              ref={audioref}
              src={currentsong.audio}
              onLoadedMetadata={timeuUpdateHandler}
            >

            </audio>
    </div>
  );
}

export default App;
