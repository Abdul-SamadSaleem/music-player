import { FontAwesomeIcon, fontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

export default function Player() {
    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End time</p>
            </div>
            <div className="play-cotrol">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
}
