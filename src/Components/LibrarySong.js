const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {

const songSelectHandler = () => {
const selectedSong = songs.filter((state) => state.id === id) ;
setCurrentSong(selectedSong[0]);
// Add active state
const newSongs = songs.map((song) => {
    if(song.id === id) {
        return {
            ...song, active: true
        }
    }
    else {
        return {
            ...song, active: false
        }
    }
})
setSongs(newSongs)
// check if the song is playing
if(isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
        playPromise.then((audio) => {
            audioRef.current.play()
        })
    }
}
};

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""} `}>
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h3>{song.artist}</h3>
            </div>
        </div>
    )
}
export default LibrarySong 