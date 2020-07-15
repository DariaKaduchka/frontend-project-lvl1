#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUsername, greetUser } from '../src/index.js';
import * as progressionGame from '../src/brain-progression-game.js';
import * as calcGame from '../src/brain-calc-game.js';
import * as evenGame from '../src/brain-even-game.js';
import * as gcdGame from '../src/brain-gcd-game.js';
import * as primeGame from '../src/brain-prime-game.js';

const games = [
  { name: 'Calculation', game: calcGame },
  { name: 'Progression', game: progressionGame },
  { name: 'Even', game: evenGame },
  { name: 'Greatest common divider', game: gcdGame },
  { name: 'Prime', game: primeGame },
];

const congrats = (username) => console.log(`Congratulations ${username}`);
const gameIteration = (username, question) => {
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

const startGame = (username, game) => {
  console.log(game.getIntro());
  let userNotMistaken = true;
  for (let i = 0; i < 3 && userNotMistaken === true; i += 1) {
    userNotMistaken = gameIteration(username, game.generateQuestion());
  }
  if (userNotMistaken === true) {
    congrats(username);
  }
};

const selectGame = () => {
  console.log('Choose a game:');
  for (let i = 0; i < games.length; i += 1) {
    console.log(`${i + 1} ${games[i].name}`);
  }
  const selectionGame = readlineSync.questionInt('Your answer: ');
  if (selectionGame < 0 || selectionGame > games.length) {
    return selectGame();
  }
  return games[selectionGame - 1].game;
};

console.log('Welcome to the Brain Games!');
const username = getUsername();
greetUser(username);

const game = selectGame();

startGame(username, game);
