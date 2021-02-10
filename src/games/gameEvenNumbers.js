import _ from 'lodash';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = (n) => n;
const isEvenNumber = (n) => n % 2 === 0;

const gameEvenNumbers = () => {
  const condition = _.random(0, 999, false);
  const question = getQuestion(condition);
  const answer = isEvenNumber(condition) ? 'yes' : 'no';
  return [question, answer];
};

export default gameEvenNumbers;
