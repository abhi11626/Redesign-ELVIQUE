// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";

// const products = [
//   { id: 1, name: "Workspace", tag: "Collaboration", price: "$29/mo" },
//   { id: 2, name: "Analytics", tag: "Insights", price: "$79/mo" },
//   { id: 3, name: "Integrations", tag: "Connectors", price: "$49/mo" },
//   { id: 4, name: "Platform", tag: "Infrastructure", price: "$199/mo" },
// ];

// export default function Products() {
//   return (
//     <section className="py-12">
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl sm:text-4xl font-extrabold">Products</h2>
//           <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
//             Modern building blocks to accelerate your product development.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <div key={p.id} className="group">
//               <div className="rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 group-hover:scale-105 transform transition">
//                 <Card className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
//                   <div className="aspect-[16/11] bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
//                     <div className="text-slate-400 dark:text-slate-400 text-sm">
//                       Product image placeholder
//                     </div>
//                   </div>

//                   <CardContent className="px-4 py-4">
//                     <div className="flex items-start justify-between gap-4">
//                       <div>
//                         <CardTitle className="text-base">{p.name}</CardTitle>
//                         <CardDescription className="mt-1 text-sm text-slate-600 dark:text-slate-300">
//                           {p.tag}
//                         </CardDescription>
//                       </div>
//                       <div className="text-sm font-semibold text-slate-700 dark:text-slate-100">
//                         {p.price}
//                       </div>
//                     </div>

//                     <div className="mt-4 flex gap-2">
//                       <button className="flex-1 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
//                         Get Started
//                       </button>
//                       <button className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition">
//                         Learn
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    title: "Everyday Apparel Capsules",
    description:
      "A campaign-ready category placeholder for launch messaging, inquiry capture, and later product catalog integration.",
  },
  {
    id: 2,
    title: "Lifestyle Essentials",
    description:
      "A campaign-ready category placeholder for launch messaging, inquiry capture, and later product catalog integration.",
  },
  {
    id: 3,
    title: "Seasonal Campaign Drops",
    description:
      "A campaign-ready category placeholder for launch messaging, inquiry capture, and later product catalog integration.",
  },
  {
    id: 4,
    title: "Distributor Starter Kits",
    description:
      "A campaign-ready category placeholder for launch messaging, inquiry capture, and later product catalog integration.",
  },
];

export default function Products() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-yellow-50 to-pink-50" />

      <div className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 h-64 w-64 sm:h-[500px] sm:w-[500px] rounded-full bg-sky-200/30 blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute top-32 -right-24 sm:top-40 sm:right-0 h-64 w-64 sm:h-[450px] sm:w-[450px] rounded-full bg-pink-200/20 blur-[120px] translate-x-1/2" />

      <div className="absolute -bottom-32 left-1/4 sm:left-1/3 h-64 w-64 sm:h-[500px] sm:w-[500px] rounded-full bg-yellow-200/20 blur-[120px] -translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-indigo-700 border">
            Product Categories
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Products Ready For
            <span className="block text-indigo-600">Future Commerce</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Product pages ready for apparel campaigns and future commerce.
            Product catalogs, variants, carts, and inventory management are
            planned for later platform phases.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="
                group
                overflow-hidden
                border-0
                bg-white/80
                backdrop-blur-md
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Product Image Placeholder */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-sky-100" />

                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-white shadow-md flex items-center justify-center">
                      <span className="text-3xl">👕</span>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                      Product Image Placeholder
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {product.description}
                </p>

                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-indigo-600
                    hover:text-indigo-700
                  "
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Banner */}
        <div
          className="
            mt-16
            rounded-3xl
            border
            bg-white/70
            backdrop-blur-md
            p-8
            lg:p-12
            text-center
            shadow-lg
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Colorful Elvique Apparel Campaign Visual
          </h3>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            This area is reserved for future campaign imagery, lifestyle
            photography, product showcases, seasonal collections, and
            promotional visuals.
          </p>

          <div className="mt-8 h-64 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            Future Campaign Banner / Product Photography
          </div>
        </div>
      </div>
    </section>
  );
}
