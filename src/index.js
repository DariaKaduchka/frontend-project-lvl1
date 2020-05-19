import readlineSync from 'readline-sync';

export const getUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const greetUser = (userName) => console.log(`Hello, ${userName}!`);

// const congrats = (userName) => console.log(`Congratulations ${userName}`);
// const gameIteration = (userName) => {
//   const randomNumber = getRandom();
//   console.log(`Question: ${randomNumber}`);
//   const correctAnswer = isEven(randomNumber);
//   const answer = readlineSync.question('Your answer: ');
//   if (answer === correctAnswer) {
//     console.log('Correct!');
//     return true;
//   }
//   console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
//   console.log(`Let's try again, ${userName}`);
//   return false;
// };

// const startGame = (intro) => {
//   console.log(intro);
//   const userName = getUsername();
//   let userNotMistaken = true;
//   for (let i = 0; i < 3 && userNotMistaken === true; i += 1) {
//     userNotMistaken = gameIteration(userName);
//   }
//   if (userNotMistaken === true) {
//     congrats(userName);
//   }
// };
