import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Zap, Users, Globe, ShieldCheck, Layers, Clock } from "lucide-react";

const benefits = [
  {
    title: "Fast time to market",
    desc: "Ship features quickly with composable building blocks and sensible defaults.",
    icon: Zap,
  },
  {
    title: "Collaborative by design",
    desc: "Built for teams — feedback, roles, and smooth handoffs.",
    icon: Users,
  },
  {
    title: "Global scale",
    desc: "Edge-ready infrastructure and optimized delivery worldwide.",
    icon: Globe,
  },
  {
    title: "Enterprise-grade security",
    desc: "Strong defaults, encryption, and audit tooling out of the box.",
    icon: ShieldCheck,
  },
  {
    title: "Composable layers",
    desc: "Modular pieces you can mix and match for any workflow.",
    icon: Layers,
  },
  {
    title: "Reliable uptime",
    desc: "Observability and robust fallbacks keep your service healthy.",
    icon: Clock,
  },
];

export default function Benefits() {
  return (
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Why teams choose us
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Powerful primitives, delightful UX, and performance that scales with
            your product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ title, desc, icon: Icon }) => (
            <Card
              key={title}
              className="group/card hover:scale-[1.02] transform transition will-change-transform hover:shadow-lg"
            >
              <CardHeader className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {desc}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
