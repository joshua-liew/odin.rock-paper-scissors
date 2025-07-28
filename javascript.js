let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice === computerChoice) {
        result = "draw";
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock"
    ) {
        result = "win";
    } else {
        result = "lose";
    }
    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    console.log(result);
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);
//playRound("rock", "rock");
//playRound("rock", "scissors");
//playRound("rock", "paper");
//playRound("scissors", "rock");
//playRound("scissors", "scissors");
//playRound("scissors", "paper");
//playRound("paper", "rock");
//playRound("paper", "scissors");
//playRound("paper", "paper");
