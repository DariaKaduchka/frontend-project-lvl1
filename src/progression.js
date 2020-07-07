
const getProgression = (start, difference, length) => {
  const progression = [];
  let nextNum = start;
  progression.push(start);

  for (let i = 1; i < length; i += 1) {
    nextNum += difference;
    progression.push(nextNum);
  }
  return progression;
};

export default getProgression;
