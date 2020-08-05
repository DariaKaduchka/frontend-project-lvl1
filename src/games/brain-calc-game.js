import { getRandom } from './random.js';

export const getRandomSign = () => {
  const signArr = ['-', '+', '*'];
  return signArr[Math.floor((Math.random() * signArr.length))];
};

const expressionAnswer = (first, sign, second) => {
  let answer = 0;
  if (sign === '-') {
    answer = first - second;
  }
  if (sign === '+') {
    answer = first + second;
  }
  if (sign === '*') {
    answer = first * second;
  }
  return answer;
};

export const getIntro = () => 'What is the result of the expression?';

export const generateQuestion = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const sign = getRandomSign();
  const correctAnswer = expressionAnswer(number1, sign, number2);

  return { correctAnswer, questionText: `${number1} ${sign} ${number2}` };
};
