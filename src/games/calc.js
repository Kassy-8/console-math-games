import _ from 'lodash';

export const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcExpression = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return _.add(firstOperand, secondOperand);
    case '-':
      return _.subtract(firstOperand, secondOperand);
    case '*':
      return _.multiply(firstOperand, secondOperand);
    default:
      return false;
  }
};

export default () => {
  const firstOperand = _.random(0, 10, false);
  const secondOperand = _.random(0, 10, false);
  const operator = operators[_.random(0, operators.length - 1, false)];

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(calcExpression(firstOperand, secondOperand, operator));

  return [question, answer];
};
