import { useState } from 'react';
import { CV_DOWNLOADS } from '../data/portfolioData';
import { Download, FileText, Check, X } from 'lucide-react';

interface CvDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDownloadModal({ isOpen, onClose }: CvDownloadModalProps) {
  const [downloadedIndex, setDownloadedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleDownload = (index: number) => {
    setDownloadedIndex(index);
    setTimeout(() => {
      setDownloadedIndex(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#111111] border border-[rgba(0,212,255,0.2)] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,212,255,0.15)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[rgba(255,255,255,0.5)] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-[rgba(0,212,255,0.1)] text-[#00d4ff]">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="font-display text-[22px] font-bold text-white">Select a Resume / CV</h3>
            <p className="text-[13px] text-[rgba(255,255,255,0.6)]">Choose the domain that matches your recruitment interest</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {CV_DOWNLOADS.map((cv, index) => (
            <div
              key={cv.title}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[rgba(0,212,255,0.4)] hover:bg-white/[0.05] transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-[16px] font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                    {cv.title}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-jet uppercase bg-[rgba(0,212,255,0.15)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]">
                    {cv.badge}
                  </span>
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.65)] leading-relaxed">
                  {cv.description}
                </p>
              </div>

              <a
                href={cv.url}
                download={cv.fileName}
                onClick={() => handleDownload(index)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-pill text-[12px] font-semibold bg-white text-[#0a0a0a] hover:bg-[#00d4ff] transition-colors"
              >
                {downloadedIndex === index ? (
                  <>
                    <Check size={14} className="text-[#0a0a0a]" />
                    <span>Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Download</span>
                  </>
                )}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[12px] text-[rgba(255,255,255,0.4)]">
          <span>Arepally Vamshi Krishna · IIT Kharagpur</span>
          <button 
            onClick={onClose}
            className="text-[rgba(255,255,255,0.7)] hover:text-white hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
