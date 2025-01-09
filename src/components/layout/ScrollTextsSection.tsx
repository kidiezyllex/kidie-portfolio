'use client';
import ScrollBaseAnimation from '../core/text-marquee';

export default function index(): JSX.Element {
  return (
    <main className="bg-transparent">
      <>
        <section className="relative -top-40 flex h-[50vh] w-full flex-col place-content-center gap-2 bg-transparent">
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={-3}
            clasname="font-bold tracking-[-0.07em] leading-[90%] text-violet-300 "
          >
            Love building website interfaces.
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={3}
            clasname="font-bold tracking-[-0.07em] leading-[90%] text-violet-300"
          >
            Passionate about learning new technology.
          </ScrollBaseAnimation>
        </section>
      </>
    </main>
  );
}
