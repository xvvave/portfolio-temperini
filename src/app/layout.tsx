import type React from "react"
import { Inter, Manrope } from "next/font/google"
import "../styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata = {
  title: "Lautaro R. Temperini - Diseñador Multimedia",
  description:
    "Transformo ideas en experiencias digitales reales. Diseñador multimedia especializado en UX/UI, desarrollo y experiencias interactivas.",
  keywords: "diseño multimedia, UX/UI, desarrollo web, experiencias digitales, diseño interactivo",
  authors: [{ name: "Lautaro R. Temperini" }],
  creator: "Lautaro R. Temperini",
  openGraph: {
    title: "Lautaro R. Temperini - Diseñador Multimedia",
    description: "Transformo ideas en experiencias digitales reales.",
    url: "https://temperini.dev",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lautaro R. Temperini - Diseñador Multimedia",
    description: "Transformo ideas en experiencias digitales reales.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="canonical" href="https://temperini.vercel.app/" />
        <meta name="apple-mobile-web-app-title" content="Temperini" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon-temperini/icon0.svg" />
        <link rel="apple-touch-icon" href="/favicon-temperini/apple-icon.png" />
      </head>
      <body
        className="text-white antialiased"
        style={{
          background: "conic-gradient(from 203.7deg at 63.78% 39.65%, #0D0D0D 0deg, #0D0D0D 114.23deg, #666973 238.85deg, #0D0D0D 360deg)",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay con backdrop-blur-2xl */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black/40 backdrop-blur-2xl" />
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )
}
