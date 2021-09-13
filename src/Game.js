import React, { useEffect } from "react";
import "./Game.css";

export default function Game() {
  const startSequence = () => {
    var p = document.getElementsByTagName("P")[0];
    p.innerHTML = "Why did you poke my eye?";
    setTimeout(function () {
      p.innerHTML = "Oh but why would you poke my eye?";
      setTimeout(function () {
        p.innerHTML = "Now I shall cry, and release my evil eye.";
        setTimeout(function () {
          p.remove();
          createGame();
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const createGame = () => {
    // createGame
  };

  useEffect(() => {
    startSequence();
  });

  return (
    <div>
      <p></p>
    </div>
  );
}
