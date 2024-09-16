import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./page.css";
import 'remixicon/fonts/remixicon.css';
// import {Navbar} from "@/components/lib/ui/Navbar";
// import Footer from "@/components/lib/ui/Footer";
import StoreProvider from "./StoreProvider";
import ApolloGraphqlProvider from "./ApolloProvider";
// import ClientLayout from "./ClientLayout";
import "symbol-observable"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Demo | A full stack mern Ecommerce project",
  description: "Full stack Mern Ecommerce demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-extra-light`}
      >
        <ApolloGraphqlProvider>
        <StoreProvider>
          {children}
        </StoreProvider>
        </ApolloGraphqlProvider>
      </body>
    </html>
  );
}
