import readLineSync from 'readline-sync';

const askUser = (message) => readLineSync.question(message);
const outputQuestion = (question) => console.log(`Question: ${question}`);
const outputWrongAnswerMessage = (userAnswer, rightAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);

const numberOfRound = 3;

const startGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = askUser('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(game.description);

  for (let i = 1; i <= numberOfRound; i += 1) {
    outputQuestion(game.getQuestion());
    const userAnswer = askUser('Your answer: ');
    const rightAnswer = String(game.getRightAnswer());

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      outputWrongAnswerMessage(userAnswer, rightAnswer, userName);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default startGame;
