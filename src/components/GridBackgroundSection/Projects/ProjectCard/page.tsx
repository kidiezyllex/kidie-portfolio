import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import Safari from '@/components/ui/safari';
import { BrowserComponent } from '@/components/ui/browser-component';
import AvatarList from '@/components/animata/list/avatar-list';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

interface ProjectCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  imageUrl: string;
  logoUrl: string;
  range: number[];
  targetScale: number;
  data: any[];
  live: string;
  responsible: string[];
}

export default function ProjectCard({
  i,
  title,
  description,
  src,
  imageUrl,
  logoUrl,
  range,
  targetScale,
  data,
  live,
  responsible,
}: ProjectCardProps) {
  return (
    <div className="flex w-full items-center justify-center lg:h-screen">
     <BrowserComponent
          className={'h-[80vh] w-[70%] sm:h-[450px]'}
          domain={live}
        >
          <div className="inter-var relative z-50 my-0 h-[100%] w-full rounded-bl-md rounded-br-md bg-[#171717] py-0 lg:h-full">
            <div className="relative z-50 m-0 flex h-fit w-[100%] flex-col items-center justify-center gap-4 rounded-xl bg-transparent p-6 pb-6 lg:gap-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex flex-col items-center gap-2 lg:items-start">
                  <div className="flex flex-row items-start gap-4 sm:flex-col lg:flex-row">
                    <Image
                      src={logoUrl}
                      height={1000}
                      width={1000}
                      className="h-24 w-24 flex-shrink-0 self-center rounded-md object-cover lg:self-start"
                      alt="logo"
                    />
                    <div className="flex flex-col items-start gap-2">
                      <p className="break-words text-start text-xl font-semibold text-violet-300 lg:text-2xl">
                        {title}
                      </p>
                      <p className="w-full break-words text-start text-sm font-semibold text-[#9799a7] ">
                        {description}
                      </p>
                    </div>
                  </div>
                  <p className="break-words text-start text-base font-semibold text-violet-300 lg:text-lg">
                    Vai trò
                  </p>
                  <ul className="flex list-disc flex-col gap-1 pl-5 text-justify">
                    {responsible.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="text-sm font-semibold text-[#9799a7]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                  <Safari
                    url={live}
                    className="size-full h-fit bg-transparent"
                    imageSrc={imageUrl}
                  />
                 
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <AvatarList data={data} />
                <div className="flex items-center gap-2">
                <Link href={src} target="_blank">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="flex cursor-none items-center space-x-2 bg-slate-950 text-violet-300"
                      >
                        <Github className="h-4 w-4 cursor-none text-violet-300" />
                        <p className="cursor-none text-nowrap text-sm font-semibold text-violet-300">
                          <span className="hidden text-nowrap xl:block">
                            Source Code & Demo Video
                          </span>
                          <span className="block text-nowrap xl:hidden">
                            Source
                          </span>
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
              
            </div>
          </div>
        </BrowserComponent>
    </div>
  );
}
