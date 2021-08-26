import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export default async function loadModel(url) {
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
