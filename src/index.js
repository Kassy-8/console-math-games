import readLineSync from 'readline-sync';

const askUser = (message) => readLineSync.question(message);

export const numberOfRound = 3;

const playGame = (gameDescription, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = askUser('May I have your name? ');
  const greetingMessage = `Hello, ${userName}!`;
  console.log(greetingMessage);

  console.log(gameDescription);

  for (let i = 0; i < numberOfRound; i += 1) {
    const [question, rightAnswer] = generateQuestionAndAnswer();
    const questionMessage = `Question: ${question}`;
    console.log(questionMessage);
    const userAnswer = askUser('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      const wrongAnswerMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
      console.log(wrongAnswerMessage);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playGame;
