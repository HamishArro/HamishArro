import React, { useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

function Eye(props: { coords: THREE.Vector2 } ) {
    const group = useRef<THREE.Object3D>();
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
        group.current?.children[0].lookAt(pointOfIntersection);
    };

    const { nodes, materials } = useGLTF("/eye.glb");
    

    return  (
        <group ref={group} {...props} dispose={null}>
            <primitive
                scale={200}
                object={nodes.eye_low001}
                material={materials.Eye_material}
            />
        </group>
    );
}

export default Eye;
