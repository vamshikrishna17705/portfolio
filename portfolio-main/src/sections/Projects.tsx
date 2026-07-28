import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  number: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'InsightFlow AI',
    description:
      'AI-powered Workflow & Analytics Platform. Designed a scalable backend handling authentication and decoupled state storage for AI processing pipelines. Focuses on automating manual workflows by turning unstructured inputs into structured analytics dashboards.',
    tags: ['React', 'Next.js', 'Express.js', 'MongoDB', 'JWT'],
    image: '/images/project-insightflow.jpg',
    link: 'https://github.com/vamshikrishna17705/insightflow-ai',
  },
  {
    number: '02',
    name: 'Finance Product Portfolio',
    description:
      'Quantitative Analysis & Financial Modeling Engines. Programmed automated scripts to compute risk-adjusted equity returns (Sharpe Ratios, Beta volatility indices) and simulated startup financial paths with 5-panel statistical visualizers.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL'],
    image: '/images/project-finance.jpg',
    link: 'https://github.com/vamshikrishna17705/finance-product-portfolio',
  },
  {
    number: '03',
    name: 'Stock Portfolio Risk Analyzer',
    description:
      'Computed returns, Beta indices, and Sharpe risk-adjusted parameters for a mock ₹1,00,000 equity portfolio of 10 NSE stocks, identifying optimal sector weights and visualizing risk-return tradeoffs.',
    tags: ['Python', 'NumPy', 'Risk Metrics', 'Pandas'],
    image: '/images/project-risk.jpg',
    link: 'https://github.com/vamshikrishna17705/finance-product-portfolio',
  },
  {
    number: '04',
    name: 'D2C Startup 3-Statement Model',
    description:
      'Integrated P&L, Cash Flow, and Balance Sheet model with an automated Discounted Cash Flow (DCF) valuation engine and dynamic break-even sensitivity analysis for startup financial planning.',
    tags: ['Python', 'DCF Valuation', 'Modeling', 'Finance'],
    image: '/images/project-valuation.jpg',
    link: 'https://github.com/vamshikrishna17705/finance-product-portfolio',
  },
];

export default function Projects() {
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
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Add 3D tilt effect to project cards on hover
    const projectCards = sectionRef.current?.querySelectorAll('div.group');
    projectCards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees
        const rotateY = ((centerX - x) / centerX) * 5; // Max 5 degrees

        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        (card as HTMLElement).style.transition = 'transform 0.1s ease-out';
      };

      const handleMouseLeave = () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        (card as HTMLElement).style.transition = 'transform 0.3s ease-out';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-[120px] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 top-[20%] w-[2px] h-[60%] bg-[linear-gradient(180deg,transparent,var(--neon-cyan))] animate-[pulse_4s ease-in_out_infinite]"></div>
        <div className="absolute right-0 bottom-[20%] w-[2px] h-[60%] bg-[linear-gradient(0deg,transparent,var(--neon-magenta))] animate-[pulse_4s ease-in_out_infinite] delay-2"></div>
        <div className="absolute left-[30%] top-[30%] w-[100px] h-[100px] bg-[radialgradient(circle_at_center,var(--neon-blue)_0%,transparent_70%)] blur-[30px] opacity-15 animate-[float_6s ease-in_out_infinite]"></div>
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
            FEATURED PROJECTS
          </motion.h2>
          <div className="w-[60px] h-[2px] bg-[linear-gradient(90deg,transparent,var(--neon-cyan),transparent)] mx-auto mt-4" />
        </div>

        <div ref={cardsRef} className="space-y-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.number}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: PROJECTS.indexOf(project) * 0.1, ease: "outElastic(0.5, 0.3)" }}
              className="group relative bg-[#111111/80] backdrop-blur-sm rounded-2xl border border-[rgba(255,255,255,0.06)] p-8 lg:p-10 transition-all duration-400 hover:border-[rgba(0,212,255,0.25)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
              {/* Animated project number with glow */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-4 left-0 w-[60px] h-[60px] flex items-center justify-center text-[32px] font-bold text-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-full"
              >
                {project.number}
              </motion.div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start">
                {/* Left: Content */}
                <div className="relative z-10">
                  <h3 className="text-subsection text-white mb-4">
                    {project.name}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.65)] mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.05, ease: "outElastic(0.3, 0.5)" }}
                        className="px-3 py-1 rounded-full text-[11px] font-medium text-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(0,212,255,0.2)] hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#00d4ff] transition-all duration-300 hover:text-[rgba(0,212,255,0.8)]"
                  >
                    View Project
                    <ArrowUpRight size={14} className="transition-transform duration-300" />
                  </motion.a>
                </div>

                {/* Right: Image with 3D effect */}
                <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-800"
                    />
                    {/* Animated overlay for image */}
                    <div className="absolute inset-0 bg-[radialgradient(circle_at_center_top,var(--neon-cyan)_0%,transparent_70%)] opacity-0 hover:opacity-30 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
