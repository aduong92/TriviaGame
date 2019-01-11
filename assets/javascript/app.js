
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
var qst = $("#question");
var ans = $("#answers");
var userAnswer;
var currentquestion = 0;
var correct = 0;

var q = myQuestions[runningQuestion];



function renderQuestions() {
    userAnswer = [];
    qst.append("<p>" + q.question + "</p>");
    
}
function renderButtons() {
    for (var i = 0; i < q.answers.length; i++) {
        var btn = document.createElement("p");
        btn.setAttribute('id', 'ans');
        btn.setAttribute('onClick', 'myFunction(this.innerHTML)');
        var t = document.createTextNode(q.answers[i]);
        btn.appendChild(t);
        ans.append(btn);
    }
}

function nextQuestion (){  //next question
    runningQuestion ++;
}


function myFunction(clicked_id){ //store answer to empty array
    event.preventDefault();
    var uAnswer = clicked_id;
    userAnswer.push(uAnswer);
}

if(userAnswer === q.correctAnswer) { //check for correct answer
    nextQuestion();
    renderQuestions();
}


$("#start").click(function () {
    $("#start").hide();
    $('#time').show();
    $('#question').show();
    $('#answers').show();

    var counter = 20;
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
    
    renderQuestions();
    renderButtons();
    
   
   


});


