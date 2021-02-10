import _ from 'lodash';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = (n) => n;

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = _.round(num / 2); i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const condition = _.random(0, 100, false);
  const question = getQuestion(condition);
  const answer = isPrimeNumber(condition) ? 'yes' : 'no';
  return [question, answer];
};

export default gamePrime;
