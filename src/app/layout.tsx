"use client"
import "./globals.css"
import NavBar from "@/components/layout/NavBar"
import Cursor from "@/components/custom-cursor/Cursor"
import Footer from "@/components/layout/Footer"
import Loading from "./loading"
import ParticleSwarmLoader from "@/components/custom-loader/ParticleSwarmLoader"
import { Exo_2 } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { AuroraHero } from "@/components/layout/AuroraHero"
import { GridBackgroundSection } from "@/components/layout/GridBackgroundSection"
import { Suspense, useState, useEffect, useRef } from "react"
import { forceScrollTriggerRefresh } from "../../lib/utils"
import { useIsMobile } from "../../hook/useIsMobile"
import ScrollTextsSection from "@/components/layout/ScrollTextsSection"
import type React from "react"
import { ReactLenis } from '@studio-freight/react-lenis'

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
    <main className={`flex min-h-screen flex-col bg-slate-950 ${loaderVisible ? "opacity-0" : "opacity-100"}`}>
      {!isMobile && <Cursor />}
      <NavBar />
      <AuroraHero />
      <ScrollTextsSection />
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
                <div
                  className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent duration-500 ${loaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <ParticleSwarmLoader />
                </div>
                <MainContent />
              </div>
            </Suspense>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  )
}
