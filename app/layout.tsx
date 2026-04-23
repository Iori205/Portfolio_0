import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Baatar-Ochir Sodbilegt | Full-Stack Developer",
    template: "%s | Baatar-Ochir Sodbilegt",
  },
  description:
    "Portfolio of Baatar-Ochir Sodbilegt, full-stack developer building scalable web applications with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Baatar-Ochir Sodbilegt",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",
    "Website Development",
    "Frontend Developer",
    "Backend Developer",
    "Baatar-Ochir",
    "Sodbilegt",
  ],
  authors: [{ name: "Baatar-Ochir Sodbilegt" }],
  creator: "Baatar-Ochir Sodbilegt",
  publisher: "Baatar-Ochir Sodbilegt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Baatar-Ochir Sodbilegt Portfolio",
    title: "Baatar-Ochir Sodbilegt | Full-Stack Developer",
    description:
      "Full-stack developer portfolio focused on building robust, user-friendly, and scalable products.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Baatar-Ochir Sodbilegt - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baatar-Ochir Sodbilegt | Full-Stack Developer",
    description:
      "Portfolio of Baatar-Ochir Sodbilegt, full-stack developer specializing in React, Next.js, TypeScript, and Node.js.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>

          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

        <Analytics />
      </body>
    </html>
  )
}
