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
      className="section relative flex h-fit w-full flex-col place-content-center overflow-hidden bg-gray-950 px-4 py-10 text-gray-200 sm:h-screen sm:py-0 sm:md:h-[65vh] sm:md:-top-24 sm:lg:h-[90vh] sm:lg:-top-32 sm:xl:h-[115vh] sm:xl:-top-40"
    >
      <div className="relative z-10 flex h-fit flex-col items-center justify-center gap-6 sm:h-fit sm:flex-row sm:items-start sm:justify-start sm:gap-10">
        <div className="absolute hidden h-fit w-[100%] items-center sm:flex sm:h-screen">
          <Scene />
        </div>
        <ScrollElement
          direction="left"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className="w-full max-w-md self-center sm:w-[100%] sm:max-w-none sm:self-start"
        >
          <Introduction></Introduction>
        </ScrollElement>
        <Image
          src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736047384/learning-webdev-blog/clinic/1736047246699_gbngi9.png"
          alt="hero-image"
          width={1920}
          height={1080}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="mt-6 hidden h-auto w-full max-w-sm object-contain sm:absolute sm:right-44 sm:z-50 sm:mt-0 sm:block sm:h-screen sm:w-[50%] sm:max-w-none sm:translate-x-1/2 sm:transform sm:animate-zoom-tilt"
          priority
          draggable="false"
        />
      </div>
      <div className="absolute inset-0 z-0 h-fit sm:h-screen">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
