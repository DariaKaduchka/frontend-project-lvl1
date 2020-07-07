import isEven from './isEven.js';
import { getRandom } from './random.js';

export const getIntro = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestion = () => {
  const randomNumber = getRandom();
  const correctAnswer = isEven(randomNumber);
  return { correctAnswer, questionText: `${randomNumber}` };
};
