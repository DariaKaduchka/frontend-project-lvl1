import readlineSync from 'readline-sync';
import isEven from './isEven.js';
import getRandom from './random.js';

const showIntro = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const congrats = (username) => console.log(`Congratulations ${username}`);
const gameIteration = (username) => {
  const randomNumber = getRandom();
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = isEven(randomNumber);
  const answer = readlineSync.question('Your answer: ');
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
