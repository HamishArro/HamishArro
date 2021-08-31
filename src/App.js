import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  const handleMouseMove = (event) => {
    event.preventDefault();
    console.log("moved");
  };

  return (
    <div id="canvasContainer">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Eye scale={100} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
