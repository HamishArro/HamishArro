import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: "red" });
// const torus = new THREE.Mesh(geometry, material);
//
// scene.add(torus);

async function loadModel(url) {
  const objLoader = new OBJLoader();
  var materials = await mtlLoader.loadAsync(`${url}.mtl`, function (object) {
    return object;
  });
  objLoader.setMaterials(materials);
  return objLoader.loadAsync(`${url}.obj`, function (object) {
    return object;
  });
}

const mtlLoader = new MTLLoader();

const eyeball = await loadModel("models/eyeball/eyeball");

scene.add(eyeball);

// const loader = new GLTFLoader();
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("/examples/js/libs/draco/");
// loader.setDRACOLoader(dracoLoader);
// loader.load("models/eye/scene.gltf", function (gltf) {
//   return gltf.scene;
// });

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  eyeball.rotation.x += 0.01;
  eyeball.rotation.y += 0.005;
  eyeball.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();
