import { motion } from 'framer-motion';
import WaveCanvas from '../components/WaveCanvas';
import Button from '@/components/ui/button';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Variants for staggered animation
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  const ctaVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.5 },
    },
  };

  const chevronVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.7 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="gradient-bg" aria-hidden="true" />
      <WaveCanvas />

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        {/* Label */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-caption text-[rgba(255,255,255,0.5)] tracking-[0.15em] mb-8"
        >
          IIT KHARAGPUR · PRODUCT ENGINEER · FULL-STACK DEVELOPER
        </motion.div>

        {/* Main Heading */}
        <motion.div className="font-display text-hero mb-6">
          <motion.span
            display="block"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-white text-neon-glow"
            style={{ textShadow: '0 0 80px rgba(0,212,255,0.15)' }}
          >
            VAMSHI
          </motion.span>
          <motion.span
            display="block"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-[#00d4ff] text-neon-glow-magenta"
            style={{ textShadow: '0 0 80px rgba(0,212,255,0.25)' }}
          >
            KRISHNA
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-body-large text-[rgba(255,255,255,0.65)] max-w-[600px] mb-10 text-neon-glow"
        >
          Building at the intersection of software engineering, data systems, and
          technical problem-solving.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={ctaVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            variant="neon"
            onClick={() => onNavigate('projects')}
            className="px-8 py-[14px] neon-glow"
          >
            View My Work
          </Button>
          <a
            href="/Vamshi_Krishna_CV.pdf"
            download="Vamshi_Krishna_CV.pdf"
            className="bg-transparent text-white text-[14px] font-semibold px-8 py-[14px] rounded-pill border border-[rgba(255,255,255,0.2)] transition-all duration-200 hover:border-[rgba(0,212,255,0.5)] hover:text-[#00d4ff] flex items-center justify-center neon-glow-magenta"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={chevronVariant}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="animate-bounce-subtle">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}