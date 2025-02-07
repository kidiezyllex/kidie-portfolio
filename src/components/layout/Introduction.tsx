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
          Hello 👋
        </h1>
        <div className="flex items-center gap-4">
          <p className='text-violet-300 text-2xl font-bold sm:text-5xl'>I'm{" "}</p>
          <Link
            href={"/"}
            onClick={(e) => e.preventDefault()}
            className="relative z-[10000] text-nowrap bg-gradient-to-r text-violet-300 font-bold tracking-tighter md:text-3xl sm:text-4xl md:leading-9 lg:text-[55px] lg:leading-[48px] hover:shadow-violet-500/[0.1] font-[Verdana,Geneva,Tahoma,sans-serif]"
          >
            Bui Tran Thien An
          </Link>

        </div>
        <p
          className="sm:text-4xl font-bold font-[Verdana,Geneva,Tahoma,sans-serif] tracking-[-0.07em] leading-[90%] text-violet-300"
        >
          a <span className='text-[#F5A5A7]'>front-end</span> developer
        </p>
        <div className="cursor-none flex gap-4 sm:my-4">
          <Link
            href={'https://www.linkedin.com/in/kidiezyllex'}
            target="_blank"
            className="cursor-none transform duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Linkedin className="h-5 w-5 cursor-none text-indigo-950 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://github.com/kidiezyllex'}
            target="_blank"
            className="cursor-none transform duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Github className="h-5 w-5 cursor-none text-violet-300 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.facebook.com/zyllusc'}
            target="_blank"
            className="cursor-none transform duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Facebook className="h-5 w-5 cursor-none text-indigo-950 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.instagram.com/kidiezyllusc'}
            target="_blank"
            className="cursor-none transform duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Instagram className="h-5 w-5 cursor-none text-violet-300 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
        </div>
        <RoundedSlideButton></RoundedSlideButton>
      </div>
    </div >
  );
}
