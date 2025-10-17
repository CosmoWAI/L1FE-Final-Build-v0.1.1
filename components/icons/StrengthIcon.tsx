
import React from 'react';

export const StrengthIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M12 22V8"></path>
    <path d="M6 12H2"></path>
    <path d="M18 12h4"></path>
  </svg>
);
