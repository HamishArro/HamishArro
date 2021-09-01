import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import Eye from "./components/Eye";
import "./App.css";

var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);
var pointOfIntersection = new THREE.Vector3();

export default function App() {
  const handleMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div onMouseMove={handleMove}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  const eye = useRef();
  const { camera } = useThree();

  useEffect(() => {
    console.log(eye);
    console.log(camera);
    animate();
  });

  const animate = () => {
    requestAnimationFrame(animate);
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, pointOfIntersection);
    eye.current.lookAt(pointOfIntersection);
  };

  return (
    <Suspense fallback={null}>
      <ambientLight />
      <mesh ref={eye}>
        <Eye scale={100} />
      </mesh>
    </Suspense>
  );
}
