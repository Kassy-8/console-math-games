import readLineSync from 'readline-sync';
import _ from 'lodash';

const isEvenNumber = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  } return 'no';
};

const doesUserRight = (rightAnswer, userAnswer) => rightAnswer === userAnswer;

const brainGameEven = (user, round) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count;
  for (count = 1; count <= round;) {
    const randomNumber = _.random(0, 999, false);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const rightAnswer = isEvenNumber(randomNumber);
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

export default brainGameEven;
