#!/usr/bin/env node
import start from '../src/index.js';
import gameGcd, { description } from '../src/games/gcd.js';

start(description, gameGcd);
