import React, {useState, useRef} from "react"

// Import Styles
import "./Styles/app.scss"
// Import Components
import Player from "./Components/Player"
import Song from "./Components/Song"
import Library from "./Components/Library"
// Import util
import data from "./data"
import Nav from "./Components/Nav"


const App = () => {

  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
});
const [libraryStatus, setLibraryStatus] = useState(false);

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  // calculate percentage
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent / roundedDuration) * 100)

  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation})
  }

const songEndHandler = async () => {
   let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
   await setCurrentSong(songs[(currentIndex + 1) % songs.length])
   if(isPlaying) audioRef.current.play();
  }
  
  return (
    <div className="App">
     <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
     <Song currentSong={currentSong} />
     <Player audioRef={audioRef} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} setSongs={setSongs} setSongInfo={setSongInfo} songInfo={songInfo} songs={songs}/>
     <Library libraryStatus={libraryStatus} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying}  setSongs={setSongs}/>
     <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler}  ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
