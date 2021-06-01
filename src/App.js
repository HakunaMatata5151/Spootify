import React,{useState,useRef} from "react";
//adding components
import Player from "../src/Components/Player"
import Song from "../src/Components/Song"
import Library from "./Components/Library"
import Nav from "./Components/Nav" 
//importing styles
import './styles/app.scss'
//importing util
import data from './data'
function App() {
  //Reference variable
  const audioref = useRef(null);
  //States
  const [songs,setsongs]= useState(data()); 
  const [currentsong, setcurrentsong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [songInfo, setsongInfo] = useState({currentime:0,duration:0,})
  const [libraryStatus, setlibraryStatus] = useState(false);
  //handler from Player
  const timeuUpdateHandler=(e)=>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    setsongInfo({...songInfo,currentime:current,duration});  
  };

  return (
   <div className="App">
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus}/>
      <Song currentsong={currentsong}/>
      <Player setsongs={setsongs} setcurrentsong={setcurrentsong} songs={songs} songInfo={songInfo} setsongInfo={setsongInfo} audioref={audioref} currentsong={currentsong} isPlaying={isPlaying} setisPlaying={setisPlaying}/> 
      <Library audioref={audioref} songs={songs} setcurrentsong={setcurrentsong} isPlaying={isPlaying} setsongs={setsongs} libraryStatus={libraryStatus}/> 
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
