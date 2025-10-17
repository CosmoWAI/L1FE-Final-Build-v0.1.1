
/**
 * Calculates the experience points required to reach the next level.
 * The curve is exponential to make leveling up progressively harder.
 * Formula: requiredXP = 100 * (level ^ 1.6)
 * @param level - The current level.
 * @returns The total XP needed to advance to the next level.
 */
export const calculateXPForNextLevel = (level: number): number => {
  return Math.floor(100 * Math.pow(level, 1.6));
};
