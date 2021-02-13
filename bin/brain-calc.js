#!/usr/bin/env node
import startGame from '../src/index.js';
import gameCalc, { description } from '../src/games/calc.js';

startGame(description, gameCalc);
