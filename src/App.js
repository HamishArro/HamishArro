import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  useEffect(() => {
    addRaycaster();
  });

  const addRaycaster = () => {
    console.log(
      "need to create an error handler that waits for object to be loaded"
    );
  };

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
