import { BadgeDollarSign, ShoppingBag, ShieldCheck, Scale } from "lucide-react";

export default function ComplianceDisclaimerPage() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Policy
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Compliance Disclaimer
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Direct selling communication should be careful, product-led, and
            free from guaranteed income claims.
          </p>
        </div>

        {/* Content Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <BadgeDollarSign className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">No Income Guarantee</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Any reward, commission, rank, or earnings example is provided
              solely for program explanation and educational purposes. These
              examples should not be interpreted as guaranteed income, future
              earnings, or financial promises.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Product-Led Business</h2>

            <p className="mt-3 text-slate-600 leading-7">
              The platform should prioritize genuine product demand, customer
              value, ethical marketing, distributor training, and transparent
              onboarding practices rather than income-focused promotion.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">
              Responsible Communication
            </h2>

            <p className="mt-3 text-slate-600 leading-7">
              Marketing, distributor communication, and public materials should
              remain accurate, transparent, compliant, and free from misleading
              claims related to earnings, rewards, or business outcomes.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <Scale className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Review Required</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Final MLM rules, commissions, ranks, KYC processes, payouts,
              taxation requirements, consumer protection measures, and
              distributor policies should be reviewed by qualified legal,
              finance, and compliance professionals before public launch.
            </p>
          </div>
        </div>

        {/* Notice Section */}
        <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-semibold text-amber-900">Important Notice</h3>

          <p className="mt-2 text-amber-800 leading-7">
            This page is a business-ready draft for Vonkeller Apparels Private
            Limited. It should be reviewed by legal and compliance advisors
            before public launch. Business rules, compensation structures,
            onboarding requirements, and distributor programs may change as the
            platform evolves.
          </p>
        </div>
      </div>
    </main>
  );
}
