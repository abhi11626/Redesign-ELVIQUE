"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Opportunity", href: "/opportunity" },
    { name: "Products", href: "/products" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Elvique Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                Elvique
              </h1>

              <p className="hidden sm:block text-[11px] md:text-xs uppercase tracking-[4px] text-slate-500">
                Vonkeller Apparels
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  font-medium
                  text-slate-700
                  hover:text-indigo-600
                  transition
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-indigo-600
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book-demo"
              className="
                rounded-xl
                bg-indigo-600
                px-5
                py-2.5
                text-white
                font-semibold
                shadow-md
                hover:bg-indigo-700
                transition
              "
            >
              Book Demo
            </Link>

            <Link
              href="/become-distributor"
              className="
                rounded-xl
                border
                border-slate-300
                px-5
                py-2.5
                font-semibold
                hover:bg-slate-50
                transition
              "
            >
              Become Distributor
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open Menu"
                  className="
                    h-11
                    w-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    bg-white
                    shadow-sm
                  "
                >
                  <Menu size={22} />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px]">
                <SheetTitle className="mb-8">Elvique Navigation</SheetTitle>

                <div className="flex flex-col gap-5">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/opportunity">Opportunity</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/contact">Contact</Link>

                  <div className="pt-6 border-t space-y-3">
                    <Link
                      href="/book-demo"
                      className="
                        block
                        text-center
                        rounded-xl
                        bg-indigo-600
                        text-white
                        py-3
                        font-semibold
                      "
                    >
                      Book Demo
                    </Link>

                    <Link
                      href="/become-distributor"
                      className="
                        block
                        text-center
                        rounded-xl
                        border
                        py-3
                        font-semibold
                      "
                    >
                      Become Distributor
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
