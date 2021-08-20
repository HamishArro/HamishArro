import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

async function loadModel(url) {
  const objLoader = new OBJLoader();
  const mtlLoader = new MTLLoader();
  var materials = await mtlLoader.loadAsync(`${url}.mtl`, function (object) {
    return object;
  });
  objLoader.setMaterials(materials);
  return objLoader.loadAsync(`${url}.obj`, function (object) {
    return object;
  });
}

const eyeball = await loadModel("models/eyeball/eyeball");
scene.add(eyeball);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);

  eyeball.rotation.x += 0.01;
  eyeball.rotation.y += 0.01;
  eyeball.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
