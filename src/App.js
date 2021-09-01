import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import Eye from "./components/Eye";
import "./App.css";

var mouse = new THREE.Vector2();

export default function App() {
  const eye = useRef();

  useEffect(() => {
    console.log(eye);
  });

  const handleMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log(mouse.x);
    console.log(mouse.y);
  };

  return (
    <div onMouseMove={handleMove}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <mesh ref={eye}>
            <Eye scale={100} />
          </mesh>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
