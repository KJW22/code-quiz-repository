//Step 1: create timer that is set to two minutes.  
//The timer will be made using the set timer function, and will be designed to decrease the time by 10 seconds for each wrong answer.
//Step 2: Create 10 variable arrays, each with four answers in the array. The questions will be delivered through a prompt. 
    //If the correct answer is given, there will be an alert that says "correct!".  
    //If the answer is incorrect, there will be an alert that says "incorrect!" and 10 seconds will be deducted from the timer.
//Step 3: The progrram should be keeping track of which answers were answered correctly or incorrectly. 
    //When the timer stops, the player should get a score detailing how many questions they got right and how many they got wrong.
        //These scores should be stored in the scores category, in last ranging in order from highest to lowest.
        //The player should get a prompt asking for their name once they get their score.
        //The player should be able to play again with a reset button.        
var timeEl = document.querySelector("time")
var mainEl = document.getElementById ("main");
var secondsLeft= 120

function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "time left until end of quiz.";
    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();    
    }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("text");    
    imgEl.setAttrribute("time's up");
    mainEl.appendChild(imgEl);
}

setTime ();