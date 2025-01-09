'use client';
import AnimatedGradientText from '../animata/text/animated-gradient-text';
import Image from 'next/image';
import {
  teckstack1,
  teckstack2,
  teckstack3,
  teckstack4,
  teckstack5,
  teckstack6,
} from '../../../lib/datas';
import { BorderGradientIcon } from '../ui/border-gradient-icon';
import Link from 'next/link';
import ScrollElement from '../core/scroll-element';
export default function index(): JSX.Element {
  return (
    <main className="section bg-transparent">
      <section className="mt-12 grid h-fit w-full place-content-center bg-transparent">
        <AnimatedGradientText className="text-center text-5xl font-semibold uppercase leading-[120%] tracking-tight">
          Tech Stack
        </AnimatedGradientText>
      </section>
      <section className="mt-12 grid w-full grid-cols-2 gap-14 bg-transparent px-20 text-white">
        <ScrollElement
          direction="left"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-start text-2xl font-semibold text-violet-300">
              Programming Languages
            </p>
            <div className="flex items-center gap-4">
              {teckstack1.map((image, index) => (
                <BorderGradientIcon key={index} className="relative">
                  <Link href={image?.link} target="_blank">
                    <Image
                      src={image?.imageUrl}
                      alt="Message Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-full max-h-16 w-auto rounded-md object-cover"
                      priority
                    />
                  </Link>
                </BorderGradientIcon>
              ))}
            </div>
          </div>
        </ScrollElement>
        <ScrollElement
          direction="right"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-start text-2xl font-semibold text-violet-300">
              Frameworks/Libraries
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {teckstack2.map((image, index) => (
                <BorderGradientIcon key={index} className="relative">
                  <Link href={image?.link} target="_blank">
                    <Image
                      src={image?.imageUrl}
                      alt="Message Image"
                      width={64}
                      height={64}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-auto max-h-16 w-auto rounded-md object-cover"
                      priority
                    />
                  </Link>
                </BorderGradientIcon>
              ))}
            </div>
          </div>
        </ScrollElement>
        <ScrollElement
          direction="left"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-start text-2xl font-semibold text-violet-300">
              Animation & UI Libraries
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {teckstack3.map((image, index) => (
                <BorderGradientIcon key={index} className="relative">
                  <Link href={image?.link} target="_blank">
                    <Image
                      src={image?.imageUrl}
                      alt="Message Image"
                      width={64}
                      height={64}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-auto max-h-16 w-auto rounded-md object-cover"
                      priority
                    />
                  </Link>
                </BorderGradientIcon>
              ))}
            </div>
          </div>
        </ScrollElement>
        <ScrollElement
          direction="right"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-start text-2xl font-semibold text-violet-300">
              ORM & Database
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {teckstack4.map((image, index) => (
                <BorderGradientIcon key={index} className="relative">
                  <Link href={image?.link} target="_blank">
                    <Image
                      src={image?.imageUrl}
                      alt="Message Image"
                      width={64}
                      height={64}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-auto max-h-16 w-auto rounded-md object-cover"
                      priority
                    />
                  </Link>
                </BorderGradientIcon>
              ))}
            </div>
          </div>
        </ScrollElement>
        <ScrollElement
          direction="left"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-start text-2xl font-semibold text-violet-300">
              Cloud
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {teckstack5.map((image, index) => (
                <BorderGradientIcon key={index} className="relative">
                  <Link href={image?.link} target="_blank">
                    <Image
                      src={image?.imageUrl}
                      alt="Message Image"
                      width={64}
                      height={64}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-auto max-h-16 w-auto rounded-md object-cover"
                      priority
                    />
                  </Link>
                </BorderGradientIcon>
              ))}
            </div>
          </div>
        </ScrollElement>
        <ScrollElement
          direction="right"
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-start text-2xl font-semibold text-violet-300">
              Other Tools
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {teckstack6.map((image, index) => (
                <BorderGradientIcon key={index} className="relative">
                  <Link href={image?.link} target="_blank">
                    <Image
                      src={image?.imageUrl}
                      alt="Message Image"
                      width={64}
                      height={64}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-auto max-h-16 w-auto rounded-md object-cover"
                      priority
                    />
                  </Link>
                </BorderGradientIcon>
              ))}
            </div>
          </div>
        </ScrollElement>
      </section>
    </main>
  );
}
