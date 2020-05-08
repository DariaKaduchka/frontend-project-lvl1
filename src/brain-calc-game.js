import readlineSync from 'readline-sync';
import { getRandom, getRandomSign } from './random.js';
import expressionAnswer from './calc.js';

const showIntro = () => console.log('What is the result of the expression?');
const congrats = (username) => console.log(`Congratulations ${username}`);
const gameIteration = (username) => {
  const number1 = getRandom();
  const number2 = getRandom();
  const sign = getRandomSign();
  console.log(`Question: ${number1} ${sign} ${number2}`);
  const correctAnswer = expressionAnswer(number1, sign, number2);
  const answer = readlineSync.questionInt('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${username}`);
  return false;
};

const startGame = (username) => {
  showIntro();
  let userNotMistaken = true;
  for (let i = 0; i < 3 && userNotMistaken === true; i += 1) {
    userNotMistaken = gameIteration(username);
  }
  if (userNotMistaken === true) {
    congrats(username);
  }
};

export default startGame;
