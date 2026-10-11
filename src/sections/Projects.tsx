import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, Filter } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { DomainType } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  activeDomain: DomainType;
}

export default function Projects({ activeDomain }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter projects by category or active domain
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory !== 'All') {
      return project.category === selectedCategory;
    }
    if (activeDomain !== 'all') {
      return project.domain === activeDomain;
    }
    return true;
  });

  const categories = ['All', 'AI / Software', 'Data & Quantitative', 'Deep Tech & Metallurgy'];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-[100px] border-b border-white/[0.05]"
    >
      <div className="content-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-caption text-[#00d4ff] mb-3">
              05 · TECHNICAL ARTIFACTS & RESEARCH
            </div>
            <h2 className="font-display text-section-heading text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-body-large text-[rgba(255,255,255,0.65)] max-w-xl">
            From production-grade full-stack AI engines and financial valuation scripts to IIT Kharagpur faculty-guided metallurgical research.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-[12px] font-mono-jet text-[rgba(255,255,255,0.4)] mr-2 uppercase tracking-wider flex items-center gap-1.5">
            <Filter size={13} />
            Filter By:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-[#0a0a0a] font-semibold'
                  : 'bg-white/[0.04] text-[rgba(255,255,255,0.7)] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#111111] rounded-2xl border border-white/[0.07] p-7 lg:p-10 transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-8 items-start">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-[32px] sm:text-[40px] font-bold text-[rgba(255,255,255,0.12)] leading-none group-hover:text-[#00d4ff]/30 transition-colors">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-jet uppercase bg-white/[0.05] text-[rgba(255,255,255,0.7)] border border-white/[0.08]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-[13px] text-[rgba(255,255,255,0.5)] font-mono-jet mb-4">
                    {project.subtitle}
                  </div>

                  <p className="text-[14px] leading-relaxed text-[rgba(255,255,255,0.7)] mb-5">
                    {project.description}
                  </p>

                  {/* Bullet points from CV */}
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-[13px] text-[rgba(255,255,255,0.6)] flex items-start gap-2.5 leading-relaxed">
                        <span className="text-[#00d4ff] mt-1 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill-tag text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#00d4ff] hover:underline"
                    >
                      <Github size={15} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Right: Preview Image Card */}
                <div className="relative overflow-hidden rounded-xl aspect-[16/11] border border-white/[0.06] bg-[#161616]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-jet text-[rgba(255,255,255,0.7)] pointer-events-none">
                    <span>{project.category}</span>
                    <span className="text-[#00d4ff]">IIT Kharagpur / Self</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
