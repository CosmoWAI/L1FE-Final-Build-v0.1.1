
import type { Quest, Difficulty, Modifier } from '../../types';

const difficultyMultipliers: Record<Difficulty, number> = {
  Easy: 1.0,
  Normal: 1.5,
  Hard: 2.25,
  Epic: 3.5,
};

const modifierMultipliers: Record<Modifier, number> = {
  Timer: 1.2,
  'Peer Verify': 1.3,
  'No Pause': 1.1,
  'Double or Nothing': 1.0, // Special handling
};

/**
 * Calculates the total XP earned from a quest, applying multipliers
 * for difficulty and selected modifiers.
 * @param quest - The base quest object.
 * @param difficulty - The chosen difficulty.
 * @param modifiers - A set of active modifiers.
 * @returns The calculated total XP.
 */
export const calculateQuestXP = (
  quest: Quest,
  difficulty: Difficulty,
  modifiers: Set<Modifier>
): number => {
  let finalXP = quest.baseXP * difficultyMultipliers[difficulty];

  modifiers.forEach(modifier => {
    if (modifier !== 'Double or Nothing') {
      finalXP *= modifierMultipliers[modifier];
    }
  });

  // Special handling for "Double or Nothing"
  if (modifiers.has('Double or Nothing')) {
    finalXP = Math.random() < 0.5 ? finalXP * 2 : 0;
  }

  return Math.round(finalXP);
};
