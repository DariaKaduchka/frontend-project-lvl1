import { getRandom } from './random.js';

const isEven = (num) => num % 2 === 0;

export const getIntro = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestion = () => {
  const randomNumber = getRandom();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { correctAnswer, questionText: `${randomNumber}` };
};
