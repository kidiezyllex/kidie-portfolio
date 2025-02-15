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
            className="relative -top-40 sm:h-[1800vh] h-[500vh] min-h-screen w-full place-content-center"
        >
            <div className="absolute top-0 z-50 flex w-full flex-col gap-20 bg-transparent">
                {/* <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
                <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px]"></div>
                <MyProjects />
                <TechStack />
                <AboutMe />
                <ImageScrollSection />
            </div>
        </motion.section>
    );
};
