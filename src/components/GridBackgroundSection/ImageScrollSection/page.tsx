import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import Image from 'next/image';
const SECTION_HEIGHT = 1000;
export const ImageScrollSection = () => {
    return (
        <div className="bg-transparent sm:block hidden">
            <div
                style={{ height: `calc(${SECTION_HEIGHT}px + 170vh)` }}
                className="relative w-full"
            >
                <ParallaxImages />
            </div>
        </div>
    );
}
const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]" data-scroll-section>
            <ParallaxImg
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736660487/learning-webdev-blog/portfolio/1_a0lk8g.png"
                alt="Image 1"
                start={-200}
                end={200}
                className="ml-10 w-full sm:ml-0 sm:w-1/3"
            />
            <ParallaxImg
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736660486/learning-webdev-blog/portfolio/2_okvb5q.png"
                alt="Image 2"
                start={-250}
                end={-400}
                className="ml-auto w-full sm:w-1/3"
            />
            <ParallaxImg
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736660484/learning-webdev-blog/portfolio/5_jhbk7y.png"
                alt="Image 3"
                start={200}
                end={-250}
                className="mx-auto w-full sm:w-2/3"
            />
            <ParallaxImg
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736660484/learning-webdev-blog/portfolio/3_xdfvuy.png"
                alt="Image 4"
                start={-200}
                end={200}
                className="ml-auto hidden w-full sm:block sm:w-1/3"
            />
            <ParallaxImg
                src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736660484/learning-webdev-blog/portfolio/4_fv253s.png"
                alt="Image 5"
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
