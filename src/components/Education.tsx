import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { educationData } from '@/data/content';

export function Education() {
  return (
    <section id="speaking" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{educationData.title}</h2>
            <p className="text-slate-400">Sharing knowledge to build the next generation of XR creators.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {educationData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 rounded-full font-bold transition-colors shadow-lg shadow-white/5"
            >
              {educationData.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
