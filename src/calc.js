import readLineSync from 'readline-sync';
import _ from 'lodash';

const doesUserRight = (rightAnswer, userAnswer) => rightAnswer === userAnswer;

const calculateGame = (user, round) => {
  let count;
  for (count = 1; count <= round;) {
    let questionForUser;
    let rightAnswer;
    const firstRandomNumber = _.random(0, 100, false);
    const secondRandomNumber = _.random(0, 100, false);
    const numberForOperand = _.random(1, 3, false);
    switch (numberForOperand) {
      case 1:
        questionForUser = `${firstRandomNumber} + ${secondRandomNumber}`;
        rightAnswer = _.add(firstRandomNumber, secondRandomNumber);
        break;
      case 2:
        questionForUser = `${firstRandomNumber} - ${secondRandomNumber}`;
        rightAnswer = _.subtract(firstRandomNumber, secondRandomNumber);
        break;
      default:
        questionForUser = `${firstRandomNumber} * ${secondRandomNumber}`;
        rightAnswer = _.multiply(firstRandomNumber, secondRandomNumber);
        break;
    }
    console.log(`Question: ${questionForUser}`);
    const userAnswer = Number(readLineSync.question('Your answer: '));
    if (doesUserRight(rightAnswer, userAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${user}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${user}!`);
  return true;
};

export default calculateGame;
