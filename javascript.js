function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    //console.log(rand);
    let choice = function (n) {
        switch (n) {
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            case 2:
                return "Scissors";
            default:
                throw new RangeError("Argument must be a number between 0 and 2");
                break;
        }
    };
    return choice(rand);
}


function getHumanChoice(input) {
    //let input = prompt("What do you pick? (Type one of Rock, Paper, or Scissors)");
    let choice = function (n) {
        switch (n.toLowerCase()) {
            case "rock":
                return "Rock";
            case "paper":
                return "Paper";
            case "scissors":
                return "Scissors";
            default:
                throw new RangeError("Argument must be one of Rock, Paper, or Scissors");
                break;
        }
    };
    return choice(input);
}

//console.log(getComputerChoice());
//console.log(getHumanChoice());
function playRound(humanChoice, computerChoice) {
    let result;
    let winner;
    if (humanChoice === computerChoice) {
        result = `Draw! ${humanChoice} on ${computerChoice}`;
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" 
        || humanChoice === "Scissors" && computerChoice === "Paper"
        || humanChoice === "Paper" && computerChoice === "Rock"
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        winner = `Human`;
    } else {
        result = `You lose! ${humanChoice} loses to ${computerChoice}`;
        winner = `Computer`;
    }
    //console.log(result);
    displayResult(result);

    return winner;
}


function displayResult(text) {
    const p = document.createElement("p");
    p.textContent = text;

    const result = document.querySelector("result");
    result.appendChild(p);
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //console.log(getHumanChoice(e.target.id));
        let humanChoice = getHumanChoice(e.target.id);
        console.log(humanChoice);
    });
})