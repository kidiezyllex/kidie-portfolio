import ReactLenis from 'lenis/react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { WobbleCard } from '../ui/wobble-card';
import Image from 'next/image';
const SECTION_HEIGHT = 1000;
export default function index(): JSX.Element {
  return (
    <div className="bg-transparent">
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 170vh)` }}
        className="relative w-full"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <ParallaxImages />
      </div>
    </div>
  );
}

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736412666/learning-webdev-blog/portfolio/3_hwahbe.png"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="ml-10 w-full sm:ml-0 sm:w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736412652/learning-webdev-blog/portfolio/4_img2ii.png"
        alt="And example of a space launch"
        start={-250}
        end={-400}
        className="ml-auto w-full sm:w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736412666/learning-webdev-blog/portfolio/2_wmtylh.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-full sm:w-2/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736412659/learning-webdev-blog/portfolio/6_awbokf.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto hidden w-full sm:block sm:w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736412652/learning-webdev-blog/portfolio/5_x7azso.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-12 w-full sm:ml-0 sm:w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div ref={ref} style={{ transform, opacity }} className={className}>
      <WobbleCard containerClassName="w-fit h-fit">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="h-96 w-fit rounded-md object-cover"
        />
      </WobbleCard>
    </motion.div>
  );
};
