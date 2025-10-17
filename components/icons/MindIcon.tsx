
import React from 'react';

export const MindIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L8 8l4 4 4-4-4-4z"></path>
    <path d="M8.5 7.5c-3 3.5-3 9.5 0 13"></path>
    <path d="M15.5 7.5c3 3.5 3 9.5 0 13"></path>
  </svg>
);
