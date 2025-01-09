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
    <main className="section bg-transparent" ref={containerRef}>
      <section className="mt-12 grid h-fit w-full place-content-center bg-transparent">
        <AnimatedGradientText className="text-center text-5xl font-semibold uppercase leading-[120%] tracking-tight">
          MY PROJECTS
        </AnimatedGradientText>
      </section>
      <section className="w-full bg-transparent">
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
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex h-fit w-[70%] origin-top flex-col rounded-md border bg-slate-900 p-10 hover:shadow-2xl hover:shadow-emerald-500/[0.1]"
      >
        <CardContainer className="inter-var relative z-50 my-0 h-[100%] w-full rounded-md bg-slate-950 py-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <CardBody className="group/card pointer-events-auto relative z-50 m-0 grid h-fit w-[100%] grid-cols-2 gap-10 rounded-xl border border-white/[0.2] bg-transparent p-6 py-14 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
            <div className="flex flex-col">
              <div className="flex items-start gap-4">
                <Image
                  src={logoUrl}
                  height={1000}
                  width={1000}
                  className="h-24 w-24 flex-shrink-0 rounded-md object-cover"
                  alt="logo"
                />
                <div className="flex flex-col items-start gap-2">
                  <p className="break-words text-2xl font-semibold text-violet-300">
                    {title}
                  </p>
                  <p className="w-full break-words text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>

              <AvatarList data={data} />
              <div className="flex items-center gap-4">
                <Link href={src} target="_blank">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="flex cursor-none items-center space-x-2 bg-slate-950 text-violet-300"
                  >
                    <Github className="h-4 w-4 cursor-none text-violet-300" />
                    <p className="cursor-none text-nowrap text-sm font-semibold text-violet-300">
                      Source Code & Demo Video
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
