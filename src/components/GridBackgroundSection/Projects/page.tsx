'use client';
import { useEffect, useRef } from 'react';
import HoverButton from '@/components/ui/hover-button';
import { FolderGit2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPostsData } from './data';
import ProjectCard from './ProjectCard/page';
gsap.registerPlugin(ScrollTrigger);
export const MyProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = gsap.utils.toArray<HTMLElement>('.panel');
    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${(container as HTMLElement).offsetWidth}`,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <main className="section bg-transparent">
      {/* Tablet trở lên */}
      <div ref={containerRef} className="hidden h-screen w-fit sm:flex">
        {blogPostsData.map((project, i) => {
          const targetScale = 1 - (blogPostsData.length - i) * 0.05;
          return (
            <div className="panel flex h-full w-screen flex-col items-center gap-4 sm:items-start">
              <div className="mt-16 grid h-fit w-full place-content-center bg-transparent">
                <HoverButton
                  icon={FolderGit2}
                  text={'PROJECTS PARTICIPATED'}
                ></HoverButton>
              </div>
              <ProjectCard
                key={`p_${i}`}
                i={i}
                imageUrl={project?.imageUrl}
                src={project?.source}
                live={project?.live}
                title={project?.title}
                description={project?.desc}
                data={project?.data}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                logoUrl={project?.logoUrl} 
                responsible={project?.responsible} 
              />
            </div>
          );
        })}
      </div>
      {/* Mobile */}
      {/* <div className="flex sm:hidden flex-col gap-8">
                <div className="w-full flex justify-center mt-14">
                    <HoverButton icon={Layers} text={"MY PROJECTS"} />
                </div>
                {techStacks.map((stack, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                        <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                            {stack.title}
                        </p>
                        <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                            {stack.data.map((item, index) => (
                                <BorderGradientIcon key={index} className="relative h-20 w-20">
                                    <Link href={item?.link} target="_blank">
                                        <Image
                                            src={item?.imageUrl}
                                            alt="Tech Icon"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="h-full max-h-20 w-auto rounded-md object-cover"
                                            loading="lazy"
                                            blurDataURL={item?.imageUrl}
                                        />
                                    </Link>
                                </BorderGradientIcon>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}
    </main>
  );
};
