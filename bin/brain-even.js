#!/home/catherine/.asdf/shims/node
import readLineSync from 'readline-sync';
import brainGameEven from '../src/evenNumbers.js';

const numberOfRounds = 3;

console.log('Welcome to the Brain Games!');
const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

brainGameEven(userName, numberOfRounds);
