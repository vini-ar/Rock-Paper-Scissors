/* Store player action options */
/* Display on terminal player action options*/
/* Prompt for player choose one option*/
/* Choose one Random player action option*/
/* Create Logic to decide the result between two different moves */
/* Apply logic to decide match winner */
/* Display Match Winner */


const ACTIONS = ["Rock", "Paper", "Scissors"]
let matchResultList = [];
let humanSelection;
let machineSelection;
let machineWin = false;
let drawMatch = false;

function displayPlayerActionsAvailable() {
    ACTIONS.forEach((item, index) => {
        console.log(`${index} - ${item}`)
    })
}

function askPlayerAction(index) {
    if (0 <= index && index <= 2) {
        humanSelection = ACTIONS[index]
        return
    }
    index = prompt("Choose one Option: ")
    askPlayerAction(index)
}

function chooseRandomActionForMachine() {
    let index = Math.floor(Math.random() * 2);
    machineSelection = ACTIONS[index]

}

function checkMatchResult(humanSelection, machineSelection) {

    /* Rock Winner over Scissors*/
    if (humanSelection === ACTIONS[2] && machineSelection === ACTIONS[0]) {
        machineWin = true;
    }
    /* Paper Winner over Rock*/
    else if (humanSelection === ACTIONS[0] && machineSelection === ACTIONS[1]) {
        machineWin = true;
    }
    /* Scissors Winner over Paper*/

    else if (humanSelection === ACTIONS[1] && machineSelection === ACTIONS[2]) {
        machineWin = true;
    }
    else if (humanSelection === machineSelection) {
        drawMatch = true;
    }

}
function displayMatchResult() {
    if (drawMatch === true) {
        matchResultList.push("Draw")
        console.log("Draw!")
        return;
    }
    
    if (machineWin === true) {
        console.log("Machine Wins!")
        matchResultList.push("Machine")
    }
    else {
        console.log("You Won!")
        matchResultList.push("Human");
    }
}


function playGame(round) {
    if (round === 5) {
        return;
    }

    round += 1;
    displayPlayerActionsAvailable()
    askPlayerAction()
    chooseRandomActionForMachine()
    checkMatchResult(playerMoveIndex, machineMoveIndex)
    displayMatchResult()
    playGame(round)

}

