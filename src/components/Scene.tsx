'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Model from './Model';
import { Html, useProgress, OrbitControls } from '@react-three/drei';

function Loader() {
  return <Html center></Html>;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
