import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Eyeball from "./Components/Eyeball";
import "./App.css";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <Eyeball position={(0, 0, 0)} />
    </Canvas>
  );
};

const App = () => {
  return <Scene />;
};

export default App;
