import React from "react"
import LibrarySong from "./LibrarySong"
import Song from "./Song";
const Library = ({audioref,songs, setcurrentsong,isPlaying,setsongs,libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'activelibrary' : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => 
                <LibrarySong 
                songs={songs} 
                setcurrentsong={setcurrentsong} 
                song={song}
                id={song.id}
                key={song.id}
                audioref={audioref}
                isPlaying={isPlaying}
                setsongs={setsongs}
                />)}
            </div>
        </div>
    )
}
export default Library;