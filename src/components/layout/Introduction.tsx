'use client';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import TypingText from '../animata/text/typing-text';
import RoundedSlideButton from '../animata/button/RoundedSlideButton';
import { BorderGradientRoundedButton } from '../ui/border-gradient-rounded-button';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="w-[100%] flex-grow-0 self-start px-0 pl-4 pt-0 text-violet-300 sm:self-center sm:pt-10 md:w-[50%] xl:pl-16">
      <div className="flex flex-col items-center gap-1 sm:items-start sm:gap-4">
        <h1 className="flex items-center gap-2 text-xl font-bold sm:text-3xl">
          <span className="font-normal">( =^w^= )</span>
          Hello
          <span className="animate-wave">👋</span>
        </h1>
        <h2 className="bg-gradient-to-r from-violet-500 via-violet-300 to-violet-500 bg-clip-text text-2xl font-bold text-transparent sm:text-5xl">
          I am{' '}
          <Link
            href={'/'}
            onClick={(e) => e.preventDefault()}
            className="relative z-[10000] text-nowrap bg-gradient-to-r from-violet-500 via-violet-300 to-violet-500 bg-clip-text font-bold md:text-3xl lg:text-5xl"
          >
            BUI TRAN THIEN AN
          </Link>
        </h2>
        <TypingText
          className="text-nowrap md:text-xl lg:text-2xl xl:text-3xl"
          text={'A web developer passionate about design.'}
        ></TypingText>

        <div className="flex cursor-none gap-4 pt-0 sm:pt-4">
          <Link
            href={'https://www.linkedin.com/in/kidiezyllex'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Linkedin className="h-5 w-5 cursor-none text-indigo-950 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://github.com/kidiezyllex'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Github className="h-5 w-5 cursor-none text-violet-300 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.facebook.com/zyllusc'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Facebook className="h-5 w-5 cursor-none text-indigo-950 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.instagram.com/kidiezyllusc'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Instagram className="h-5 w-5 cursor-none text-violet-300 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
        </div>
        <div className="flex items-stretch gap-4 pt-4 sm:pt-6">
          <RoundedSlideButton></RoundedSlideButton>
        </div>
      </div>
    </div>
  );
}
