import { getRandom } from './random.js';
import { isPrime, maxPrime } from './isPrime.js';

export const getIntro = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateQuestion = () => {
  const num = getRandom(maxPrime());
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return { correctAnswer, questionText: num };
};
