'use client';
import { instaPosts } from '../../../../lib/datas';
import Link from 'next/link';
import { BorderGradientIcon } from '../../ui/border-gradient-icon';
import HoverButton from '../../ui/hover-button';
import { AnimatedTestimonials } from '../../ui/animated-testimonials';
import { FaLinkedinIn, FaGithubAlt, FaFacebook, FaInstagram, FaRegFaceSmileBeam} from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

export const AboutMe = () => {
    return (
        <main className="section bg-transparent sm:-mt-16 -mt-12">
            <section className="grid h-fit w-full place-content-center bg-transparent">
                <HoverButton icon={FaRegFaceSmileBeam } text={"ABOUT ME"}></HoverButton>
            </section>
            <section className="sm:mt-10 mt-12 grid h-[65rem] sm:h-[30rem] w-full grid-cols-1 gap-10 bg-transparent px-4 text-white sm:grid-cols-2 sm:px-4">
                <div className="relative flex h-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-transparent sm:px-4 md:shadow-xl">
                    <AnimatedTestimonials testimonials={instaPosts} />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
                </div>
                <div className="relative flex h-full flex-col items-start justify-start gap-4 overflow-hidden rounded-lg border bg-transparent p-2 sm:p-4 md:shadow-xl">
                    <p className="text-justify text-sm text-muted-foreground sm:text-base">
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
                    <p className="text-justify text-sm text-muted-foreground sm:text-base">
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
                        <BorderGradientIcon className="relative p-3">
                            <Link
                                href={'https://www.linkedin.com/in/kidiezyllex'}
                                target="_blank"
                            >
                                <FaLinkedinIn className="sm:h-12 sm:w-12 h-6 w-6 text-white/50" />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-3">
                            <Link href={'https://github.com/kidiezyllex'} target="_blank">
                                <FaGithubAlt className="sm:h-12 sm:w-12 h-6 w-6 text-white/50" />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-3">
                            <Link href={'https://www.facebook.com/zyllusc'} target="_blank">
                                <FaFacebook className="sm:h-12 sm:w-12 h-6 w-6 text-white/50" />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-3">
                            <Link
                                href={'https://www.instagram.com/kidiezyllusc'}
                                target="_blank"
                            >
                               <FaInstagram className="sm:h-12 sm:w-12 h-6 w-6 text-white/50" />
                            </Link>
                        </BorderGradientIcon>
                        <BorderGradientIcon className="relative p-3">
                            <Link
                                href={
                                    'https://dzhrcktg3t.ufs.sh/f/yKG0YxsXgqAJ68fx5wkwo2C3jIVeOG6QyZ4naqUvfctiFb71'
                                }
                                target="_blank"
                            >
                                <TbFileCv className="sm:h-12 sm:w-12 h-6 w-6 text-white/50" />
                            </Link>
                        </BorderGradientIcon>
                    </div>
                </div>
            </section>
        </main>
    );
}
