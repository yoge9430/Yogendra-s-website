import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Tag, ArrowUpRight, Layers, Lightbulb, TrendingUp } from 'lucide-react';
import { caseStudiesData } from '@/data/content';

type Project = typeof caseStudiesData[0];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-[60] cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header Image */}
              <div className="relative h-48 sm:h-64 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 sm:left-8 right-6">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {project.category}
                  </span>
                  <h2 id="modal-title" className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12">
                  
                  {/* Main Content */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        Overview
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50">
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-red-400" />
                          The Problem
                        </h4>
                        <p className="text-slate-400 text-sm">{project.problem}</p>
                      </div>

                      <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50">
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-yellow-400" />
                          The Solution
                        </h4>
                        <p className="text-slate-400 text-sm">{project.solution}</p>
                      </div>

                      <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50">
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          The Impact
                        </h4>
                        <p className="text-slate-400 text-sm">{project.impact}</p>
                      </div>
                    </div>

                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Gallery</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {project.gallery.map((img, idx) => (
                            <img 
                              key={idx}
                              src={img}
                              alt={`Gallery ${idx + 1}`}
                              className="rounded-lg border border-slate-800 hover:border-slate-600 transition-colors"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                        Client
                      </h3>
                      <div className="text-white font-medium text-lg">
                        {project.client}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800">
                      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group">
                        View Live Project
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
