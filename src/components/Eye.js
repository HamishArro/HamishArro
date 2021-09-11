/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Eye(props) {
  const group = useRef();
  const { camera } = useThree();
  var raycaster = new THREE.Raycaster();
  var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);
  var pointOfIntersection = new THREE.Vector3();
  camera.position.z = 30;

  useEffect(() => {
    animate();
  });

  const animate = () => {
    requestAnimationFrame(animate);
    raycaster.setFromCamera(props.coords, camera);
    raycaster.ray.intersectPlane(plane, pointOfIntersection);
    group.current.children[0].lookAt(pointOfIntersection);
  };

  const { nodes, materials } = useGLTF("/eye/eye.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        scale={200}
        geometry={nodes.eye_low001.geometry}
        material={materials.Eye_material}
      />
    </group>
  );
}

useGLTF.preload("eye/eye.glb");
