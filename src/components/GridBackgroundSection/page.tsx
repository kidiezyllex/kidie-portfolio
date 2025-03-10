'use client';
import React, { useEffect } from 'react';
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from 'framer-motion';
import { AboutMe } from './AboutMe/page';
import { ImageScrollSection } from './ImageScrollSection/page';
import { MyProjects } from './Projects/page';
import { TechStack } from './TechStack/page';
import Footer from '../Footer/page';
const COLORS_TOP = ['#09090B', '#09090B', '#09090B', '#09090B'];
export const GridBackgroundSection = () => {
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
            className="relative -top-40 sm:h-[1550vh] h-[950vh] min-h-screen w-full place-content-center"
        >
            <div className="absolute top-0 z-50 flex w-full flex-col gap-20 bg-transparent">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px]"></div>
                <TechStack />
                <MyProjects />
                <AboutMe />
                <ImageScrollSection />
                <Footer />
            </div>
        </motion.section>
    );
};
