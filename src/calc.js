const expressionAnswer = (first, sign, second) => {
  let answer = 0;
  if (sign === '-') {
    answer = first - second;
  }
  if (sign === '+') {
    answer = first + second;
  }
  if (sign === '*') {
    answer = first * second;
  }
  return answer;
};

export default expressionAnswer;
