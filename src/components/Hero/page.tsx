'use client';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion';
import Image from 'next/image';
import Introduction from './Introduction/page';
import dynamic from 'next/dynamic';
import ScrollButton from '../common/ScrollButton/page';
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });
const COLORS_TOP = ['#09090B', '#5B21B6', '#09090B', '#5B21B6'];
import { Archivo_Black } from 'next/font/google';
import { useIsMobile } from '../../../hook/useIsMobile';
import IntroductionMobile from './IntroductionMobile/page';
const archivo_black = Archivo_Black({ subsets: ['latin'], weight: '400' });
export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const isMobile = useIsMobile();
  console.log(isMobile);
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
      className="-mt-[72px] section relative flex h-screen w-full flex-col place-content-center overflow-hidden py-10 text-gray-200 sm:py-0"
    >
      <div className="relative z-50 h-screen flex flex-grow flex-col items-center justify-center gap-4 sm:h-fit sm:flex-row sm:items-start sm:justify-start">
        {/* Mobile only */}
        {isMobile && <div className='flex flex-col w-full relative top-4'>
          <p className={`w-full left-0 text-start text-7xl uppercase ${archivo_black.className} text-violet-200 text-outline-violet`}>BUITRAN</p>
          <p className={`w-full right-0 -mt-2 text-end text-7xl uppercase ${archivo_black.className} text-violet-200 text-outline-violet`}>THIENAN</p>
        </div>} 

        {/* Desktop*/}
        {!isMobile && <p className={`absolute w-full top-12 text-center text-[125px] uppercase ${archivo_black.className} text-violet-200 text-outline-violet`}>BUITRANTHIENAN</p>}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_100%_100%_at_0%_100%,#000_10%,transparent_70%)]"></div>
        {isMobile ? <IntroductionMobile /> : <Introduction />}
        {!isMobile && (
          <Image
            src="/hero.png"
            alt="hero-image"
            className="relative w-[50vw] bottom-0 right-0 z-50 h-full object-cover select-none pointer-events-none"
            width={700}
            height={700}
            draggable="false"
            quality={100}
            loading="eager"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNUIyMUI2MjAiLz48L3N2Zz4="
          />
        )}
        {!isMobile && <div className="absolute bottom-2 left-1/2 h-fit w-fit -translate-x-1/2 transform">
          <ScrollButton></ScrollButton>
        </div>}
      </div>
    </motion.section>
  );
};
