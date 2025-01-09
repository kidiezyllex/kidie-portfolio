'use client';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import AnimatedGradientText from '../animata/text/animated-gradient-text';
import { CardProps, mockBlogPosts } from '../../../lib/datas';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import AvatarList from '../animata/list/avatar-list';
import { ExternalLink, Github } from 'lucide-react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import Link from 'next/link';
import Safari from '../ui/safari';

export default function ProjectsPage(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main className="section -mt-8 bg-transparent sm:mt-0" ref={containerRef}>
      <section className="grid h-fit w-full place-content-center bg-transparent sm:mb-0 sm:mt-12">
        <AnimatedGradientText className="text-center text-2xl font-semibold uppercase leading-[120%] tracking-tight sm:text-5xl">
          MY PROJECTS
        </AnimatedGradientText>
      </section>
      <section className="mt-16 w-full bg-transparent sm:mt-0">
        {mockBlogPosts.map((project, i) => {
          const targetScale = 1 - (mockBlogPosts.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              imageUrl={project?.imageUrl}
              src={project?.source}
              live={project?.live}
              title={project?.title}
              description={project?.desc}
              data={project?.data}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              logoUrl={project?.logoUrl}
            />
          );
        })}
      </section>
    </main>
  );
}

const ProjectCard: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  imageUrl,
  logoUrl,
  progress,
  range,
  targetScale,
  data,
  live,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex items-center justify-center sm:h-screen"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex h-full w-[95%] origin-top flex-col rounded-md border bg-slate-900 p-4 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:h-fit sm:w-[70%] sm:p-10"
      >
        <CardContainer className="inter-var relative z-50 my-0 h-[100%] w-full rounded-md bg-slate-950 py-0 sm:h-full">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <CardBody className="group/card pointer-events-auto relative z-50 m-0 grid h-fit w-[100%] grid-cols-1 gap-4 rounded-xl border border-white/[0.2] bg-transparent p-2 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:grid-cols-2 sm:gap-10 sm:p-6 sm:py-14">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
                <Image
                  src={logoUrl}
                  height={1000}
                  width={1000}
                  className="h-24 w-24 flex-shrink-0 self-center rounded-md object-cover sm:self-start"
                  alt="logo"
                />
                <div className="flex flex-col items-center gap-2 sm:items-start">
                  <p className="break-words text-center text-xl font-semibold text-violet-300 sm:text-start sm:text-2xl">
                    {title}
                  </p>
                  <p className="w-full break-words text-center text-sm text-muted-foreground sm:text-start">
                    {description}
                  </p>
                </div>
              </div>
              <AvatarList data={data} />
              <div className="flex items-center gap-2 sm:gap-4">
                <Link href={src} target="_blank">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="flex cursor-none items-center space-x-2 bg-slate-950 text-violet-300"
                  >
                    <Github className="h-4 w-4 cursor-none text-violet-300" />
                    <p className="cursor-none text-nowrap text-sm font-semibold text-violet-300">
                      <span className="hidden sm:block">
                        Source Code & Demo Video
                      </span>
                      <span className="block sm:hidden">Source</span>
                    </p>
                  </HoverBorderGradient>
                </Link>
                <Link href={live} target="_blank" className="cursor-none">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="flex cursor-none items-center space-x-2 bg-slate-950 text-violet-300"
                  >
                    <ExternalLink className="h-4 w-4 cursor-none text-violet-300" />
                    <p className="cursor-none text-nowrap text-sm font-semibold text-violet-300">
                      Live Demo
                    </p>
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
            <CardItem translateZ="100" className="w-full">
              <Safari url={live} className="size-full" imageSrc={imageUrl} />
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
};
