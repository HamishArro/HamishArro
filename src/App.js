import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Eye />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
}
