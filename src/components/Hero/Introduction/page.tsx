'use client';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  UserRoundCheck,
} from 'lucide-react';
import RoundedSlideButton from '@/components/animata/button/RoundedSlideButton';
import { BorderGradientRoundedButton } from '@/components/ui/border-gradient-rounded-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Introduction() {
  return (
    <div className="w-[100%] flex-grow-0 self-start px-0 pl-0 pt-0 text-violet-300 sm:self-center sm:pl-4 sm:pt-10 md:w-[50%] xl:pl-16">
      <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-4">
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <span className="font-normal">( =^w^= )</span>
          Hello 👋
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <p className="text-3xl font-bold text-violet-300 sm:text-5xl">I'm </p>
          <Link
            href={'/'}
            onClick={(e) => e.preventDefault()}
            className="relative z-[10000] text-nowrap bg-gradient-to-r font-[Verdana,Geneva,Tahoma,sans-serif] text-3xl font-bold tracking-tighter text-violet-300 hover:shadow-violet-500/[0.1] sm:text-4xl md:leading-9 lg:text-[55px] lg:leading-[48px]"
          >
            Bui Tran Thien An
          </Link>
        </div>
        <p className="font-[Verdana,Geneva,Tahoma,sans-serif] text-xl font-bold leading-[90%] tracking-[-0.07em] text-violet-300 sm:text-4xl">
          a{' '}
          <Link
            href={'/'}
            onClick={(e) => e.preventDefault()}
            className="text-[#F5A5A7]"
          >
            front-end
          </Link>{' '}
          developer
        </p>
        <div className="my-2 flex cursor-none gap-4 sm:my-4">
          <Link
            href={'https://www.linkedin.com/in/kidiezyllex'}
            target="_blank"
            className="transform cursor-none duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Linkedin className="h-5 w-5 cursor-none text-indigo-950 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://github.com/kidiezyllex'}
            target="_blank"
            className="transform cursor-none duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Github className="h-5 w-5 cursor-none text-violet-300 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.facebook.com/zyllusc'}
            target="_blank"
            className="transform cursor-none duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none">
              <Facebook className="h-5 w-5 cursor-none text-indigo-950 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
          <Link
            href={'https://www.instagram.com/kidiezyllusc'}
            target="_blank"
            className="transform cursor-none duration-200 hover:-translate-y-2"
          >
            <BorderGradientRoundedButton className="cursor-none bg-slate-950 text-violet-300">
              <Instagram className="h-5 w-5 cursor-none text-violet-300 sm:h-7 sm:w-7" />
            </BorderGradientRoundedButton>
          </Link>
        </div>
        <div className="flex items-center gap-4 relative z-50">
          <Link href="https://www.facebook.com/zyllusc" target="_blank">
            <Button className="flex items-center gap-2 rounded-[2px] border border-transparent px-5 text-xs sm:text-sm">
              Hire me <UserRoundCheck className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </Link>
          <RoundedSlideButton></RoundedSlideButton>
        </div>
      </div>
    </div>
  );
}
