import * as React from "react";
import { GLView } from "expo-gl";
import * as THREE from "three";
import ExpoTHREE from "expo-three";
import { StyleSheet, Text, View } from "react-native";
import { Asset } from "expo-asset";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function App() {
  return (
    <View>
      <GLView onContextCreate={onContextCreate} />
    </View>
  );
}

function onContextCreate(gl) {
  const camera = new THREE.PerspectiveCamera(
    75,
    gl.drawingBufferWidth / gl.drawingBufferHeight,
    0.1,
    1000
  );

  const renderer = new ExpoTHREE.Renderer(gl);
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  const asset = Asset.fromModule(require("./models/eyeball/eyeball.obj"));

  async function asyncCall() {
    await asset.downloadAsync();
    const loader = new OBJLoader();
    const material = new THREE.MeshBasicMaterial((color: 0x00ff00));
    loader.setMaterials(material);
    loader.load(asset.localUri, function (object) {
      scene.add(object);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
