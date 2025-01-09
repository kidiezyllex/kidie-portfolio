'use client';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion';
import Image from 'next/image';
import Introduction from './Introduction';
import dynamic from 'next/dynamic';
import ScrollElement from '../core/scroll-element';
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

const COLORS_TOP = ['#09090B', '#8B5CF6', '#5B21B6', '#7E22CE'];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="section lg:-top-35 relative flex h-[115vh] w-full flex-col place-content-center overflow-hidden bg-gray-950 px-4 text-gray-200 md:-top-24 md:h-[65vh] lg:-top-32 lg:h-[90vh] xl:-top-40 xl:h-[115vh]"
    >
      <div className="relative z-10 flex h-full items-end justify-start gap-10">
        <div className="absolute -bottom-20 -right-20 flex h-screen w-[100%] items-center">
          <Scene />
        </div>
        <ScrollElement
          direction="left"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className="w-[100%] self-center"
        >
          <Introduction></Introduction>
        </ScrollElement>

        <Image
          src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736047384/learning-webdev-blog/clinic/1736047246699_gbngi9.png"
          alt="hero-image"
          width={1920}
          height={1080}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute right-44 z-50 h-screen w-[50%] translate-x-1/2 transform animate-zoom-tilt object-contain md:-bottom-32 lg:-bottom-20 xl:-bottom-8"
          priority
          draggable="false"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
