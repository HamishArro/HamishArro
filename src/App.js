import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as THREE from "three";
import Eye from "./components/Eye";
import "./App.css";

export default function App() {
  const mouse = new THREE.Vector2();

  const eyeClick = () => {
    console.log("clicked");
  };

  const handleMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <Route exact path="/">
      <div onMouseMove={handleMove}>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <mesh onClick={eyeClick}>
              <Eye coords={mouse} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </Route>
  );
}
