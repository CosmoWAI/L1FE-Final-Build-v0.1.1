
import React from 'react';

interface XPBarProps {
  currentXP: number;
  xpToNextLevel: number;
  level: number;
}

export const XPBar: React.FC<XPBarProps> = ({ currentXP, xpToNextLevel, level }) => {
  const percentage = xpToNextLevel > 0 ? (currentXP / xpToNextLevel) * 100 : 0;

  return (
    <div className="w-full bg-[#141824] rounded-full p-1.5 border border-gray-700">
      <div className="relative flex items-center justify-between text-xs font-semibold text-white px-3 z-10">
        <span>LVL {level}</span>
        <span>{Math.round(currentXP)} / {xpToNextLevel} XP</span>
        <span>LVL {level + 1}</span>
      </div>
      <div className="absolute top-0 left-0 h-full rounded-full aura-gradient" style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}></div>
    </div>
  );
};
