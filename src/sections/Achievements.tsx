import { useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  numericValue: number;
  prefix: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { numericValue: 5000, prefix: '', suffix: '+', label: 'Students Mentored' },
  { numericValue: 8, prefix: 'Top ', suffix: '%', label: 'JEE Mains Rank' },
  { numericValue: 7.49, prefix: '', suffix: '', label: 'CGPA at IIT KGP' },
];

const NATIONAL_STAT = { value: 'National', label: 'Product Construct Finalist' };

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);
  const numberRefs = useMemo(() => [num1Ref, num2Ref, num3Ref], []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
    });

    STATS.forEach((stat, index) => {
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
            if (stat.numericValue === 7.49) {
              el.textContent = `${stat.prefix}${animObj.val.toFixed(2)}${stat.suffix}`;
            } else {
              el.textContent = `${stat.prefix}${Math.round(animObj.val)}${stat.suffix}`;
            }
          },
        },
        index * 0.15
      );
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

    // Add 3D tilt effect to stat containers on hover
    const statContainers = sectionRef.current?.querySelectorAll('.text-center');
    statContainers.forEach((container) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (container as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 3; // Max 3 degrees
        const rotateY = ((centerX - x) / centerX) * 3; // Max 3 degrees

        (container as HTMLElement).style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        (container as HTMLElement).style.transition = 'transform 0.1s ease-out';
      };

      const handleMouseLeave = () => {
        (container as HTMLElement).style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        (container as HTMLElement).style.transition = 'transform 0.3s ease-out';
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tl.kill();
    };
  }, [numberRefs]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="bg-[#111111] py-[80px] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 top-0 w-[2px] h-[50%] bg-[linear-gradient(180deg,transparent,var(--neon-cyan))] animate-[lineGrow_3s ease-in_out_infinite]"></div>
        <div className="absolute right-0 bottom-0 w-[2px] h-[50%] bg-[linear-gradient(0deg,transparent,var(--neon-magenta))] animate-[lineGrow_3s ease-in_out_infinite] delay-1.5"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] blur-[20px] opacity-20 animate-[pulse_6s ease-in_out_infinite]"></div>
      </div>

      <div className="content-container relative">
        <div className="text-center mb-12">
          <motion.h2
            className="font-display text-section-heading text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            ACHIEVEMENTS & MILESTONES
          </motion.h2>
          <div className="w-[60px] h-[2px] bg-[linear-gradient(90deg,transparent,var(--neon-cyan),transparent)] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <motion.div
            ref={num1Ref}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
            className="text-center relative group"
          >
            <span
              className="font-display text-[clamp(36px,5vw,56px)] font-bold text-[#00d4ff] block text-neon-glow"
            >
              0
            </span>
            <span className="text-caption text-[rgba(255,255,255,0.5)] mt-2 block">
              {STATS[0].label}
            </span>
            {/* Animated decorative element */}
            <div className="absolute -top-2 -left-1/2 -translate-x-1/2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] animate-[pulse_2s ease-in_out_infinite]" />
          </motion.div>

          <motion.div
            ref={num2Ref}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "outElastic(0.5, 0.3)" }}
            className="text-center relative group"
          >
            <span
              className="font-display text-[clamp(36px,5vw,56px)] font-bold text-[#00d4ff] block text-neon-glow"
            >
              0
            </span>
            <span className="text-caption text-[rgba(255,255,255,0.5)] mt-2 block">
              {STATS[1].label}
            </span>
            {/* Animated decorative element */}
            <div className="absolute -top-2 -left-1/2 -translate-x-1/2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-magenta)_0%,transparent_70%)] animate-[pulse_2s ease-in_out_infinite] delay-0.2" />
          </motion.div>

          <motion.div
            ref={num3Ref}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "outElastic(0.5, 0.3)" }}
            className="text-center relative group"
          >
            <span
              className="font-display text-[clamp(36px,5vw,56px)] font-bold text-[#00d4ff] block text-neon-glow"
            >
              0
            </span>
            <span className="text-caption text-[rgba(255,255,255,0.5)] mt-2 block">
              {STATS[2].label}
            </span>
            {/* Animated decorative element */}
            <div className="absolute -top-2 -left-1/2 -translate-x-1/2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-blue)_0%,transparent_70%)] animate-[pulse_2s ease-in_out_infinite] delay-0.4" />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "outElastic(0.5, 0.3)" }}
            className="text-center relative group"
          >
            <span className="font-display text-[clamp(36px,5vw,56px)] font-bold text-[#00d4ff] block text-neon-glow">
              {NATIONAL_STAT.value}
            </span>
            <span className="text-caption text-[rgba(255,255,255,0.5)] mt-2 block">
              {NATIONAL_STAT.label}
            </span>
            {/* Animated decorative element */}
            <div className="absolute -top-2 -left-1/2 -translate-x-1/2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-purple)_0%,transparent_70%)] animate-[pulse_2s ease-in_out_infinite] delay-0.5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
