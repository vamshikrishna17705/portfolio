import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPETITIONS_DATA, STATS_DATA } from '../data/portfolioData';
import { Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const num0Ref = useRef<HTMLSpanElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);
  const numberRefs = [num0Ref, num1Ref, num2Ref, num3Ref];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
    });

    STATS_DATA.forEach((stat, index) => {
      const animObj = { val: 0 };
      const el = numberRefs[index].current;
      if (!el) return;

      tl.to(
        animObj,
        {
          val: stat.numericValue,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            if (stat.numericValue >= 100000) {
              const inLakhs = (animObj.val / 100000).toFixed(0);
              el.textContent = `${stat.prefix}${inLakhs}L${stat.suffix}`;
            } else {
              el.textContent = `${stat.prefix}${Math.round(animObj.val)}${stat.suffix}`;
            }
          },
        },
        index * 0.15
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="bg-[#0e0e0e] py-[90px] border-y border-white/[0.06]"
    >
      <div className="content-container">
        {/* Metric Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-14 border-b border-white/[0.08]">
          {STATS_DATA.map((stat, idx) => (
            <div key={stat.label} className="text-center group">
              <span
                ref={numberRefs[idx]}
                className="font-display text-[clamp(34px,5vw,56px)] font-bold text-[#00d4ff] block transition-transform group-hover:scale-105 duration-300"
              >
                0
              </span>
              <span className="text-[14px] font-semibold text-white mt-1 block">
                {stat.label}
              </span>
              <span className="text-caption text-[rgba(255,255,255,0.45)] mt-1 block font-mono-jet">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Competitions & Podiums Section */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-caption text-[#00d4ff] mb-2">
                <Trophy size={16} />
                <span>02 · AWARDS & COMPETITIONS</span>
              </div>
              <h3 className="font-display text-[26px] sm:text-[32px] font-bold text-white">
                Inter-IIT & National Case Study Wins
              </h3>
            </div>
            <p className="text-[13px] text-[rgba(255,255,255,0.6)] max-w-md">
              Top national and campus podium finishes evaluated across real-world civil engineering, quick-commerce, and clean energy business plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPETITIONS_DATA.map((comp) => {
              const isGold = comp.award.includes('Gold');
              return (
                <div
                  key={comp.title}
                  className="glass-card p-6 flex flex-col justify-between transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-mono-jet font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                          isGold
                            ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                            : 'bg-slate-300/15 text-slate-200 border border-slate-300/30'
                        }`}
                      >
                        <Trophy size={12} />
                        {comp.award}
                      </span>
                      <span className="text-[11px] font-mono-jet text-[rgba(255,255,255,0.5)]">
                        {comp.date}
                      </span>
                    </div>

                    <h4 className="font-display text-[18px] font-bold text-white mb-1.5 leading-snug">
                      {comp.title}
                    </h4>
                    <div className="text-[13px] text-[#00d4ff] mb-3">
                      {comp.organization}
                    </div>
                    <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-4">
                      {comp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {comp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-[12px] text-[rgba(255,255,255,0.6)] flex items-start gap-2">
                          <span className="text-[#00d4ff] mt-1 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {comp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono-jet px-2 py-0.5 rounded bg-white/[0.04] text-[rgba(255,255,255,0.6)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
