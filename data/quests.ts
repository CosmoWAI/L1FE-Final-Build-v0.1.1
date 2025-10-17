
import type { Quest } from '../types';

export const initialQuests: Quest[] = [
  {
    id: 'str-01',
    title: 'Morning Mobility Routine',
    description: 'Complete a 15-minute stretching or mobility session to awaken your body.',
    stat: 'Strength',
    baseXP: 20,
  },
  {
    id: 'str-02',
    title: 'High-Intensity Interval Training',
    description: 'Push your limits with a 20-minute HIIT workout.',
    stat: 'Strength',
    baseXP: 50,
  },
  {
    id: 'mind-01',
    title: 'Deep Work Session',
    description: 'Engage in 45 minutes of uninterrupted, focused work on a single task.',
    stat: 'Mind',
    baseXP: 30,
  },
  {
    id: 'mind-02',
    title: 'Learn a New Skill',
    description: 'Dedicate 30 minutes to learning something new, from coding to a musical instrument.',
    stat: 'Mind',
    baseXP: 40,
  },
  {
    id: 'spirit-01',
    title: 'Mindfulness Meditation',
    description: 'Practice 10 minutes of guided or unguided meditation to center yourself.',
    stat: 'Spirit',
    baseXP: 25,
  },
  {
    id: 'spirit-02',
    title: 'Gratitude Journaling',
    description: 'Write down three things you are grateful for and reflect on why.',
    stat: 'Spirit',
    baseXP: 20,
  },
  {
    id: 'wealth-01',
    title: 'Daily Budget Review',
    description: 'Track your expenses for the day and categorize them in your budget.',
    stat: 'Wealth',
    baseXP: 15,
  },
  {
    id: 'wealth-02',
    title: 'Value Creation Hour',
    description: 'Spend one hour working on a side project or developing a valuable skill.',
    stat: 'Wealth',
    baseXP: 60,
  },
  {
    id: 'relation-01',
    title: 'Meaningful Connection',
    description: 'Reach out to a friend or family member just to see how they are doing.',
    stat: 'Relation',
    baseXP: 25,
  },
  {
    id: 'relation-02',
    title: 'Active Listening Practice',
    description: 'In a conversation, focus solely on understanding the other person without planning your response.',
    stat: 'Relation',
    baseXP: 35,
  },
];
