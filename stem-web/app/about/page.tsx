import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Our Mission to Clarify the Market",
  description: "Stem exists to help teams in fast-moving, under-instrumented markets make more defensible decisions with better visibility.",
};

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* About Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-ink mb-8 leading-[1.1]">
            Built for teams making difficult decisions in{" "}
            <span className="text-primary">fast-moving markets.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Stem exists to help teams reduce blind spots, cut through fragmented signals, 
            and make external decisions with more confidence.
          </p>
        </div>
      </section>

      {/* Why We Built Stem */}
      <section className="py-24 bg-soft-bg">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-4xl font-extrabold text-deep-ink mb-6">Why we built Stem.</h2>
                 <p className="text-lg text-gray-600 leading-relaxed mb-6">
                   Important market decisions are often made with incomplete visibility. 
                   Under-instrumented markets deserve better intelligence systems that 
                   provide usable clarity, not just more noise.
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed">
                   We believe that the quality of a decision is directly tied to the 
                   quality of the intelligence that precedes it. Stem was built to 
                   bridge the gap between fragmented data and strategic action.
                 </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">The Problem We Solve</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Fragmented external data",
                    "Inconsistent trust in sources",
                    "Delayed synthesis",
                    "Hard-to-defend recommendations"
                  ].map(p => (
                    <div key={p} className="p-6 bg-white rounded-2xl border border-gray-100 font-bold text-deep-ink">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-deep-ink mb-4">What we believe.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beliefs.map((belief, i) => (
              <div key={i} className="p-8 rounded-3xl bg-soft-bg border border-gray-100 flex flex-col justify-center">
                <p className="font-bold text-deep-ink leading-tight text-lg italic">"{belief}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24 border-t border-gray-100">
         <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-deep-ink mb-6">Intelligence is only useful if teams trust it.</h2>
            <Button size="lg">Request a Scoping Call</Button>
         </div>
      </section>
    </main>
  );
}
