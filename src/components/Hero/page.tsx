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
import Introduction from './Introduction/page';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { StaticStars } from '../ui/static-stars-background';
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
                <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_100%_100%_at_0%_100%,#000_10%,transparent_70%)]"></div>
                <Introduction></Introduction>
                <>
                    <Head>
                        <Link
                            rel="preload"
                            href={"/hero.png"}
                            as="image"
                        />
                    </Head>
                    <div className="relative z-50 hidden h-full w-[50%] md:block">
                        <Image
                            src="/hero.png"
                            alt="hero-image"
                            className="absolute bottom-0 left-5 object-cover z-50"
                            width={700} // Kích thước cố định để tránh layout shift
                            height={700}
                            draggable="false"
                            quality={100}
                            loading="eager"
                        />
                    </div>
                </>
            </div>
            <div className="absolute inset-0 bottom-0 left-0 top-0 z-0 h-screen min-h-screen">
                <Canvas camera={{ position: [0, 0, 2] }}>
                    <StaticStars />
                </Canvas>
            </div>
        </motion.section>
    );
};
