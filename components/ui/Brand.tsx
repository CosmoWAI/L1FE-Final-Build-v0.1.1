
import React from 'react';
import { L1feEmblem } from '../icons/L1feEmblem';

export const Brand: React.FC = () => (
  <div className="flex items-center gap-3">
    <L1feEmblem className="w-10 h-10 aura-text" />
    <h1 className="text-3xl font-display font-bold tracking-wider text-white">
      L<span className="text-[#F3A45C]">1</span>FE
    </h1>
  </div>
);
