import { Globe, Briefcase, RefreshCw, FileText } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Legal
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            These website terms set expectations for early visitors, prospects,
            and demo registrants.
          </p>
        </div>

        {/* Content Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <Globe className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Website Use</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Visitors should use the website for lawful enquiries, product
              interest, and distributor discovery only.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <Briefcase className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Program Information</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Opportunity, reward, and campaign information is indicative until
              final business rules are approved and officially published.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <RefreshCw className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Changes & Updates</h2>

            <p className="mt-3 text-slate-600 leading-7">
              The company may update website content, policies, forms, and
              program descriptions as the platform evolves through future
              business phases.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <FileText className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Legal Review</h2>

            <p className="mt-3 text-slate-600 leading-7">
              This page is a business-ready draft for Vonkeller Apparels Private
              Limited and should be reviewed by legal and compliance advisors
              before public launch.
            </p>
          </div>
        </div>

        {/* Important Notice */}

        <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-semibold text-amber-900">Important Notice</h3>

          <p className="mt-2 text-amber-800 leading-7">
            These terms are provided for the launch-phase website. Final
            business rules, distributor programs, rewards, and operational
            policies may change and should be formally approved before
            production deployment.
          </p>
        </div>
      </div>
    </main>
  );
}
