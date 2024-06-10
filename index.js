/* Store player action options */
/* Display on terminal player action options*/
/* Prompt for player choose one option*/
/* Choose one Random player action option*/
/* Create Logic to decide the result between two different moves */
/* Apply logic to decide match winner */
/* Display Match Winner */


const ACTIONS = ["rock", "paper", "scissors"]
let humanSelection;
let machineSelection;
let round = 1;
let humanScore = 0;
let machineScore = 0;

function askPlayerAction() {
    while (!ACTIONS.includes(humanSelection)) {
        humanSelection = prompt("Choose your Action: ");
        humanSelection = humanSelection.toLowerCase();
    }
}

function chooseRandomActionForMachine() {
    let index = Math.floor(Math.random() * 3);
    machineSelection = ACTIONS[index]

}

function displayRoundResult() {

    /* Rock Winner over Scissors*/
    if (humanSelection === ACTIONS[2] && machineSelection === ACTIONS[0]) {
        machineScore += 1;
        console.log(`Machine Win Round ${round}`)
    }
    /* Paper Winner over Rock*/
    else if (humanSelection === ACTIONS[0] && machineSelection === ACTIONS[1]) {
        machineScore += 1;
        console.log(`Machine Win Round ${round}`)
    }
    /* Scissors Winner over Paper*/

    else if (humanSelection === ACTIONS[1] && machineSelection === ACTIONS[2]) {
        machineScore += 1;
        console.log(`Machine Win Round ${round}`)
    }
    else if (humanSelection === machineSelection) {
        console.log("Draw")
    }
    else {
        console.log(`Human Win Round ${round }`)
        humanScore += 1;
    }

}
function displayMatchWinner() {

    if (humanScore > machineScore) {
        console.log("Human Won!")
    }
    else if (machineScore > humanScore) {
        console.log("Machine Won!")
    }
    else {
        console.log("Draw")
    }
}


function playGame() {
    while (round < 6) {
        askPlayerAction()
        chooseRandomActionForMachine()
        displayRoundResult()
        round += 1;
        humanSelection = null;
    }
    displayMatchWinner();
    humanSelection = null;
    machineSelection = null;
    round = null;
    humanScore = null;
    machineScore = null;
   
}

playGame()