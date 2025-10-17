
import { useState, useEffect, useCallback } from 'react';
import type { PlayerStats, StatName, CompletedQuestInfo, ProgressData } from '../types';
import { calculateXPForNextLevel } from '../lib/leveling/logic';

const L1FE_PROGRESS_KEY = 'l1fe_progress';

const initialStats: PlayerStats = {
  Strength: { level: 1, xp: 0, xpToNextLevel: calculateXPForNextLevel(1) },
  Mind: { level: 1, xp: 0, xpToNextLevel: calculateXPForNextLevel(1) },
  Spirit: { level: 1, xp: 0, xpToNextLevel: calculateXPForNextLevel(1) },
  Wealth: { level: 1, xp: 0, xpToNextLevel: calculateXPForNextLevel(1) },
  Relation: { level: 1, xp: 0, xpToNextLevel: calculateXPForNextLevel(1) },
};

const initialProgress: ProgressData = {
  stats: initialStats,
  streaks: { daily: 0, weekly: 0 },
  lastCompletedQuestDate: null,
};

// Helper to load progress from localStorage
const loadProgress = (): ProgressData => {
  try {
    const savedProgress = localStorage.getItem(L1FE_PROGRESS_KEY);
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
  } catch (error) {
    console.error("Failed to load progress from localStorage:", error);
  }
  return initialProgress;
};

// Helper to save progress to localStorage
const saveProgress = (progress: ProgressData) => {
  try {
    localStorage.setItem(L1FE_PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save progress to localStorage:", error);
  }
};


export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  // Persist changes to localStorage whenever progress updates
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);
  
  const addXP = useCallback((statName: StatName, amount: number) => {
    if (amount <= 0) return;

    setProgress(prevProgress => {
      const newProgress = JSON.parse(JSON.stringify(prevProgress)); // Deep copy
      const stat = newProgress.stats[statName];
      
      stat.xp += amount;
      let leveledUp = false;

      // Handle leveling up
      while (stat.xp >= stat.xpToNextLevel) {
        leveledUp = true;
        stat.xp -= stat.xpToNextLevel;
        stat.level += 1;
        stat.xpToNextLevel = calculateXPForNextLevel(stat.level);
      }
      
      return newProgress;
    });
  }, []);
  
  const completeQuest = useCallback((questInfo: CompletedQuestInfo, earnedXP: number) => {
    addXP(questInfo.quest.stat, earnedXP);
    // Future logic for streaks and achievements can be added here
  }, [addXP]);
  
  const getOverallLevel = useCallback(() => {
    const totalLevels = Object.values(progress.stats).reduce((sum, stat) => sum + stat.level, 0);
    return Math.floor(totalLevels / Object.keys(progress.stats).length);
  }, [progress.stats]);

  return { progress, completeQuest, getOverallLevel };
};
