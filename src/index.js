import readLineSync from 'readline-sync';

const askUser = (message) => readLineSync.question(message);
const makeMessageForWrongAnswer = (userAnswer, rightAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`;

const numberOfRound = 3;

const startGame = (gameDescription, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = askUser('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < numberOfRound; i += 1) {
    const [question, rightAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = askUser('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      const wrongAnswerMessage = makeMessageForWrongAnswer(userAnswer, rightAnswer, userName);
      console.log(wrongAnswerMessage);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default startGame;
