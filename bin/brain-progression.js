#!/usr/bin/env node
import start from '../src/index.js';
import gameProgression, { description } from '../src/games/gameProgression.js';

start(description, gameProgression);
