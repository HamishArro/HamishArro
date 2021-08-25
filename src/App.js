import { Canvas } from "@react-three/fiber";
import React from "react";
import Eyeball from "./Components/Eyeball";
import "./App.css";

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <Eyeball />
    </Canvas>
  );
};

export default App;
