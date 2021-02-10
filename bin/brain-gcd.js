#!/usr/bin/env node
import start from '../src/index.js';
import gameGcd, { description } from '../src/games/gameGcd.js';

start(description, gameGcd);
