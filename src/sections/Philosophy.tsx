import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORDS = ['STRATEGY', 'ANALYSIS', 'CURIOSITY', 'INTUITION', 'COLLABORATION', 'GROWTH'];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="bg-[#0a0a0a] min-h-[100dvh] flex items-center overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-8 lg:gap-16 pl-[clamp(24px,5vw,80px)] will-change-transform"
      >
        {WORDS.map((word, i) => (
          <div key={word} className="flex items-center gap-8 lg:gap-16 shrink-0">
            <span className="font-display text-[clamp(60px,12vw,160px)] font-bold text-white whitespace-nowrap transition-colors duration-200 hover:text-[#00d4ff] cursor-default select-none">
              {word}
            </span>
            {i < WORDS.length - 1 && (
              <span className="font-display text-[clamp(40px,8vw,120px)] font-bold text-[rgba(255,255,255,0.2)] shrink-0">
                ·
              </span>
            )}
          </div>
        ))}
        {/* Extra padding at end */}
        <div className="w-[clamp(24px,5vw,80px)] shrink-0" />
      </div>
    </section>
  );
}
