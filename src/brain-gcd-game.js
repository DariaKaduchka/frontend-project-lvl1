import { getRandom } from './random.js';
import greatestCommonDivider from './gcd.js';


export const getIntro = () => 'Find the greatest common divisor of given numbers.';

export const generateQuestion = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const correctAnswer = greatestCommonDivider(number1, number2);
  return { correctAnswer, questionText: `${number1} ${number2}` };
};
