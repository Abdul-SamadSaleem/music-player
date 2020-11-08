import React, {useState} from "react"

// Import Styles
import "./Styles/app.scss"
// Import Components
import Player from "./Components/Player"
import Song from "./Components/Song"
// Import util
import data from "./util"


const App = () => {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;
