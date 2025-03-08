'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SparklesText from '../ui/sparkles-text';
import { Home, Layers } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PulsatingButton from '../ui/pulsating-button';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { FaLaptopCode, FaRegFaceSmileBeam } from 'react-icons/fa6';
import { GoProject } from 'react-icons/go';
gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const [itemIndex, setItemIndex] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);
  const { isVietnamese, toggleLanguage } = useLanguageStore();
  const navItems = [
    { label: isVietnamese ? 'Trang chủ' : 'Home', icon: Home },
    { label: isVietnamese ? 'Dịch vụ' : 'Services', icon: FaLaptopCode },
    { label: isVietnamese ? 'Công nghệ' : 'Tech Stack', icon: Layers },
    { label: isVietnamese ? 'Dự án' : 'Projects', icon: GoProject },
    { label: isVietnamese ? 'Tôi' : 'About Me', icon: FaRegFaceSmileBeam },
  ];
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
      <div ref={itemRef} className="flex flex-row items-center gap-2">
        <PulsatingButton className="item flex cursor-none flex-row items-center gap-2 rounded-full px-3 py-1">
          <p className="text-xs text-nowrap font-semibold uppercase text-violet-300">
            {label}
          </p>
          <Icon className="h-3 w-3 cursor-none text-violet-300 sm:h-4 sm:w-4" />
        </PulsatingButton>
        <div className="relative h-9 w-9 overflow-hidden rounded-full border-[4px] border-[#C4B5FD]/10">
          <Image
            src="/avatar.jpg"
            alt="avatar-image"
            className="pointer-events-none h-full w-full select-none rounded-full object-fill"
            width={700}
            height={700}
            draggable="false"
            quality={100}
          />
        </div>
        <div 
          className="relative h-9 w-9 overflow-hidden rounded-full border-[4px] border-[#C4B5FD]/10 cursor-pointer"
          onClick={toggleLanguage}
        >
          <Image
            src={isVietnamese ? "/vn.png" : "/uk.png"}
            alt={isVietnamese ? "Vietnamese" : "English"}
            className="h-full w-full select-none rounded-full object-cover"
            width={36}
            height={36}
            draggable="false"
            quality={100}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-0 z-[1000] flex items-center rounded-none border-none bg-transparent text-violet-200">
      <div className="mx-auto w-full max-w-[1920px] bg-transparent px-4 py-4 xl:px-11">
        <div className="flex flex-row items-center justify-between">
          <Link
            href={''}
            className="flex flex-row items-center justify-start gap-3"
          >
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
