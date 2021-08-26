import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import Eye from "./components/Eye";
import "./App.css";

const coords = new THREE.Vector2(-1, -1);

const App = () => {
  const canvasContainer = useRef();

  useEffect(() => {
    createWorld();
  }, []);

  /**
   * Simple demo setup of a Threejs scene
   */

  const createWorld = () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var raycaster = new THREE.Raycaster();

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // raycasting

      raycaster.setFromCamera(coords, camera);
      var intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        cube.material.color.set(0xff0000);
      } else {
        cube.material.color.set(0x00ff00);
      }

      renderer.render(scene, camera);
    };

    animate();
  };

  /**
   * Update the stat ewith the mouse position
   *
   */

  const handleMouseMove = (event) => {
    event.preventDefault();
    coords.x = (event.clientX / window.innerWidth) * 2 - 1;
    coords.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="container"
        ref={canvasContainer}
      />
    </>
  );
};

export default App;
