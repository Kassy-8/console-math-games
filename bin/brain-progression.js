#!/usr/bin/env node
import startGame, { roundsCount } from '../src/index.js';
import gameProgression, { description } from '../src/games/progression.js';

startGame(description, roundsCount, gameProgression);
