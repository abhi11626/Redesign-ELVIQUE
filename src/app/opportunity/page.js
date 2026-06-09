import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Submit Your Interest",
    description:
      "Complete a simple interest form to begin your journey with Elvique.",
  },
  {
    id: "02",
    title: "Attend Demo Session",
    description:
      "Learn about the products, business model, and growth opportunity through a guided demo.",
  },
  {
    id: "03",
    title: "Complete Verification",
    description: "Finish onboarding requirements and basic verification steps.",
  },
  {
    id: "04",
    title: "Start Sharing Campaigns",
    description:
      "Begin promoting campaigns and building your network through structured support.",
  },
];

export default function OpportunityPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              Opportunity
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              A Structured Path
              <br />
              From Interest To
              <span className="text-indigo-600"> Distributor Onboarding</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Our current platform focuses on education, discovery, and lead
              qualification. Detailed commission structures, ranks, and payout
              systems will be introduced in future platform phases.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            How Onboarding Starts
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
            Learn Before You Commit
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Prospects can explore the opportunity, book a demo, and understand
            the fundamentals before any advanced distributor systems are
            introduced.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-slate-200" />

            <div className="space-y-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col md:flex-row gap-6"
                >
                  {/* Number */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-lg">
                    {step.id}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-amber-600 mt-1" size={24} />

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Current Platform Scope
                </h3>

                <p className="mt-3 text-slate-700 leading-7">
                  The current platform is designed for opportunity education,
                  distributor discovery, lead generation, demos, and onboarding
                  qualification. Detailed compensation plans, rank structures,
                  and payout systems are not part of this phase and will be
                  introduced only after appropriate review and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-indigo-600 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready To Explore The Opportunity?
            </h2>

            <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
              Submit your interest and connect with our team to learn more about
              the onboarding journey.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/become-distributor"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-slate-100 transition"
              >
                Submit Interest
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
