import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ReactQueryProvider } from "@/lib/tanstack-query/react-query-provider"
import { Metadata } from "next"
import { NuqsAdapter } from "nuqs/adapters/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Frontend React Test",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <NuqsAdapter>
          <ReactQueryProvider>
            <div className="flex h-screen flex-col overflow-hidden font-sans">
              <Header />

              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                {children}
              </div>
            </div>
          </ReactQueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
