#!/usr/bin/env node
import playGame from '../src/index.js';
import gameCalc, { description } from '../src/games/calc.js';

playGame(description, gameCalc);
