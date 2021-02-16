#!/usr/bin/env node
import playGame from '../src/index.js';
import gamePrime, { description } from '../src/games/primeNumbers.js';

playGame(description, gamePrime);
