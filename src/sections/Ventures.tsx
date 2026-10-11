import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VENTURE_DATA } from '../data/portfolioData';
import { ShoppingBag, TrendingUp, ExternalLink, Instagram, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Ventures() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.venture-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
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
      id="ventures"
      ref={sectionRef}
      className="bg-[#0e0e0e] py-[90px] border-b border-white/[0.06]"
    >
      <div className="content-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-caption text-[#00d4ff] mb-2 flex items-center gap-2">
              <ShoppingBag size={15} />
              <span>04 · ENTREPRENEURSHIP</span>
            </div>
            <h2 className="font-display text-section-heading text-white">
              Venture & Brand Building
            </h2>
          </div>
          <p className="text-body-large text-[rgba(255,255,255,0.65)] max-w-lg">
            Taking an idea from inception to ₹9,00,000+ top-line revenue through hands-on operations, supply chain management, and digital customer acquisition.
          </p>
        </div>

        {/* Featured Venture Card */}
        <div className="venture-card relative rounded-2xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/[0.08] p-8 lg:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Venture Description */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono-jet uppercase bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30">
                  {VENTURE_DATA.role}
                </span>
                <span className="text-[12px] font-mono-jet text-[rgba(255,255,255,0.5)]">
                  {VENTURE_DATA.period}
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-3">
                <h3 className="font-display text-[36px] sm:text-[44px] font-bold text-white tracking-tight">
                  {VENTURE_DATA.name}
                </h3>
                <span className="text-[16px] text-[rgba(255,255,255,0.6)] font-normal">
                  — {VENTURE_DATA.title}
                </span>
              </div>

              <p className="text-[15px] leading-relaxed text-[rgba(255,255,255,0.7)] mb-6">
                {VENTURE_DATA.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {VENTURE_DATA.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[rgba(255,255,255,0.75)]">
                    <span className="text-[#00d4ff] mt-0.5 shrink-0">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={VENTURE_DATA.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-pill text-[13px] font-semibold bg-white text-[#0a0a0a] hover:bg-[#00d4ff] transition-all duration-200"
                >
                  <span>Explore {VENTURE_DATA.websiteDisplay}</span>
                  <ExternalLink size={15} />
                </a>

                <div className="flex items-center gap-2 text-[12px] text-[rgba(255,255,255,0.5)] font-mono-jet pl-2">
                  <Instagram size={14} />
                  <span>Instagram</span>
                  <span className="text-[rgba(255,255,255,0.2)]">·</span>
                  <MessageCircle size={14} />
                  <span>WhatsApp Business</span>
                </div>
              </div>
            </div>

            {/* Right: Metrics & Operational Summary Card */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-caption text-[#00d4ff]">Top-Line Revenue</span>
                  <TrendingUp size={16} className="text-[#00d4ff]" />
                </div>
                <div className="font-display text-[40px] font-bold text-white tracking-tight">
                  ₹9,00,000+
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-1">
                  Profitable D2C brand operating with positive unit economics and repeat cohort retention.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[11px] font-mono-jet text-[rgba(255,255,255,0.5)] mb-1">
                    SUPPLY CHAIN
                  </div>
                  <div className="text-[14px] font-semibold text-white">
                    End-to-End
                  </div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.5)] mt-0.5">
                    Sourcing to dispatch
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[11px] font-mono-jet text-[rgba(255,255,255,0.5)] mb-1">
                    CHANNELS
                  </div>
                  <div className="text-[14px] font-semibold text-white">
                    Omni-Channel
                  </div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.5)] mt-0.5">
                    Web, IG & WhatsApp
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-[11px] font-mono-jet text-[rgba(255,255,255,0.4)] mb-2 uppercase">
                  Core Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {VENTURE_DATA.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[10px] font-mono-jet bg-white/[0.05] text-[rgba(255,255,255,0.8)] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
