'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2 } from 'lucide-react';
import HoverButton from '@/components/ui/hover-button';
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { teckstack1, teckstack2, teckstack3, teckstack4, teckstack5, teckstack6 } from "../../../../lib/datas"
import { Layers } from "lucide-react"
import { techStacks } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { BorderGradientIcon } from '@/components/ui/border-gradient-icon';

export const TechStack = () => {
    return (
        <main className="section sm:-mt-8 -mt-16 bg-transparent lg:mt-0" >
            <div className="mt-14 grid h-fit w-full place-content-center bg-transparent">
            <HoverButton icon={Layers} text={"TECH STACK"}></HoverButton>
            </div>
            <section className="mt-24 w-full bg-transparent sm:mt-0">
            <div className=" w-screen h-full flex flex-col items-center gap-4 sm:items-start">
                    <div className="w-full grid grid-cols-2 gap-4 items-start justify-center mt-10">
                        <div className="flex flex-col">
                            <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                                Programming Languages
                            </p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={teckstack1} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                                Frameworks/Libraries
                            </p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={teckstack2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-screen h-full flex flex-col items-center gap-4 sm:items-start">
                    <div className="w-full grid grid-cols-2 gap-4 items-start justify-center mt-10">
                        <div className="flex flex-col">
                            <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                                Animation & UI Libraries
                            </p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={teckstack3} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">ORM & Database</p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={teckstack4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-screen h-full flex flex-col items-center gap-4 sm:items-start">
                    <div className="w-full grid grid-cols-2 gap-4 items-start justify-center mt-10">
                        <div className="flex flex-col">
                            <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">Cloud</p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={teckstack5} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">Other Tools</p>
                            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                                <HoverEffect items={teckstack6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mobile */}
            <div className="flex sm:hidden flex-col gap-8">
                <div className="w-full flex justify-center mt-14">
                    <HoverButton icon={Layers} text={"TECH STACK"} />
                </div>
                {techStacks.map((stack, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                        <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
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
            </div>
        </main>
    );
}
