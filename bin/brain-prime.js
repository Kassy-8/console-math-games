#!/usr/bin/env node
import start from '../src/index.js';
import gamePrime, { description } from '../src/games/primeNumbers.js';

start(description, gamePrime);
