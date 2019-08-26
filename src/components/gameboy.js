import React from "react";
import ArrowPad from "./arrow_pad";
import { songs, links, options, sounds, n } from "../constants/allain.js";

class Gameboy extends React.Component {
  state = {
    cursor: 0,
    selected_song: 0,
    selected_link: 0
  };

  handleArrow = e => {
    if (e.id === "R" && this.state.cursor < options.length - 1) {
      this.setState({
        cursor: this.state.cursor + 1
      });
      sounds[1].play();
    }
    if (e.id === "L") {
      if (this.state.cursor > 0) {
        this.setState({
          cursor: this.state.cursor - 1
        });
        if (this.state.cursor > 1) {
          sounds[1].play();
        }
      }
      if (this.state.cursor == 1) {
        sounds[0].play();
      }
    }
    if (e.id === "v") {
      if (
        //songs down arrow
        this.state.selected_song < songs.length - 1 &&
        this.state.cursor === 1
      ) {
        sounds[2].play();
        this.setState({
          selected_song: this.state.selected_song + 1
        });
      }
      if (
        //links down arrow
        this.state.selected_link < links.length - 1 &&
        this.state.cursor === 2
      ) {
        sounds[3].play();
        this.setState({
          selected_link: this.state.selected_link + 1
        });
      }
    }

    if (e.id === "U") {
      if (
        // songs up arrow
        this.state.selected_song > 0 &&
        this.state.cursor === 1
      ) {
        sounds[2].play();
        this.setState({
          selected_song: this.state.selected_song - 1
        });
      }

      if (
        //links up arrow
        this.state.selected_link > 0 &&
        this.state.cursor === 2
      ) {
        sounds[3].play();
        this.setState({
          selected_link: this.state.selected_link - 1
        });
      }
    }
  };

  handleAclick = () => {
    if (this.state.cursor === 1) {
      //track play/pause
      sounds[4].play();
      songs[this.state.selected_song].track.paused
        ? songs[this.state.selected_song].track.play()
        : songs[this.state.selected_song].track.pause();
      this.forceUpdate();
    }
    if (this.state.cursor === 2) {
      //link follow
      sounds[5].play();
      setTimeout(() => {
        window.location.href = links[this.state.selected_link].link;
      }, 2500);
    }
  };

  handleBclick = () => {
    if (this.state.cursor !== 0) {
      this.setState({
        cursor: 0
      });
      sounds[0].play();
    }
  };

  renderOptions = () =>
    options.map((option, i) => (
      <span
        className={` ${this.state.cursor === i ? "selected" : ""} `}
        id={option}
        key={option}
      >
        {option}
      </span>
    ));

  renderSongs = () =>
    songs.map((song, i) => (
      <div
        className={`song ${this.state.selected_song === i ? "selected" : ""} ${
          this.state.scene
        }`}
        id={song.name}
        key={song.name}
      >
        {song.name}

        {song.track.paused ? (
          <span className="play">{String.fromCharCode(9658)}</span>
        ) : (
          <span className="pause">{String.fromCharCode(9733)}</span>
        )}
      </div>
    ));

  renderLinks = () =>
    links.map((link, i) => (
      <div
        className={`song ${this.state.selected_link === i ? "selected" : ""} ${
          this.state.scene
        }`}
        id={link.name}
        key={link.name}
      >
        {link.name}
      </div>
    ));

  renderDots = () =>
    [...Array(n)].map((e, i) =>
      i % 2 == 0 ? (
        <div className="pale dot"></div>
      ) : (
        <div className="dot"></div>
      )
    );

  render() {
    return (
      <div>
        <div className="chassis" onClick={this.handleClick}>
          <div className="hat" />
          <div className="outer_screen">
            <div className="inner_screen">
              {this.renderOptions()}

              {this.state.cursor === 0 ? (
                <div className={`home ${this.state.scene}`}>SPACE HEATER</div>
              ) : (
                <audio />
              )}
              <br />
              {this.state.cursor === 1 ? (
                <div className="songbox">{this.renderSongs()}</div>
              ) : (
                <div className="songbox">{this.renderLinks()}</div>
              )}
            </div>
            SPACE HEATER
          </div>
        </div>
        <div className="buttonbox">
          <div className="badge">Asheville</div>
          <button onClick={this.handleAclick} id="A" className="A">
            A
          </button>
          <button className="B" id="B" onClick={this.handleBclick}>
            B
          </button>
          <ArrowPad click={this.handleArrow} />
          <p className="start" />
          <p className="select" />
          <div className="dotbox">{this.renderDots()}</div>
        </div>
      </div>
    );
  }
}

export default Gameboy;
