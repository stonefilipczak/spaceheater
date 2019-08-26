import LetMeHaveSomeFun from "../audio/Let Me Have Some Fun.mp3";
import MyBad from "../audio/My Bad.mp3";
import Waltz from "../audio/Waltz Of The Luddite.mp3";
import OtherIngredients from "../audio/Other Ingredients.mp3";
import Beam from "../audio/AuroraBeam2.wav";
import Butt from "../audio/HeadButt.wav";
import Ball from "../audio/BallExplode2.wav";
import Sludge from "../audio/SludgeLoop.wav";
import Swagger from "../audio/Swagger2.wav";
import Synth from "../audio/Synthesis.wav";

export const songs = [
  {
    name: "Let Me Have Some Fun",
    track: new Audio(LetMeHaveSomeFun),
    playing: false
  },
  { name: "My Bad", track: new Audio(MyBad), playing: false },
  { name: "Waltz Of The Luddite", track: new Audio(Waltz), playing: false },
  {
    name: "Other Ingredients",
    track: new Audio(OtherIngredients),
    playing: false
  }
];

export const options = ["Home", "Music", "Links"];

export const links = [
  {
    name: "bandcamp",
    link: "https://spaceheatermusic.bandcamp.com/album/full-blast"
  },
  { name: "insta", link: "https://www.instagram.com/_____heater/" },
  {
    name: "live vid",
    link: "https://www.youtube.com/watch?v=kdqITe7MAlo"
  },
  {
    name: "inspo",
    link:
      "https://www.youtube.com/watch?v=lvbxYq0aq44&list=PLT7DIIyiV-WPWZ_hxHEqfCti7L8pTxqyj&index=9"
  }
];

export const sounds = [
  new Audio(Beam),
  new Audio(Butt),
  new Audio(Ball),
  new Audio(Sludge),
  new Audio(Swagger),
  new Audio(Synth)
];

export const n = 45;
