import "./globals.css"
import Loading from "./loading"
import { Exo_2 } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import type React from "react"
import type { Metadata } from 'next'
import ClientLayout from "./client-layout"

const exo2 = Exo_2({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Bui Tran Thien An',
  description: 'Portfolio của Bui Tran Thien An - Web Developer',
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <title>Bui Tran Thien An</title>
        <meta name="description" content="Portfolio của Bui Tran Thien An - Web Developer" />
        <link rel="icon" href="/avatar.jpg" />
        <link rel="apple-touch-icon" href="/avatar.jpg" />
      </head>
      <body className={exo2.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <ClientLayout>{children}</ClientLayout>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
