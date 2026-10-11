import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import WaveCanvas from '../components/WaveCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileText, ExternalLink } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
  onOpenCvModal: () => void;
}

export default function Hero({ onNavigate, onOpenCvModal }: HeroProps) {
  const labelRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .to(
        line1Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .to(
        line2Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .to(
        badgesRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        chevronRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <WaveCanvas />

      <div className="relative z-10 text-center flex flex-col items-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <div
          ref={labelRef}
          className="text-caption text-[rgba(255,255,255,0.6)] tracking-[0.18em] mb-4 opacity-0 translate-y-[30px]"
        >
          INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR · CLASS OF 2027
        </div>

        {/* Main Heading */}
        <div className="font-display text-hero mb-6 select-none">
          <div
            ref={line1Ref}
            className="text-white opacity-0 translate-y-[30px]"
            style={{ textShadow: '0 0 60px rgba(0,212,255,0.15)' }}
          >
            VAMSHI
          </div>
          <div
            ref={line2Ref}
            className="text-[#00d4ff] opacity-0 translate-y-[30px]"
            style={{ textShadow: '0 0 80px rgba(0,212,255,0.3)' }}
          >
            KRISHNA
          </div>
        </div>

        {/* Dynamic Domain Track Badges */}
        <div
          ref={badgesRef}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 opacity-0 translate-y-[30px]"
        >
          <span className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] font-mono-jet uppercase tracking-wider bg-white/[0.06] border border-white/[0.12] text-white">
            Product Management
          </span>
          <span className="text-[rgba(255,255,255,0.3)]">·</span>
          <span className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] font-mono-jet uppercase tracking-wider bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff]">
            AI & Data Systems
          </span>
          <span className="text-[rgba(255,255,255,0.3)]">·</span>
          <span className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] font-mono-jet uppercase tracking-wider bg-white/[0.06] border border-white/[0.12] text-white">
            Materials Engineering
          </span>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-body-large text-[rgba(255,255,255,0.7)] max-w-2xl mb-10 opacity-0 translate-y-[30px]"
        >
          Bridging strategic product thinking, machine learning pipelines, and deep engineering analysis.
          Co-Founder of <a href="https://signe.in" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00d4ff] underline decoration-[#00d4ff]/40">Signe</a> (₹9L+ revenue), intern across Bounce Infinity & Lovingroom, and Inter-IIT gold medalist.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-wrap gap-4 justify-center opacity-0 translate-y-[30px]"
        >
          <button
            onClick={() => onNavigate('experience')}
            className="bg-white text-[#0a0a0a] text-[14px] font-semibold px-8 py-[14px] rounded-pill transition-all duration-200 hover:bg-[#00d4ff] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
          >
            Explore Experience
          </button>
          
          <button
            onClick={onOpenCvModal}
            className="group bg-transparent text-white text-[14px] font-semibold px-8 py-[14px] rounded-pill border border-[rgba(255,255,255,0.2)] transition-all duration-200 hover:border-[#00d4ff] hover:text-[#00d4ff] flex items-center justify-center gap-2"
          >
            <FileText size={16} className="text-[#00d4ff]" />
            <span>Download CV (3 Tracks)</span>
          </button>

          <a
            href={PERSONAL_INFO.signeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/[0.05] text-[rgba(255,255,255,0.8)] text-[14px] font-semibold px-6 py-[14px] rounded-pill border border-white/[0.08] transition-all duration-200 hover:bg-white/[0.1] hover:text-white flex items-center gap-2"
          >
            <span>Visit Signe.in</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={chevronRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-0 cursor-pointer"
        onClick={() => onNavigate('achievements')}
      >
        <div className="flex flex-col items-center gap-1 text-[rgba(255,255,255,0.4)] hover:text-[#00d4ff] transition-colors">
          <span className="text-[10px] font-mono-jet uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}