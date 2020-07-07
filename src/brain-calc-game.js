import { getRandom, getRandomSign } from './random.js';
import expressionAnswer from './calc.js';

export const getIntro = () => 'What is the result of the expression?';

export const generateQuestion = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const sign = getRandomSign();
  const correctAnswer = expressionAnswer(number1, sign, number2);

  return { correctAnswer, questionText: `${number1} ${sign} ${number2}` };
};
