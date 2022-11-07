// Wait for the DOM to finsih loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
   let buttons = document.getElementsByTagName("button");

   for (let button of buttons) {
       button.addEventListener("click", function () {
           if (this.getAttribute("data-type") === "submit") {
               alert ("You clicked Submit!");
           } else {
               let gameType = this.getAttribute("data-type");
               runGame(gameType);
           }
       })
   }
   runGame("addition");
})
/** The main game "loop" called when the script is forst loaded
 * and after the user's answer has been processsed
 */
function runGame (gameType) {

    // Creates random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition") {
        displayAdditionalQuestion (num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Gets the operands ( the numbers ) and the operator ( plus ,minus etc)
 * directly from the dom, and resturn the correct answer.
 */
function calculateCorrectAnswer () { 

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [ operand1 + operand2, "addition"];
    } else {
        alert (`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }


}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionalQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
