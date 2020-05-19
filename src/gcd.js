const greatestCommonDivider = (first, second) => {
  const maxGcd = first <= second ? first : second;

  for (let i = maxGcd; i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      return i;
    }
  }
  return 1;
};

export default greatestCommonDivider;
