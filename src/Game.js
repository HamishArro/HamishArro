import React, { useRef, useEffect } from "react";
import "./Game.css";

export default function Game() {
  useEffect(() => {
    var page = document.getElementById("game");
    page.innerHTML = "hello";
  });

  return (
    <div>
      <p id={"game"}></p>
    </div>
  );
}
