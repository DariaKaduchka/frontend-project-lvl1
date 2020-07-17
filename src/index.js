import readlineSync from 'readline-sync';

export const getUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const greetUser = (userName) => console.log(`Hello, ${userName}!`);
