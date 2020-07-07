#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUsername, greetUser } from '../src/index.js';
import * as progressionGame from '../src/brain-progression-game.js';
import * as calcGame from '../src/brain-calc-game.js';
import * as evenGame from '../src/brain-even-game.js';
import * as gcdGame from '../src/brain-gcd-game.js';

const congrats = (username) => console.log(`Congratulations ${username}`);
const gameIteration = (username, question) => {
  console.log(`Question: ${question.questionText} `);

  // evenGame doesn't work with questionInt
  const answer = readlineSync.questionInt('Your answer: ');
  if (answer === question.correctAnswer) {
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
  //   const games = [calcGame, progressionGame];
  // console.log(games[0]);
  // console.log(games[1]);
  // todo: сделать выбор игр из массива с названиям и индексами

  console.log('Choose a game: 1 Calculation, 2 Progression, 3 Even, 4 Greatest common divider');
  const selectionGame = readlineSync.questionInt('Your answer: ');
  if (selectionGame === 1) {
    return calcGame;
  }
  if (selectionGame === 2) {
    return progressionGame;
  }
  if (selectionGame === 3) {
    return evenGame;
  }
  if (selectionGame === 4) {
    return gcdGame;
  }
  return selectGame();
};

console.log('Welcome to the Brain Games!');
const username = getUsername();
greetUser(username);

const game = selectGame();

startGame(username, game);
