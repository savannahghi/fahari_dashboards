"use client"

import { useState } from "react"
import Footer from "@/components/footer"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

interface Props {
  children: React.ReactNode
}
const DashboardLayout = ({ children }: Props) => {
  const [collapsed, setSidebarCollapsed] = useState(false)

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
      />
      <div
        className={`flex flex-col h-full justify-between ${
          collapsed ? "xl:pl-16" : "xl:pl-[305px]"
        }`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout
