"use client"
import { ReactLenis } from '@studio-freight/react-lenis'
import { useState, useEffect } from "react"
import Cursor from "@/components/common/Cursor/page"
import NavBar from "@/components/Navbar/page"
import { AuroraHero } from "@/components/Hero/page"
import { GridBackgroundSection } from "@/components/GridBackgroundSection/page"
import Footer from "@/components/Footer/page"
import { CurrentJob } from "@/components/CurrentJob/page"
import ParticleSwarmLoader from "@/components/common/ParticleSwarmLoader/page"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loaderVisible, setLoaderVisible] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loaderVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loaderVisible]);

  const MainContent = () => (
    <main className={`flex min-h-screen flex-col bg-slate-950`}>
      <Cursor />
      <NavBar />
      <AuroraHero />
      <CurrentJob />
      <GridBackgroundSection />
      <Footer />
    </main>
  )

  return (
    <ReactLenis root>
      <div className="relative">
        {
          loaderVisible ? <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent duration-500 ${loaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ParticleSwarmLoader />
          </div> :
            <MainContent />
        }
      </div>
    </ReactLenis>
  )
} 