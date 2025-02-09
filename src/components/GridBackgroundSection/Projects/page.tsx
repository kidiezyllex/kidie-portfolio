'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2 } from 'lucide-react';
import HoverButton from '@/components/ui/hover-button';
import ProjectCard from './ProjectCard/page';
import { blogPostsData } from './data';
export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <main className="section sm:-mt-8 -mt-16 bg-transparent lg:mt-0" ref={containerRef}>
            <div className="mt-14 grid h-fit w-full place-content-center bg-transparent">
                <HoverButton icon={FolderGit2} text={"MY PROJECTS"}></HoverButton>
            </div>
            <section className="mt-24 w-full bg-transparent sm:mt-0">
                {blogPostsData.map((project, i) => {
                    const targetScale = 1 - (blogPostsData.length - i) * 0.05;
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

