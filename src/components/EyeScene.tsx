import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Eye from './Eye'

function EyeScene() {
    const coords = new THREE.Vector2()

    const setCoords = (x: number, y: number) => {
        coords.x = (x / window.innerWidth) * 2 - 1
        coords.y = -(y / window.innerHeight) * 2 + 1
    }

    const handleMouseMove = (event: React.MouseEvent) => {
        setCoords(event.clientX, event.clientY)
    }

    const handleTouchMove = (event: React.TouchEvent) => {
        setCoords(event.touches[0].clientX, event.touches[0].clientY)
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
        >
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <Eye coords={coords} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default EyeScene
