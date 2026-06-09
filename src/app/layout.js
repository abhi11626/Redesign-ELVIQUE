import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elvique Redesign",
  description: "Elvique landing — modern responsive layout",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 dark:text-gray-100">
        <Navbar />

        <main className="flex-1 w-full">
          <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6">
            {children}
          </div>
        </main>

        {/* <footer className="bg-[#0b0b0b] text-white">
          <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">
                © {new Date().getFullYear()} Elvique. All rights reserved.
              </div>
              <div className="flex gap-4 text-sm">
                <a href="#" className="opacity-80 hover:opacity-100">
                  Privacy
                </a>
                <a href="#" className="opacity-80 hover:opacity-100">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer> */}
        <Footer />
      </body>
    </html>
  );
}
