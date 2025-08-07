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
        winner = null;
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


function displayResult(resultRound, resultAllRounds) {
    const result = document.querySelector("#result");
    
    const div = document.createElement("div");
    const roundNumber = resultAllRounds.length;
    div.setAttribute("id", `round-${roundNumber}`);

    const displayRound = document.createElement("h3");
    const displayRoundResult = document.createElement("p");
    displayRound.textContent = `Round ${roundNumber}`;
    displayRoundResult.textContent = resultRound.result;

    div.appendChild(displayRound);
    div.appendChild(displayRoundResult);
    result.appendChild(div);
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
const resultAllRounds = [];
const resultScore = {
    "Human": 0,
    "Computer": 0,
};
body.addEventListener("play", (e) => {
    const resultRound = playRound(e.detail.humanChoice, getComputerChoice());
    resultAllRounds.push(resultRound);

    displayResult(resultRound, resultAllRounds);
    
    if (resultRound.winner !== null) {
        resultScore[resultRound.winner]++;

        if (resultScore[resultRound.winner] === 5) {
            console.log("One player has reached 5 wins!");
            const resultGame = document.createElement("h3");
            const score = document.querySelector("#score");
            resultGame.textContent = `The winner is ${resultRound.winner}`;
            score.appendChild(resultGame);
        }
    }

    const divHumanScore = document.querySelector("#human-score");
    const divComputerScore = document.querySelector("#computer-score");
    divHumanScore.textContent = `Your Score: ${resultScore.Human}`;
    divComputerScore.textContent = `Computer Score: ${resultScore.Computer}`;

    console.log(resultScore);
});