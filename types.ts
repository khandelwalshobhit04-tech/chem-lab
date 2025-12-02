import React from 'react';

export interface LevelLink {
  id: string;
  label: string;
  url: string;
  color: string;
  icon?: React.ReactNode;
  description?: string;
}