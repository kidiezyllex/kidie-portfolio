"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};
export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div className="w-[60%] mx-auto antialiased font-sans px-4 md:px-8 lg:px-4 py-20">
            <div className="relative">
                <div className="relative h-80 w-full">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.src}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotate: randomRotateY(),
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.7,
                                    scale: isActive(index) ? 1 : 0.95,
                                    z: isActive(index) ? 0 : -100,
                                    rotate: isActive(index) ? 0 : randomRotateY(),
                                    zIndex: isActive(index)
                                        ? 999
                                        : testimonials.length + 2 - index,
                                    y: isActive(index) ? [0, -80, 0] : 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotate: randomRotateY(),
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 origin-bottom"
                            >
                                <Image
                                    src={testimonial.src}
                                    alt={testimonial.name}
                                    width={500}
                                    height={500}
                                    draggable={false}
                                    className="h-full w-full rounded-3xl object-cover object-center"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="flex justify-between flex-col pt-8">
                    <div className="flex justify-center gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-violet-300 flex items-center justify-center group/button"
                        >
                            <ChevronsLeft className="h-5 w-5 text-indigo-950 group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-violet-300 flex items-center justify-center group/button"
                        >
                            <ChevronsRight className="h-5 w-5 text-indigo-950 group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
