//console.log("Hello world!");

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    //console.log(rand);
    let choice;
    switch (rand) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Answer 0 for rock, 1 for paper, 2 for scissors");
    switch (Number(choice)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

console.log(getHumanChoice());
