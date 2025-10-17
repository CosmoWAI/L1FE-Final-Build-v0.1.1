
import React, { useState, useMemo } from 'react';
import type { Quest, Difficulty, Modifier, CompletedQuestInfo } from '../../types';
import { calculateQuestXP } from '../../lib/quests/math';
import { StatChip } from '../ui/StatChip';

interface QuestCardProps {
  quest: Quest;
  onComplete: (questInfo: CompletedQuestInfo, xp: number) => void;
}

const difficulties: Difficulty[] = ['Easy', 'Normal', 'Hard', 'Epic'];
const allModifiers: Modifier[] = ['Timer', 'Double or Nothing', 'Peer Verify', 'No Pause'];

export const QuestCard: React.FC<QuestCardProps> = ({ quest, onComplete }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('Normal');
  const [selectedModifiers, setSelectedModifiers] = useState<Set<Modifier>>(new Set());
  const [isCompleted, setIsCompleted] = useState(false);

  const handleModifierToggle = (modifier: Modifier) => {
    setSelectedModifiers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(modifier)) {
        newSet.delete(modifier);
      } else {
        newSet.add(modifier);
      }
      return newSet;
    });
  };
  
  const estimatedXP = useMemo(() => {
    // For "Double or Nothing", we show the base potential XP
    const tempModifiers = new Set(selectedModifiers);
    const hasDbl = tempModifiers.has('Double or Nothing');
    if(hasDbl) tempModifiers.delete('Double or Nothing');
    
    const xp = calculateQuestXP(quest, selectedDifficulty, tempModifiers);
    return hasDbl ? `${xp} or ${xp*2}` : `${xp}`;

  }, [quest, selectedDifficulty, selectedModifiers]);

  const handleComplete = () => {
    const finalXP = calculateQuestXP(quest, selectedDifficulty, selectedModifiers);
    const questInfo: CompletedQuestInfo = {
      quest,
      difficulty: selectedDifficulty,
      modifiers: selectedModifiers,
    };
    onComplete(questInfo, finalXP);
    setIsCompleted(true);
    // You might want to add a visual indicator or remove the card after a delay
  };

  if (isCompleted) {
    return (
        <div className="bg-[#141824]/50 border-2 border-[#5FCCB0] rounded-xl p-4 flex items-center justify-center transition-opacity duration-500 opacity-50">
            <p className="text-lg font-semibold aura-text">Quest Completed</p>
        </div>
    );
  }

  return (
    <div className="bg-[#141824] border border-gray-800 rounded-xl p-4 flex flex-col gap-4 transform hover:scale-[1.02] hover:border-[#F3A45C] transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-display font-semibold text-white">{quest.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{quest.description}</p>
        </div>
        <StatChip stat={quest.stat} level={1} />
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-400">Difficulty</label>
        <div className="flex gap-2 mt-1">
          {difficulties.map(d => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(d)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedDifficulty === d ? 'bg-[#F3A45C] text-black font-bold' : 'bg-gray-700 hover:bg-gray-600'}`}
            >{d}</button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="text-xs font-semibold text-gray-400">Modifiers</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {allModifiers.map(m => (
            <button
              key={m}
              onClick={() => handleModifierToggle(m)}
              className={`px-3 py-1 text-xs rounded-full transition-colors border ${selectedModifiers.has(m) ? 'bg-[#5FCCB0] text-black border-[#5FCCB0]' : 'border-gray-600 bg-transparent hover:bg-gray-700'}`}
            >{m}</button>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-3 flex justify-between items-center">
        <p className="text-sm">
          Estimated XP: <span className="font-bold aura-text">{estimatedXP}</span>
        </p>
        <button
          onClick={handleComplete}
          className="px-6 py-2 rounded-lg font-bold text-black bg-[#F3A45C] hover:bg-yellow-500 transform hover:scale-105 transition-all gold-glow"
        >
          Complete
        </button>
      </div>
    </div>
  );
};
