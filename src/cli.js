import readLineSync from 'readline-sync';

const userName = () => {
  const askName = readLineSync.question('May I have your name? ');
  return askName;
};

export default userName;
