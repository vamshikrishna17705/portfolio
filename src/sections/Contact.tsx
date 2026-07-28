import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 40, scale: 0.95 },
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

    // Add subtle 3D tilt effect to contact container on mousemove
    const contactContainer = sectionRef.current?.querySelector('.flex-1');
    if (contactContainer) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = contactContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 2; // Max 2 degrees
        const rotateY = ((centerX - x) / centerX) * 2; // Max 2 degrees

        contactContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const handleMouseLeave = () => {
        contactContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };

      contactContainer.addEventListener('mousemove', handleMouseMove);
      contactContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        contactContainer.removeEventListener('mousemove', handleMouseMove);
        contactContainer.removeEventListener('mouseleave', handleMouseLeave);
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
      id="contact"
      ref={sectionRef}
      className="bg-[#0a0a0a] min-h-[100dvh] flex flex-col relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-[2px] h-[100%] bg-[linear-gradient(180deg,transparent,var(--neon-cyan))] animate-[pulse_4s ease-in_out_infinite]"></div>
        <div className="absolute right-0 bottom-0 w-[2px] h-[100%] bg-[linear-gradient(0deg,transparent,var(--neon-magenta))] animate-[pulse_4s ease-in_out_infinite] delay-2"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[radialgradient(circle_at_center,var(--neon-blue)_0%,transparent_70%)] blur-[15px] opacity-20 animate-[float_6s ease-in_out_infinite]"></div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.div
          ref={contentRef}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
          className="text-center px-6"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display text-hero text-white mb-6 text-neon-glow"
          >
            LET'S BUILD.
          </motion.h2>
          <motion.p
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="text-body-large text-[rgba(255,255,255,0.5)] max-w-[500px] mx-auto mb-8 text-neon-glow"
          >
            Building AI-powered products and scalable software solutions that turn complex problems into real-world impact.
          </motion.p>
          <motion.a
            href="mailto:arepallyvamshikrishna17@gmail.com"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="font-display text-[18px] text-[#00d4ff] transition-all duration-300 hover:text-[rgba(0,212,255,0.8)] inline-block neon-glow"
          >
            arepallyvamshikrishna17@gmail.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "outElastic(0.5, 0.3)" }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <motion.a
              href="https://linkedin.com/in/arepally-vamshi-krishna-176599327"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.5)] transition-colors duration-300 hover:text-white"
            >
              <Linkedin size={16} className="transition-transform duration-300" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/vamshikrishna17705"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.5)] transition-colors duration-300 hover:text-white"
            >
              <Github size={16} className="transition-transform duration-300" />
              GitHub
            </motion.a>
            <motion.a
              href="https://portfolio-mu-sepia-11.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.5)] transition-colors duration-300 hover:text-white"
            >
              <ExternalLink size={16} className="transition-transform duration-300" />
              Portfolio
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Animated Footer Bar */}
      <motion.footer
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        className="w-full py-6 px-[clamp(24px,5vw,80px)] border-t border-[rgba(255,255,255,0.06)] relative"
      >
        {/* Footer animated elements */}
        <div className="absolute left-0 top-0 h-[2px] w-[50%] bg-[linear-gradient(90deg,transparent,var(--neon-cyan))] animate-[lineMove_8s linear_infinite]"></div>
        <div className="absolute right-0 bottom-0 h-[2px] w-[50%] bg-[linear-gradient(90deg,transparent,var(--neon-magenta))] animate-[lineMove_8s linear_infinite] delay-4"></div>

        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-caption text-[rgba(255,255,255,0.3)]">
              © 2025 Vamshi Krishna. All rights reserved.
            </span>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-caption text-[rgba(255,255,255,0.3)]">
              Built with curiosity · IIT Kharagpur
            </span>
          </motion.span>
        </div>
      </motion.footer>
    </section>
  );
}
