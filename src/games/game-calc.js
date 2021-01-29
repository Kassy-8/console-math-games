import _ from 'lodash';

const outputMessage = (message) => console.log(message);
const outputMessageQuestion = (question) => outputMessage(`Question: ${question}`);

// 1 экспорт - описание игры
const messageGameDescription = 'What is the result of the expression?';
export const outputMessageDescription = () => outputMessage(messageGameDescription);

// 2 экспорт - вопрос юзеру
let firstOperand;
let secondOperand;
let operator;

const question = () => {
  firstOperand = _.random(0, 10, false);
  secondOperand = _.random(0, 10, false);
  operator = _.random(1, 3, false);
  switch (operator) {
    case 1:
      return `${firstOperand} + ${secondOperand}`;
    case 2:
      return `${firstOperand} - ${secondOperand}`;
    default:
      return `${firstOperand} * ${secondOperand}`;
  }
};

export const askQuestion = () => outputMessageQuestion(question());

// 3 экспорт - вычисление правильного ответа
const getResultOfExpression = (sign) => {
  switch (sign) {
    case 1:
      return _.add(firstOperand, secondOperand);
    case 2:
      return _.subtract(firstOperand, secondOperand);
    default:
      return _.multiply(firstOperand, secondOperand);
  }
};

export const getRightAnswer = () => getResultOfExpression(operator);
