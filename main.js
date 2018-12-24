// question and answer array
let questions = [
    {
        question:"What is 2 x 2?",
        answer:"4"
    },
    {
        question:"What is the capital of Arizona?",
        answer:"Phoenix"
    }
];


let counter = 0;


function changeQuestion(){
    if(counter < questions.length -1){
        counter++;
        let q = questions[counter];
        let questionArea = document.getElementById('question');
        questionArea.innerHTML = q.question;
    }else{
        $('#responseModal').modal(keyboard = true);
        $('#modal-response').html('HERO, YOU HAVE ANSWERED MY QUESTIONS. YOU WIN!');
    } 
}

function checkAnswer(){
    let userAnswer = document.getElementById('answer').value;
    let answer = questions[counter].answer;
    console.log("userAnswer: "+userAnswer);
    if(userAnswer === answer){
        $('#responseModal').modal(keyboard = true);
        $('#modal-response').html('YOU ARE CORRECT.');
        setTimeout(changeQuestion(),2000);
    }else{
        $('#responseModal').modal(keyboard = true);
        $('#modal-response').html('WRONG-A-MUNDO.');
    }
}

function begin(){
    counter = -1;
    let startButton = document.getElementById("startButton");
    let checkAnswerButton = document.getElementById("check-answer");
    let answerArea = document.getElementById("answer");
    startButton.disabled = true;
    checkAnswerButton.disabled = false;
    answerArea.removeAttribute('disabled');
    
    changeQuestion();
    
}





