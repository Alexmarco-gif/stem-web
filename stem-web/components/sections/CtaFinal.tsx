"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaFinal() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-primary/40 relative overflow-hidden"
        >
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
              See what better market visibility could change for your team.
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Tell us what your team is trying to track, assess, or decide. 
              We’ll show you how Stem could fit your decision workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-16 px-10 text-primary hover:bg-white bg-white">
                Request a Scoping Call <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 border-white text-white hover:bg-white/10">
                See How It Works
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
