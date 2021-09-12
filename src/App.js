import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Eye from "./components/Eye";
import Game from "./Game";
import "./App.css";

export default function App() {
  const mouse = new THREE.Vector2();

  const eyeClick = () => {
    document.location.href = "/game/";
  };

  const handleMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <Router>
      <Switch>
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
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}
