import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface TechCategory {
  title: string;
  items: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'SQL', 'C++', 'C', 'JavaScript', 'TypeScript', 'MATLAB', 'HTML5/CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Express.js', 'Node.js', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Databases & Tools',
    items: ['MongoDB', 'Git', 'GitHub', 'REST APIs', 'JWT Auth', 'Excel', 'Vercel'],
  },
  {
    title: 'Specialized Domain',
    items: ['Financial Modeling', 'DCF Valuation', 'Risk Metrics', 'Product Strategy', 'PRD Drafting', 'RICE Framework'],
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.children;

    gsap.fromTo(
      cardElements,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'outElastic(0.5, 0.3)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Add floating effect to tech cards
    const techCards = sectionRef.current?.querySelectorAll('.glass-card');
    techCards.forEach((card, index) => {
      const floatAnimation = () => {
        gsap.to(card, {
          y: -10,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      };

      // Intersection Observer to start animation when in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            floatAnimation();
          } else {
            gsap.killTweensOf(card);
            gsap.set(card, { y: 0 });
          }
        });
      }, { threshold: 0.1 });

      observer.observe(card);

      // Cleanup
      return () => observer.disconnect();
    });

    // Add 3D tilt effect to tech cards on hover
    techCards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 2; // Max 2 degrees
        const rotateY = ((centerX - x) / centerX) * 2; // Max 2 degrees

        (card as HTMLElement).style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        (card as HTMLElement).style.transition = 'transform 0.1s ease-out';
      };

      const handleMouseLeave = () => {
        (card as HTMLElement).style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        (card as HTMLElement).style.transition = 'transform 0.3s ease-out';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      ScrollTracker.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="techstack"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-[120px] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 top-0 w-[2px] h-[100%] bg-[linear-gradient(180deg,transparent,var(--neon-cyan))] animate-[pulse_4s ease-in_out_infinite]"></div>
        <div className="absolute right-0 bottom-0 w-[2px] h-[100%] bg-[linear-gradient(0deg,transparent,var(--neon-magenta))] animate-[pulse_4s ease-in_out_infinite] delay-2"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[radialgradient(circle_at_center,var(--neon-blue)_0%,transparent_70%)] blur-[15px] opacity-20 animate-[float_6s ease-in_out_infinite]"></div>
      </div>

      <div className="content-container relative">
        <div className="text-center mb-16">
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
            TOOLS & TECHNOLOGIES
          </motion.h2>
          <div className="w-[60px] h-[2px] bg-[linear-gradient(90deg,transparent,var(--neon-cyan),transparent)] mx-auto mt-4" />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {TECH_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "outElastic(0.5, 0.3)" }}
              className="glass-card relative group hover:-translate-y-2"
            >
              {/* Animated category title */}
              <motion.h3
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-subsection text-white mb-4 text-neon-glow"
              >
                {category.title}
              </motion.h3>
              <div className="h-[1px] bg-[rgba(255,255,255,0.08)] mb-4" />
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={`${item}-${itemIndex}`}
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * itemIndex, ease: "backOut(1.7)" }}
                    className="pill-tag group-hover:scale-105 group-hover:text-[#00d4ff] group-hover:border-[rgba(0,212,255,0.3)]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] animate-[pulse_3s ease-in_out_infinite]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-magenta)_0%,transparent_70%)] animate-[pulse_3s ease-in_out_infinite] delay-1.5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
