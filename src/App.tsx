/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header, Footer } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Metrics } from '@/components/Metrics';
import { CaseStudies } from '@/components/CaseStudies';
import { Education } from '@/components/Education';
import { Insights } from '@/components/Insights';
import { Contact } from '@/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Metrics />
        <CaseStudies />
        <Education />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
