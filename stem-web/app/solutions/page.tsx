import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Target, Zap, TrendingUp, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Decision Intelligence Outcomes",
  description: "Outcome-first solutions for strategy and growth teams. Reduce strategic blind spots and move faster on market changes.",
};

const solutions = [
  {
    title: "Reduce strategic blind spots",
    desc: "Detect meaningful changes across competitors and markets before they become costly surprises.",
    icon: Target,
  },
  {
    title: "Move faster on market change",
    desc: "Shorten the time between an external signal and your team's tactical or strategic response.",
    icon: Zap,
  },
  {
    title: "Improve recommendation quality",
    desc: "Provide leadership with defensible, context-rich intelligence they can trust.",
    icon: TrendingUp,
  },
  {
    title: "Reduce manual research load",
    desc: "Free your strategy and growth teams from the friction of fragmented monitoring.",
    icon: ShieldCheck,
  },
];

export default function Solutions() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Solutions Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Outcome-First Solutions</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-ink mb-8 leading-[1.1]">
            Solutions for teams making external decisions{" "}
            <span className="text-primary">under uncertainty.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Stem helps strategy, growth, and leadership teams reduce blind spots, 
            improve timing, and make better market decisions with less manual research.
          </p>
          <Button size="lg">Request a Scoping Call</Button>
        </div>
      </section>

      {/* Problem Landscape */}
      <section className="py-24 bg-soft-bg">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-extrabold text-deep-ink mb-6">The problem is not a lack of data. It is a lack of usable clarity.</h2>
                <div className="space-y-4">
                  {[
                    "Signals are fragmented across too many sources",
                    "Important changes are easy to miss in the noise",
                    "Manual synthesis is slow and prone to bias",
                    "Recommendations are harder to defend without lineage",
                    "Teams react later than the market window allows"
                  ].map(item => (
                    <div key={item} className="flex items-center space-x-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <p className="text-2xl font-bold text-deep-ink italic leading-tight mb-8">
                  "We spent weeks monitoring competitor moves manually. Stem turned that into a daily decision signal."
                </p>
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                   <div>
                     <div className="font-bold text-deep-ink">Strategy Lead</div>
                     <div className="text-sm text-gray-500">Tier 1 Fintech, Nigeria</div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <solution.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-deep-ink mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{solution.desc}</p>
                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest cursor-pointer group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer-Role Relevance */}
      <section className="py-24 bg-soft-bg rounded-[4rem] mx-4 md:mx-6">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-4xl font-extrabold text-deep-ink mb-6">Designed for the roles that drive growth.</h2>
             <p className="text-gray-600">Stem provides the intelligence layer for the decision-makers under pressure.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { role: "Strategy Lead", focus: "Recommendation quality and defensibility." },
               { role: "Growth Lead", focus: "Market-entry timing and competitor response." },
               { role: "Founder / CEO", focus: "External risk exposure and strategic visibility." },
             ].map((item) => (
               <div key={item.role} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-deep-ink mb-3">{item.role}</h3>
                  <p className="text-gray-500 mb-6">{item.focus}</p>
                  <div className="w-full h-px bg-gray-100 mb-6"></div>
                  <div className="flex items-center text-xs font-black uppercase tracking-widest text-primary">
                    See specific value <ArrowRight className="ml-2" size={14} />
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

    </main>
  );
}
