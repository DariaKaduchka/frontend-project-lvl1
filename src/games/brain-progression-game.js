import { getRandom } from './random.js';

const getProgression = (start, difference, length) => {
  const progression = [];
  let nextNum = start;
  progression.push(start);

  for (let i = 1; i < length; i += 1) {
    nextNum += difference;
    progression.push(nextNum);
  }
  return progression;
};

export const getIntro = () => 'What number is missing in the progression?';

export const generateQuestion = () => {
  const progression = getProgression(getRandom(10), getRandom(10), 10);
  const changeIndex = getRandom(10);
  const correctAnswer = progression[changeIndex];
  progression[changeIndex] = '..';
  const progressionString = progression.join(' ');

  return { correctAnswer, questionText: progressionString };
};
