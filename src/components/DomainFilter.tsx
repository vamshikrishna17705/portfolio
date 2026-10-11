import type { DomainType } from '../data/portfolioData';
import { Layers, Briefcase, Cpu, Flame } from 'lucide-react';

interface DomainFilterProps {
  activeDomain: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export default function DomainFilter({ activeDomain, onSelectDomain }: DomainFilterProps) {
  const tabs = [
    { id: 'all' as DomainType, label: 'All Disciplines', icon: Layers, count: '3 Tracks' },
    { id: 'pm' as DomainType, label: 'Product Management', icon: Briefcase, count: 'Growth & PM' },
    { id: 'data-ai' as DomainType, label: 'Data Science & AI', icon: Cpu, count: 'ML & Analytics' },
    { id: 'engineering' as DomainType, label: 'Materials Engineering', icon: Flame, count: 'IIT KGP Core' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 max-w-fit mx-auto rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeDomain === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectDomain(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-300 ${
              isActive
                ? 'bg-[#00d4ff] text-[#0a0a0a] font-semibold shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                : 'text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <Icon size={14} className={isActive ? 'text-[#0a0a0a]' : 'text-[#00d4ff]'} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
