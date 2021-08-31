import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  const handleMouseMove = (event) => {
    event.preventDefault();
    console.log("moved");
  };

  useEffect(() => {
    console.log("hello");
  });

  return (
    <div id="canvasContainer">
      <Canvas id="canvas">
        <Suspense fallback={null}>
          <ambientLight />
          <Eye scale={100} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
