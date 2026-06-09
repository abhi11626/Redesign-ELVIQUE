// import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";

// const faqs = [
//   {
//     q: "What is Elvique and who is it for?",
//     a: "Elvique is a modern product platform for teams building delightful user experiences. It's ideal for startups and scaling SaaS companies that need composable UI, analytics, and reliability.",
//   },
//   {
//     q: "How do I get started?",
//     a: "Sign up for a demo or sandbox account, bring a small pilot project, and we'll help you onboard with sample components and best-practice patterns.",
//   },
//   {
//     q: "Does it support single sign-on and provisioning?",
//     a: "Yes — Elvique supports SSO providers and SCIM provisioning for enterprise customers. Contact sales for setup options.",
//   },
//   {
//     q: "What kind of support and SLA do you offer?",
//     a: "We offer multi-tier support plans and enterprise SLAs with uptime guarantees, dedicated onboarding, and priority support channels.",
//   },
//   {
//     q: "Can I host on my infrastructure?",
//     a: "We offer both hosted and self-hosted deployment options depending on your compliance and control requirements.",
//   },
// ];

// export default function FAQ() {
//   return (
//     <section className="py-12">
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl sm:text-4xl font-extrabold">
//             Frequently asked questions
//           </h2>
//           <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
//             Answers to common questions about product, pricing, and scaling.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <Accordion type="single" collapsible>
//               {faqs.slice(0, Math.ceil(faqs.length / 2)).map((f) => (
//                 <AccordionItem key={f.q} value={f.q}>
//                   <AccordionTrigger className="text-left">
//                     {f.q}
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <p className="text-sm text-slate-600 dark:text-slate-300">
//                       {f.a}
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>

//           <div className="space-y-4">
//             <Accordion type="single" collapsible>
//               {faqs.slice(Math.ceil(faqs.length / 2)).map((f) => (
//                 <AccordionItem key={f.q} value={f.q}>
//                   <AccordionTrigger className="text-left">
//                     {f.q}
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <p className="text-sm text-slate-600 dark:text-slate-300">
//                       {f.a}
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { faqData } from "@/constants/faq.js";

export default function FAQ() {
  // Split FAQs into two columns for large screens
  const mid = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, mid);
  const rightColumn = faqData.slice(mid);

  const renderFaqs = (items) => {
    return items.map((item) => (
      <AccordionItem
        key={item.id}
        value={`faq-${item.id}`}
        className="
          border border-slate-200 dark:border-slate-800
          rounded-xl px-4
          bg-white dark:bg-slate-900
          shadow-sm hover:shadow-md
          transition-shadow duration-200
        "
      >
        <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-slate-900 dark:text-white">
          {item.question}
        </AccordionTrigger>

        <AccordionContent>
          <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed pb-2">
            {item.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
    ));
  };

  return (
    <section className="min-h-screen py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about onboarding, platform usage,
            and business process.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {renderFaqs(leftColumn)}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {renderFaqs(rightColumn)}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
