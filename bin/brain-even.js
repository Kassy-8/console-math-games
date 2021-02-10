#!/usr/bin/env node
import start from '../src/index.js';
import gameEvenNumbers, { description } from '../src/games/gameEvenNumbers.js';

start(description, gameEvenNumbers);
