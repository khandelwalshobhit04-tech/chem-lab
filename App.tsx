import React, { useState, useEffect, useRef } from 'react';
import LevelButton from './components/LevelButton';
import { LEVEL_LINKS } from './constants';

const App: React.FC = () => {
  // Navigation state
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  // Volume set to 0.002 (0.2%) for an extremely faint ambient background.
  const [volume, setVolume] = useState(0.002);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Set up background music properties
  useEffect(() => {
    if (audioRef.current) {
      // Sync volume state with the audio element
      audioRef.current.volume = isMuted ? 0 : volume;
      
      const playAudio = async () => {
        try {
          if (audioRef.current && !isMuted) {
            await audioRef.current.play();
          }
        } catch (error) {
          console.debug("Autoplay blocked. User interaction required.");
        }
      };
      
      playAudio();
      
      // Global click handler to resume audio if blocked by browser
      const handleGlobalClick = () => {
        if (audioRef.current && audioRef.current.paused && !isMuted) {
          audioRef.current.play().catch(() => {});
        }
      };

      window.addEventListener('click', handleGlobalClick);
      return () => window.removeEventListener('click', handleGlobalClick);
    }
  }, [isMuted, volume]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {});
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleReturn = () => {
    setActiveLevel(null);
    setIframeKey(0);
  };

  const handleReload = () => {
    if (activeLevel) {
      setIframeKey(prev => prev + 1);
    } else {
      window.location.reload();
    }
  };

  const handleLevelSelect = (url: string) => {
    setActiveLevel(url);
    setIframeKey(0);
  };

  return (
    <div className="flex h-screen flex-col bg-slate-900 text-slate-100 overflow-hidden">
      {/* Background Music */}
      <audio 
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
        preload="auto"
      />

      {/* Top Navigation Bar */}
      <nav className="flex-none sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8 shadow-md">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={handleReturn}
              className="group flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white active:scale-95 border border-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              Return
            </button>

            <button
              onClick={handleReload}
              className="group flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white active:scale-95 border border-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Reload
            </button>

            {/* Audio Control Panel */}
            <div className="flex items-center gap-3 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700">
              <button
                onClick={toggleMute}
                className={`p-1 rounded-full transition-colors ${
                  isMuted ? 'text-rose-400 hover:text-rose-300' : 'text-emerald-400 hover:text-emerald-300'
                }`}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9h-3V15h3l5.25 3V6z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                )}
              </button>
              <input 
                type="range" 
                min="0" 
                max="0.05" 
                step="0.001" 
                value={volume} 
                onChange={handleVolumeChange}
                className="w-16 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                title="Adjust Background Volume (Whisper)"
              />
            </div>
          </div>

          <div className="hidden lg:block text-right">
             <span className="inline-block rounded-full bg-indigo-900/30 px-4 py-1.5 text-xs font-bold text-indigo-200 ring-1 ring-inset ring-indigo-500/40 tracking-wide shadow-sm">
                App made by Shobhit and Aarush class XI -A
             </span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        {activeLevel ? (
          <iframe 
            key={iframeKey}
            src={activeLevel}
            className="w-full h-full border-0 bg-white"
            title="Level Content"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="h-full overflow-y-auto px-4 py-12 sm:px-6 lg:px-8 custom-scrollbar">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center sm:mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-sm leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                    Chemical Bonding and molecular structure
                  </span>
                </h1>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Explore chemistry concepts through interactive levels</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-12">
                {LEVEL_LINKS.map((link) => (
                  <LevelButton key={link.id} link={link} onSelect={handleLevelSelect} />
                ))}
              </div>

              <div className="text-center text-sm text-slate-500 pb-8 flex flex-col items-center gap-2">
                <p>&copy; {new Date().getFullYear()} Level Portal. All systems operational.</p>
                <div className="lg:hidden">
                  <span className="inline-block rounded-full bg-indigo-900/20 px-3 py-1 text-[10px] font-bold text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
                    By Shobhit and Aarush XI-A
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
};

export default App;