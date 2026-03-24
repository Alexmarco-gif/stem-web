"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "competitor",
    title: "Competitor tracking",
    question: "What are competitors changing that we cannot afford to miss?",
    pain: "Important launches, pricing changes, and positioning moves are scattered across sources and easy to miss.",
    how: "Stem monitors external activity, detects meaningful changes, and surfaces the shifts worth acting on.",
    outcome: "Teams react faster and avoid being surprised by competitive movement.",
  },
  {
    id: "market",
    title: "Market monitoring",
    question: "What is shifting in the market that affects how we should act?",
    pain: "Category movement is hard to track in one place and often becomes clear only after the window to act has narrowed.",
    how: "Stem synthesizes market signals, category changes, and emerging patterns into usable intelligence.",
    outcome: "Earlier visibility into meaningful market change.",
  },
  {
    id: "policy",
    title: "Policy & risk",
    question: "What changes in policy or regulation should influence our next move?",
    pain: "Teams often hear about policy shifts too late or without enough context to interpret the impact.",
    how: "Stem surfaces important policy and risk changes, connects them to monitored categories, and supports faster assessment.",
    outcome: "Reduced exposure and faster reaction to important external changes.",
  },
  {
    id: "expansion",
    title: "Expansion support",
    question: "Is this the right time to move, wait, or investigate further?",
    pain: "Expansion decisions are often shaped by fragmented external signals and weak synthesis.",
    how: "Stem helps teams monitor the signals that influence timing, readiness, competitive movement, and external viability.",
    outcome: "Better-timed growth decisions with more defensible reasoning.",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = React.useState(useCases[0].id);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-deep-ink">
            Designed for the decisions teams cannot afford to get wrong.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Control */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={cn(
                  "text-left p-6 rounded-2xl transition-all duration-200 border",
                  activeTab === useCase.id
                    ? "bg-primary/5 border-primary/20 shadow-sm"
                    : "border-transparent hover:bg-gray-50 text-gray-500"
                )}
              >
                <h3 className={cn(
                  "text-lg font-bold mb-1",
                  activeTab === useCase.id ? "text-primary" : "text-gray-900"
                )}>
                  {useCase.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              {useCases.map((useCase) => (
                useCase.id === activeTab && (
                  <motion.div
                    key={useCase.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-soft-bg rounded-[3rem] p-10 md:p-16 border border-gray-100"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">The Question</h4>
                          <p className="text-2xl font-bold text-deep-ink leading-tight">{useCase.question}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Current Pain</h4>
                          <p className="text-gray-600">{useCase.pain}</p>
                        </div>
                      </div>
                      <div className="space-y-8">
                         <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">How Stem Helps</h4>
                          <p className="text-gray-600">{useCase.how}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                           <h4 className="text-xs font-black uppercase tracking-widest text-green-500 mb-4">Desired Outcome</h4>
                           <p className="font-bold text-deep-ink italic">"{useCase.outcome}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
