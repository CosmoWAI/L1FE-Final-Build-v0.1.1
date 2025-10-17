
import React, { useState } from 'react';
import type { StatName } from '../../types';

interface DuelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateDuel: (opponent: string, stat: StatName, xpGoal: number) => void;
}

const stats: StatName[] = ['Strength', 'Mind', 'Spirit', 'Wealth', 'Relation'];

export const DuelModal: React.FC<DuelModalProps> = ({ isOpen, onClose, onCreateDuel }) => {
  const [opponent, setOpponent] = useState('');
  const [stat, setStat] = useState<StatName>('Strength');
  const [xpGoal, setXpGoal] = useState(1000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (opponent.trim() && xpGoal > 0) {
      onCreateDuel(opponent.trim(), stat, xpGoal);
      onClose();
      // Reset form
      setOpponent('');
      setStat('Strength');
      setXpGoal(1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#141824] border border-gray-700 rounded-2xl p-8 w-full max-w-md m-4" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-display font-bold text-white mb-6">Initiate Duel</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-300" htmlFor="opponent">Opponent Handle</label>
            <input
              id="opponent"
              type="text"
              value={opponent}
              onChange={e => setOpponent(e.target.value)}
              placeholder="e.g., Nova"
              className="w-full mt-2 bg-gray-900 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-[#F3A45C] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-300" htmlFor="stat">Stat to Contest</label>
            <select
              id="stat"
              value={stat}
              onChange={e => setStat(e.target.value as StatName)}
              className="w-full mt-2 bg-gray-900 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-[#F3A45C] focus:outline-none"
            >
              {stats.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-300" htmlFor="xpGoal">XP Goal</label>
            <input
              id="xpGoal"
              type="number"
              value={xpGoal}
              onChange={e => setXpGoal(Number(e.target.value))}
              className="w-full mt-2 bg-gray-900 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-[#F3A45C] focus:outline-none"
              min="100"
              step="100"
              required
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button type="button" onClick={onClose} className="px-6 py-2 rounded-lg font-semibold text-gray-300 hover:bg-gray-700 transition-colors">Cancel</button>
            <button type="submit" className="px-6 py-2 rounded-lg font-bold text-black bg-[#F3A45C] hover:bg-yellow-500 transition-colors">Challenge</button>
          </div>
        </form>
      </div>
    </div>
  );
};
