#!/usr/bin/env node
import startGame, { roundsCount } from '../src/index.js';
import gameEvenNumbers, { description } from '../src/games/evenNumbers.js';

startGame(description, roundsCount, gameEvenNumbers);
