import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INTERNSHIPS_DATA } from '../data/portfolioData';
import type { DomainType } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  activeDomain: DomainType;
}

export default function Experience({ activeDomain }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedDomain, setSelectedDomain] = useState<DomainType>(activeDomain);

  // Sync with parent domain filter if changed
  useEffect(() => {
    setSelectedDomain(activeDomain);
  }, [activeDomain]);

  const filteredInternships = INTERNSHIPS_DATA.filter((item) => {
    if (selectedDomain === 'all') return true;
    return item.domain === selectedDomain;
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-[100px] border-b border-white/[0.05]"
    >
      <div className="content-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-caption text-[#00d4ff] mb-3">
              03 · PROFESSIONAL EXPERIENCE
            </div>
            <h2 className="font-display text-section-heading text-white">
              Internships & Industry
            </h2>
          </div>
          <p className="text-body-large text-[rgba(255,255,255,0.65)] max-w-xl">
            10 practical roles bridging high-growth startups (Bounce Infinity, Lovingroom, Imago AI) and industrial core manufacturing (BHEL, RINL, MIDHANI).
          </p>
        </div>

        {/* Local Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-[12px] font-mono-jet text-[rgba(255,255,255,0.4)] mr-2 uppercase tracking-wider">
            Filter Track:
          </span>
          {(
            [
              { id: 'all', label: `All Roles (${INTERNSHIPS_DATA.length})` },
              { id: 'pm', label: 'Product & Growth' },
              { id: 'data-ai', label: 'Data Science & AI' },
              { id: 'engineering', label: 'Materials & Metallurgy' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDomain(tab.id as DomainType)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                selectedDomain === tab.id
                  ? 'bg-white text-[#0a0a0a] font-semibold'
                  : 'bg-white/[0.04] text-[rgba(255,255,255,0.6)] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInternships.map((job) => {
            const domainBadge =
              job.domain === 'pm'
                ? { text: 'Product Mgmt', color: 'border-blue-400/30 text-blue-400 bg-blue-400/10' }
                : job.domain === 'data-ai'
                ? { text: 'AI & Data', color: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/10' }
                : { text: 'Core Metallurgy', color: 'border-amber-400/30 text-amber-400 bg-amber-400/10' };

            return (
              <div
                key={job.id}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Top Bar: Company & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-[22px] font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                      {job.company}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-jet uppercase border ${domainBadge.color}`}>
                      {domainBadge.text}
                    </span>
                  </div>

                  {/* Role Title */}
                  <div className="text-[15px] font-medium text-white/90 mb-3 flex items-center gap-1.5">
                    <Briefcase size={15} className="text-[#00d4ff]" />
                    <span>{job.role}</span>
                  </div>

                  {/* Metadata: Location & Period */}
                  <div className="flex flex-wrap items-center gap-4 text-[12px] font-mono-jet text-[rgba(255,255,255,0.5)] mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </div>

                  {/* Objective */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[12px] text-[rgba(255,255,255,0.7)] leading-relaxed mb-4 italic">
                    <span className="font-semibold text-white/80 not-italic">Objective: </span>
                    {job.objective}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {job.highlights.map((bullet, idx) => (
                      <li key={idx} className="text-[13px] text-[rgba(255,255,255,0.65)] leading-relaxed flex items-start gap-2">
                        <ChevronRight size={14} className="text-[#00d4ff] shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Tags */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono-jet px-2.5 py-1 rounded bg-white/[0.04] text-[rgba(255,255,255,0.7)] border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
