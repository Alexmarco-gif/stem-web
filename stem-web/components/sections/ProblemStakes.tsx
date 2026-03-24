"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, ShieldAlert, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const stakes = [
  {
    title: "Missed competitor moves",
    description: "Delayed visibility into pricing shifts and launches can turn into preventable exposure.",
    icon: TrendingDown,
    className: "lg:col-span-2",
  },
  {
    title: "Delayed expansion timing",
    description: "Moving without clear market signals leads to costly missteps.",
    icon: BarChart3,
  },
  {
    title: "Weakly defended recommendations",
    description: "Strategic advice is only as strong as the intelligence behind it.",
    icon: ShieldAlert,
  },
  {
    title: "Policy or regulatory surprise",
    description: "Fragmented monitoring leaves teams vulnerable to sudden external shifts.",
    icon: AlertCircle,
    className: "lg:col-span-2",
  },
];

export function ProblemStakes() {
  return (
    <section className="py-24 bg-soft-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            The cost of a blind spot is rarely visible until it is expensive.
          </h2>
          <p className="text-lg text-gray-600">
            In fast-moving financial markets, missed signals do not stay small for long. 
            Delayed visibility can turn into weak recommendations, poor timing, 
            missed opportunities, or preventable exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stakes.map((stake, i) => (
            <motion.div
              key={stake.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300",
                stake.className
              )}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stake.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-deep-ink mb-3">{stake.title}</h3>
              <p className="text-gray-600 leading-relaxed">{stake.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
