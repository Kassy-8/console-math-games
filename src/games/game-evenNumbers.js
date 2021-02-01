import _ from 'lodash';

const messageGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
export const outputDescription = () => console.log(messageGameDescription);

let randomNumber;

export const getQuestion = () => {
  randomNumber = _.random(0, 999, false);
  return randomNumber;
};

const isEvenNumber = (n) => ((n % 2 === 0) ? 'yes' : 'no');

export const getRightAnswer = () => isEvenNumber(randomNumber);
