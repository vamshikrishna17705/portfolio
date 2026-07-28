import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

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

    // Add entrance animation for the section title
    gsap.fromTo(
      sectionRef.current?.querySelector('h2'),
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'outElastic(0.5, 0.3)',
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Add 3D tilt effect to words on hover
    const wordElements = sectionRef.current?.querySelectorAll('.font-display');
    wordElements.forEach((el) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 2; // Max 2 degrees
        const rotateY = ((centerX - x) / centerX) * 2; // Max 2 degrees

        (el as HTMLElement).style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        (el as HTMLElement).style.transition = 'transform 0.1s ease-out';
      };

      const handleMouseLeave = () => {
        (el as HTMLElement).style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        (el as HTMLElement).style.transition = 'transform 0.3s ease-out';
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      ScrollTracker.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="bg-[#0a0a0a] min-h-[100dvh] flex items-center overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-full h-[2px] bg-[linear-gradient(90deg,transparent,var(--neon-cyan))] animate-[lineMove_8s linear_infinite]"></div>
        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[linear-gradient(90deg,transparent,var(--neon-magenta))] animate-[lineMove_8s linear_infinite] reverse"></div>
        <div className="absolute left-0 top-0 h-full w-[2px] bg-[linear-gradient(180deg,transparent,var(--neon-blue))] animate-[lineMove_8s linear_infinite]"></div>
        <div className="absolute right-0 top-0 h-full w-[2px] bg-[linear-gradient(180deg,transparent,var(--neon-purple))] animate-[lineMove_8s linear_infinite] reverse"></div>
      </div>

      <div
        ref={trackRef}
        className="relative z-10 flex items-center gap-8 lg:gap-16 pl-[clamp(24px,5vw,80px)] will-change-transform"
      >
        {WORDS.map((word, i) => (
          <motion.div
            key={word}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "outElastic(0.5, 0.3)" }}
            className="flex items-center gap-8 lg:gap-16 shrink-0"
          >
            <motion.span
              whileHover={{
                scale: 1.05,
                textShadow: ["0 0 5px var(--neon-cyan)", "0 0 10px var(--neon-cyan)", "0 0 20px var(--neon-cyan)"],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="font-display text-[clamp(60px,12vw,160px)] font-bold text-white whitespace-nowrap text-neon-glow"
            >
              {word}
            </motion.span>
            {i < WORDS.length - 1 && (
              <motion.span
                whileHover={{
                  scale: 1.1,
                  color: "#00d4ff",
                  transition: { duration: 0.3 }
                }}
                className="font-display text-[clamp(40px,8vw,120px)] font-bold text-[rgba(255,255,255,0.2)] shrink-0"
              >
                ·
              </motion.span>
            )}
          </motion.div>
        ))}
        {/* Extra padding at end */}
        <div className="w-[clamp(24px,5vw,80px)] shrink-0" />
      </div>

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] opacity-10 animate-[pulse_6s ease-in_out_infinite]"></div>
        <div className="absolute inset-0 bg-[radialgradient(circle_at_center,var(--neon-magenta)_0%,transparent_70%)] opacity-10 animate-[pulse_6s ease-in_out_infinite] delay-3"></div>
      </div>
    </section>
  );
}
