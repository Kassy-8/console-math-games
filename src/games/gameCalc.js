import _ from 'lodash';

export const description = 'What is the result of the expression?';

const calcExpression = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return _.add(firstOperand, secondOperand);
    case '-':
      return _.subtract(firstOperand, secondOperand);
    default:
      return _.multiply(firstOperand, secondOperand);
  }
};

export default () => {
  const firstOperand = _.random(0, 10, false);
  const secondOperand = _.random(0, 10, false);
  const operators = ['+', '-', '*'];
  const operator = operators[_.random(0, 2, false)];

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(calcExpression(firstOperand, secondOperand, operator));

  return [question, answer];
};
