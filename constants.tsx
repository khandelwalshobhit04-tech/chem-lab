import React from 'react';
import { LevelLink } from './types';

// Icons created as simple SVG components for visual appeal
const IconLevel1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const IconLevel3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const IconLevel4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const IconLevel5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V9.375a5.375 5.375 0 00-10.75 0V15.375m10.75 0a1.125 1.125 0 001.125 1.125 1.125 1.125 0 001.125-1.125V7.875a5.375 5.375 0 00-10.75 0v7.5c0 .621.504 1.125 1.125 1.125" />
  </svg>
);

const IconLevel6 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);


export const LEVEL_LINKS: LevelLink[] = [
  {
    id: 'level-1-2',
    label: 'Level -1 & 2',
    url: 'https://chem-bond-mastery.vercel.app/',
    color: 'from-blue-500 to-cyan-400',
    icon: <IconLevel1 />,
    description: 'Master the basics of Chemical Bonding'
  },
  {
    id: 'level-3',
    label: 'Level 3',
    url: 'https://vsepr-beta.vercel.app/',
    color: 'from-emerald-500 to-teal-400',
    icon: <IconLevel3 />,
    description: 'VSEPR Theory & Molecular Geometry'
  },
  {
    id: 'level-4',
    label: 'Level 4',
    url: 'https://polar-or-nah-molecular-challenge-8j.vercel.app/',
    color: 'from-amber-500 to-orange-400',
    icon: <IconLevel4 />,
    description: 'Polar or Nah: Molecular Polarity Challenge'
  },
  {
    id: 'level-5',
    label: 'Level 5',
    url: 'https://orbital-master-mo-theory-level-5.vercel.app/',
    color: 'from-rose-500 to-pink-500',
    icon: <IconLevel5 />,
    description: 'Advanced MO Theory Mastery'
  },
  {
    id: 'level-6',
    label: 'Level 6',
    url: 'https://orbital-matches.vercel.app/',
    color: 'from-violet-600 to-purple-500',
    icon: <IconLevel6 />,
    description: 'The Ultimate Orbital Matching Challenge'
  }
];