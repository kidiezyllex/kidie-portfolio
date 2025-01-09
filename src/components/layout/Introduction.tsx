'use client';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import TypingText from '../animata/text/typing-text';
import RoundedSlideButton from '../animata/button/RoundedSlideButton';
import { BorderGradientRoundedButton } from '../ui/border-gradient-rounded-button';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="w-[100%] flex-grow self-center px-16 pt-10 text-violet-300">
      <div className="space-y-4">
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <span className="font-normal">( =^w^= )</span>
          Hello
          <span className="animate-wave">👋</span>
        </h1>
        <h2 className="bg-gradient-to-r from-violet-500 via-violet-300 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
          I am{' '}
          <Link
            href={'/'}
            onClick={(e) => e.preventDefault()}
            className="relative z-[10000] bg-gradient-to-r from-violet-500 via-violet-300 to-violet-500 bg-clip-text font-bold md:text-3xl lg:text-4xl xl:text-5xl"
          >
            BUI TRAN THIEN AN
          </Link>
        </h2>
        <TypingText
          className="md:text-xl lg:text-2xl xl:text-3xl"
          text={'A web developer passionate about design.'}
        ></TypingText>

        <div className="flex cursor-none gap-4 pt-6">
          <Link
            href={'https://www.linkedin.com/in/kidiezyllex'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Linkedin className="h-7 w-7 cursor-none text-indigo-950" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://github.com/kidiezyllex'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Github className="h-7 w-7 cursor-none text-violet-300" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.facebook.com/zyllusc'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Facebook className="h-7 w-7 cursor-none text-indigo-950" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.instagram.com/kidiezyllusc'}
            target="_blank"
            className="cursor-none"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Instagram className="h-7 w-7 cursor-none text-violet-300" />
            </BorderGradientRoundedButton>
          </Link>
        </div>
        <div className="flex items-stretch gap-4 pt-6">
          <RoundedSlideButton></RoundedSlideButton>
        </div>
      </div>
    </div>
  );
}
