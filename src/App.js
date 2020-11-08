// Import Styles
import "./Styles/app.scss"
// Import Components
import Player from "./Components/Player"
import Song from "./Components/Song"


const App = () => {
  return (
    <div className="App">
     <Song />
     <Player />
    </div>
  );
}

export default App;
