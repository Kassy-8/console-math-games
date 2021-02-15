#!/usr/bin/env node
import startGame, { roundsCount } from '../src/index.js';
import gameGcd, { description } from '../src/games/gcd.js';

startGame(description, roundsCount, gameGcd);
