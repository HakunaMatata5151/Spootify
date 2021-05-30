

const Song = ({currentsong}) =>{
    return(
        <div className="song-container">
        <img src={currentsong.cover} alt="cover of music" />
            <h2>{currentsong.name}</h2>
            <h3>{currentsong.artist}</h3>
            
        </div>
    )
} 
export default Song;