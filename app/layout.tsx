import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/nav/Sidebar";
import GoogleKeepContextProvider from "@/context/GoogleKeepContext";
import Header from "@/components/nav/Header";

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
  title: "Google keep clone by Ibidapo Ayomide",
  description: "Google keep clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleKeepContextProvider>
          <Header />
          <div className="flex items-start gap-20 pt-20">
            <Sidebar />
            <div className="">
              {children}
            </div>
          </div>
        </GoogleKeepContextProvider>
      </body>
    </html>
  );
}
