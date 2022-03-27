import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Eye from './Eye'

function EyeScene() {
    const mouse = new THREE.Vector2()

    const eyeClick = () => {
        document.location.href = '/cOne/'
    }

    const handleMove = (event: React.MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    return (
        <div onMouseMove={handleMove}>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <mesh onClick={eyeClick}>
                        <Eye coords={mouse} />
                    </mesh>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default EyeScene
