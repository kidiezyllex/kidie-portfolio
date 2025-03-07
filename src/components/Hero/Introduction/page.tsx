'use client';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  UserRoundCheck,
  Layers,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import RoundedSlideButton from '@/components/animata/button/RoundedSlideButton';
import { BorderGradientRoundedButton } from '@/components/ui/border-gradient-rounded-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import IntroductionSkeleton from '../IntroductionSkeleton/page';
import { useState, useEffect } from 'react';
import { useLanguageStore } from '@/store/languageStore';

export default function Introduction() {
  const [isLoading, setIsLoading] = useState(true);
  const { isVietnamese } = useLanguageStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pb-4 z-50 flex h-full w-[50%] flex-col items-end justify-end gap-2 pl-11 sm:items-start sm:gap-4">
      <p className="font-[Verdana,Geneva,Tahoma,sans-serif] text-xl font-bold leading-[90%] tracking-[-0.07em] text-violet-300 sm:text-5xl mb-6">
        a{' '}
        <Link
          href={'/'}
          onClick={(e) => e.preventDefault()}
          className="text-[#F5A5A7]"
        >
          front-end
        </Link>{' '}
        developer.
      </p>
      {/* */}
      {isLoading ? <IntroductionSkeleton /> : (
        <div className="grid w-[90%] grid-cols-2 rounded-tr-md rounded-bl-md border border-muted-foreground/30">
          {/* Block 1 */}
          <div className="flex h-36 w-full items-center justify-center relative">
            <Image
              src="/hero2.svg"
              alt="hero-image"
              className="pointer-events-none h-full w-full select-none object-cover"
              width={700}
              height={700}
              draggable="false"
              quality={100}
            />
            <Image
              src="/hero3.png"
              alt="hero-image"
              className="absolute bottom-0 z-10 h-48 w-auto transition-transform duration-300 hover:scale-110"
              width={700}
              height={700}
              draggable="false"
              quality={100}
            />
          </div>

          {/* Block 2 */}
          <div className="w-full flex h-36 flex-col items-center justify-center gap-1 p-4">
            <div className="flex cursor-none gap-2 sm:mb-4">
              <Link
                href={'https://www.linkedin.com/in/kidiezyllex'}
                target="_blank"
                className="transform cursor-none duration-200 hover:-translate-y-2"
              >
                <BorderGradientRoundedButton className="cursor-none">
                  <Linkedin
                    className="h-5 w-5 cursor-none text-indigo-950 sm:h-6 sm:w-6"
                    fill="currentColor"
                  />
                </BorderGradientRoundedButton>
              </Link>
              <Link
                href={'https://github.com/kidiezyllex'}
                target="_blank"
                className="transform cursor-none duration-200 hover:-translate-y-2"
              >
                <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
                  <Github className="h-5 w-5 cursor-none text-violet-300 sm:h-6 sm:w-6" />
                </BorderGradientRoundedButton>
              </Link>
              <Link
                href={'https://www.facebook.com/zyllusc'}
                target="_blank"
                className="transform cursor-none duration-200 hover:-translate-y-2"
              >
                <BorderGradientRoundedButton className="cursor-none">
                  <Facebook
                    className="h-5 w-5 cursor-none text-indigo-950 sm:h-6 sm:w-6"
                    fill="currentColor"
                  />
                </BorderGradientRoundedButton>
              </Link>
              <Link
                href={'https://www.instagram.com/kidiezyllusc'}
                target="_blank"
                className="transform cursor-none duration-200 hover:-translate-y-2"
              >
                <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
                  <Instagram className="h-5 w-5 cursor-none text-violet-300 sm:h-6 sm:w-6" />
                </BorderGradientRoundedButton>
              </Link>
            </div>
            <div className="relative z-50 flex w-full items-center justify-center gap-4">
              <RoundedSlideButton></RoundedSlideButton>
              <Link href="https://www.facebook.com/zyllusc" target="_blank">
                <Button className="flex items-center gap-2 rounded-[4px] border border-transparent px-5 text-xs sm:text-sm">
                  Hire me <UserRoundCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Block 3 */}
          <div className="h-36 flex flex-col gap-3 p-2">
            <p className='text-white text-2xl font-bold'><span className='text-[#F5A5A7]'>web freelancer</span> with: </p>
            <ul className='space-y-2 pl-1 bg-[#30144F] rounded-md p-2'>
              <li className={`font-bold pl-2 text-xl flex items-center group`}>
                <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 text-slate-950 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-violet-300 transform transition-all duration-300 group-hover:translate-x-1">{isVietnamese ? '8+ dự án thực tế.' : '8+ real projects.'}</span>
              </li>
              <li className={`font-bold pl-2 text-xl flex items-center group`}>
                <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 text-slate-950 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <span className="text-violet-300 transform transition-all duration-300 group-hover:translate-x-1">{isVietnamese ? '2 $/giờ.' : '$2 per hour.'}</span>
              </li>
            </ul>
          </div>
          <div className="w-full flex h-36 items-center justify-center overflow-hidden">
            <Image
              src="/hero1.jpg"
              alt="hero-image"
              className="pointer-events-none h-full w-full select-none object-fill"
              width={700}
              height={700}
              draggable="false"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
