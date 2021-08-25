import { Canvas } from "@react-three/fiber";
import React from "react";
import Eyeball from "./Components/Eyeball";
import "./App.css";

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <Eyeball position={(0, 0, 0)} />
    </Canvas>
  );
};

export default App;
