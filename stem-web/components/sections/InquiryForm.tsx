"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function InquiryForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-bold text-deep-ink mb-4">Request received</h2>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
          We've received your request for a scoping call. A member of our strategy team will reach out to you within 24 hours.
        </p>
        <Button variant="secondary" onClick={() => setSubmitted(false)}>
          Send another request
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-primary/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-deep-ink ml-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Alex Marco"
              className="w-full px-6 py-4 rounded-2xl bg-soft-bg border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-deep-ink ml-1">Work Email</label>
            <input 
              required
              type="email" 
              placeholder="alex@company.com"
              className="w-full px-6 py-4 rounded-2xl bg-soft-bg border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-deep-ink ml-1">Company</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Stem-Cogent"
              className="w-full px-6 py-4 rounded-2xl bg-soft-bg border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-deep-ink ml-1">Role</label>
            <input 
              required
              type="text" 
              placeholder="Strategy Lead"
              className="w-full px-6 py-4 rounded-2xl bg-soft-bg border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-deep-ink ml-1">Primary use case</label>
          <select 
            className="w-full px-6 py-4 rounded-2xl bg-soft-bg border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none"
          >
            <option>Competitor tracking</option>
            <option>Market monitoring</option>
            <option>Policy / risk monitoring</option>
            <option>Expansion support</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-deep-ink ml-1">What are you trying to understand or improve?</label>
          <textarea 
            rows={4}
            placeholder="Tell us about your decision environment..."
            className="w-full px-6 py-4 rounded-2xl bg-soft-bg border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <Button size="lg" className="w-full h-16 text-base">
          Submit Scoping Call Request <ArrowRight className="ml-2" size={20} />
        </Button>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
}
