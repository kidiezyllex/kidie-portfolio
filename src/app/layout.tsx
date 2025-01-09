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
import ReactLenis from 'lenis/react';
// import { ReactLenis } from '@studio-freight/react-lenis';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      forceScrollTriggerRefresh();
      setIsLoading(false);
    }, 5000);

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
              <main className="flex min-h-screen flex-col bg-slate-950 opacity-100">
                <ReactLenis
                  root
                  options={{
                    lerp: 0.05,
                    syncTouch: true,
                  }}
                >
                  <Cursor />
                  <NavBar />
                  <AuroraHero />
                  <ScrollTextsSection></ScrollTextsSection>
                  <SectionBackground />
                  <Footer />
                </ReactLenis>
              </main>
            )}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
