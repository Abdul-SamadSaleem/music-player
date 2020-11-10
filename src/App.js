import React, {useState, useRef} from "react"

// Import Styles
import "./Styles/app.scss"
// Import Components
import Player from "./Components/Player"
import Song from "./Components/Song"
import Library from "./Components/Library"
// Import util
import data from "./util"
import Nav from "./Components/Nav"


const App = () => {

  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
});
const [libraryStatus, setLibraryStatus] = useState(false);

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration
  setSongInfo({...songInfo, currentTime: current, duration})
  }

  return (
    <div className="App">
     <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
     <Song currentSong={currentSong} />
     <Player audioRef={audioRef} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} setSongs={setSongs} setSongInfo={setSongInfo} songInfo={songInfo} songs={songs}/>
     <Library libraryStatus={libraryStatus} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying}  setSongs={setSongs}/>
     <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler}  ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
