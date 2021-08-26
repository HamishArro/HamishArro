import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { Suspense } from "react";
import Knife from "./components/Knife";
import "./App.css";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={<Loader />}>
        <Knife />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
}
