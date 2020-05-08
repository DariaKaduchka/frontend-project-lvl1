// const getRandom = (min, max) => Math.random() * (max - min) + min;
export const getRandom = () => Math.floor(Math.random() * 100);
// Math.floor(Math.random() * 100);

export const getRandomSign = () => {
  const signArr = ['-', '+', '*'];
  return signArr[Math.floor((Math.random() * signArr.length))];
};
