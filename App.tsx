import React from 'react';
import LevelButton from './components/LevelButton';
import { LEVEL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 px-4 py-12 sm:px-6 lg:px-8">
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
            Click a card to launch the workspace in a new tab.
          </p>
        </div>

        {/* Grid Layout for Buttons */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEVEL_LINKS.map((link) => (
            <LevelButton key={link.id} link={link} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Level Portal. All systems operational.</p>
        </div>
      </div>
    </div>
  );
};

export default App;