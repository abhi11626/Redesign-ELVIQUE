"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Clock3 } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setLoading(true);
    setStatus({ ok: null, message: "Sending…" });

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // TODO: replace with real submit logic (fetch/axios)
    setTimeout(() => {
      setLoading(false);
      setStatus({ ok: true, message: "Thanks — we will be in touch." });
      // clear the form so it's ready for a new submission
      form.reset();
    }, 1000);
  }

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Contact
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Reach the Elvique Team
          </h1>

          <p className="mt-4 text-slate-600 text-lg">
            Send distributor, customer, demo, and partnership questions into the
            admin workflow.
          </p>
        </div>

        {/* Contact Section */}

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Left Side */}

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <p className="mt-3 text-slate-600">
              Our team is available to assist with distributor onboarding,
              product inquiries, and partnership opportunities.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Mail className="text-indigo-600" />

                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-600">hello@elvique.in</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-indigo-600" />

                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MessageCircle className="text-indigo-600" />

                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-slate-600">
                    Available during business hours
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="text-indigo-600" />

                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-slate-600">
                    Usually within 24 business hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Send A Message</h2>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="text-sm font-medium">Name</label>

                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-3
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-3
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>

                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-3
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium">City</label>

                <input
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-3
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-3
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full
                  rounded-xl
                  bg-indigo-600
                  py-3
                  text-white
                  font-medium
                  hover:bg-indigo-700
                  transition
                  ${loading ? "opacity-70 cursor-not-allowed" : ""}
                `}
                aria-busy={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div
                  role="status"
                  className={`mt-3 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
