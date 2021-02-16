#!/usr/bin/env node
import playGame from '../src/index.js';
import gameEvenNumbers, { description } from '../src/games/evenNumbers.js';

playGame(description, gameEvenNumbers);
