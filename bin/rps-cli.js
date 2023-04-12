#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js";

function Helpfunc() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`)
}

function Rulesfunc() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
}



if (minimist(process.argv.slice(2)).h !== undefined || minimist(process.argv.slice(2)).help !== undefined) {
    Helpfunc()
    process.exit(0)
}


if (minimist(process.argv.slice(2)).r !== undefined || minimist(process.argv.slice(2)).rules !== undefined) {
    Rulesfunc()
    process.exit(0)
}

try {
    let result = rps((minimist(process.argv.slice(2))._)[0])
    console.log(JSON.stringify(result))
    process.exit(0)
} catch (e) {
    Helpfunc()
    Rulesfunc()
    process.exit(1)
}
