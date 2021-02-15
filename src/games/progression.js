import _ from 'lodash';

export const description = 'What number is missing in the progression?';

const makeProgression = (firstElementOfProgression, progressionStep, progressionLength) => {
  const progression = [];
  progression[0] = firstElementOfProgression;
  for (let i = 0; i <= (progressionLength - 1); i += 1) {
    progression[i] = firstElementOfProgression + progressionStep * i;
  }
  return progression;
};

export default () => {
  const firstElementOfProgression = _.random(0, 10, false);
  const progressionStep = _.random(1, 10, false);
  const progressionLength = 10;
  const progression = makeProgression(firstElementOfProgression,
    progressionStep, progressionLength);

  const hiddenElementIndex = _.random(0, progressionLength - 1, false);
  const hiddenElement = progression[hiddenElementIndex];

  progression[hiddenElementIndex] = '..';

  const question = _.join(progression, ' ');
  const answer = String(hiddenElement);

  return [question, answer];
};
