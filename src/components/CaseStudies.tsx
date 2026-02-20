import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { caseStudiesData } from '@/data/content';
import { ProjectModal } from './ProjectModal';

export function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<typeof caseStudiesData[0] | null>(null);

  return (
    <section id="work" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {caseStudiesData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div 
                className="w-full md:w-1/2 group relative overflow-hidden rounded-2xl border border-slate-800 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <span className="text-blue-400 font-medium tracking-wider text-sm uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-2">Problem</h4>
                    <p className="text-slate-400 line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-2">Solution</h4>
                    <p className="text-slate-400 line-clamp-2">{project.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <h4 className="text-blue-400 font-semibold mb-2">Impact</h4>
                    <p className="text-slate-300 font-medium">{project.impact}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-8 flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
