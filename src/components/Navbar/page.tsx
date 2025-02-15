'use client';

import { useEffect, useRef, useState } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import SparklesText from '../ui/sparkles-text';
import { Home, Layers, FolderGit2, UserSearch, GitBranch } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PulsatingButton from '../ui/pulsating-button';
gsap.registerPlugin(ScrollTrigger);

const navItems = [
    { label: 'Home', icon: Home },
    { label: 'Current Job', icon: GitBranch },
    { label: 'Projects Participated', icon: FolderGit2 },
    { label: 'Tech Stack', icon: Layers },
    { label: 'About Me', icon: UserSearch },
];

export default function NavBar() {
    const [itemIndex, setItemIndex] = useState(0);
    const itemRef = useRef<HTMLDivElement>(null);
    const logoTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initScrollTrigger = () => {
            const sections = gsap.utils.toArray<HTMLElement>('.section');

            const triggers = sections.map((section, i) => {
                return ScrollTrigger.create({
                    trigger: section,
                    start: 'top center',
                    onEnter: () => setItemIndex(i),
                    onLeaveBack: () => i > 0 && setItemIndex(i - 1),
                });
            });

            return triggers;
        };

        let triggers: ScrollTrigger[] = [];

        const timeoutId = setTimeout(() => {
            triggers = initScrollTrigger();
            ScrollTrigger.refresh();
        }, 100);

        const handleResize = () => {
            triggers.forEach((trigger) => trigger.kill());
            triggers = initScrollTrigger();
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
            triggers.forEach((trigger) => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (logoTextRef.current) {
            if (itemIndex === 0) {
                gsap.to(logoTextRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                });
            } else {
                gsap.to(logoTextRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: 'power3.in',
                });
            }
        }
    }, [itemIndex]);

    const renderItem = () => {
        const { label, icon: Icon } = navItems[itemIndex];
        return (
            <div ref={itemRef}>
                <PulsatingButton className="item flex cursor-none flex-row items-center gap-2 rounded-full px-4 py-1">
                    <p className="text-xs font-semibold uppercase text-violet-300 sm:text-sm">
                        {label}
                    </p>
                    <Icon className="h-3 w-3 cursor-none text-violet-300 sm:h-4 sm:w-4" />
                </PulsatingButton>
            </div>
        );
    };

    return (
        <div className="sticky top-0 z-[1000] flex items-center rounded-none border-none bg-transparent text-violet-200">
            <div className="mx-auto w-full max-w-[1920px] bg-transparent px-4 py-4 xl:px-14">
                <div className="flex flex-row items-center justify-between">
                    <Link
                        href={''}
                        className="flex flex-row items-center justify-start gap-3"
                    >
                        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                            <AvatarImage
                                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736045484/learning-webdev-blog/download_qf0dzi.jpg"
                                alt="kidie-logo"
                                draggable="false"
                            />
                        </Avatar>
                        <div ref={logoTextRef}>
                            <SparklesText
                                text="K I D I E Z Y L L E X"
                                className="text-lg sm:text-xl"
                            />
                        </div>
                    </Link>
                    {renderItem()}
                </div>
            </div>
        </div>
    );
}
