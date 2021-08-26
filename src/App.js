import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import "./App.css";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={<Loader />}>
        <Eyeball />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
