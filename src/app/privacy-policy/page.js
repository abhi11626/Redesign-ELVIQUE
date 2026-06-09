import { ShieldCheck, Database, Users, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Policy
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            This draft explains how lead, contact, and newsletter details are
            handled during the early platform phase.
          </p>
        </div>

        {/* Policy Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <ShieldCheck className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">
              Information Collected
            </h2>

            <p className="mt-3 text-slate-600 leading-7">
              We may collect name, email, phone, city, state, preferred demo
              timing, and messages submitted through website forms.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <Database className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Use of Information</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Information is used to respond to enquiries, schedule demos, share
              campaign updates, and evaluate distributor interest.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <Users className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Data Access</h2>

            <p className="mt-3 text-slate-600 leading-7">
              Only authorized business users should access lead records.
              Production deployment should add authentication, retention
              controls, and audit logging.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <FileText className="h-10 w-10 text-indigo-600" />

            <h2 className="mt-4 text-xl font-semibold">Compliance Review</h2>

            <p className="mt-3 text-slate-600 leading-7">
              This page is a business-ready draft for Vonkeller Apparels Private
              Limited and should be reviewed by legal and compliance advisors
              before public launch.
            </p>
          </div>
        </div>

        {/* Notice */}

        <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-semibold text-amber-900">Important Notice</h3>

          <p className="mt-2 text-amber-800 leading-7">
            This privacy policy is provided as a launch-phase draft. Legal,
            compliance, retention, and data processing requirements should be
            reviewed and finalized before production deployment.
          </p>
        </div>
      </div>
    </main>
  );
}
