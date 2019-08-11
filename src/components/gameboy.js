import React from "react";
import ArrowPad from "./arrow_pad";
import LetMeHaveSomeFun from "../audio/Let Me Have Some Fun.mp3";
import MyBad from "../audio/My Bad.mp3";
import Waltz from "../audio/Waltz Of The Luddite.mp3";
import OtherIngredients from "../audio/Other Ingredients.mp3";

class Gameboy extends React.Component {
  state = {
    options: ["Home", "Music", "Links"],
    songs: [
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
    ],

    cursor: 0,
    selected_song: 0,
    selected_link: 0,
    scene: "",
    links: [
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
    ]
  };

  handleClick = e => {
    console.log(e.id);
    if (e.id === "R" && this.state.cursor < this.state.options.length - 1) {
      console.log("shift");
      this.setState({
        cursor: this.state.cursor + 1
      });
    }
    if (e.id === "L" && this.state.cursor > 0) {
      console.log("shift");
      this.setState({
        cursor: this.state.cursor - 1
      });
    }
    if (
      //songs down arrow
      e.id === "v" &&
      this.state.selected_song < this.state.songs.length - 1 &&
      this.state.cursor === 1
    ) {
      console.log("shift");
      this.setState({
        selected_song: this.state.selected_song + 1
      });
    }
    if (
      ///links down arow
      e.id === "v" &&
      this.state.selected_link < this.state.links.length - 1 &&
      this.state.cursor === 2
    ) {
      console.log("shift");
      this.setState({
        selected_link: this.state.selected_link + 1
      });
    }
    if (
      //songs up arrow
      e.id === "U" &&
      this.state.selected_song > 0 &&
      this.state.cursor === 1
    ) {
      console.log("shift");
      this.setState({
        selected_song: this.state.selected_song - 1
      });
    }
    if (
      //links up arrow
      e.id === "U" &&
      this.state.selected_link > 0 &&
      this.state.cursor === 2
    ) {
      console.log("shift");
      this.setState({
        selected_link: this.state.selected_link - 1
      });
    }
    if (e.id === "A" && this.state.cursor === 1) {
      //track play/pause
      this.state.songs[this.state.selected_song].track.paused
        ? this.state.songs[this.state.selected_song].track.play()
        : this.state.songs[this.state.selected_song].track.pause();
      this.forceUpdate();
    }
    if (e.id === "A" && this.state.cursor === 2) {
      //link follow
      window.location.href = this.state.links[this.state.selected_link].link;
    }
    if (e.id === "A" && this.state.cursor === 0) {
      // home screen refresh
      this.forceUpdate();
    }
    if (e.id === "B") {
      // b button random scenes
      this.state.scene === ""
        ? this.setState({
            scene: "mountain"
          })
        : this.setState({
            scene: ""
          });
    }
  };
  render() {
    return (
      <div>
        <div className="chassis" onClick={this.handleClick}>
          <div className="hat" />
          <div className="outer_screen">
            <div className="inner_screen">
              {this.state.options.map((option, i) => (
                <span
                  className={`${this.state.scene} ${
                    this.state.cursor === i ? "selected" : ""
                  }`}
                  id={option}
                  key={option}
                >
                  {option}
                </span>
              ))}
              {/* home screen */}
              {this.state.cursor === 0 ? (
                <div className={`home ${this.state.scene}`}>SPACE HEATER</div>
              ) : (
                <audio />
              )}
              <br />
              {this.state.cursor === 1 ? (
                <div className="songbox">
                  {this.state.songs.map((song, i) => (
                    <div
                      className={`song ${
                        this.state.selected_song === i ? "selected" : ""
                      } ${this.state.scene}`}
                      id={song.name}
                      key={song.name}
                    >
                      {song.name}

                      {song.track.paused ? (
                        <span className="play">
                          {String.fromCharCode(9658)}
                        </span>
                      ) : (
                        <span className="pause">
                          {String.fromCharCode(9733)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="songbox">
                  {this.state.links.map((link, i) => (
                    <div
                      className={`song ${
                        this.state.selected_link === i ? "selected" : ""
                      }`}
                      id={link.name}
                      key={link.name}
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            SPACE HEATER
          </div>
        </div>
        <div className="buttonbox">
          <div className="badge">Asheville</div>
          <button
            onClick={e => this.handleClick(e.target)}
            id="A"
            className="A"
          >
            A
          </button>
          <button
            className="B"
            id="B"
            onClick={e => this.handleClick(e.target)}
          >
            B
          </button>
          <ArrowPad click={this.handleClick} />
          <p className="start" />
          <p className="select" />
        </div>
      </div>
    );
  }
}

export default Gameboy;
