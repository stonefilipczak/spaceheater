import React from "react";

class ArrowPad extends React.Component {
  state = {
    arrows: [
      { id: "U", html: "9650" },
      { id: "L", html: "9664" },
      { id: "o", html: "9673" },
      { id: "R", html: "9654" },
      { id: "v", html: "9660" }
    ]
  };
  render() {
    return (
      <div className="arrowbox">
        {this.state.arrows.map(arrow => (
          <div
            onClick={e => this.props.click(e.target)}
            className="arrow"
            id={arrow.id}
            key={arrow.id}
          >
            {String.fromCharCode(arrow.html)}
          </div>
        ))}
      </div>
    );
  }
}

export default ArrowPad;
