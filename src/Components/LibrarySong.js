

const LibrarySong = ({songs,setcurrentsong,song,id,audioref,isPlaying,setsongs}) =>{

//handlers functions
const songSelectHandler =()=>{
    const selectedSong= songs.filter((state)=>state.id===id);
    setcurrentsong(selectedSong[0]);
    audioref.current.play();
    //Add Active state
    const newsongs=songs.map((song)=>{
     if (song.id===id )
     {
          return{
              ...song,
              active:true,
          }
     }
     else
     {
         return{
            ...song,
            active:false,
        }
     }
    }
    )
    setsongs(newsongs);
    if(isPlaying){
        const playPromise=audioref.current.play();
        if(playPromise !== undefined)
        {
            playPromise.then((audio)=>{
                audioref.current.play();
            })
        }
    }
}   

    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected':""}`}>
        <img src={song.cover} alt="cover of music" />
        <div className="discription-song">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
} 
export default LibrarySong;