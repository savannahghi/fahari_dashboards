import { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "@/app/styles/globals.css"

export const metadata: Metadata = {
  title: "Fahari ya Jamii CBS",
  description: "Fahari ya Jamii CBS Dashboard",
}

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  )
}
