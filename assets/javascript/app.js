
document.getElementById("time").style.display = 'none';
document.getElementById("question").style.display = 'none';
document.getElementById("answers").style.display = 'none';


var myQuestions = [
    {
        question: "What is the capital of Texas?",
        answers: ['Dallas', 'Houston', 'Austin', 'San Antonio'],
        correctAnswer: ['Austin']
    },
    {
        question: "What is the capital of the United States",
        answers: ['Dallas', 'Washington D.C', 'New York', 'Los Angeles'],
        correctAnswer: ['Washington D.C']
    }
];

var runningQuestion = 0; //current question
var count = 0;
var ans = $("#answers");
var userAnswer= [];
var correct = 0;
var counter = 15;





function renderQuestions() {
    var q = myQuestions[runningQuestion];

    quest = document.getElementById("qst");
            quest.innerHTML = q.question;
    
}
function renderButtons() {
    event.preventDefault();
    var q = myQuestions[runningQuestion];

    for (var i = 0; i < q.answers.length; i++) {
        var btn = document.createElement("p");
        btn.setAttribute('id', 'ans');
        btn.setAttribute('onClick', 'myFunction(this.innerHTML)');
        var t = document.createTextNode(q.answers[i]);
        btn.appendChild(t);
        ans.append(btn);
    }
}
function myFunction(clicked_id){ //store answer to empty array
    event.preventDefault();
    var q = myQuestions[runningQuestion];

    var uGuess = clicked_id;
    if(uGuess == q.correctAnswer){
        userWin();
    }
}
function userWin() {
    correct++;
    runningQuestion++;

    renderQuestions();
}




$("#start").click(function () {
    $("#start").hide();
    $('#time').show();
    $('#question').show();
    $('#answers').show();
    
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            $('#time').html('out of time!');
            
            clearInterval(counter);
        }
    }, 1000);

    setInterval();
    renderQuestions();
    renderButtons();

});


