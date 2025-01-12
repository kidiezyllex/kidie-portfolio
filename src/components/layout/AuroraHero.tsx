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
      className="section relative flex h-fit w-full flex-col place-content-center overflow-hidden px-4 py-10 text-gray-200 sm:h-screen sm:py-0 sm:md:h-[65vh] sm:md:-top-24 sm:lg:h-[90vh] sm:lg:-top-32 sm:xl:h-[115vh] sm:xl:-top-40"
    >
      <div className="relative z-50 flex h-fit flex-grow flex-col items-center justify-center gap-4 sm:h-fit sm:flex-row sm:items-start sm:justify-start">
        {/* <div className="absolute hidden h-fit w-[100%] items-center sm:flex sm:h-screen">
          <Scene />
        </div> */}
        <Introduction></Introduction>
        <div className="relative z-50 hidden h-full w-[50%] md:block">
          <Image
            src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736047384/learning-webdev-blog/clinic/1736047246699_gbngi9.png"
            alt="hero-image"
            className="absolute bottom-0 left-5 h-auto w-[100%] object-cover"
            width={700}
            height={700}
            style={{
              width: '100%',
              height: 'auto',
            }}
            draggable="false"
          />
        </div>
      </div>
      <div className="absolute inset-0 bottom-0 left-0 top-0 z-0 h-screen min-h-screen">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
