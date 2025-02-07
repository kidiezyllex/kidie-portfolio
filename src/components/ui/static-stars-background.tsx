'use client';

import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'

export function StaticStars({ radius = 100, count = 5000 }) {
    const points = useRef<THREE.Points>(null!)

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const r = Math.sqrt(Math.random()) * radius
            const theta = Math.random() * 2 * Math.PI
            const phi = Math.acos(2 * Math.random() - 1)
            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = r * Math.cos(phi)
            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z
        }
        return positions
    }, [count, radius])

    return (
        <Points ref={points} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.05} // Giảm kích thước xuống đáng kể
                sizeAttenuation={true}
                depthWrite={false}
                alphaTest={0.5} // Thêm alphaTest để loại bỏ hiệu ứng "hào quang"
                opacity={0.5} // Giảm độ đục xuống để tạo hiệu ứng tinh tế hơn
            />
        </Points>
    )
}