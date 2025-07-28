//console.log("Hello world!");
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

console.log(choice(0));
console.log(choice(1));
console.log(choice(2));
console.log(choice(3));

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
        default:
            throw new RangeError("Argument must be a number between 0 and 2");
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
