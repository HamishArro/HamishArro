import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  const eye = useRef();

  useEffect(() => {
    addRaycaster();
    console.log(eye);
  });

  const addRaycaster = () => {};

  return (
    <div>
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
