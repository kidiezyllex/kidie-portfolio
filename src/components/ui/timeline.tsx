"use client";
import {
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../../hook/useIsMobile";
interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);
    const isMobile = useIsMobile()
    return (
        <div
            className="w-full bg-transparent font-sans md:px-10 lg:-mt-20"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="flex justify-start pt-10 md:pt-40 md:gap-10"
                          
                        >
                            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-violet-400 flex items-center justify-center border-2 border-violet-200">
                                    <div className="h-4 w-4 rounded-full bg-gray-200 border border-gray-300 p-2" />
                                </div>
                                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-violet-300">
                                    {item.title}
                                </h3>
                            </div>
                            <div className={`relative ${isMobile ? 'pl-16' : 'pl-20'} pr-4 md:pl-4 w-full`}>
                                <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-violet-300">
                                    {item.title}
                                </h3>
                                {item.content}{" "}
                            </div>
                        </motion.div>
                    );
                })}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-400 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        className="absolute inset-x-0 top-0  w-[2px] bg-violet-300 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
