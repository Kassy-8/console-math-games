#!/usr/bin/env node
import playGame from '../src/index.js';
import gameGcd, { description } from '../src/games/gcd.js';

playGame(description, gameGcd);
