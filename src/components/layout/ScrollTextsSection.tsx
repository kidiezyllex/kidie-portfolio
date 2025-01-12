'use client';
import ScrollBaseAnimation from '../core/text-marquee';

export default function index(): JSX.Element {
  return (
    <main className="h-[15rem] bg-transparent lg:h-[16rem] xl:h-[20rem]">
      <>
        <section className="relative top-3 flex w-full flex-col gap-2 bg-transparent sm:-top-1/3">
          <ScrollBaseAnimation
            delay={1000}
            baseVelocity={-1}
            clasname="font-bold tracking-[-0.07em] leading-[90%] text-violet-300 "
          >
            Love building website interfaces.
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={1000}
            baseVelocity={1}
            clasname="font-bold tracking-[-0.07em] leading-[90%] text-violet-300"
          >
            Passionate about learning new technology.
          </ScrollBaseAnimation>
        </section>
      </>
    </main>
  );
}
