import { Metadata } from "next";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Scoping Call | Start the Conversation",
  description: "Book a strategy-focused scoping call to identify your high-value monitoring needs and map Stem to your workflows.",
};

export default function RequestScopingCall() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-soft-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-deep-ink mb-6 tracking-tight leading-[1.1]">
              Start with a conversation focused on your{" "}
              <span className="text-primary">decision environment.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Tell us what your team is trying to track, assess, or decide. 
              We’ll show you how Stem could fit your workflow.
            </p>

            <div className="space-y-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">What this conversation is for</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Decision Context", desc: "Understand your current decision environment and uncertainty." },
                  { title: "High-Value Monitoring", desc: "Identify the market signals that matter most to your team." },
                  { title: "Use Case Mapping", desc: "Map Stem's capabilities to your specific workflows." },
                  { title: "Fit Assessment", desc: "Determine if Stem is the right intelligence system for you." },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-primary">
                      <CheckCircle2 size={18} />
                      <span className="font-bold text-deep-ink uppercase text-xs tracking-widest">{item.title}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 p-8 bg-white/50 rounded-3xl border border-gray-100 italic text-gray-600">
              "We're looking for partners who are serious about turning market noise into strategic leverage. 
              This call is not a sales trap—it's a scoping exercise."
            </div>
          </div>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            <InquiryForm />
          </div>

        </div>
      </div>
    </main>
  );
}
