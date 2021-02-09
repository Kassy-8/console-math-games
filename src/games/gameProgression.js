import _ from 'lodash';

export const description = 'What number is missing in the progression?';

const progression = [];
let hiddenElementIndex;

export const getQuestion = () => {
  const firstElement = _.random(0, 10, false);
  const progressionStep = _.random(1, 10, false);
  const progressionLastIndex = 9;
  hiddenElementIndex = _.random(0, progressionLastIndex, false);
  progression[0] = firstElement;

  for (let i = 1; i <= progressionLastIndex; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  const progressionForOutput = [...progression];
  progressionForOutput[hiddenElementIndex] = '..';
  return _.join(progressionForOutput, ' ');
};

const getHiddenElement = (array) => array[hiddenElementIndex];

export const getRightAnswer = () => getHiddenElement(progression);
