import React, { useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

function Eye(props: { coords: THREE.Vector2 } ) {
    const eye = useRef<THREE.Object3D>();
    const { camera } = useThree();
    var raycaster = new THREE.Raycaster();
    var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);
    var pointOfIntersection = new THREE.Vector3();
    const { nodes, materials } = useGLTF("/eye.glb");
    camera.position.z = 30;

    useEffect(() => {
        animate();
    });
    
    const animate = () => {
        requestAnimationFrame(animate);
        raycaster.setFromCamera(props.coords, camera);
        raycaster.ray.intersectPlane(plane, pointOfIntersection);
        eye.current?.lookAt(pointOfIntersection);
    };


    return  (
        <group  {...props} dispose={null}>
            <primitive
                ref={eye}
                scale={200}
                object={nodes.eye_low001}
                material={materials.Eye_material}
            />
        </group>
    );
}

export default Eye;
