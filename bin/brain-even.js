#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionAndAnswer, { description as gameDescription } from '../src/games/evenNumbers.js';

playGame(gameDescription, generateQuestionAndAnswer);
