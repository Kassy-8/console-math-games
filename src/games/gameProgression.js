import _ from 'lodash';

export const description = 'What number is missing in the progression?';

const makeProgression = (firstElement, step, length) => {
  const progression = [];
  progression[0] = firstElement;
  for (let i = 0; i < (length - 1); i += 1) {
    progression[i + 1] = progression[i] + step;
  }
  return progression;
};

export default () => {
  const firstElement = _.random(0, 10, false);
  const step = _.random(1, 10, false);
  const length = 10;
  const progression = makeProgression(firstElement, step, length);

  const hiddenElementIndex = _.random(0, length - 1, false);
  const hiddenElement = progression[hiddenElementIndex];

  progression[hiddenElementIndex] = '..';

  const question = _.join(progression, ' ');
  const answer = String(hiddenElement);

  return [question, answer];
};
