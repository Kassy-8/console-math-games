import _ from 'lodash';

export const description = 'Find the greatest common divisor of given numbers.';

let firstNumber;
let secondNumber;

export const getQuestion = () => {
  firstNumber = _.random(0, 10, false);
  secondNumber = _.random(0, 10, false);
  return `${firstNumber} ${secondNumber}`;
};

const getGreatCommonDivisor = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);
  const residual = maxNumber % minNumber;
  if (minNumber === 0) {
    return maxNumber;
  }
  if (residual === 0) {
    return minNumber;
  }
  return getGreatCommonDivisor(residual, minNumber);
};

export const getRightAnswer = () => getGreatCommonDivisor(firstNumber, secondNumber);
