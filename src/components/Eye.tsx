import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Eye(props: { coords: THREE.Vector2 }) {
    const eye = useRef<THREE.Object3D>()
    const { camera } = useThree()
    const { nodes, materials } = useGLTF('/eye.glb')
    const raycaster = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10)
    const pointOfIntersection = new THREE.Vector3()
    let weight = 0
    camera.position.z = 30

    useEffect(() => {
        animate()
    })

    const handleClick = () => {
        weight += 5
        eye.current?.scale.set(200 + weight, 200 + weight, 200 + weight)
    }

    const animate = () => {
        requestAnimationFrame(animate)
        raycaster.setFromCamera(props.coords, camera)
        raycaster.ray.intersectPlane(plane, pointOfIntersection)
        eye.current?.lookAt(pointOfIntersection)
    }

    return (
        <mesh onClick={handleClick}>
            <primitive
                ref={eye}
                scale={200}
                object={nodes.eye_low001}
                material={materials.Eye_material}
            />
        </mesh>
    )
}

export default Eye
