var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  2000
);
camera.position.z = 250;
camera.lookAt(scene.position);

var directionalLight = new THREE.DirectionalLight(0xffeedd);
directionalLight.position.set(0, 0, 1).normalize();
scene.add(directionalLight);

// model
var mesh = null;

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath("https://threejs.org/examples/models/obj/walt/");
mtlLoader.load("WaltHead.mtl", function (materials) {
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath("https://threejs.org/examples/models/obj/walt/");
  objLoader.load("WaltHead.obj", function (object) {
    mesh = object;
    mesh.position.y = -50;
    scene.add(mesh);
  });
});

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xccccff);
document.body.appendChild(renderer.domElement);

animate();

function animate() {
  requestAnimationFrame(animate);

  if (mesh !== null) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
  }

  renderer.render(scene, camera);
}
