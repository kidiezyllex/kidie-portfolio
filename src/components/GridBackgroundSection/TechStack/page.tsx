'use client';
import HoverButton from '@/components/ui/hover-button';
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { techStacks } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { BorderGradientIcon } from '@/components/ui/border-gradient-icon';
import { useIsMobile } from '../../../../hook/useIsMobile';
import { useRef } from 'react';
import { Layers } from 'lucide-react';

export const TechStack = () => {
    const isMobile = useIsMobile();
    const sectionRef = useRef(null);
    
    return (
        <main className={`section bg-transparent mt-10 ${isMobile ? 'h-[250vh]' : 'h-[100vh]'}`} id="tech-stack-section" ref={sectionRef}>
            <div className="grid h-fit w-full place-content-center bg-transparent">
                <HoverButton icon={Layers} text={"TECH STACK"}></HoverButton>
            </div>
            {!isMobile && 
            <section className="w-full mt-10 bg-transparent grid md:grid-cols-2 lg:grid-cols-3">
                {
                    techStacks.map((stack, idx) => (
                        <div 
                            className={`w-full flex flex-col ${idx === techStacks.length - 1 ? 'flex-grow-1' : 'flex-1'}`} 
                            key={idx}
                        >
                            <p className="w-full text-center font-semibold text-violet-300 text-2xl mb-4 relative 
                               after:content-[''] after:block after:w-[40%] after:h-1 after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 
                               after:mx-auto after:mt-2 tracking-wide uppercase transform transition-all duration-300 hover:text-white">
                                {stack.title}
                            </p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={stack.data} />
                            </div>
                        </div>
                    ))
                }
            </section>}
            {/* Mobile */}
            {isMobile && <div className="flex flex-col gap-8 mt-10">
                {techStacks.map((stack, idx) => (
                    <div 
                        key={idx} 
                        className="flex flex-col gap-4"
                    >
                        <p className="w-full text-center text-xl font-semibold text-violet-300 mb-3 relative 
                           after:content-[''] after:block after:w-[40%] after:h-1 after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 
                           after:mx-auto after:mt-2 tracking-wide uppercase transform transition-all duration-300 hover:text-white">
                            {stack.title}
                        </p>
                        <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                            {stack.data.map((item, index) => (
                                <BorderGradientIcon key={index} className="relative h-20 w-20">
                                    <Link href={item?.link} target="_blank">
                                        <Image
                                            src={item?.imageUrl}
                                            alt="Tech Icon"
                                            width={80}
                                            height={80}
                                            sizes="80px"
                                            className="h-full max-h-20 w-auto rounded-md object-cover"
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjY2NjY2NjIiAvPgo8L3N2Zz4="
                                        />
                                    </Link>
                                </BorderGradientIcon>
                            ))}
                        </div>
                    </div>
                ))}
            </div>}
        </main>
    );
}
