import readLineSync from 'readline-sync';
import * as evenNumbers from './games/game-evenNumbers.js';
import * as calc from './games/game-calc.js';
import * as gcd from './games/game-gcd.js';
import * as progression from './games/game-progression.js';
import * as prime from './games/game-prime.js';

const askUserName = (message) => readLineSync.question(message);
const getUserAnswer = (message) => readLineSync.question(message);

const outputMessage = (message) => console.log(message);
const outputHello = (userName) => console.log(`Hello, ${userName}!`);
const outputQuestion = (question) => outputMessage(`Question: ${question}`);
const outputWrongAnswer = (userAnswer, rightAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
const outputCongratulate = (userName) => console.log(`Congratulations, ${userName}!`);

const messageWelcome = 'Welcome to the Brain Games!';
const messageAskName = 'May I have your name? ';
const messageRightAnswer = 'Correct!';
const messageAnswer = 'Your answer: ';

const numberOfRound = 3;

const startGame = (game) => {
  outputMessage(messageWelcome);
  const userName = askUserName(messageAskName);
  outputHello(userName);
  game.outputDescription();
  for (let i = 1; i <= numberOfRound;) {
    outputQuestion(game.getQuestion());
    const userAnswer = getUserAnswer(messageAnswer);
    const rightAnswer = String(game.getRightAnswer());
    if (userAnswer === rightAnswer) {
      outputMessage(messageRightAnswer);
      i += 1;
    } else {
      outputWrongAnswer(userAnswer, rightAnswer, userName);
      return false;
    }
  }
  outputCongratulate(userName);
  return true;
};

export const startGameEvenNumbers = () => startGame(evenNumbers);
export const startGameCalc = () => startGame(calc);
export const startGameGcd = () => startGame(gcd);
export const startGameProgression = () => startGame(progression);
export const startGamePrime = () => startGame(prime);
