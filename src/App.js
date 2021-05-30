import React,{useState} from "react";
//adding components
import Player from "../src/Components/Player"
import Song from "../src/Components/Song"
//importing styles
import './styles/app.scss'
//importing util
import data from './util'
function App() {
  const [songs,setsongs]= useState(data()); 
  const [currentsong, setcuurentosng] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  return (
   <div className="App">
      <Song currentsong={currentsong}/>
      <Player currentsong={currentsong} isPlaying={isPlaying} setisPlaying={setisPlaying}/> 
    </div>
  );
}

export default App;
