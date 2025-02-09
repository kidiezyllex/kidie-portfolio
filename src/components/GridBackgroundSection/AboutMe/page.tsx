'use client';
import { instaPosts } from '../../../../lib/datas';
import Link from 'next/link';
import Image from 'next/image';
import { BorderGradientIcon } from '../../ui/border-gradient-icon';
import HoverButton from '../../ui/hover-button';
import { UserSearch } from 'lucide-react';
import { AnimatedTestimonials } from '../../ui/animated-testimonials';
export const AboutMe = () => {
    return (
        <main className="section bg-transparent sm:-mt-0 -mt-12">
            <section className="grid h-fit w-full place-content-center bg-transparent">
                <HoverButton icon={UserSearch} text={"ABOUT ME"}></HoverButton>
            </section>
            <section className="sm:mt-6 mt-12 grid h-[55rem] w-full grid-cols-1 gap-10 bg-transparent px-4 text-white sm:h-[35rem] sm:grid-cols-2 sm:px-4">
                <div className="relative flex h-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-transparent sm:px-4 md:shadow-xl">
                    <AnimatedTestimonials testimonials={instaPosts} />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
                </div>
                <div className="relative flex h-full flex-col items-start justify-start gap-4 overflow-hidden rounded-lg border bg-transparent p-2 sm:p-4 md:shadow-xl">
                    <p className="text-justify text-xs text-muted-foreground sm:text-base">
                        <span className="font-semibold text-violet-300">2017 - 2020:</span>I
                        was admitted to the{' '}
                        <Link href={'http://nbkqna.edu.vn'} target="_blank">
                            <span className="font-semibold text-violet-300">
                                Mathematics Specialized Class at Nguyen Binh Khiem High School
                                for the Gifted in Quang Nam
                            </span>
                        </Link>
                        . During these three years, I not only received intensive training
                        in Mathematics but also honed my logical thinking, analytical
                        skills, and problem-solving abilities, building a solid foundation
                        for my future development.
                    </p>
                    <p className="text-justify text-xs text-muted-foreground sm:text-base">
                        <span className="font-semibold text-violet-300">2020 - 2025:</span>I
                        pursued a degree in Software Engineering at{' '}
                        <Link href={'https://fit.iuh.edu.vn/'} target="_blank">
                            <span className="font-semibold text-violet-300">
                                Ho Chi Minh City University of Industry (IUH)
                            </span>
                        </Link>
                        . This period allowed me to delve deeper into the field of
                        information technology and set my goal to become a professional Web
                        Developer. Driven by a strong passion for web design and
                        development, I continuously strive to learn and refine my skills,
                        aiming to create innovative and high-quality web solutions. This is
                        my achievement during my time at the school:{' '}
                        <Link
                            href={'https://github.com/kidiezyllex/awards'}
                            target="_blank"
                        >
                            <span className="font-semibold text-violet-300">
                                My awards ↗
                            </span>
                        </Link>
                    </p>
                    <div className="flex flex-grow items-center gap-4 self-center">
                        <BorderGradientIcon className="relative p-0.5">
                            <Link
                                href={'https://www.linkedin.com/in/kidiezyllex'}
                                target="_blank"
                            >
                                <Image
                                    src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429254/learning-webdev-blog/portfolio/1_in0v4f.webp"
                                    alt="Linked Image"
                                    width={800}
                                    height={800}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="h-auto max-h-16 w-auto rounded-md bg-white object-cover p-2"
                                    priority
                                />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-0.5">
                            <Link href={'https://github.com/kidiezyllex'} target="_blank">
                                <Image
                                    src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429254/learning-webdev-blog/portfolio/2_lrh8ex.webp"
                                    alt="Github Image"
                                    width={800}
                                    height={800}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="h-auto max-h-16 w-auto rounded-md bg-white object-cover p-2"
                                    priority
                                />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-0.5">
                            <Link href={'https://www.facebook.com/zyllusc'} target="_blank">
                                <Image
                                    src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429255/learning-webdev-blog/portfolio/3_h8pnwi.webp"
                                    alt="Facebook Image"
                                    width={800}
                                    height={800}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="h-auto max-h-16 w-auto rounded-md bg-white object-cover p-2"
                                    priority
                                />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-0.5">
                            <Link
                                href={'https://www.instagram.com/kidiezyllusc'}
                                target="_blank"
                            >
                                <Image
                                    src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429255/learning-webdev-blog/portfolio/4_kmpb0y.webp"
                                    alt="Insta Image"
                                    width={800}
                                    height={800}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="h-auto max-h-16 w-auto rounded-md bg-white object-cover p-2"
                                    priority
                                />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-0.5">
                            <Link
                                href={
                                    'https://dzhrcktg3t.ufs.sh/f/yKG0YxsXgqAJ68fx5wkwo2C3jIVeOG6QyZ4naqUvfctiFb71'
                                }
                                target="_blank"
                            >
                                <Image
                                    src="https://res.cloudinary.com/drqbhj6ft/image/upload/v1736429254/learning-webdev-blog/portfolio/5_zadoiz.webp"
                                    alt="CV Image"
                                    width={800}
                                    height={800}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="h-auto max-h-16 w-auto rounded-md bg-white object-cover p-2"
                                    priority
                                />
                            </Link>
                        </BorderGradientIcon>
                    </div>
                </div>
            </section>
        </main>
    );
}
