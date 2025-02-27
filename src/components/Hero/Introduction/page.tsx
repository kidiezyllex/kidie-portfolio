'use client';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  UserRoundCheck,
  Layers,
} from 'lucide-react';
import RoundedSlideButton from '@/components/animata/button/RoundedSlideButton';
import { BorderGradientRoundedButton } from '@/components/ui/border-gradient-rounded-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Introduction() {
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
        <div className="h-36 flex flex-col items-center justify-center gap-3 p-2">
            <p className='text-white text-2xl font-bold'><span className='text-[#F5A5A7]'>web freelancer</span> with</p>
            <div className='w-full flex gap-3 justify-center items-center'>
                <Layers className='h-8 w-8 text-[#9595FF]' />
                <span className='text-white text-3xl font-bold'>5+</span>
                <span className='text-[#9595FF] text-xl font-bold'>projects</span>
            </div>
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

    </div>
  );
}
