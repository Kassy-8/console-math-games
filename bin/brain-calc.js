#!/usr/bin/env node
import start from '../src/index.js';
import gameCalc, { description } from '../src/games/gameCalc.js';

start(description, gameCalc);
