import _ from 'lodash';

const messageGameDescription = 'What is the result of the expression?';
export const outputDescription = () => console.log(messageGameDescription);

let firstOperand;
let secondOperand;
let operator;

export const getQuestion = () => {
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

const calculateExpression = (sign) => {
  switch (sign) {
    case 1:
      return _.add(firstOperand, secondOperand);
    case 2:
      return _.subtract(firstOperand, secondOperand);
    default:
      return _.multiply(firstOperand, secondOperand);
  }
};

export const getRightAnswer = () => calculateExpression(operator);
