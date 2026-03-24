import { Hero } from "@/components/sections/Hero";
import { ProblemStakes } from "@/components/sections/ProblemStakes";
import { SignalEngine } from "@/components/sections/SignalEngine";
import { ThreeStepPlan } from "@/components/sections/ThreeStepPlan";
import { UseCases } from "@/components/sections/UseCases";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStakes />
      <SignalEngine />
      <ThreeStepPlan />
      <UseCases />
      <CtaFinal />
    </main>
  );
}
