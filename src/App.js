import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  const mouse = new THREE.Vector2();

  const handleMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div onMouseMove={handleMove}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <mesh>
            <Eye coords={mouse} scale={100} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
