
import { useState, useEffect, useCallback } from 'react';
import type { LeaderboardEntry, Duel, StatName } from '../types';

const L1FE_LEADERBOARD_KEY = 'l1fe_leaderboard';
const L1FE_DUELS_KEY = 'l1fe_duels';

// Mock initial data
const initialLeaderboard: LeaderboardEntry[] = [
  { id: 'user1', username: 'AscendantOne', weeklyXP: 10500 },
  { id: 'user2', username: 'Nova', weeklyXP: 9800 },
  { id: 'user3', username: 'Oracle', weeklyXP: 9250 },
  { id: 'user4', username: 'Zenith', weeklyXP: 8500 },
  { id: 'user5', username: 'Aether', weeklyXP: 7800 },
];

const initialDuels: Duel[] = [];

// Load/Save helpers
const loadData = <T,>(key: string, initialData: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialData;
  } catch (error) {
    console.error(`Failed to load ${key} from localStorage:`, error);
    return initialData;
  }
};

const saveData = <T,>(key: string, data: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to save ${key} to localStorage:`, error);
  }
};


export const useCompetition = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => loadData(L1FE_LEADERBOARD_KEY, initialLeaderboard));
  const [duels, setDuels] = useState<Duel[]>(() => loadData(L1FE_DUELS_KEY, initialDuels));

  // Persist changes
  useEffect(() => {
    saveData(L1FE_LEADERBOARD_KEY, leaderboard);
  }, [leaderboard]);

  useEffect(() => {
    saveData(L1FE_DUELS_KEY, duels);
  }, [duels]);

  const createDuel = useCallback((opponent: string, stat: StatName, xpGoal: number) => {
    const newDuel: Duel = {
      id: `duel-${Date.now()}`,
      challenger: 'Me', // This would be the current user
      opponent,
      stat,
      xpGoal,
      createdAt: Date.now(),
      completed: false,
    };
    setDuels(prevDuels => [...prevDuels, newDuel]);
  }, []);

  return { leaderboard, duels, createDuel };
};
