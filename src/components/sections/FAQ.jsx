import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Elvique and who is it for?",
    a: "Elvique is a modern product platform for teams building delightful user experiences. It's ideal for startups and scaling SaaS companies that need composable UI, analytics, and reliability.",
  },
  {
    q: "How do I get started?",
    a: "Sign up for a demo or sandbox account, bring a small pilot project, and we'll help you onboard with sample components and best-practice patterns.",
  },
  {
    q: "Does it support single sign-on and provisioning?",
    a: "Yes — Elvique supports SSO providers and SCIM provisioning for enterprise customers. Contact sales for setup options.",
  },
  {
    q: "What kind of support and SLA do you offer?",
    a: "We offer multi-tier support plans and enterprise SLAs with uptime guarantees, dedicated onboarding, and priority support channels.",
  },
  {
    q: "Can I host on my infrastructure?",
    a: "We offer both hosted and self-hosted deployment options depending on your compliance and control requirements.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Answers to common questions about product, pricing, and scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {f.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {faqs.slice(Math.ceil(faqs.length / 2)).map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {f.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
