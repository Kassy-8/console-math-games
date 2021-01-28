#!/home/catherine/.asdf/shims node
import readLineSync from 'readline-sync';
import calculateGame from '../src/calc.js';

const numberOfRounds = 3;

const askUserName = (question) => readLineSync.question(question);
const askNameQuestion = 'May I have your name? ';

console.log('Welcome to the Brain Games!');
const userName = askUserName(askNameQuestion);
const messageHello = `Hello, ${userName}!`;
console.log(messageHello);

calculateGame(userName, numberOfRounds);
