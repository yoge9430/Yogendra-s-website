import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '@/data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 relative"
            >
              <Quote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6" />
              
              <p className="text-slate-300 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-800"
                />
                <div>
                  <div className="text-white font-bold">{testimonial.author}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
