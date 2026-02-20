import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Twitter, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { contactData } from '@/data/content';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Speaking Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate API call
    // TODO: Replace with actual API call to POST /api/leads
    await new Promise(resolve => setTimeout(resolve, 1500));

    setFormState('success');
    setFormData({
      name: '',
      email: '',
      subject: 'Speaking Inquiry',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormState('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Let’s Build the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                Immersive Learning
              </span> Together.
            </motion.h2>
            
            <div className="space-y-6">
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{contactData.email}</span>
              </a>
              <a 
                href={`https://${contactData.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg">/in/yogendrasingh01</span>
              </a>
              <a 
                href={`https://twitter.com/${contactData.twitter.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
                <span className="text-lg">{contactData.twitter}</span>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-slate-950 z-20"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option>Speaking Inquiry</option>
                      <option>Project Collaboration</option>
                      <option>Workshop Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
