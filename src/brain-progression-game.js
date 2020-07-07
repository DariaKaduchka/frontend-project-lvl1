import { getRandom } from './random.js';
import getProgression from './progression.js';

export const getIntro = () => 'What number is missing in the progression?';

export const generateQuestion = () => {
  const progression = getProgression(getRandom(10), getRandom(10), 10);
  const changeIndex = getRandom(10);
  const correctAnswer = progression[changeIndex];
  progression[changeIndex] = '..';
  const progressionString = progression.join(' ');

  return { correctAnswer, questionText: progressionString };
};
