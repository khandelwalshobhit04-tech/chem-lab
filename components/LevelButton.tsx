import React from 'react';
import { LevelLink } from '../types';

interface LevelButtonProps {
  link: LevelLink;
}

const LevelButton: React.FC<LevelButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden rounded-2xl p-6 sm:p-8
        bg-gradient-to-br ${link.color}
        shadow-lg hover:shadow-2xl hover:shadow-${link.color.split('-')[1]}-500/30
        transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
        flex flex-col items-start justify-between
        min-h-[160px] sm:min-h-[200px] w-full
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
      </div>

      {/* External Link Indicator */}
      <div className="absolute right-4 bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
    </a>
  );
};

export default LevelButton;