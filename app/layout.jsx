import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Your Name - Computer Science Student</title>
        <meta
          name="description"
          content="Portfolio of a Computer Science student showcasing projects, skills, and experience"
        />
        <meta name="generator" content="v0.app" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
