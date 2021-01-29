import _ from 'lodash';

const outputMessage = (message) => console.log(message);
const outputMessageQuestion = (question) => outputMessage(`Question: ${question}`);

// 1 экспорт - описание игры
const messageGameDescription = 'What number is missing in the progression?';
export const outputMessageDescription = () => outputMessage(messageGameDescription);

// 2 экспорт - вопрос юзеру
const progression = [];
let hiddenElementPosition;

const question = () => {
  const firstElement = _.random(0, 10, false);
  const stepOfProgression = _.random(1, 5, false);
  const lengthOfProgression = _.random(8, 12, false);
  hiddenElementPosition = _.random(1, lengthOfProgression, false);
  progression[0] = firstElement;

  for (let i = 1; i <= lengthOfProgression; i += 1) {
    progression[i] = progression[i - 1] + stepOfProgression;
  }
  const progressionForOutput = [...progression];
  progressionForOutput[hiddenElementPosition] = '..';
  return _.join(progressionForOutput, ' ');
};

export const askQuestion = () => outputMessageQuestion(question());

// 3 экспорт - вычисление правильного ответа
const getHiddenElement = (numbers) => numbers[hiddenElementPosition];

export const getRightAnswer = () => getHiddenElement(progression);
