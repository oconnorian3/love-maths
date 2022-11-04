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
               alert(`You clicked ${gameType}`);
           }
       })
   }

})
/** The main game "loop" called when the script is forst loaded
 * and after the user's answer has been processsed
 */
function runGame () {

    // Creates random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

}

function calculateCorrectAnswer () {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionalQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
