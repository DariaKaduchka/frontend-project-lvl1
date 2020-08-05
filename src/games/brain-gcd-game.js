import { getRandom } from './random.js';

const greatestCommonDivider = (first, second) => {
  const maxGcd = first <= second ? first : second;

  for (let i = maxGcd; i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      return i;
    }
  }
  return 1;
};

export const getIntro = () => 'Find the greatest common divisor of given numbers.';

export const generateQuestion = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const correctAnswer = greatestCommonDivider(number1, number2);
  return { correctAnswer, questionText: `${number1} ${number2}` };
};
