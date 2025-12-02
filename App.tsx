import React, { useState } from 'react';
import LevelButton from './components/LevelButton';
import { LEVEL_LINKS } from './constants';

const App: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [iframeKey, setIframeKey] = useState(0);

  const handleReturn = () => {
    setActiveLevel(null);
    setIframeKey(0);
  };

  const handleReload = () => {
    if (activeLevel) {
      // Increment key to force iframe re-render/reload
      setIframeKey(prev => prev + 1);
    } else {
      // Reload the entire page if on home
      window.location.reload();
    }
  };

  const handleLevelSelect = (url: string) => {
    setActiveLevel(url);
    setIframeKey(0);
  };

  return (
    <div className="flex h-screen flex-col bg-slate-900 text-slate-100">
      {/* Top Navigation Bar */}
      <nav className="flex-none sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
        <button
          onClick={handleReturn}
          className="group flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          Return
        </button>

        <button
          onClick={handleReload}
          className="group flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Reload
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
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
          <div className="h-full overflow-y-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Header Section */}
              <div className="mb-12 text-center sm:mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Training Modules
                  </span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                  Select your proficiency level to access the training environment.
                </p>
              </div>

              {/* Grid Layout for Buttons */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-12">
                {LEVEL_LINKS.map((link) => (
                  <LevelButton key={link.id} link={link} onSelect={handleLevelSelect} />
                ))}
              </div>

              {/* Footer Section */}
              <div className="text-center text-sm text-slate-500 pb-8">
                <p>&copy; {new Date().getFullYear()} Level Portal. All systems operational.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;