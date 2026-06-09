"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Interested Partners",
    description: "Entrepreneurs exploring growth opportunities with Elvique.",
  },
  {
    id: 2,
    value: 100,
    suffix: "+",
    label: "Cities Reached",
    description: "Expanding presence across multiple regions and markets.",
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Partner Satisfaction",
    description: "Strong relationships built through transparency and support.",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Support Availability",
    description: "Dedicated assistance whenever our partners need guidance.",
  },
];

export default function GrowthStats() {
  const [startCount, setStartCount] = useState(false);

  return (
    <section
      id="growth"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Growth & Reach
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Trusted By Entrepreneurs
            <br />
            Across India
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-8">
            We help ambitious individuals start and scale their apparel
            businesses with confidence, support, and transparent growth
            opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          onViewportEnter={() => {
            if (!startCount) {
              setStartCount(true);
            }
          }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                bg-white
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-center">
                <div
                  className="
                    text-5xl
                    lg:text-6xl
                    font-bold
                    bg-gradient-to-r
                    from-indigo-600
                    to-sky-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {startCount ? (
                    <CountUp end={stat.value} duration={2} separator="," />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {stat.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
