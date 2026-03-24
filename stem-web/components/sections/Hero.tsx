"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Visual Metaphor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <HeroAnimation />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                Decision Intelligence for Fast-Moving Markets
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-deep-ink mb-6 leading-[1.1]">
                Stop making high-stakes decisions{" "}
                <span className="text-primary">half-blind.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stem helps fintech and financial-services teams in Nigeria detect
                meaningful market changes early and act with more confidence,
                less guesswork, and less manual research.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                  Request a Scoping Call <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Built for strategy & growth teams
                </span>
                <span className="text-gray-300">|</span>
                <span>Decision-ready intelligence</span>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative h-[500px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAnimation() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1000 1000">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#3563EB" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3563EB" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[...Array(40)].map((_, i) => (
        <motion.circle
          key={i}
          r={Math.random() * 2 + 1}
          fill="#3563EB"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            x: [null, Math.random() * 1000],
            y: [null, Math.random() * 1000],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center relative z-10"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl shadow-primary/40">
            S
          </div>
        </div>
        
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 border-2 border-primary/20 rounded-full"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Nodes converging */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 8;
          const startX = 250 + Math.cos(angle) * 200;
          const startY = 250 + Math.sin(angle) * 200;
          return (
            <g key={i}>
              <motion.circle
                r="4"
                fill="#3563EB"
                initial={{ cx: startX, cy: startY, opacity: 0 }}
                animate={{
                  cx: 250,
                  cy: 250,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeIn",
                }}
              />
              <motion.line
                x1={startX}
                y1={startY}
                x2={250}
                y2={250}
                stroke="#3563EB"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.2, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            </g>
          );
        })}
      </svg>
      
      {/* Floating Insight Cards */}
      <motion.div
        className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Competitor Shift</div>
          <div className="text-xs font-bold text-deep-ink">Pricing update detected</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Market Signal</div>
          <div className="text-xs font-bold text-deep-ink">Policy change summary</div>
        </div>
      </motion.div>
    </div>
  );
}
