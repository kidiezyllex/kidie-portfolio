'use client';
import { useEffect, useRef } from 'react';
import HoverButton from '@/components/ui/hover-button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPostsData, blogPostsDataVN } from './mockData';
import ProjectCard from './ProjectCard/page';
import { useIsMobile } from '../../../../hook/useIsMobile';
import ProjectCardMobile from './ProjectCardMobile/page';
import { GoProject } from "react-icons/go";
import { useLanguageStore } from '@/store/languageStore';

gsap.registerPlugin(ScrollTrigger);
export const MyProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { isVietnamese } = useLanguageStore();
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
  const projects = isVietnamese ? blogPostsDataVN : blogPostsData;
  return (
    <main className="section bg-transparent">
      {/* Tablet trở lên */}
      {!isMobile && <div ref={containerRef} className="h-screen w-fit flex">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <div key={`p_${i}`} className="panel flex h-full w-screen flex-col items-center gap-4 sm:items-start">
              <div className="mt-16 grid h-fit w-full place-content-center bg-transparent">
                <HoverButton
                  icon={GoProject}
                  text={'PROJECTS'}
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
      </div>}
      {/* Mobile */}
      {isMobile && <div className="flex h-full w-screen flex-col items-center gap-4 sm:items-start">
        <div className="mt-10 mb-4 grid h-fit w-full place-content-center bg-transparent">
          <HoverButton
            icon={GoProject}
            text={'PROJECTS'}
          ></HoverButton>
        </div>
        <div className='w-full flex flex-col gap-4'>
          {
            projects.map((project, i) => {
              return (
                <ProjectCardMobile
                  key={`p_${i}`}
                  i={i}
                  title={project?.title}
                  description={project?.desc}
                  src={project?.source}
                  imageUrl={project?.imageUrl}
                  logoUrl={project?.logoUrl}
                  responsible={project?.responsible}
                  live={project?.live}
                  data={project?.data}
                />
              )
            })
          }
        </div>
      </div>}
    </main>
  );
};
