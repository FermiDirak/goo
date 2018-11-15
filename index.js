#!/usr/bin/env node

const process = require('process');
const opn = require('opn');

const searchTerm = process.argv.slice(2).join(' ');

opn(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`);


process.exit(0);