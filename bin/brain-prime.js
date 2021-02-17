#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionAndAnswer, { description as gameDescription } from '../src/games/primeNumbers.js';

playGame(gameDescription, generateQuestionAndAnswer);
