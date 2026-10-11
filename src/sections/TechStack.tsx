import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS_DATA } from '../data/portfolioData';
import type { DomainType } from '../data/portfolioData';
import { Wrench, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TechStackProps {
  activeDomain: DomainType;
}

export const COURSEWORK = [
  'Engineering Materials',
  'Metallurgical Thermodynamics & Kinetics',
  'Deformation & Mechanical Working',
  'Materials Processing',
  'Computational Metallurgy',
  'Transport Phenomena',
  'Creep, Fatigue & Fracture',
  'Extractive Metallurgy',
  'Phase Transformations & Heat Treatment',
  'Corrosion & Environmental Degradation',
  'Materials Characterization',
  'XRD & TEM',
  'Physics of Materials',
  'Iron & Steel Making',
];

export default function TechStack({ activeDomain }: TechStackProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    gsap.fromTo(
      cards.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  const visibleCategories =
    activeDomain === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter(
          (category) => category.domain === activeDomain || category.domain === 'all'
        );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-[#0e0e0e] py-[100px] border-b border-white/[0.05]"
    >
      <div className="content-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-caption text-[#00d4ff] mb-3 flex items-center justify-center gap-2">
            <Wrench size={15} />
            <span>06 · SKILLS & METHODOLOGIES</span>
          </div>
          <h2 className="font-display text-section-heading text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-body-large text-[rgba(255,255,255,0.65)]">
            A versatile toolkit calibrated for product execution, machine learning pipelines, quantitative analytics, and physical materials research.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {visibleCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] hover:-translate-y-1"
            >
              <div>
                <h3 className="font-display text-[18px] font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className="h-[1px] bg-white/[0.08] mb-4" />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-jet bg-white/[0.04] text-[rgba(255,255,255,0.85)] border border-white/[0.06] hover:border-[rgba(0,212,255,0.4)] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IIT Kharagpur Coursework Information */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center gap-2 text-caption text-[#00d4ff] mb-3">
            <BookOpen size={16} />
            <span>IIT KHARAGPUR CORE COURSEWORK</span>
          </div>
          <h3 className="font-display text-[20px] font-bold text-white mb-4">
            Materials & Metallurgical Curriculum
          </h3>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 rounded-lg text-[11px] font-mono-jet bg-white/[0.03] text-[rgba(255,255,255,0.7)] border border-white/[0.05]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
