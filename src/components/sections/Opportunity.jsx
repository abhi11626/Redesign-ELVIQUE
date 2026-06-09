"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    brief: "Understand the market and user needs.",
    desc: "We run focused discovery sessions to identify pain points, validate ideas, and prioritise the smallest delightful experience that proves product-market fit.",
  },
  {
    title: "Design",
    brief: "Design systems and delightful UI.",
    desc: "High-fidelity designs and component libraries ensure consistent experiences across platforms, speeding implementation and reducing cognitive load for teams.",
  },
  {
    title: "Build",
    brief: "Ship fast with clear iterations.",
    desc: "Modular architecture and CI-driven workflows let teams deliver predictable, testable increments with minimal friction.",
  },
  {
    title: "Scale",
    brief: "Operate reliably at growth.",
    desc: "Performance tuning, observability, and resilient fallbacks keep the product dependable as your user base grows.",
  },
  {
    title: "Grow",
    brief: "Turn users into advocates.",
    desc: "Data-informed experiments and product improvements drive retention and viral growth channels over time.",
  },
];

export default function Opportunity() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Timeline column */}
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 hidden sm:block">
                <div className="h-full w-0.5 bg-gradient-to-b from-indigo-300 to-sky-300 mx-auto" />
              </div>

              <div className="space-y-8 pl-12 sm:pl-16">
                {steps.map((s, idx) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="relative flex items-start gap-4"
                  >
                    <button
                      onClick={() => setActive(idx)}
                      className={`flex items-center justify-center h-12 w-12 rounded-full ring-1 ring-gray-200 dark:ring-slate-700 transition-transform ${active === idx ? "scale-105 bg-indigo-600 text-white" : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"}`}
                    >
                      <span className="font-medium">{idx + 1}</span>
                    </button>

                    <div>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {s.brief}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Description panel */}
          <div className="lg:col-span-1">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="sticky top-24 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">
                    Step {active + 1}
                  </div>
                  <h4 className="mt-1 text-xl font-semibold">
                    {steps[active].title}
                  </h4>
                </div>
              </div>

              <p className="mt-4 text-slate-700 dark:text-slate-300">
                {steps[active].desc}
              </p>

              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
                  Get started
                </button>
                <button className="px-4 py-2 rounded-md border text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition">
                  Learn more
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
