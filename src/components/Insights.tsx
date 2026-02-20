import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { insightsData } from '@/data/content';

export function Insights() {
  return (
    <section id="insights" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full" />
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insightsData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-slate-900 p-8 rounded-b-xl rounded-t-sm border border-slate-800 group-hover:border-slate-700 transition-all group-hover:-translate-y-2 duration-300">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
