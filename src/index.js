import readLineSync from 'readline-sync';
import * as evenNumbers from './games/game-evenNumbers.js';
import * as calc from './games/game-calc.js';

const askUserName = (message) => readLineSync.question(message);
const getUserAnswer = (message) => readLineSync.question(message);

const outputMessage = (message) => console.log(message);
const outputMessageHello = (user) => console.log(`Hello, ${user}!`);
const outputMessageWrongAnswer = (userAnswer, rightAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
const outputMessageCongratulate = (userName) => console.log(`Congratulations, ${userName}!`);

const messageWelcome = 'Welcome to the Brain Games!';
const messageAskName = 'May I have your name? ';
const messageCorrectAnswer = 'Correct!';
const messageAnswer = 'Your answer: ';

const numberOfRound = 3;

const startGame = (module) => {
  outputMessage(messageWelcome);
  const userName = askUserName(messageAskName);
  outputMessageHello(userName);
  module.outputMessageDescription();
  for (let count = 1; count <= numberOfRound;) {
    module.askQuestion();
    const userAnswer = getUserAnswer(messageAnswer);
    const rightAnswer = String(module.getRightAnswer());
    if (userAnswer === rightAnswer) {
      outputMessage(messageCorrectAnswer);
      count += 1;
    } else {
      outputMessageWrongAnswer(userAnswer, rightAnswer, userName);
      return false;
    }
  }
  outputMessageCongratulate(userName);
  return true;
};

export const startGameEvenNumbers = () => startGame(evenNumbers);
export const startGameCalc = () => startGame(calc);
