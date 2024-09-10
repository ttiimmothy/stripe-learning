import Footer from "@/components/lib/ui/Footer";
import {Navbar} from "@/components/lib/ui/Navbar";
import React from 'react'
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