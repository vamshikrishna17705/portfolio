import { useEffect, useState, useCallback } from 'react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

const NAV_ITEMS = [
  { label: 'Work', id: 'projects' },
  { label: 'Profile', id: 'about' },
  { label: 'Philosophy', id: 'philosophy' },
  { label: 'Contact', id: 'contact' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['projects', 'about', 'philosophy', 'vision', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  }, [onNavigate]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-[12px]'
          : 'bg-transparent'
      }`}
    >
      <div className="content-container w-full flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="font-display text-[16px] font-bold text-white tracking-tight"
        >
          VAMSHI
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[12px] font-medium uppercase tracking-[0.06em] transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-[rgba(255,255,255,0.65)] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNavClick('contact')}
          className="hidden md:block bg-white text-[#0a0a0a] text-[12px] font-semibold px-6 py-[10px] rounded-pill transition-all duration-200 hover:bg-[#00d4ff]"
        >
          Let's Talk
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#0a0a0a] z-40 md:hidden flex flex-col items-center pt-16 gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-display text-[32px] font-semibold text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="mt-8 bg-white text-[#0a0a0a] text-[14px] font-semibold px-8 py-3 rounded-pill"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}
