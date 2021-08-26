import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Eye scale={100} />
      </Suspense>
    </Canvas>
  );
}
