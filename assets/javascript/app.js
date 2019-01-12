
document.getElementById("time").style.display = 'none';
document.getElementById("question").style.display = 'none';
document.getElementById("answers").style.display = 'none';


var myQuestions = [
    {
        question: "What is the capital of Texas?",
        answersA: 'Dallas',
        answersB: 'Houston',
        answersC: 'Austin',
        answersD: 'San Antonio',
        correctAnswer: ['Austin'],
        image: "assets/images/austin.jpg"
    },
    {
        question: "What is the capital of the United States",
        answersA: 'Dallas',
        answersB: 'Los Angeles',
        answersC: 'New York City',
        answersD: 'Washington D.C',
        correctAnswer: ['Washington D.C'],
        image: "assets/images/dc.jpg"
    }
];

var runningQuestion = 0; //current question
var count = 0;
var ans = $("#answers");
var userAnswer = [];
var correct = 0;
var incorrect = 0;
var timer = 15;
var intervalId;
var running = false;

var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");



function renderQuestions() {
    var q = myQuestions[runningQuestion];

    quest = document.getElementById("qst");
    quest.innerHTML = q.question;

}
function renderButtons() {
    var q = myQuestions[runningQuestion];
    choiceA.innerHTML = q.answersA;
    choiceB.innerHTML = q.answersB;
    choiceC.innerHTML = q.answersC;
    choiceD.innerHTML = q.answersD;
}
function myFunction(clicked_id) { //store answer to empty array
    event.preventDefault();
    var q = myQuestions[runningQuestion];

    var uGuess = clicked_id;
    if (uGuess == q.correctAnswer) {
        stop();
        userWin();

        runTimer();

    }
    else{
        stop();
        
        lScreen();

        reset();
        userLoss()
        runTimer();
    }
}
function userWin() {
    correct++;
    runningQuestion++;

    renderQuestions();
    renderButtons();

}
setTimeout(function userLoss() {
    incorrect++;
    runningQuestion++;

    renderQuestions();
    renderButtons();

}, 5000);

function lScreen() {
    var q = myQuestions[runningQuestion];
    quest = document.getElementById("qst");
    quest.innerHTML = "Sorry! The correct answer is " + q.correctAnswer;
    $("#answers").append(`<img src = ${q.image} >`);
}


function runTimer() {
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}

function decrement() {
    $("#timer").html(timer);
    timer--;

    //stop timer if reach 0
    if (timer === 0) {
        //unanswerCount++;
        stop();
        $("#time").html("Time is up!");

    }
}
function stop() {
    running = false;
    clearInterval(intervalId);
}

$("#start").click(function () {
    $("#start").hide();
    $('#time').show();
    $('#question').show();
    $('#answers').show();

    runTimer();
    renderQuestions();
    renderButtons();
});

function reset(){
    $("#answers").empty();

}

