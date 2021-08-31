import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import Eye from "./components/Eye";
import "./App.css";

const App = () => {
  const canvasContainer = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  const ambientLight = new THREE.AmbientLight(0xffffff);

  useEffect(() => {
    createWorld();
    scene.add(ambientLight);
    loadModel("/public/eyeball/eyeball").then((eyeball) => {
      scene.add(eyeball);
      console.log("loaded object");
    });
  }, []);

  const createWorld = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.current.appendChild(renderer.domElement);
    camera.position.setZ(30);
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  };

  async function loadModel(url) {
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    var materials = await mtlLoader.loadAsync(`${url}.mtl`);
    objLoader.setMaterials(materials);
    return objLoader.loadAsync(`${url}.obj`);
  }

  return <div className="container" ref={canvasContainer} />;
};

export default App;
