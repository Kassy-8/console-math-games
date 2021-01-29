// import readLineSync from 'readline-sync';
import _ from 'lodash';

const outputMessage = (message) => console.log(message);
const outputMessageQuestion = (question) => outputMessage(`Question: ${question}`);

// 1 экспорт - описание игры
const messageGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
export const outputMessageDescription = () => outputMessage(messageGameDescription);

// 2 экспорт - вопрос юзеру
let randomNumber;

const question = () => {
  randomNumber = _.random(0, 999, false);
  return randomNumber;
};

export const askQuestion = () => outputMessageQuestion(question());

// 3 экспорт - вычисление правильного ответа

const isEvenNumber = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  } return 'no';
};

export const getRightAnswer = () => isEvenNumber(randomNumber);
