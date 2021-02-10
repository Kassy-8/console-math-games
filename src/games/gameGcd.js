import _ from 'lodash';

export const description = 'Find the greatest common divisor of given numbers.';

const getQuestion = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const getGreatCommonDivisor = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);
  const residual = maxNumber % minNumber;
  if (minNumber === 0) {
    return maxNumber;
  }
  if (residual === 0) {
    return minNumber;
  }
  return getGreatCommonDivisor(residual, minNumber);
};

const gameGcd = () => {
  const firstNumber = _.random(0, 10, false);
  const secondNumber = _.random(0, 10, false);
  const question = getQuestion(firstNumber, secondNumber);
  const answer = String(getGreatCommonDivisor(firstNumber, secondNumber));
  return [question, answer];
};

export default gameGcd;
