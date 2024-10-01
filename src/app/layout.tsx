import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./page.css";
import 'remixicon/fonts/remixicon.css';
import StoreProvider from "./StoreProvider";
import ApolloGraphqlProvider from "./ApolloProvider";
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
            className={"text-sm"}
          />
          {children}
        </StoreProvider>
        </ApolloGraphqlProvider>
      </body>
    </html>
  );
}
