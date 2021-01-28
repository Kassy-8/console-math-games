import readLineSync from 'readline-sync';

const printMessage = (message) => console.log(message);
const askUserName = (question) => readLineSync.question(question);

const messageWelcome = 'Welcome to the Brain Games!';
const messageAskName = 'May I have your name? ';
const messageCorrectAnswer = 'Correct!';

const printMessageHello = (user) => console.log(`Hello, ${user}!`);
const printMessageWrongAnswer = (userAnswer, rightAnswer, user) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${user}!`);
const printMessageCongratulate = (user) => console.log(`Congratulations, ${user}!`);

printMessage(messageWelcome);
const userName = askUserName(messageAskName);
printMessageHello(userName);

// messageGameDescription должно быть в файле игры?

const playGame = (userAnswer, rightAnswer, round) => {
  printMessage(messageGameDescription);
  for (let count = 1; count <= round;) {

    // ответ юзера и правильный ответ вычисляются в момент вызова в иф
    // или их нужно вызывать заранее?

    if (userAnswer === rightAnswer) {
      printMessage(messageCorrectAnswer);
      count += 1;
    } else {
      // Судя по тому что в этот месседж нужно вставить
      // правильный ответ и ответюзера и юзера - это вероятно будет функция,
      // которая будет принимать аргументы из функции выше
      printMessageWrongAnswer(userAnswer, rightAnswer, userName);
      return false;
    }
  }
  printMessageCongratulate(userName);
  return true;
};
