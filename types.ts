
export type StatName = 'Strength' | 'Mind' | 'Spirit' | 'Wealth' | 'Relation';

export interface PlayerStat {
  level: number;
  xp: number;
  xpToNextLevel: number;
}

export type PlayerStats = Record<StatName, PlayerStat>;

export type Difficulty = 'Easy' | 'Normal' | 'Hard' | 'Epic';
export type Modifier = 'Timer' | 'Double or Nothing' | 'Peer Verify' | 'No Pause';

export interface Quest {
  id: string;
  title: string;
  description: string;
  stat: StatName;
  baseXP: number;
}

export interface CompletedQuestInfo {
  quest: Quest;
  difficulty: Difficulty;
  modifiers: Set<Modifier>;
}

export interface Duel {
  id: string;
  challenger: string;
  opponent: string;
  stat: StatName;
  xpGoal: number;
  createdAt: number;
  completed: boolean;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  weeklyXP: number;
}

export interface ProgressData {
  stats: PlayerStats;
  streaks: {
    daily: number;
    weekly: number;
  };
  lastCompletedQuestDate: string | null;
}
