"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your sources",
    description: "Start with the signals, markets, entities, and monitoring priorities that matter most to your team.",
  },
  {
    number: "02",
    title: "Detect meaningful signals",
    description: "Stem filters noise, tracks change, and surfaces what deserves attention.",
  },
  {
    number: "03",
    title: "Act with defensible intelligence",
    description: "Use prioritized, contextualized outputs to make faster recommendations and decisions.",
  },
];

export function ThreeStepPlan() {
  return (
    <section className="py-24 bg-soft-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            A simple path from fragmented inputs to better decisions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-200 -z-0">
             <motion.div 
               className="h-full bg-primary"
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               viewport={{ once: true }}
             />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-soft-bg shadow-xl flex items-center justify-center text-3xl font-black text-primary mb-8 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-deep-ink mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
