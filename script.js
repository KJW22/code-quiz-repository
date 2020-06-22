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
function startTimer(){
            var counter = 5;
            setInterval(function() {
              counter--;
              if (counter >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counter;
              }
              if (counter === 0) {
                  alert('sorry, out of time');
                  clearInterval(counter);
              }
            }, 1000);
          }
          
          $("#startClock").click(function(){
              startTimer();
          });
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("text");    
    imgEl.setAttrribute("time's up");
    mainEl.appendChild(imgEl);
}

setTime ();
//Each question is its own variable, with each one having an almost identical format. 
//If the answer given matches the answer in the correct order of the array, an alert of correct is given, and the score increases by 1.
//If the answer is wrong, an alert of "incorrect" is given, and ten seconds are deducted from it.
var question1 = {q: "What is Rex's last name? A: Cortez, B: Yepiz, C: Buffoon, D: Salazar", a: "D: Salazar"}
var question2 = {q: "Why is Agent Six known as Six? A: He's the sixth agent Rex has worked with. B: His real name is Lance Sixerton. C: He's the sixth most dangerous man in the world. D: It just sounds cool.", 
a: "C: He's the sixth most dangerous man in the world. "};
var question3 = {q: "What are Punk Busters? A: A nickname for a fictional armored vehicle used in the show. B: The name Rex gives to his giant mechanical leg constructs. C: Rex's favorite candy. D: None of the above.",
a: "B: The name Rex gives to his giant mechanical leg constructs."}; 
var question4 = {q: "Why did the Nanite Project Researchers blow up the Nanite Reactor? A: They wanted to stop the Consortium from getting the Meta Nanites. B: It was a complete accident. C: They were bored. D: It's never revealed.",
a: "A: They wanted to stop the Consortium from getting the Meta Nanites."};
var question5 = {q: "Which U.S. President shares the same last name as Rex's best friend Noah? A: George Washington, B: James Garfield, C: Calvin Coolidge, D: Richard Nixon",
a: "D: Richard Nixon"};
var question6 = {q: "Why does Van Kleiss always need to absorb new nanites? A: They're his favorite snack. B: He won't make the rent otherwise. C: He wants to clean up the world. D: It's the only way for him to keep his body stable.",
a: "D: It's the only way for him to keep his body stable."};
var question7 = {q: "Which Channel did Generator Rex air on? A: Nickelodeon, B: Cartoon Network, C: Food Network, D: The Hub", a: "B: Cartoon Network"};
var question8 = {q: "What is the name of the band that sings the Generator Rex theme song? A: Orange, B: The Jonas Brothers, C: Bowling for Soup, D: Imagine Dragons",
a: "A: Orange"};
var question9 = {q: "Who is Dr. Holiday? A: Rex's pet chimp. B: One of the participants in the gunfight at OK Corral. C: A scientist ally of Rex. D: Rex's pediatrician",
a: "C: A scientist ally of Rex."};
var question10 = {q: "What does EVO stand for? A: Evil Villain Operators, B: Exponentially Variagated Organisms, C: Extremely Vicious Ostriches, D: Extremely Victorious Olympians",
a: "Exponentially Variagated Organisms"};

var score = 0;
