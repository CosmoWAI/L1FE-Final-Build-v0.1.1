
import React from 'react';

export const L1feEmblem: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 2.5L95 27.5V72.5L50 97.5L5 72.5V27.5L50 2.5Z" stroke="currentColor" strokeWidth="5"/>
    <path d="M50 2.5V97.5" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5"/>
    <path d="M5 27.5L95 72.5" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5"/>
    <path d="M95 27.5L5 72.5" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5"/>
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="3"/>
  </svg>
);
