import React, { useEffect } from "react";
import "./Game.css";

export default function Game() {
  const createGame = () => {
    // createGame
  };

  useEffect(() => {
    var page = document.getElementById("game");
    page.innerHTML = "Why did you poke my eye?";
    setTimeout(function () {
      page.innerHTML = "Oh but why would you poke my eye?";
      setTimeout(function () {
        page.innerHTML = "Now I shall cry, and release my evil eye.";
        setTimeout(function () {
          page.remove();
          createGame();
        }, 2000);
      }, 2000);
    }, 2000);
  });

  return (
    <div>
      <p id={"game"}></p>
    </div>
  );
}
