export const sum = (...numbers) => {
  return numbers.reduce((sumValue, number) => {
    if (
      number > 2 ** 53 ||
      sumValue > 2 ** 53 ||
      typeof sumValue === 'bigint' ||
      typeof number === 'bigint'
    ) {
      return BigInt(number) + BigInt(sumValue);
    } else {
      return number + sumValue;
    }
  }, 0);
};

export const subtract = (...numbers) => {
  return numbers.reduce((subtractValue, number, i) => {
    if (
      number > 2 ** 53 ||
      subtractValue > 2 ** 53 ||
      typeof subtractValue === 'bigint' ||
      typeof number === 'bigint'
    ) {
      return i === 0 ? BigInt(number) : BigInt(subtractValue) - BigInt(number);
    } else {
      return i === 0 ? number : subtractValue - number;
    }
  }, 0);
};

export const multiply = (...numbers) => {
  return numbers.reduce((multValue, number) => {
    if (
      number > 2 ** 53 ||
      multValue > 2 ** 53 ||
      typeof multValue === 'bigint' ||
      typeof number === 'bigint'
    ) {
      return BigInt(multValue) * BigInt(number);
    } else {
      return multValue * number;
    }
  }, 1);
};

// Could potentially truncate digits after floating point
export const divide = (...numbers) => {
  return numbers.reduce((divideValue, number, i) => {
    if (
      number > 2 ** 53 ||
      divideValue > 2 ** 53 ||
      typeof divideValue === 'bigint' ||
      typeof number === 'bigint'
    ) {
      return i === 0 ? BigInt(number) : BigInt(divideValue) / BigInt(number);
    } else {
      return i === 0 ? number : divideValue / number;
    }
  }, 1);
};
