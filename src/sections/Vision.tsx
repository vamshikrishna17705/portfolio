import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
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
      id="vision"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: '#020012' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/cinematic-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left: Quote */}
          <div>
            <div className="text-caption text-[#00d4ff] mb-6">THE VISION</div>
            <blockquote className="font-display text-[clamp(24px,3vw,36px)] font-normal text-white leading-[1.3]">
              "Driven by a love for systemic thinking, human psychology, and
              product strategy. A rigorous, research-intensive approach that
              balances data with intuition, constantly evolving alongside the
              industry."
            </blockquote>
          </div>

          {/* Right: Metadata */}
          <div className="lg:text-right">
            <div className="font-mono-jet text-mono-label text-[rgba(255,255,255,0.6)] space-y-4 leading-[2.0]">
              <div>
                <span className="text-[rgba(255,255,255,0.3)]">Discipline:</span>{' '}
                Product, AI & Materials Engineering
              </div>
              <div>
                <span className="text-[rgba(255,255,255,0.3)]">Alma Mater:</span>{' '}
                IIT Kharagpur ('27)
              </div>
              <div>
                <span className="text-[rgba(255,255,255,0.3)]">Status:</span>{' '}
                Open for Summer Internships & Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
