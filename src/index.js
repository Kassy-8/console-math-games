import readLineSync from 'readline-sync';

const askUser = (message) => readLineSync.question(message);

export const roundsCount = 3;

const startGame = (gameDescription, numberOfRound, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = askUser('May I have your name? ');
  const greetingMessage = `Hello, ${userName}!`;
  console.log(greetingMessage);

  console.log(gameDescription);

  for (let i = 0; i < numberOfRound; i += 1) {
    const [question, rightAnswer] = game();
    const questionMessage = `Question: ${question}`;
    console.log(questionMessage);
    const userAnswer = askUser('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      const wrongAnswerMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
      console.log(wrongAnswerMessage);
      return false;
    }
  }

  const congratulationMessage = `Congratulations, ${userName}!`;
  console.log(congratulationMessage);
  return true;
};

export default startGame;
