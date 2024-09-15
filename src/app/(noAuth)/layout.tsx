import Footer from "@/components/lib/ui/Footer";
import {Navbar} from "@/components/lib/ui/Navbar";
import React from 'react'
import dynamic from "next/dynamic";
// const NavbarComponent = dynamic(() => import('@/components/lib/ui/Navbar'), { ssr: false })
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}