
import React, { useState } from 'react';
import { Brand } from './components/ui/Brand';
import { StatChip } from './components/ui/StatChip';
import { XPBar } from './components/ui/XPBar';
import { QuestCard } from './components/quests/QuestCard';
import { DuelModal } from './components/compete/DuelModal';
import { SideDrawer } from './components/nav/SideDrawer';
import { Leaderboard } from './components/compete/Leaderboard';
import { initialQuests } from './data/quests';
import { useProgress } from './hooks/useProgress';
import { useCompetition } from './hooks/useCompetition';
import type { StatName } from './types';

function App() {
  const { progress, completeQuest, getOverallLevel } = useProgress();
  const { leaderboard, duels, createDuel } = useCompetition();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDuelModalOpen, setIsDuelModalOpen] = useState(false);

  const overallLevel = getOverallLevel();
  const mainStat = progress.stats.Strength; // Using strength for the main XP bar for now

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#E8EAF3] font-sans">
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <DuelModal isOpen={isDuelModalOpen} onClose={() => setIsDuelModalOpen(false)} onCreateDuel={createDuel} />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <Brand />
          <div className="flex items-center gap-4 p-2 bg-[#141824]/50 border border-gray-800 rounded-full">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#F3A45C] aura-glow`}>
              <span className="font-display text-4xl font-bold">{overallLevel}</span>
            </div>
            <div className="flex-grow min-w-0 md:w-96">
                <XPBar currentXP={mainStat.xp} xpToNextLevel={mainStat.xpToNextLevel} level={mainStat.level} />
            </div>
          </div>
        </header>

        {/* Stats Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {Object.entries(progress.stats).map(([name, data]) => (
            <StatChip key={name} stat={name as StatName} level={data.level} />
          ))}
        </div>
        
        {/* Main Content: Quests and Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-display font-bold text-white">Daily Quests</h2>
            {initialQuests.map(quest => (
              <QuestCard key={quest.id} quest={quest} onComplete={completeQuest} />
            ))}
          </div>
          <div className="space-y-6">
            <Leaderboard entries={leaderboard} />
            <button
                onClick={() => setIsDuelModalOpen(true)}
                className="w-full py-3 rounded-lg bg-red-600/20 border border-red-500 text-red-300 font-bold hover:bg-red-500/30 transition-colors"
            >
              Challenge a Rival
            </button>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Drawer */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full aura-gradient flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform gold-glow"
        aria-label="Open Journey Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
}

export default App;
