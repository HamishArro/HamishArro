import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import "./App.css";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <Eyeball />
    </Canvas>
  );
};

const App = () => {
  return <Scene />;
};

function Eyeball(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.blinn2}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

export default App;
