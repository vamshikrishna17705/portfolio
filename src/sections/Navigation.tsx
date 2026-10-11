import { useEffect, useState, useCallback } from 'react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

const NAV_ITEMS = [
  { label: 'Experience', id: 'experience' },
  { label: 'Ventures', id: 'ventures' },
  { label: 'Projects', id: 'projects' },
  { label: 'Awards', id: 'achievements' },
  { label: 'Skills', id: 'skills' },
  { label: 'Profile', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['experience', 'ventures', 'projects', 'achievements', 'skills', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-72px 0px 0px 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (id: string) => {
      onNavigate(id);
      setMobileOpen(false);
    },
    [onNavigate]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-white/[0.06] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="content-container w-full flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="font-display text-[17px] font-bold text-white tracking-tight hover:text-[#00d4ff] transition-colors"
        >
          AREPALLY VAMSHI KRISHNA
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[12px] font-medium uppercase tracking-[0.06em] transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-[#00d4ff]'
                  : 'text-[rgba(255,255,255,0.65)] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-white text-[#0a0a0a] text-[12px] font-semibold px-5 py-2 rounded-pill transition-all duration-200 hover:bg-[#00d4ff]"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${
              mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${
              mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#0a0a0a]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center pt-10 gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-display text-[24px] font-semibold text-white hover:text-[#00d4ff]"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-4 w-4/5 max-w-xs">
            <button
              onClick={() => handleNavClick('contact')}
              className="py-3 rounded-pill text-[14px] font-semibold bg-white text-[#0a0a0a]"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
