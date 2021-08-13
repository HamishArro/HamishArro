import "./style.css";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
camera.position.setZ(0);
camera.position.setX(0);

renderer.render(scene, camera);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const boxMesh = new THREE.Mesh(geometry, material);
//
// scene.add(boxMesh);

// const loader = new GLTFLoader();
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("/examples/js/libs/draco/");
// loader.setDRACOLoader(dracoLoader);
// loader.load("models/eye/scene.gltf", function (gltf) {
//   scene.add(gltf.scene);
//   gltf.animations; // Array<THREE.AnimationClip>
//   gltf.scene; // THREE.Group
//   gltf.scenes; // Array<THREE.Group>
//   gltf.cameras; // Array<THREE.Camera>
//   gltf.asset; // Object
// });
