import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowRight, FileText, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights | Market Intelligence & Fintech Briefs",
  description: "Read the latest reports, briefs, and observations on market shifts, competitor trends, and policy changes.",
};

export default function Insights() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Insights Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="max-w-4xl">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Market Thinking</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-ink mb-8 leading-[1.1]">
            Market intelligence for teams{" "}
            <span className="text-primary">navigating change.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Read reports, briefs, and market observations designed to help strategy 
            and growth teams make better external decisions.
          </p>
        </div>
      </section>

      {/* Featured Report */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            
            <div className="lg:w-2/3 relative z-10">
               <span className="bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 inline-block">Featured Report</span>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The 2026 State of Fintech Intelligence Report</h2>
               <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                 Download our flagship intelligence brief covering the meaningful market shifts 
                 and competitive trends affecting Nigerian financial services.
               </p>
               <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-10">
                 Download the Report <FileText className="ml-2" size={20} />
               </Button>
            </div>
            
            <div className="lg:w-1/3 flex justify-center">
               <div className="w-64 h-80 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center p-8 text-center rotate-3 shadow-2xl">
                  <div className="space-y-4">
                     <div className="w-12 h-1 bg-white/40 mx-auto rounded-full"></div>
                     <div className="text-xs font-black uppercase tracking-widest opacity-60">Intelligence Brief</div>
                     <div className="font-bold text-lg leading-tight">State of Fintech 2026</div>
                     <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                        <FileText size={32} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 md:px-6 py-12">
         <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold text-deep-ink">Latest Briefs</h2>
            <div className="flex space-x-2">
               {["All", "Reports", "Strategy", "Risk", "Expansion"].map(c => (
                 <button key={c} className="px-4 py-2 rounded-full text-xs font-bold border border-gray-200 hover:border-primary transition-colors">
                   {c}
                 </button>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.title} className="group cursor-pointer">
                 <div className="h-64 w-full bg-soft-bg rounded-3xl mb-6 overflow-hidden border border-gray-100 relative group-hover:shadow-xl transition-all">
                    <div className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                      {article.category}
                    </div>
                 </div>
                 <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3 font-medium uppercase tracking-widest">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                 </div>
                 <h3 className="text-xl font-bold text-deep-ink mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                 <div className="mt-6 flex items-center text-xs font-black uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
                   Read Brief <ArrowRight className="ml-2" size={14} />
                 </div>
              </div>
            ))}
         </div>
      </section>

    </main>
  );
}
