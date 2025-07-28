function choice(n) {
    // function that takes in number
    // between 1 and 3
    // and returns a string
    let choice;
    switch (n) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            throw new RangeError("Argument must be a number between 0 and 2");
            break;
    }
    return choice;
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    //console.log(rand);
    return choice(rand);
}


function getHumanChoice() {
    let input = prompt("Answer 0 for rock, 1 for paper, 2 for scissors");
    return choice(Number(input));
}

//console.log(getComputerChoice());
//console.log(getHumanChoice());
function playRound(humanChoice, computerChoice) {
    let result;
    let winner;
    if (humanChoice === computerChoice) {
        result = `Draw! ${humanChoice} on ${computerChoice}`;
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock"
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        winner = `Human`;
    } else {
        result = `You lose! ${humanChoice} loses to ${computerChoice}`;
        winner = `Computer`;
    }
    console.log(result);

    return winner;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let winnerRound = playRound(humanSelection, computerSelection);
        if (winnerRound === 'Human')    humanScore++;
        if (winnerRound === 'Computer')  computerScore++;
    }

    const winner = humanScore > computerScore ? "human" : "computer";
    const winnerScore = humanScore > computerScore ? humanScore : computerScore;
    console.log(`The winner is the ${winner} with a score of ${winnerScore}!`);
}

playGame();
