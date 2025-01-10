'use client';
import Link from 'next/link';
import { WavyBackground } from '../ui/wavy-background';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '../ui/avatar';
import SparklesText from '../ui/sparkles-text';
import { useRef } from 'react';
import Image from 'next/image';
import { BorderGradientIcon } from '../ui/border-gradient-icon';

export default function Footer() {
  const logoTextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative top-0 z-[1000]">
      <WavyBackground className="flex flex-col items-center gap-4 bg-transparent sm:gap-8">
        <div className="flex flex-row items-center justify-between">
          <Link
            href={''}
            className="flex flex-row items-center justify-start gap-3"
          >
            <div ref={logoTextRef}>
              <SparklesText
                text="Designed and Developed by me"
                className="text-center text-xl sm:text-4xl"
              />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                ease: 'linear',
                scale: {
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              <Avatar className="h-8 w-8 sm:h-12 sm:w-12">
                <AvatarImage
                  src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736045484/learning-webdev-blog/download_qf0dzi.jpg"
                  alt="kidie-logo"
                  draggable="false"
                />
              </Avatar>
            </motion.div>
          </Link>
        </div>
        <div className="flex flex-grow items-center gap-2 self-center sm:gap-4">
          <BorderGradientIcon className="relative p-0.5">
            <Link
              href={'https://www.linkedin.com/in/kidiezyllex'}
              target="_blank"
            >
              <Image
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429254/learning-webdev-blog/portfolio/1_in0v4f.webp"
                alt="Linked Image"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto max-h-12 w-auto rounded-md bg-white object-cover p-2 sm:max-h-16"
                priority
              />
            </Link>
          </BorderGradientIcon>
          <BorderGradientIcon className="relative p-0.5">
            <Link href={'https://github.com/kidiezyllex'} target="_blank">
              <Image
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429254/learning-webdev-blog/portfolio/2_lrh8ex.webp"
                alt="Github Image"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto max-h-12 w-auto rounded-md bg-white object-cover p-2 sm:max-h-16"
                priority
              />
            </Link>
          </BorderGradientIcon>
          <BorderGradientIcon className="relative p-0.5">
            <Link href={'https://www.facebook.com/zyllusc'} target="_blank">
              <Image
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429255/learning-webdev-blog/portfolio/3_h8pnwi.webp"
                alt="Facebook Image"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto max-h-12 w-auto rounded-md bg-white object-cover p-2 sm:max-h-16"
                priority
              />
            </Link>
          </BorderGradientIcon>
          <BorderGradientIcon className="relative p-0.5">
            <Link
              href={'https://www.instagram.com/kidiezyllusc'}
              target="_blank"
            >
              <Image
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429255/learning-webdev-blog/portfolio/4_kmpb0y.webp"
                alt="Insta Image"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto max-h-12 w-auto rounded-md bg-white object-cover p-2 sm:max-h-16"
                priority
              />
            </Link>
          </BorderGradientIcon>
          <BorderGradientIcon className="relative p-0.5">
            <Link
              href={
                'https://dzhrcktg3t.ufs.sh/f/yKG0YxsXgqAJ6Gsws0kwo2C3jIVeOG6QyZ4naqUvfctiFb71'
              }
              target="_blank"
            >
              <Image
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429254/learning-webdev-blog/portfolio/5_zadoiz.webp"
                alt="CV Image"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto max-h-12 w-auto rounded-md bg-white object-cover p-2 sm:max-h-16"
                priority
              />
            </Link>
          </BorderGradientIcon>
        </div>
      </WavyBackground>
    </div>
  );
}
