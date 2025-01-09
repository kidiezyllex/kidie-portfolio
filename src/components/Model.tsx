'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Group } from 'three';

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/pixel_plane.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const firstAction = actions[actionKeys[0]];
      firstAction.play();
    }

    if (group.current) {
      // Đặt góc quay của máy bay
      group.current.rotation.x = Math.PI / 8; // Nghiêng nhẹ đầu máy bay xuống
      group.current.rotation.y = -Math.PI / 4; // Hướng về góc 45 độ
      group.current.rotation.z = -Math.PI / 8; // Nghiêng máy bay nhẹ sang một bên
    }
  }, [actions]);

  useFrame((state) => {
    if (group.current) {
      // Tùy chọn thêm hiệu ứng di chuyển (nếu cần)
      const time = state.clock.getElapsedTime();
      group.current.position.y = Math.sin(time) * 0.3; // ±0.5 đơn vị trên trục Y
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.001} />{' '}
    </group>
  );
}

useGLTF.preload('/pixel_plane.glb');
