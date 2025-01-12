'use client';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import ScrollTextsSection from '@/components/layout/ScrollTextsSection';
import Cursor from '@/components/custom-cursor/Cursor';
import Footer from '@/components/layout/Footer';
import Loading from './loading';
import ParticleSwarmLoader from '@/components/custom-loader/ParticleSwarmLoader';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuroraHero } from '@/components/layout/AuroraHero';
import { SectionBackground } from '@/components/layout/SectionBackground';
import { Suspense, useState, useEffect } from 'react';
import { forceScrollTriggerRefresh } from '../../lib/utils';
import { useIsMobile } from '../../hook/useIsMobile';
import LocomotiveScroll from 'locomotive-scroll';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const [locomotiveScroll, setLocomotiveScroll] =
    useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll();
      setLocomotiveScroll(scroll);

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      forceScrollTriggerRefresh();
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const MainContent = () => (
    <main
      className="flex min-h-screen flex-col bg-slate-950 opacity-100"
      data-scroll-section
    >
      {!isMobile && <Cursor />}
      <NavBar />
      <AuroraHero />
      <ScrollTextsSection />
      <SectionBackground />
      <Footer />
    </main>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            {isLoading ? (
              <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-transparent">
                <ParticleSwarmLoader />
              </div>
            ) : (
              <MainContent />
            )}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
