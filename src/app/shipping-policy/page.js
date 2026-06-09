import { Truck, MapPin, Package, FileText } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Policy
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Shipping Policy
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Shipping is planned for the commerce phase and is included here as a
            public policy placeholder.
          </p>
        </div>

        {/* Policy Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <Truck className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Current Phase</h2>

            <p className="mt-3 text-slate-600 leading-7">
              The website currently captures distributor interest, customer
              enquiries, and demo requests. Product ordering, shipment requests,
              and delivery payments are not yet available.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <MapPin className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Future Coverage</h2>

            <p className="mt-3 text-slate-600 leading-7">
              The final shipping policy will define serviceable regions,
              delivery coverage, dispatch timelines, shipping fees, tracking
              availability, and handling procedures for failed deliveries.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <Package className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Inventory Dependency</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Shipping timelines will depend on product availability, warehouse
              operations, courier partnerships, inventory readiness, and
              successful payment confirmation.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <FileText className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Policy Status</h2>

            <p className="mt-3 text-slate-600 leading-7">
              This shipping policy is a launch-phase draft prepared for
              Vonkeller Apparels Private Limited and should be reviewed by legal
              and compliance advisors before public release.
            </p>
          </div>
        </div>

        {/* Important Notice */}

        <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-semibold text-amber-900">Important Notice</h3>

          <p className="mt-2 text-amber-800 leading-7">
            Shipping services are not currently active because the platform does
            not process product orders. This page serves as a placeholder for
            future commerce operations and will be updated before product sales
            begin.
          </p>
        </div>
      </div>
    </main>
  );
}
