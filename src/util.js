import { v4 as uuidv4 } from "uuid";
// Song Imports
import cold_world from "./Songs/cold_world.mp3";
import eight_zero_eight from "./Songs/eight_zero_eight.mp3"
import doja from "./Songs/doja.mp3"
import wolves from "./Songs/wolves.mp3"
import geeked_up from "./Songs/geeked_up.mp3"
import end_of_the_world from "./Songs/end_of_the_world.mp3"

function chillHop() {
  return [
    {
      name: "Cold World",
      cover:
        "https://images.genius.com/208858748e25140f9f5e1096605004fc.500x500x1.jpg",
      artist: "Eric Reprid",
      audio: cold_world,
      color: ["green", "black"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "808",
      cover:
        "https://m.media-amazon.com/images/I/81oD0xjGqPL._SS500_.jpg",
      artist: "Da Beatfreakz",
      audio: eight_zero_eight,
      color: ["red", "black"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Doja",
      cover:
        "https://i1.wp.com/hiphoplord.com/wp-content/uploads/2020/10/BKIJWQ-21.jpg?fit=500%2C472&ssl=1",
      artist: "Xavier Weeks",
      audio: doja,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Wolves",
      cover:
        "https://images.genius.com/3d6365c0669690d38f1cc0f0c2fca322.1000x1000x1.png",
      artist: "Big Sean",
      audio: wolves,
      color: ["brown", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Geeked Up",
      cover:
        "https://i.scdn.co/image/ab67616d0000b2734e528518a22d1c9b66d98b68",
      artist: "Jiggy Jerms",
      audio: geeked_up,
      color: ["#4484c2", "#f8c301"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "End of the World",
      cover:
        "https://images.shazam.com/coverart/t526306493-b1529556691_s400.jpg",
      artist: "Jay Hoodie",
      audio: end_of_the_world,
      color: ["#a1bec6", "#458a99"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;