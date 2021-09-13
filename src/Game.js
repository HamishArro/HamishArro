import React, { useEffect } from "react";
import "./Game.css";

export default function Game() {
  const createGame = () => {
    // createGame
  };

  useEffect(() => {
    var p = document.getElementById("p");
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
  });

  return (
    <div>
      <p id={"p"}></p>
    </div>
  );
}
