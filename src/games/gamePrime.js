import _ from 'lodash';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let number;

export const getQuestion = () => {
  number = _.random(1, 100, false);
  return number;
};

const isPrimeNumber = (num) => {
  for (let i = _.round(num / 2); i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const getRightAnswer = () => isPrimeNumber(number);
