"use client"
import "./globals.css"
import Loading from "./loading"
import { Exo_2 } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense, useState, useEffect } from "react"
import { forceScrollTriggerRefresh } from "../../lib/utils"
import { useIsMobile } from "../../hook/useIsMobile"
import type React from "react"
import { ReactLenis } from '@studio-freight/react-lenis'
import Cursor from "@/components/common/Cursor/page"
import NavBar from "@/components/Navbar/page"
import { AuroraHero } from "@/components/Hero/page"
import { GridBackgroundSection } from "@/components/GridBackgroundSection/page"
import Footer from "@/components/Footer/page"
import { CurrentJob } from "@/components/CurrentJob/page"
import ParticleSwarmLoader from "@/components/common/ParticleSwarmLoader/page"
const exo2 = Exo_2({ subsets: ["latin"] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loaderVisible, setLoaderVisible] = useState(true)
  const isMobile = useIsMobile()
  useEffect(() => {
    const timer = setTimeout(() => {
      forceScrollTriggerRefresh()
      setLoaderVisible(false)
    }, 500)

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
    <html lang="en" suppressHydrationWarning>
      <body className={exo2.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReactLenis root>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  )
}
