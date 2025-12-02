import React from 'react';
import { LevelLink } from '../types';

interface LevelButtonProps {
  link: LevelLink;
  onSelect: (url: string) => void;
}

const LevelButton: React.FC<LevelButtonProps> = ({ link, onSelect }) => {
  const isPending = !link.url;

  return (
    <button
      onClick={() => !isPending && onSelect(link.url)}
      disabled={isPending}
      className={`
        group relative overflow-hidden rounded-2xl p-6 sm:p-8
        bg-gradient-to-br ${isPending ? 'from-slate-600 to-slate-700 cursor-not-allowed grayscale' : link.color}
        shadow-lg ${!isPending && `hover:shadow-2xl hover:shadow-${link.color.split('-')[1]}-500/30 hover:-translate-y-1 hover:scale-[1.02]`}
        transform transition-all duration-300
        flex flex-col items-start justify-between
        min-h-[160px] sm:min-h-[200px] w-full text-left
      `}
    >
      {/* Background Decorative Overlay */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
      
      {/* Icon Area */}
      <div className="z-10 mb-4 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-transform duration-300 group-hover:rotate-6">
        {link.icon}
      </div>

      {/* Text Content */}
      <div className="z-10 w-full">
        <h3 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
          {link.label}
        </h3>
        {isPending && (
          <span className="mt-2 inline-block rounded bg-black/30 px-2 py-1 text-xs font-medium text-white/90">
            Coming Soon
          </span>
        )}
      </div>

      {/* Navigation Arrow Indicator (only if active) */}
      {!isPending && (
        <div className="absolute right-4 bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default LevelButton;