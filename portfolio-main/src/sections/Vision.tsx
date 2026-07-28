import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

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
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'outElastic(0.5, 0.3)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Add subtle 3D tilt effect to the video container on mousemove
    const videoContainer = sectionRef.current?.querySelector('video');
    if (videoContainer) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = videoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 2; // Max 2 degrees
        const rotateY = ((centerX - x) / centerX) * 2; // Max 2 degrees

        videoContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const handleMouseLeave = () => {
        videoContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };

      videoContainer.addEventListener('mousemove', handleMouseMove);
      videoContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        videoContainer.removeEventListener('mousemove', handleMouseMove);
        videoContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

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
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-[2px] h-[100%] bg-[linear-gradient(180deg,transparent,var(--neon-cyan))] animate-[pulse_4s ease-in_out_infinite]"></div>
        <div className="absolute right-0 bottom-0 w-[2px] h-[100%] bg-[linear-gradient(0deg,transparent,var(--neon-magenta))] animate-[pulse_4s ease-in_out_infinite] delay-2"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[radialgradient(circle_at_center,var(--neon-blue)_0%,transparent_70%)] blur-[20px] opacity-15 animate-[float_6s ease-in_out_infinite]"></div>
      </div>

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

      {/* Animated video overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/static/scan-lines.png')] bg-[size:200%_200%] opacity-10 animate-[scanLines_8s linear_infinite] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] opacity-15 animate-[pulse_6s ease-in_out_infinite] mix-blend-screen" />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left: Quote */}
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "outElastic(0.5, 0.3)" }}
            className="relative"
          >
            <div className="text-caption text-[#00d4ff] mb-6">
              THE VISION
            </div>
            <blockquote className="font-display text-[clamp(24px,3vw,36px)] font-normal text-white leading-[1.3] text-neon-glow">
              "Driven by a love for systemic thinking, human psychology, and
              product strategy. A rigorous, research-intensive approach that
              balances data with intuition, constantly evolving alongside the
              industry."
            </blockquote>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-1/2 -translate-x-1/2 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] animate-[pulse_3s ease-in_out_infinite]" />
          </motion.div>

          {/* Right: Metadata */}
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "outElastic(0.5, 0.3)" }}
            className="lg:text-right relative"
          >
            <div className="font-mono-jet text-mono-label text-[rgba(255,255,255,0.5)] space-y-4 leading-[2.0]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div>
                  <span className="text-[rgba(255,255,255,0.3)]">Discipline:</span>{' '}
                  Creative Engineering
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div>
                  <span className="text-[rgba(255,255,255,0.3)]">Focus:</span>{' '}
                  Human-Centered Design
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div>
                  <span className="text-[rgba(255,255,255,0.3)]">Status:</span>{' '}
                  Open for Hiring
                </div>
              </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-[radialgradient(circle_at_center,var(--neon-magenta)_0%,transparent_70%)] animate-[pulse_3s ease-in_out_infinite]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
