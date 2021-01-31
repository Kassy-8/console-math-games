import _ from 'lodash';

const outputMessage = (message) => console.log(message);
const outputMessageQuestion = (question) => outputMessage(`Question: ${question}`);

// 1 экспорт - описание игры
const messageGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const outputMessageDescription = () => outputMessage(messageGameDescription);

// 2 экспорт - вопрос юзеру
let number;

const question = () => {
  number = _.random(1, 100, false);
  return number;
};

export const askQuestion = () => outputMessageQuestion(question());

// 3 экспорт - вычисление правильного ответа
const isPrimeNumber = (num) => {
  for (let i = _.round(num / 2); i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const getRightAnswer = () => isPrimeNumber(number);
