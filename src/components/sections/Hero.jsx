// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const floatVariant = {
// //   float: {
// //     y: [0, -8, 0],
// //     transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
// //   },
// // };

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden">
// //       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />

// //       <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 lg:py-24">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
// //           {/* Left column - content */}
// //           <div className="relative">
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
// //                 Build products users love — faster.
// //               </h1>

// //               <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
// //                 A modern platform that helps teams ship delightful experiences
// //                 with first-class tooling, reliable infrastructure, and beautiful
// //                 components designed for scale.
// //               </p>

// //               <div className="mt-8 flex flex-wrap gap-3">
// //                 <a
// //                   href="#book-demo"
// //                   className="inline-flex items-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
// //                 >
// //                   Book Demo
// //                 </a>
// //                 <a
// //                   href="#become-distributor"
// //                   className="inline-flex items-center px-5 py-3 rounded-md border border-gray-200 dark:border-slate-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition"
// //                 >
// //                   Become Distributor
// //                 </a>
// //               </div>
// //             </motion.div>

// //             {/* Floating badges */}
// //             <motion.div
// //               variants={floatVariant}
// //               animate="float"
// //               className="hidden sm:block absolute -left-6 top-8"
// //             >
// //               <div className="bg-white dark:bg-slate-900 rounded-full px-4 py-2 shadow-md border border-gray-100 dark:border-slate-800 text-sm">
// //                 Trusted by early adopters
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               variants={floatVariant}
// //               animate="float"
// //               transition={{ delay: 0.6 }}
// //               className="hidden md:block absolute left-8 bottom-6"
// //             >
// //               <div className="bg-white dark:bg-slate-900 rounded-full px-3 py-2 shadow-md border border-gray-100 dark:border-slate-800 text-sm">
// //                 99.99% uptime
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Right column - dashboard mockup */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.98 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="w-full flex justify-center md:justify-end"
// //           >
// //             <div className="relative w-full max-w-md md:max-w-lg">
// //               <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-lg overflow-hidden border border-gray-100 dark:border-slate-800">
// //                 <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
// //                   <div className="h-3 w-3 rounded-full bg-red-400" />
// //                   <div className="flex gap-2">
// //                     <div className="h-3 w-3 rounded-full bg-amber-400" />
// //                     <div className="h-3 w-3 rounded-full bg-emerald-400" />
// //                   </div>
// //                 </div>

// //                 <div className="p-6">
// //                   <div className="h-40 md:h-48 bg-gradient-to-tr from-indigo-100 via-white to-sky-50 rounded-lg p-4">
// //                     <div className="h-3 bg-white/40 rounded-full w-1/3 mb-4" />
// //                     <div className="flex items-end gap-2 h-full">
// //                       <div
// //                         className="flex-1 bg-white/80 rounded-t-md"
// //                         style={{ height: "56%" }}
// //                       />
// //                       <div
// //                         className="flex-1 bg-white/90 rounded-t-md"
// //                         style={{ height: "72%" }}
// //                       />
// //                       <div
// //                         className="flex-1 bg-white/70 rounded-t-md"
// //                         style={{ height: "40%" }}
// //                       />
// //                       <div
// //                         className="flex-1 bg-white/95 rounded-t-md"
// //                         style={{ height: "88%" }}
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="mt-4 grid grid-cols-2 gap-3">
// //                     <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-800 border border-gray-100 dark:border-slate-800">
// //                       <div className="text-xs text-slate-500">Active</div>
// //                       <div className="text-lg font-semibold">1,248</div>
// //                     </div>
// //                     <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-800 border border-gray-100 dark:border-slate-800">
// //                       <div className="text-xs text-slate-500">Conversion</div>
// //                       <div className="text-lg font-semibold">7.4%</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Mockup glow */}
// //               <div className="absolute -inset-1 rounded-2xl blur-2xl opacity-30 bg-gradient-to-r from-indigo-300 to-sky-300" />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50 -z-10" />

//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 md:py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <span
//               className="
//                 inline-flex
//                 rounded-full
//                 bg-indigo-100
//                 px-4
//                 py-1
//                 text-sm
//                 font-medium
//                 text-indigo-700
//               "
//             >
//               Direct Selling Apparel Opportunity
//             </span>

//             <h1
//               className="
//                 mt-6
//                 text-4xl
//                 md:text-6xl
//                 font-bold
//                 leading-tight
//               "
//             >
//               Build Your Apparel
//               <br />
//               Business With
//               <span className="text-indigo-600"> Confidence</span>
//             </h1>

//             <p
//               className="
//                 mt-6
//                 text-lg
//                 text-slate-600
//                 max-w-xl
//               "
//             >
//               Join a growing apparel distributor network designed to help
//               entrepreneurs launch, grow, and scale with structured support.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="#become-distributor"
//                 className="
//                   rounded-xl
//                   bg-indigo-600
//                   px-6
//                   py-3
//                   text-white
//                   font-semibold
//                 "
//               >
//                 Become Distributor
//               </a>

//               <a
//                 href="#book-demo"
//                 className="
//                   rounded-xl
//                   border
//                   px-6
//                   py-3
//                   font-semibold
//                 "
//               >
//                 Book Demo
//               </a>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-6 text-sm">
//               <span>✓ 500+ Interested Partners</span>
//               <span>✓ 100+ Cities Reached</span>
//               <span>✓ Dedicated Support</span>
//             </div>
//           </motion.div>

//           {/* Right */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="hidden md:block"
//           >
//             <div
//               className="
//                 rounded-3xl
//                 bg-white
//                 p-8
//                 shadow-2xl
//                 border
//               "
//             >
//               <div className="grid gap-4">
//                 <div className="rounded-2xl bg-indigo-50 p-5">
//                   <div className="text-sm text-slate-500">Active Leads</div>

//                   <div className="text-4xl font-bold mt-2">1,260</div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="rounded-2xl bg-slate-50 p-5">
//                     <div className="text-sm text-slate-500">Partner Growth</div>

//                     <div className="text-2xl font-bold">+38%</div>
//                   </div>

//                   <div className="rounded-2xl bg-slate-50 p-5">
//                     <div className="text-sm text-slate-500">Cities</div>

//                     <div className="text-2xl font-bold">100+</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Users,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-sky-50 via-amber-50 to-rose-50" />

      {/* Blur blobs */}
      <div className="absolute top-0 left-0 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-blue-200/30 blur-3xl -z-10 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-amber-200/30 blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 backdrop-blur px-4 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              Apparel-led Direct Selling Platform
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
              Build Your
              <span className="block text-indigo-600">Apparel Business</span>
              With Confidence
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
              Elvique helps aspiring distributors discover products, understand
              opportunities, and grow through a structured, product-first
              business model.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/become-distributor"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-indigo-600
                  px-6
                  py-4
                  text-white
                  font-semibold
                  shadow-lg
                  hover:bg-indigo-700
                  transition
                "
              >
                Become Distributor
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/book-demo"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  bg-white/80
                  backdrop-blur
                  px-6
                  py-4
                  font-semibold
                  hover:bg-white
                  transition
                "
              >
                <Calendar className="h-5 w-5" />
                Book Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/70 backdrop-blur border p-4 shadow-sm">
                <Users className="h-5 w-5 text-indigo-600 mb-2" />
                <h4 className="font-bold text-2xl">500+</h4>
                <p className="text-sm text-slate-500">Interested Partners</p>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur border p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-600 mb-2" />
                <h4 className="font-bold text-2xl">100+</h4>
                <p className="text-sm text-slate-500">Cities Reached</p>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur border p-4 shadow-sm">
                <Sparkles className="h-5 w-5 text-amber-500 mb-2" />
                <h4 className="font-bold text-2xl">24/7</h4>
                <p className="text-sm text-slate-500">Dedicated Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden border bg-white/70 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50" />

              <div className="relative p-8 lg:p-10">
                <div className="grid gap-5">
                  <div className="rounded-2xl bg-white p-6 shadow-md">
                    <div className="text-sm text-slate-500">
                      Distributor Interest
                    </div>

                    <div className="mt-2 text-5xl font-bold text-slate-900">
                      1,248
                    </div>

                    <div className="mt-2 text-green-600 font-medium">
                      +18% this month
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-indigo-50 p-6">
                      <h4 className="text-sm text-slate-500">
                        Apparel Campaigns
                      </h4>

                      <p className="mt-2 text-3xl font-bold">12+</p>
                    </div>

                    <div className="rounded-2xl bg-amber-50 p-6">
                      <h4 className="text-sm text-slate-500">Active Cities</h4>

                      <p className="mt-2 text-3xl font-bold">100+</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-900 text-white p-6">
                    <h4 className="text-lg font-semibold">
                      Future Commerce Ready
                    </h4>

                    <p className="mt-2 text-slate-300">
                      Product catalogs, ordering, inventory, and distributor
                      systems planned for future platform phases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/20 to-amber-200/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
