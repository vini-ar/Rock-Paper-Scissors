/* Store player action options */
/* Display on terminal player action options*/
/* Prompt for player choose one option*/
/* Choose one Random player action option*/
/* Create Logic to decide the result between two different moves */
/* Apply logic to decide match winner */
/* Display Match Winner */


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors");
const resultDisplay = document.getElementById("result")
const buttons = document.querySelectorAll("button")

const ACTIONS = ["rock", "paper", "scissors"]

let humanSelection = null;
let machineSelection = null;

let round = 1;
let humanScore = 0;
let machineScore = 0;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (ACTIONS.includes(button.id)) {
            humanSelection = button.id
            playRound();
            console.log(machineSelection)
        }
        else {
            console.error()
        }
        round += 1
    })
})

function getMachineSelection() {
    let index = Math.floor(Math.random() * 3);
    machineSelection = ACTIONS[index]

}

function computeRoundResult() {

    /* Rock Winner over Scissors*/
    if (humanSelection === ACTIONS[2] && machineSelection === ACTIONS[0]) {
        machineScore += 1;
        resultDisplay.textContent += `Machine Win Round ${round}`
    }
    /* Paper Winner over Rock*/
    else if (humanSelection === ACTIONS[0] && machineSelection === ACTIONS[1]) {
        machineScore += 1;
        resultDisplay.textContent += `Machine Win Round ${round}`
    }
    /* Scissors Winner over Paper*/

    else if (humanSelection === ACTIONS[1] && machineSelection === ACTIONS[2]) {
        machineScore += 1;
        resultDisplay.textContent += `Machine Win Round ${round}`
    }
    else if (humanSelection === machineSelection) {
        resultDisplay.textContent += "Draw"
    }
    else {
        resultDisplay.textContent += `Human Win Round ${round}`
        humanScore += 1;
    }

}

function resetRound() {
    round = 1;
    humanScore = 0;
    machineScore = 0;
}

function displayGameWinner() {
    if (humanScore === 5) {
        alert("Human Won!")
        resetRound()
    }
    else if (machineScore === 5) {
        alert("Machine Won!")
        resetRound()
    }
}



function playRound() {
    getMachineSelection()
    computeRoundResult()
    displayGameWinner()
}