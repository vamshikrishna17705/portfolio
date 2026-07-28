import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const children = [...left.children, ...right.children];

    gsap.fromTo(
      children,
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

    // Add subtle 3D tilt effect on mousemove for the image container
    const imageContainer = rightRef.current?.querySelector('.w-full');
    if (imageContainer) {
      const handleMouseMove = (e: MouseEvent) => {
        const { left: leftPos, top: topPos, width, height } = imageContainer.getBoundingClientRect();
        const x = e.clientX - leftPos;
        const y = e.clientY - topPos;

        const centerX = width / 2;
        const centerY = height / 2;

        const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees
        const rotateY = ((centerX - x) / centerX) * 5; // Max 5 degrees

        imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const handleMouseLeave = () => {
        imageContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };

      imageContainer.addEventListener('mousemove', handleMouseMove);
      imageContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        imageContainer.removeEventListener('mousemove', handleMouseMove);
        imageContainer.removeEventListener('mouseleave', handleMouseLeave);
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
      id="about"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-[120px] relative overflow-hidden"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 top-0 h-[2px] w-full bg-[linear-gradient(90deg,transparent,var(--neon-cyan),transparent)] animate-[lineMove_10s linear_infinite]"></div>
        <div className="absolute right-0 bottom-0 h-[2px] w-full bg-[linear-gradient(90deg,transparent,var(--neon-magenta),transparent)] animate-[lineMove_15s linear_infinite]"></div>
      </div>

      <div className="content-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-start">
          {/* Left Column */}
          <div ref={leftRef} className="relative">
            {/* Floating decorative elements */}
            <div className="absolute -right-10 -top-10 w-[80px] h-[80px] bg-[radialgradient(circle_at_center,var(--neon-cyan)_0%,transparent_70%)] blur-[10px] opacity-30 animate-[pulse_4s ease-in_out_infinite]"></div>

            <div className="text-caption text-[#00d4ff] mb-4">
              01 · PROFILE
            </div>
            <h2 className="font-display text-section-heading text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-body-large text-[rgba(255,255,255,0.65)]">
              <p>
                I am a B.Tech (Hons.) Candidate in Metallurgical and Materials
                Engineering at the{' '}
                <span className="text-white font-medium">
                  Indian Institute of Technology, Kharagpur
                </span>{' '}
                (CGPA: 7.49/10, Class of 2027).
              </p>
              <p>
                I build at the intersection of high-performance software systems,
                data engineering pipelines, and product strategy. My engineering
                mindset centers on decoupling complex processes, optimizing
                latency, and ensuring data integrity.
              </p>
              <p>
                My product execution approach prioritizes roadmap items using
                analytical frameworks (RICE) and translates high-level business
                ideas into technical specifications. I'm passionate about
                integrating LLM workflows and processing unstructured data
                pipelines efficiently.
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-10 pl-6 border-l-2 border-[#00d4ff] relative">
              <div className="absolute -top-4 -left-2 w-3 h-3 bg-[#00d4ff] rounded-full opacity-50"></div>
              <p className="font-display text-[20px] italic text-[rgba(255,255,255,0.4)] leading-relaxed">
                "Translating complex data flows and quantitative algorithms into
                robust, production-ready systems that solve real-world user
                problems."
              </p>
            </blockquote>
          </div>

          {/* Right Column */}
          <div ref={rightRef} className="flex flex-col items-center">
            <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Animated border */}
              <div className="absolute inset-0 -z-10 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 -px-1 -py-1 bg-[linear-gradient(45deg,var(--neon-cyan),var(--neon-magenta),var(--neon-blue),var(--neon-purple))] background-size-[200%_200%] animate-[gradientBorder_8s linear_infinite] rounded-[calc(2xl+2px)] mask-[linear-gradient(#000_0_0)_padding-box,_linear-gradient(#fff_0_0)_shape] mask-composite-exclude"></div>
              </div>

              <img
                src="/images/profile.png"
                alt="Vamshi Krishna"
                className="w-full h-auto object-cover transition-transform duration-500"
              />
            </div>
            <p className="text-caption text-[rgba(255,255,255,0.5)] mt-4 text-center">
              IIT Kharagpur · Class of 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
