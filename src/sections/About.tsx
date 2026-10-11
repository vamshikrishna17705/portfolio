import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EDUCATION_DATA, LEADERSHIP_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const children = [...left.children, ...right.children];

    gsap.fromTo(
      children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.08,
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-[100px] border-t border-white/[0.05]"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div ref={leftRef}>
            <div className="text-caption text-[#00d4ff] mb-3">
              01 · PROFILE & BACKGROUND
            </div>
            <h2 className="font-display text-section-heading text-white mb-6">
              About Vamshi
            </h2>

            <div className="space-y-5 text-body-large text-[rgba(255,255,255,0.7)] leading-relaxed">
              <p>
                I am a B.Tech (Hons.) scholar in Metallurgical and Materials Engineering at the{' '}
                <span className="text-white font-medium">Indian Institute of Technology, Kharagpur</span>{' '}
                (Roll: {PERSONAL_INFO.rollNumber}, Class of 2027).
              </p>
              <p>
                My journey spans three interlocked disciplines: <strong className="text-white">Product Management</strong>, where I translate qualitative feedback into quantitative PRDs and growth funnels; <strong className="text-white">AI & Data Engineering</strong>, where I construct machine learning pipelines (XGBoost, Isolation Forest) and LLM-powered interfaces; and <strong className="text-white">Materials Science</strong>, where I investigate green hydrometallurgy and electrochemical battery systems.
              </p>
              <p>
                Beyond academics, I am the Co-Founder of <span className="text-[#00d4ff] font-medium">Signe</span>, a customized D2C apparel brand generating over <strong className="text-white">₹9,00,000 in revenue</strong>, handling end-to-end supply chains, digital marketing funnels, and inventory forecasting.
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-8 pl-5 border-l-2 border-[#00d4ff] bg-white/[0.02] p-4 rounded-r-xl">
              <p className="font-display text-[18px] italic text-[rgba(255,255,255,0.75)] leading-relaxed">
                "Connecting data models with human workflows: from blast-furnace thermodynamics to fast-paced D2C supply chains and AI product roadmaps."
              </p>
            </blockquote>

            {/* Leadership Highlights */}
            <div className="mt-10">
              <div className="flex items-center gap-2 text-caption text-[#00d4ff] mb-4">
                <Users size={16} />
                <span>Leadership & Impact</span>
              </div>
              <div className="space-y-4">
                {LEADERSHIP_DATA.map((item) => (
                  <div key={item.role} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-[15px] font-semibold text-white">{item.role}</span>
                      <span className="text-[11px] font-mono-jet text-[rgba(255,255,255,0.5)]">{item.period}</span>
                    </div>
                    <div className="text-[13px] text-[#00d4ff] mb-2">{item.organization}</div>
                    <p className="text-[12px] text-[rgba(255,255,255,0.6)] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Credentials */}
          <div ref={rightRef} className="space-y-8">
            {/* Profile Avatar Card */}
            <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-28 h-28 shrink-0 overflow-hidden rounded-2xl border border-[rgba(0,212,255,0.3)] shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                <img
                  src="/images/profile.png"
                  alt="Arepally Vamshi Krishna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-[18px] font-bold text-white mb-1 font-display">
                  Arepally Vamshi Krishna
                </div>
                <div className="text-[13px] text-[#00d4ff] mb-2">
                  IIT Kharagpur · 23MT10009
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.6)] leading-normal">
                  Metallurgical & Materials Engineering (Hons.) · Entrepreneur & Product Builder
                </p>
              </div>
            </div>

            {/* Formal Education Card */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-caption text-[#00d4ff] mb-6">
                <GraduationCap size={18} />
                <span>Academic Record</span>
              </div>

              <div className="space-y-6">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="relative pl-6 border-l border-white/[0.1] pb-2 last:pb-0">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-[14px] font-semibold text-white">{edu.institution}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono-jet bg-white/[0.08] text-white">
                        {edu.score}
                      </span>
                    </div>
                    <div className="text-[13px] text-[rgba(255,255,255,0.85)] mb-1">{edu.degree}</div>
                    <div className="text-[11px] font-mono-jet text-[rgba(255,255,255,0.4)] mb-2">{edu.year}</div>
                    {edu.detail && (
                      <p className="text-[12px] text-[rgba(255,255,255,0.55)] leading-relaxed">
                        {edu.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 text-center">
                <div className="font-display text-[26px] font-bold text-[#00d4ff]">10+</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.6)] mt-1 uppercase tracking-wider font-mono-jet">
                  Internships & Training
                </div>
              </div>
              <div className="glass-card p-5 text-center">
                <div className="font-display text-[26px] font-bold text-white">3</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.6)] mt-1 uppercase tracking-wider font-mono-jet">
                  CV Specializations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
