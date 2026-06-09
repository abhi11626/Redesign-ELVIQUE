import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/constants/products";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">Products</h1>

        <p className="mt-6 text-lg text-slate-600 leading-8">
          Product pages ready for apparel campaigns and future commerce. The
          launch website presents categories and campaign interest. Product
          catalogs, variants, carts, and inventory management are planned for
          later phases.
        </p>
      </div>

      {/* Categories */}

      <section className="mt-20 space-y-20">
        {productCategories.map((item, index) => (
          <div
            key={item.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Content */}

            <div>
              <span className="text-sm font-medium text-indigo-600">
                CATEGORY {index + 1}
              </span>

              <h2 className="mt-3 text-3xl font-bold">{item.title}</h2>

              <p className="mt-5 text-slate-600 leading-8">
                {item.description}
              </p>

              <button
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                px-5
                py-3
                font-medium
                hover:bg-slate-50
                transition
              "
              >
                Coming Soon
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Image Area */}

            <div className="relative">
              <div
                className="
                aspect-[4/3]
                overflow-hidden
                rounded-3xl
                border
                bg-gradient-to-br
                from-indigo-50
                via-white
                to-sky-50
                shadow-sm
              "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Future Commerce */}

      <section className="mt-24">
        <div
          className="
          rounded-3xl
          border
          border-indigo-100
          bg-indigo-50
          p-8
        "
        >
          <h3 className="text-2xl font-semibold">
            Future Commerce Integration
          </h3>

          <p className="mt-4 text-slate-600 leading-7">
            Product catalogs, variants, inventory management, carts, checkout
            flows, and distributor ordering tools will be introduced in future
            platform phases.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="mt-20">
        <div className="rounded-3xl bg-slate-900 p-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Interested In Upcoming Product Campaigns?
          </h2>

          <p className="mt-4 text-slate-300">
            Connect with our team to stay updated.
          </p>

          <Link
            href="/book-demo"
            className="
              mt-8
              inline-flex
              items-center
              rounded-xl
              bg-white
              px-6
              py-3
              font-medium
              text-slate-900
            "
          >
            Book A Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
