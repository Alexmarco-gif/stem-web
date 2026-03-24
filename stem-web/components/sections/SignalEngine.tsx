"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Zap, Layers, BarChart } from "lucide-react";

const inputs = ["Competitors", "Market movement", "Pricing shifts", "Policy / regulation", "Category signals"];
const engine = ["detect", "synthesize", "prioritize", "contextualize"];
const outputs = ["alerts", "summaries", "decision signals", "recommended next steps"];

export function SignalEngine() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            From fragmented signals to decision-ready intelligence.
          </h2>
          <p className="text-lg text-gray-600">
            Stem continuously pulls together meaningful market inputs, detects 
            important changes, adds context, and surfaces prioritized intelligence 
            your team can act on.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-12 px-6 bg-soft-bg rounded-[3rem] border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center relative">
            
            {/* Inputs Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">Inputs</h4>
              {inputs.map((input, i) => (
                <motion.div
                  key={input}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm text-sm font-medium text-deep-ink flex items-center justify-between group"
                >
                  {input}
                  <motion.div 
                    animate={{ x: [0, 5, 0] }} 
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="text-primary/30"
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Stem Engine Column */}
            <div className="relative flex flex-col items-center justify-center space-y-4">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10 blur-2xl"></div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Stem Engine</h4>
              
              <div className="w-full bg-white p-6 rounded-2xl border border-primary/10 shadow-xl shadow-primary/5 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {engine.map((step, i) => (
                    <div key={step} className="flex flex-col items-center justify-center p-3 rounded-lg bg-soft-bg border border-gray-50">
                      <div className="text-primary mb-2">
                        {i === 0 && <Search size={16} />}
                        {i === 1 && <Layers size={16} />}
                        {i === 2 && <Zap size={16} />}
                        {i === 3 && <BarChart size={16} />}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-deep-ink">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connecting lines visualized as particles */}
              <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-1 overflow-hidden">
                 <motion.div 
                  className="h-full w-4 bg-primary rounded-full"
                  animate={{ x: [-20, 60] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 />
              </div>
              <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-1 overflow-hidden">
                 <motion.div 
                  className="h-full w-4 bg-primary rounded-full"
                  animate={{ x: [-20, 60] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
                 />
              </div>
            </div>

            {/* Outputs Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">Outputs</h4>
              {outputs.map((output, i) => (
                <motion.div
                  key={output}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary px-4 py-3 rounded-xl shadow-lg shadow-primary/20 text-sm font-bold text-white flex items-center space-x-3"
                >
                  <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  </div>
                  <span>{output}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
