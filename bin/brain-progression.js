#!/usr/bin/env node
import playGame from '../src/index.js';
import gameProgression, { description } from '../src/games/progression.js';

playGame(description, gameProgression);
