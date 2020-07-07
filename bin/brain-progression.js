#!/usr/bin/env node
import { getUsername, greetUser } from '../src/index.js';
import startGame from '../src/brain-progression-game.js';

console.log('Welcome to the Brain Games!');
const username = getUsername();
greetUser(username);
startGame(username);
