"use client"
import { teckstack1, teckstack2, teckstack3, teckstack4, teckstack5, teckstack6 } from "../../../lib/datas"
import { useEffect, useRef } from "react"
import HoverButton from "../ui/hover-button"
import { Layers } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HoverEffect } from "../ui/card-hover-effect"
gsap.registerPlugin(ScrollTrigger)
export default function TechStack(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const sections = gsap.utils.toArray<HTMLElement>(".panel")
    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${(container as HTMLElement).offsetWidth}`,
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
    }
  }, [])

  return (
    <main className="section bg-transparent">
      <div ref={containerRef} className="flex w-[400%] h-screen">
        <div className="panel w-screen h-full flex flex-col items-center gap-4 sm:items-start">
          <div className="mt-16 grid h-fit w-full place-content-center bg-transparent">
            <HoverButton icon={Layers} text={"TECH STACK"}></HoverButton>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 items-start justify-center mt-10">
            <div className="flex flex-col">
              <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                Programming Languages
              </p>
              <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                <HoverEffect items={teckstack1} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                Frameworks/Libraries
              </p>
              <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                <HoverEffect items={teckstack2} />
              </div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-full flex flex-col items-center gap-4 sm:items-start">
          <div className="mt-16 grid h-fit w-full place-content-center bg-transparent">
            <HoverButton icon={Layers} text={"TECH STACK"}></HoverButton>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 items-start justify-center mt-10">
            <div className="flex flex-col">
              <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">
                Animation & UI Libraries
              </p>
              <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                <HoverEffect items={teckstack3} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">ORM & Database</p>
              <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                <HoverEffect items={teckstack4} />
              </div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-full flex flex-col items-center gap-4 sm:items-start">
          <div className="mt-16 grid h-fit w-full place-content-center bg-transparent">
            <HoverButton icon={Layers} text={"TECH STACK"}></HoverButton>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 items-start justify-center mt-10">
            <div className="flex flex-col">
              <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">Cloud</p>
              <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                <HoverEffect items={teckstack5} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="w-full text-center text-xl font-semibold text-violet-300 sm:text-2xl">Other Tools</p>
              <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:justify-center">
                <HoverEffect items={teckstack6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

