import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Search, Layers, Zap, BarChart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform | Stem-Cogent Decision Intelligence",
  description: "Explore how Stem's decision intelligence engine transforms fragmented signals into actionable market and competitor insights.",
};

export default function Platform() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Platform Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Decision Intelligence Platform</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-ink mb-8 leading-[1.1]">
            A decision intelligence platform built for{" "}
            <span className="text-primary">external-world visibility.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Stem helps strategy and growth teams detect meaningful market changes, 
            synthesize fragmented signals, and turn ambiguity into defensible decisions.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Request a Scoping Call</Button>
            <Button variant="secondary" size="lg">See Use Cases</Button>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="bg-soft-bg py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <Search size={20} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-deep-ink mb-2">Continuous Monitoring</h3>
                     <p className="text-gray-500">Stem watches meaningful external signals across markets, competitors, and entities.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <Zap size={20} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-deep-ink mb-2">Change Detection</h3>
                     <p className="text-gray-500">Automatically identify shifts that deserve attention, filtering out background noise.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <ShieldCheck size={20} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-deep-ink mb-2">Defensible Context</h3>
                     <p className="text-gray-500">Signals are enriched with context and source lineage so you can trust the outputs.</p>
                   </div>
                 </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-deep-ink mb-6">What Stem does, in simple terms.</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe teams in fast-moving markets deserve better than fragmented data 
                and manual research. Stem transforms the way you observe and react 
                to the world outside your company.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 italic text-primary font-medium">
                "Stem moves your team from reactive monitoring to proactive, defensible decision-making."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="text-4xl font-extrabold text-deep-ink mb-20 text-center">How Stem turns fragmented signals into intelligence.</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
             {[
               { icon: Search, title: "Ingest", desc: "Monitors the markets, entities, and categories that matter." },
               { icon: Zap, title: "Detect", desc: "Identifies meaningful changes across competitors and policy." },
               { icon: Layers, title: "Synthesize", desc: "Groups and interprets signals for faster understanding." },
               { icon: BarChart, title: "Prioritize", desc: "Surfaces high-impact shifts above the noise." },
               { icon: ShieldCheck, title: "Deliver", desc: "Provides decision-ready outputs for your workflow." },
             ].map((step, i) => (
               <div key={step.title} className="relative p-6 rounded-3xl bg-soft-bg border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-deep-ink mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10 text-gray-200">
                      <ArrowRight size={20} />
                    </div>
                  )}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Outputs Section */}
      <section className="py-24 bg-deep-ink text-white rounded-[4rem] mx-4 md:mx-6 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-4xl font-extrabold mb-8">Outputs built for recommendations, not just observation.</h2>
               <div className="space-y-6">
                 {[
                   "Prioritized alerts for meaningful market shifts",
                   "Intelligence summaries for competitive movement",
                   "Monitored entity and market views",
                   "Shareable decision-support briefs for leadership",
                   "Traceable source lineage and context"
                 ].map(item => (
                   <div key={item} className="flex items-center space-x-3">
                     <CheckCircle2 className="text-primary shrink-0" size={20} />
                     <span className="text-lg text-gray-300">{item}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="relative">
                <div className="bg-white/10 p-8 rounded-[3rem] border border-white/5 backdrop-blur-sm">
                   <div className="space-y-4">
                     <div className="h-4 w-32 bg-primary/40 rounded-full animate-pulse"></div>
                     <div className="h-12 w-full bg-white/5 rounded-2xl"></div>
                     <div className="h-32 w-full bg-white/5 rounded-2xl flex items-center justify-center">
                        <BarChart className="text-white/20" size={48} />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full bg-white/5 rounded-2xl"></div>
                        <div className="h-20 w-full bg-white/5 rounded-2xl"></div>
                     </div>
                   </div>
                </div>
                {/* Floating tags */}
                <div className="absolute -top-6 -right-6 bg-primary px-4 py-2 rounded-full text-xs font-bold shadow-xl">DECISION READY</div>
             </div>
           </div>
        </div>
      </section>

    </main>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckCircle2({ className, size }: { className?: string; size: number }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
