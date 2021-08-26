import { Canvas } from "@react-three/fiber";
import React from "react";
import loadModel from "./loadModel.js";
import "./App.css";

const App = () => {
  return (
    <Canvas>
      <ambientLight />
    </Canvas>
  );
};

export default App;
