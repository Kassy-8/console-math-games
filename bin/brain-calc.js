#!/usr/bin/env node
import startGame, { roundsCount } from '../src/index.js';
import gameCalc, { description } from '../src/games/calc.js';

startGame(description, roundsCount, gameCalc);
