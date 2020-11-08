const Song = ({currentSong}) => {
    return (
        <div className="song">
            <img alt={currentSong.cover} src={currentSong.cover} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}
export default Song