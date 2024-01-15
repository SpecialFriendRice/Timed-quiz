//QUESTIONS
//question goes in question-title <h2>
//add ordered list with four child list elements to div id questions - I HAVE PUT THIS IN THE HTML TO BEGIN WITH
//each child element needs to be a button - I HAVE PUT THIS IN THE HTML TO BEGIN WITH
//text of each button is an answer from the potential answers array (?)

//HIGHSCORES
//highscores <ol> needs five (?) topscore child li elements
//function to be written for Clear Highscores button
//highscores are saved optionally when game ends - make this choice a confirm? No, this is not how the demo gif show it, there is no option, the user can only submit after entering initials in end-screen div and then is taken to Highscores page
//code needs to be written to take user to Highscores page AND save the score in the Highscores table - can this simply be combined with an href in the button tag and function for onclick?
//Highscores saved in localstorage (?)

//TIMER
//code needs to be written to start timer when start button is pressed
//set max time (60 seconds?)
//for each incorrect answer 10 seconds are deducted
//when timer reaches zero, quiz ends (with an alert or different?) 


//START
//function for start button on click
//questions div class changes from hide after start button pressed
//questions div class goes back to hide after all questions answered OR time = 0
//end-screen div class changes from hide after after all questions answered OR time = 0
//end-screen div class does not need to go back to hide as goes to highscores page?

//FEEDBACK
//possible feedback responses written and put in array (?)
//feedback responses appear in the feedback div when an answer button is clicked
//when is class changed from hide?
//Suggested feedback responses: simply true or false taken from object or correct/wrong - 10 second penalty

//SCORE
//score is kept as running total (local storage?)
//create a variable finalTally that feeds to end-screen div in final-score span
//decide on points value for a correct answer (is the points value related to the amount of time left?)

//VARIABLES 
//Initially used querySelector but getElementbyID is marginally faster!
var startBtnEl = document.getElementById("start");
var startScrEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var answerBtn = document.getElementById("answer"); //will this work with the four list element buttons that now all have the id "answer"? 

var answerBack = document.getElementById("feedback");

var timeEl = document.querySelector("#time");
var timeLeft = 60 //reduce this if necessary


//Hide div with id = start screen by adding attribute class = hide? It already has class = start; is it fine to give it an additional class - yes, apparently but how? classList.add Do I setAttribute or getAttribute and concatenate? Does it matter if it loses class = start - it has a centered CSS style

//TRYING TO GET COUNTDOWN TO WORK
//should this function be inside another one?
//do I have to do it with setInterval?
// function countDown () {
//     timeLeft--;
//     //other 
//     if (timeLeft === 0) {
//         alert("You ran out of time")
//         //reset clock? clearInterval?
//     }
// }

//see if the below countdown works
// var countdown = setInterval(function() {
//         timeLeft--;
//         if(timeLeft === 0) {
//          alert("you have run out of time")
//         }
// });



//  function setTime() {
//   // Sets interval in variable
//   var countdown = setInterval(function() {
//     timeLeft--;
//  
//     if(timeLeft === 0) {
//      //do what?
//     }

//   }, 1000);
// }

function startQuiz () {

    // hide the div with id = start-screen, tried it first by simply changing class from start to hide using setAttribute, but then found classList.add
    startScrEl.classList.add("hide") 
    // show the div with id = questions; I have done this by removing the class attribute but should I use some other method or replace the class? 
    questionsEl.classList.remove("hide")//why does class have to be in quotes?
    //randomise questions??? Does this go in this function? Should I make a function populateQuestion or something?

    //START TIMER
    //why can't I declare this function here like this? Does it have to be outside this function? Do I have it as a stand alone function and call it on click of the start button?
    //function countDown() - do I use setInterval??
    //setInterval ();
    
    var questionTitleEl = document.getElementById("question-title");
    
  
    function setQuestion () {//is this the right place to DEFINE THIS FUNCTION?
        //alert("your setQuestion function is working");
        
        questionTitleEl.textContent = "question holding text"; 
        //this needs to reference a question from questions.js, but what is the path? is it relative to the index.html i.e. ./assets/js/questions.js??
        answerBtn.textContent = "answer holding text"; 
        //this FOUR TIMES OVER needs to reference a question from questions.js, but what is the path? is it relative to the index.html i.e. ./assets/js/questions.js??
        
    }
        setQuestion () 



        
}


//where does the checkAns function sit?
        function checkAns () {
            if (torf = true){
                
            } else {

            }
        }
        checkAns()


//Event listener for click on start button
startBtnEl.addEventListener("click", startQuiz); //do I add the startTimer function here too?

//Event listener for answer buttons
answerBtn.addEventListener("click", checkAns);
//need to complete and place the checkAns function