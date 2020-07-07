
export const getRandom = (n) => Math.floor(Math.random() * (n || 100));

export const getRandomSign = () => {
  const signArr = ['-', '+', '*'];
  return signArr[Math.floor((Math.random() * signArr.length))];
};
