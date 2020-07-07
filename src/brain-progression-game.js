import readlineSync from 'readline-sync';
import { getRandom } from './random.js';
import getProgression from './progression.js';

const showIntro = () => console.log('What number is missing in the progression?');
const congrats = (username) => console.log(`Congratulations ${username}`);
const gameIteration = (username) => {
  const progression = getProgression(getRandom(10), getRandom(10), 10);
  const changeIndex = getRandom(10) - 1;
  const correctAnswer = progression[changeIndex];
  progression[changeIndex] = '..';
  const progressionString = progression.join(' ');

  console.log(`Question: ${progressionString} `);

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
