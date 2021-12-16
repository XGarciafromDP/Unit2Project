import React from "react";
import "./player.css";

function Player(props) {
  return (
    <div className="Player">
      <h1>Player {props.name}</h1>
      <h3>Score: {props.score}</h3>
      <div></div>
    </div>
  );
}

export default Player;
