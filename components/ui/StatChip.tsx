
import React from 'react';
import type { StatName } from '../../types';
import { StrengthIcon } from '../icons/StrengthIcon';
import { MindIcon } from '../icons/MindIcon';
import { SpiritIcon } from '../icons/SpiritIcon';
import { WealthIcon } from '../icons/WealthIcon';
import { RelationIcon } from '../icons/RelationIcon';

interface StatChipProps {
  stat: StatName;
  level: number;
}

const statConfig = {
  Strength: { icon: StrengthIcon, color: 'border-red-500' },
  Mind: { icon: MindIcon, color: 'border-blue-500' },
  Spirit: { icon: SpiritIcon, color: 'border-purple-500' },
  Wealth: { icon: WealthIcon, color: 'border-yellow-500' },
  Relation: { icon: RelationIcon, color: 'border-pink-500' },
};

export const StatChip: React.FC<StatChipProps> = ({ stat, level }) => {
  const { icon: Icon, color } = statConfig[stat];
  return (
    <div className={`flex items-center gap-2 bg-[#141824]/60 backdrop-blur-sm p-2 rounded-full border-2 ${color}`}>
      <div className={`p-1 rounded-full ${color.replace('border', 'bg')}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col text-sm">
        <span className="font-semibold text-white">{stat}</span>
        <span className="text-xs text-gray-400">LVL {level}</span>
      </div>
    </div>
  );
};
