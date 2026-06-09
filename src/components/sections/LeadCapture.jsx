"use client";

import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function LeadCapture({ onSubmit }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      // show native validation UI and focus first invalid field
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      setStatus({ ok: false, message: "Please fill out the required fields." });
      return;
    }

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus({ ok: true, message: "Submitting…" });

    if (typeof onSubmit === "function") {
      Promise.resolve(onSubmit(payload))
        .then(() => {
          setStatus({ ok: true, message: "Thanks — we will be in touch." });
          // reset all form fields so the form is ready for a new submission
          form.reset();
        })
        .catch(() => setStatus({ ok: false, message: "Submission failed." }));
    } else {
      // Placeholder behavior: simulate success
      setTimeout(() => {
        setStatus({ ok: true, message: "Thanks — we will be in touch." });
        form.reset();
      }, 800);
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                />
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Select name="role" defaultValue="pm">
                  <SelectTrigger id="role" aria-label="Role" className="w-full">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pm">Product / PM</SelectItem>
                    <SelectItem value="eng">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="interest">Area of interest</Label>
                <Select name="interest" defaultValue="demo">
                  <SelectTrigger
                    id="interest"
                    aria-label="Interest"
                    className="w-full"
                  >
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Book demo</SelectItem>
                    <SelectItem value="trial">Start trial</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about your needs"
                  rows={6}
                />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" className="w-full lg:w-auto">
                  Request demo
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="/contact"
                    className="w-full lg:w-auto text-center"
                  >
                    Contact sales
                  </Link>
                </Button>
              </div>

              {status && (
                <div
                  role="status"
                  className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
