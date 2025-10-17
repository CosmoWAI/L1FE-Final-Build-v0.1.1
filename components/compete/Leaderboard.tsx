
import React from 'react';
import type { LeaderboardEntry } from '../../types';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries }) => {
  const getRankIndicator = (rank: number) => {
    if (rank === 0) return '🥇';
    if (rank === 1) return '🥈';
    if (rank === 2) return '🥉';
    return `${rank + 1}.`;
  };

  return (
    <div className="bg-[#141824] border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-display font-bold text-white mb-4">Weekly Leaderboard</h3>
      <ul className="space-y-3">
        {entries.slice(0, 10).map((entry, index) => (
          <li
            key={entry.id}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              index < 3 ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-gray-800/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg w-8 text-center">{getRankIndicator(index)}</span>
              <span className="font-semibold">{entry.username}</span>
            </div>
            <span className="font-bold aura-text">{entry.weeklyXP.toLocaleString()} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
