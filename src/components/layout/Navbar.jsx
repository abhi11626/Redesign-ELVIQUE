"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Home,
  Info,
  Lightbulb,
  Package,
  HelpCircle,
  Mail,
  ArrowRight,
  Calendar,
  ChevronRight,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Opportunity", href: "/opportunity", icon: Lightbulb },
    { name: "Products", href: "/products", icon: Package },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (href) => pathname === href;

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
            <Sheet open={open} onOpenChange={setOpen}>
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
                    border-slate-200
                    bg-white
                    shadow-sm
                    hover:shadow-md
                    hover:border-slate-300
                    transition-all
                    active:scale-95
                  "
                >
                  <Menu size={22} className="text-slate-700" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[380px] p-0 bg-gradient-to-b from-white via-slate-50/50 to-white backdrop-blur-xl flex flex-col border-l border-slate-200/50"
                showCloseButton={true}
              >
                {/* Premium Header with Logo */}
                <div className="relative px-6 pt-6 pb-6 border-b border-slate-100">
                  {/* Background gradient accent */}
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-indigo-100/30 to-sky-100/20 blur-2xl -z-10" />

                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition" />
                      <Image
                        src="/images/logo.webp"
                        alt="Elvique Logo"
                        width={40}
                        height={40}
                        className="object-contain relative rounded-lg bg-white p-1"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                        Elvique
                      </h2>
                      <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                        Vonkeller Apparels
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                  <div className="space-y-2">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      const active = isActive(link.href);

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`
                            group
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3.5
                            rounded-xl
                            font-medium
                            transition-all
                            duration-200
                            ${
                              active
                                ? "bg-gradient-to-r from-indigo-600/90 to-sky-500/90 text-white shadow-lg shadow-indigo-600/20"
                                : "text-slate-700 hover:bg-slate-100/80 active:bg-slate-100"
                            }
                          `}
                        >
                          <Icon
                            size={20}
                            className={`
                              flex-shrink-0
                              transition-all
                              ${
                                active
                                  ? "text-white"
                                  : "text-slate-500 group-hover:text-slate-700 group-hover:scale-110"
                              }
                            `}
                          />
                          <span className="flex-1">{link.name}</span>
                          {active && (
                            <ChevronRight
                              size={18}
                              className="text-white/80 ml-auto"
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                {/* Divider with gradient */}
                <div className="px-6 py-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>

                {/* Premium CTA Buttons */}
                <div className="px-6 pb-6 space-y-3">
                  {/* Primary Button - Book Demo with gradient */}
                  <Link
                    href="/book-demo"
                    onClick={() => setOpen(false)}
                    className="
                      group
                      block
                      relative
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-r
                      from-indigo-600
                      to-sky-500
                      text-white
                      px-5
                      py-4
                      font-semibold
                      shadow-lg
                      shadow-indigo-600/30
                      hover:shadow-xl
                      hover:shadow-indigo-600/40
                      transition-all
                      duration-300
                      active:scale-95
                      min-h-[48px]
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/50 to-sky-600/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Calendar size={18} />
                    <span className="relative">Book Demo</span>
                    <ArrowRight
                      size={16}
                      className="relative group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                  {/* Secondary Button - Become Distributor */}
                  <Link
                    href="/become-distributor"
                    onClick={() => setOpen(false)}
                    className="
                      group
                      block
                      rounded-xl
                      border-2
                      border-slate-200
                      hover:border-indigo-300
                      bg-white/50
                      hover:bg-indigo-50/50
                      backdrop-blur-sm
                      text-slate-700
                      hover:text-indigo-700
                      px-5
                      py-4
                      font-semibold
                      transition-all
                      duration-300
                      active:scale-95
                      min-h-[48px]
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <Package size={18} />
                    <span>Become Distributor</span>
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
