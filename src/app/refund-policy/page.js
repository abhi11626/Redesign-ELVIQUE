import { ShoppingBag, CreditCard, Headphones, FileText } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Policy
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Refund Policy
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            The launch website does not process ecommerce payments. This draft
            prepares the policy area for future product ordering.
          </p>
        </div>

        {/* Policy Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <ShoppingBag className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">No Online Sales Yet</h2>

            <p className="mt-3 text-slate-600 leading-7">
              The current website is focused on collecting enquiries,
              distributor interest, and demo requests. No ecommerce transactions
              or online product sales are being processed at this stage.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <CreditCard className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Future Orders</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Once commerce functionality is introduced, refund eligibility,
              return timelines, product inspection requirements, and payment
              reversal methods will be published and maintained on this page.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <Headphones className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Customer Support</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Customers should contact support with order references and
              purchase details once order management and commerce systems become
              active.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <FileText className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Policy Status</h2>

            <p className="mt-3 text-slate-600 leading-7">
              This refund policy is a launch-phase draft prepared for Vonkeller
              Apparels Private Limited and should be reviewed by legal and
              compliance advisors before public release.
            </p>
          </div>
        </div>

        {/* Important Notice */}

        <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-semibold text-amber-900">Important Notice</h3>

          <p className="mt-2 text-amber-800 leading-7">
            Refund processes are not currently applicable because the platform
            does not facilitate online purchases. This page exists to support
            future commerce expansion and will be updated when ordering
            functionality is launched.
          </p>
        </div>
      </div>
    </main>
  );
}
