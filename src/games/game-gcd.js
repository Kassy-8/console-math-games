import _ from 'lodash';

const outputMessage = (message) => console.log(message);
const outputMessageQuestion = (question) => outputMessage(`Question: ${question}`);

// 1 экспорт - описание игры
const messageGameDescription = 'Find the greatest common divisor of given numbers.';
export const outputMessageDescription = () => outputMessage(messageGameDescription);

// 2 экспорт - вопрос юзеру
let firstNumber;
let secondNumber;

const question = () => {
  firstNumber = _.random(0, 10, false);
  secondNumber = _.random(0, 10, false);
  return `${firstNumber} ${secondNumber}`;
};

export const askQuestion = () => outputMessageQuestion(question());

// 3 экспорт - вычисление правильного ответа
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
