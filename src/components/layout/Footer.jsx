"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/constants/footerLinks";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialIcons = {
  Twitter: FaXTwitter,
  Github: FaGithub,
  LinkedIn: FaLinkedin,
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-sky-950/20" />

      <div className="absolute -top-32 -left-40 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-indigo-600/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute -bottom-32 -right-40 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-sky-600/10 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Elvique Logo"
                width={60}
                height={60}
                priority
                className="object-contain"
              />

              <div>
                <h3 className="text-xl font-bold text-white">Elvique</h3>

                <p className="text-[11px] uppercase tracking-[3px] text-slate-400">
                  Vonkeller Apparels
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Apparel-led direct selling platform focused on product discovery,
              distributor onboarding, campaign growth, and future commerce
              experiences.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>
                📧{" "}
                <a
                  href="mailto:hello@elvique.in"
                  className="hover:text-white transition"
                >
                  hello@elvique.in
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition"
                >
                  +91 98765 43210
                </a>
              </p>

              <p>📍 India</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {footerLinks.socials.map((social) => {
                const Icon = socialIcons[social.name];

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-800
                      bg-slate-900
                      transition-all
                      duration-300
                      hover:border-indigo-500
                      hover:bg-indigo-500
                      hover:scale-105
                    "
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-lg">Company</h4>

            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-slate-400
                      transition
                      hover:text-white
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-white text-lg">Policies</h4>

            <ul className="mt-5 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-slate-400
                      transition
                      hover:text-white
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="font-semibold text-white text-lg">Newsletter</h4>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Subscribe for product updates, campaign announcements, distributor
              news, and future platform launches.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 space-y-3"
            >
              <Input
                type="email"
                placeholder="you@example.com"
                className="
                  border-slate-700
                  bg-slate-900
                  text-white
                  placeholder:text-slate-500
                "
              />

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div> */}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white text-lg">Newsletter</h4>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Subscribe for product updates, campaign announcements, distributor
              news, and future platform launches.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (!email.trim()) return;

                setSuccess(true);
                setEmail("");

                setTimeout(() => {
                  setSuccess(false);
                }, 3000);
              }}
              className="mt-5 space-y-3"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="
        border-slate-700
        bg-slate-900
        text-white
        placeholder:text-slate-500
      "
              />

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Subscribe
              </Button>

              {success && (
                <div
                  className="
          rounded-lg
          border
          border-green-500/30
          bg-green-500/10
          px-4
          py-3
          text-sm
          text-green-400
        "
                >
                  ✅ Thank you for subscribing to Elvique updates.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <p className="max-w-4xl mx-auto text-center text-sm leading-7 text-slate-500">
            This website is intended for product discovery, distributor
            enquiries, partnership discussions, and business demonstrations.
            Program details, policies, and operational workflows may evolve as
            the platform expands into future phases.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-8
            border-t
            border-slate-800
            pt-6
            flex
            flex-col
            gap-4
            text-sm
            text-slate-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Elvique by Vonkeller Apparels Private
            Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms-conditions"
              className="hover:text-white transition"
            >
              Terms
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
