
export { rps, rpsls}

// Rules
const RULES = {
    'rock': {
        'scissors': 'win',
        'rock': 'tie',
        'paper': 'lose',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'spock': 'win',
        'lizard': 'lose'
    },
    'scissors': {
        'paper': 'win',
        'scissors': 'tie',
        'rock': 'lose',
        'lizard': 'win',
        'spock': 'lose'
    },
    'lizard': {
        'paper': 'win',
        'rock': 'lose',
        'scissors': 'lose',
        'spock': 'win',
        'lizard': 'tie'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'spock': 'tie',
        'lizard': 'lose'
    }
};



function rps(shot) {
    const choices = ["rock", "paper", "scissors"];
    const response = choices[Math.floor(Math.random() * choices.length)];
    
    if (shot === undefined){
        return {"player": response}
    }

    shot = shot.toLowerCase();
    if (!choices.includes(shot)){
        throw new RangeError("Invalid input")
    }

    return {player: shot, opponent: response, result: RULES[shot][response]}
}


function rpsls(shot) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const response = choices[Math.floor(Math.random() * choices.length)];
    
    if (shot === undefined){
        return {"player": response}
    }

    shot = shot.toLowerCase();
    if (!choices.includes(shot)){
        throw new RangeError("Invalid input")
    }

    return {player: shot, opponent: response, result: RULES[shot][response]}
}



