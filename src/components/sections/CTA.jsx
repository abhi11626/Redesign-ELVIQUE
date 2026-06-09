import React from "react";

export default function CTA() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Launch faster with a modern platform built for teams
              </h2>
              <p className="mt-3 text-lg text-white/90">
                Everything you need to prototype, ship, and scale — delightful
                components, reliable infra, and best-in-class tooling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-end w-full lg:w-auto">
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white text-indigo-600 font-semibold shadow hover:scale-[1.02] transition w-full sm:w-auto"
              >
                Book a demo
              </a>
              <a
                href="#start-trial"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-white/30 text-white/95 hover:bg-white/10 transition w-full sm:w-auto"
              >
                Start trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
