import _ from 'lodash';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (n) => n % 2 === 0;

export default () => {
  const condition = _.random(0, 999, false);

  const question = condition;
  const answer = isEvenNumber(condition) ? 'yes' : 'no';

  return [question, answer];
};
