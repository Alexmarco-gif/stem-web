import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Search, TrendingUp, ShieldAlert, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases | Industry-Specific Intelligence Workflows",
  description: "Explore specific use cases for competitor tracking, market monitoring, policy risk, and expansion support in financial services.",
};

const useCasesDetail = [
  {
    title: "Competitor tracking",
    question: "What are competitors changing that we cannot afford to miss?",
    pain: "Important competitor moves are scattered across announcements, pricing changes, public signals, and category chatter.",
    how: "Stem tracks relevant entities, detects meaningful movement, and highlights the competitive changes that deserve attention.",
    outputs: ["competitor shift alert", "launch summary", "pricing movement update", "prioritized signal recap"],
    outcome: "Less surprise, faster response, stronger strategic awareness",
    icon: Search,
  },
  {
    title: "Market monitoring",
    question: "What is shifting in the market that affects how we should act?",
    pain: "Category movement is hard to track in one place and often becomes clear only after the window to act has narrowed.",
    how: "Stem synthesizes market signals, category changes, and emerging patterns into usable intelligence.",
    outputs: ["market trend summary", "category signal feed", "change detection brief"],
    outcome: "Earlier visibility into meaningful market change",
    icon: TrendingUp,
  },
  {
    title: "Policy / risk monitoring",
    question: "What changes in policy or regulation should influence our next move?",
    pain: "Teams often hear about policy shifts too late or without enough context to interpret the impact.",
    how: "Stem surfaces important policy and risk changes, connects them to monitored categories, and supports faster assessment.",
    outputs: ["policy change alert", "risk summary", "monitored development brief"],
    outcome: "Reduced exposure and faster reaction to important external changes",
    icon: ShieldAlert,
  },
  {
    title: "Expansion support",
    question: "Is this the right time to move, wait, or investigate further?",
    pain: "Expansion decisions are often shaped by fragmented external signals and weak synthesis.",
    how: "Stem helps teams monitor the signals that influence timing, readiness, competitive movement, and external viability.",
    outputs: ["monitored market summary", "opportunity shift brief", "change-based decision support signal"],
    outcome: "Better-timed growth decisions with more defensible reasoning",
    icon: Globe,
  },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Use Cases Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl text-center mx-auto">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Workflow Specifics</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-ink mb-8 leading-[1.1]">
            Use cases for teams that cannot afford to{" "}
            <span className="text-primary">miss what is changing.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stem helps teams monitor competitor movement, market shifts, policy changes, 
            and expansion signals so they can make better calls faster.
          </p>
          <Button size="lg">Request a Scoping Call</Button>
        </div>
      </section>

      {/* Individual Use Case Blocks */}
      <section className="container mx-auto px-4 md:px-6 space-y-24">
        {useCasesDetail.map((uc, i) => (
          <div key={uc.title} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`${i % 2 === 1 ? 'lg:order-last' : ''}`}>
               <div className="w-16 h-16 rounded-[2rem] bg-primary/5 text-primary flex items-center justify-center mb-8">
                  <uc.icon size={32} />
               </div>
               <h2 className="text-4xl font-extrabold text-deep-ink mb-6">{uc.title}</h2>
               <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3">The Question</h4>
                    <p className="text-2xl font-bold text-deep-ink italic leading-tight">{uc.question}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Current Pain</h4>
                    <p className="text-gray-600 leading-relaxed">{uc.pain}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">How Stem Helps</h4>
                    <p className="text-gray-600 leading-relaxed">{uc.how}</p>
                  </div>
               </div>
            </div>

            <div className="bg-soft-bg rounded-[3rem] p-10 md:p-16 border border-gray-100 flex flex-col justify-between h-full">
               <div className="mb-12">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Decision Outputs</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {uc.outputs.map(out => (
                      <div key={out} className="bg-white p-4 rounded-xl border border-gray-50 flex items-center space-x-3 text-sm font-bold text-deep-ink">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-primary p-8 rounded-3xl text-white shadow-xl shadow-primary/20">
                  <h4 className="text-xs font-black uppercase tracking-widest text-white/60 mb-4">Strategic Outcome</h4>
                  <p className="text-xl font-bold leading-tight">{uc.outcome}</p>
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* Unified Summary */}
      <section className="mt-32 bg-deep-ink py-24 rounded-[4rem] mx-4 md:mx-6 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h2 className="text-4xl font-extrabold mb-8">Across every use case, the value is the same: clearer signals, faster judgment, better decisions.</h2>
           <p className="text-xl text-gray-400 mb-12">
             Stem reduces the manual research load and eliminates the strategic blind spots 
             that delay growth and expose companies to external risk.
           </p>
           <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
             Start Your Scoping Call
           </Button>
        </div>
      </section>

    </main>
  );
}
