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

    return {
        result: result,
        winner: winner,
    };
}


function displayResult(text) {
    const p = document.querySelector("#result");
    p.textContent = text;
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let humanChoice = getHumanChoice(e.target.id);

        let eventPlay = new CustomEvent('play', {
            bubbles: true,
            detail: {
                humanChoice: humanChoice,
            },
        });

        button.dispatchEvent(eventPlay);
    });
});


const body = document.querySelector("body");
body.addEventListener("play", (e) => {
    const humanChoice = e.detail.humanChoice;
    const resultRound = playRound(humanChoice, getComputerChoice());
    console.log(resultRound);

    displayResult(resultRound.result);
});