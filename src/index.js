import readlineSync from 'readline-sync';

export const getUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const greetUser = (userName) => console.log(`Hello, ${userName}!`);


// const games = [
//   { name: 'Calculation', game: calcGame },
//   { name: 'Progression', game: progressionGame },
//   { name: 'Even', game: evenGame },
//   { name: 'Greatest common divider', game: gcdGame },
//   { name: 'Prime', game: primeGame },
// ];

export const congrats = (username) => console.log(`Congratulations ${username}`);
export const gameIteration = (username, question) => {
  console.log(`Question: ${question.questionText} `);

  const answer = readlineSync.question('Your answer: ');
  if (answer === String(question.correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${question.correctAnswer}".`);
  console.log(`Let's try again, ${username}`);
  return false;
};

export const startGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const username = getUsername();
  greetUser(username);

  console.log(game.getIntro());
  let userNotMistaken = true;
  for (let i = 0; i < 3 && userNotMistaken === true; i += 1) {
    userNotMistaken = gameIteration(username, game.generateQuestion());
  }
  if (userNotMistaken === true) {
    congrats(username);
  }
};

// console.log('Welcome to the Brain Games!');
// const username = getUsername();
// greetUser(username);

// const selectGame = () => {
//   console.log('Choose a game:');
//   for (let i = 0; i < games.length; i += 1) {
//     console.log(`${i + 1} ${games[i].name}`);
//   }
//   const selectionGame = readlineSync.questionInt('Your answer: ');
//   if (selectionGame < 0 || selectionGame > games.length) {
//     return selectGame();
//   }
//   return games[selectionGame - 1].game;
// };

// const game = selectGame();
