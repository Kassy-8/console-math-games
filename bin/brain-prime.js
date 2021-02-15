#!/usr/bin/env node
import startGame, { roundsCount } from '../src/index.js';
import gamePrime, { description } from '../src/games/primeNumbers.js';

startGame(description, roundsCount, gamePrime);
