import readLineSync from 'readline-sync';

const askNameAndOutput = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default askNameAndOutput;
