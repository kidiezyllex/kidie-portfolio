'use client';
import HoverButton from '@/components/ui/hover-button';
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { teckstack1, teckstack2, teckstack3, teckstack4, teckstack5 } from "../../../../lib/datas"
import { techStacks } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { BorderGradientIcon } from '@/components/ui/border-gradient-icon';
import { FaCode } from "react-icons/fa6";
import { useIsMobile } from '../../../../hook/useIsMobile';

export const TechStack = () => {
    const isMobile = useIsMobile();
    return (
        <main className="section bg-transparent -mt-10" >
            <div className="grid h-fit w-full place-content-center bg-transparent">
                <HoverButton icon={FaCode} text={"TECH STACK"}></HoverButton>
            </div>
            {!isMobile && 
            <section className="w-full mt-10 bg-transparent grid md:grid-cols-2 lg:grid-cols-3">
                {
                    techStacks.map((stack, idx) => (
                        <div className={`w-full flex flex-col ${idx === techStacks.length - 1 ? 'flex-grow-1' : 'flex-1'}`} key={idx}>
                            <p className="w-full text-center font-semibold text-violet-300 text-2xl">
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
                    <div key={idx} className="flex flex-col gap-4">
                        <p className="w-full text-center text-xl font-semibold text-violet-300">
                            {stack.title}
                        </p>
                        <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                            {stack.data.map((item, index) => (
                                <BorderGradientIcon key={index} className="relative h-20 w-20">
                                    <Link href={item?.link} target="_blank">
                                        <Image
                                            src={item?.imageUrl}
                                            alt="Tech Icon"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="h-full max-h-20 w-auto rounded-md object-cover"
                                            loading="lazy"
                                            blurDataURL={item?.imageUrl}
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
