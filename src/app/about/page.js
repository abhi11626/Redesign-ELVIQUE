import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              About Elvique
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Building a Modern
              <span className="text-indigo-600"> Apparel-Led</span>
              <br />
              Direct Selling Platform
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Elvique is the marketed brand of Vonkeller Apparels Private
              Limited, created to establish a credible public presence and
              support meaningful conversations with distributors and customers.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                A Strong Foundation For Growth
              </h2>
            </div>

            <div>
              <p className="text-slate-600 leading-8">
                Elvique serves as the public-facing brand of Vonkeller Apparels
                Private Limited. The platform has been designed to communicate a
                clear vision, establish trust, and provide the first operational
                layer for distributor engagement and customer interactions.
              </p>

              <p className="mt-6 text-slate-600 leading-8">
                Our goal is to create a professional ecosystem where people can
                learn about the opportunity, explore products, and begin a
                structured onboarding journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Purpose
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Creating Opportunities Through Apparel
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Our purpose is to build an apparel-led direct selling platform
              that helps individuals discover quality products, understand the
              business opportunity, and enter a structured and transparent
              onboarding process.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Lead Generation
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Focused on attracting interested individuals and creating
                meaningful engagement opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Demos & Support
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Conducting product and opportunity demonstrations while
                maintaining responsive communication channels.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Admin Review
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Ensuring early workflows remain lean and manageable before
                expanding into larger inventory and commerce systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Compliance Mindset
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Responsible Growth Through Transparency
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            We prioritize careful communication, transparent policies, and
            documented follow-up processes. This approach helps create a
            responsible foundation for future MLM-related workflows, allowing
            systems and procedures to be reviewed, configured, and managed
            appropriately as the business evolves.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-indigo-600 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Interested In Learning More?
            </h2>

            <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
              Explore the opportunity, connect with our team, and discover how
              Elvique is building a structured platform for future growth.
            </p>

            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-slate-100 transition"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
