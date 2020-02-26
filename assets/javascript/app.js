$(document).ready(function (){

var questions = [{
    question: "What is the smallest state?",
    choices: ["Delaware", "Vermont", "Rhode Island", "Hawaii"],
    correctAnswer: 2
}, {
    question: "What is the largest state?",
    choices: ["Alaska", "Texas", "California", "Canada"],
    correctAnswer: 1
}, {
    question: "Which state has the largest population?",
    choices: ["California", "New York", "Texas", "Florida"],
    correctAnswer: 0
}, {
    question: "Which state has the smallest population?",
    choices: ["South Dakota", "Maine", "Wyoming", "Delaware"],
    correctAnswer: 2
}, {
    question: "Which state has the highest cost of living?",
    choices: ["Georgia", "Hawaii", "California", "Alaska"],
    correctAnswer: 1
}, {
    question: "Which state has the coldest temperature?",
    choices: ["Washington", "Alaska", "Michigan", "Maine"],
    correctAnswer: 1
}, {
    question: "What was the first state?",
    choices: ["West Virginia", "Virginia", "Delaware", "Minnesota"],
    correctAnswer: 2
}, {
    question: "Which state has the most waterways?",
    choices: ["Alaska", "Rhode Island", "Mississippi", "Florida"],
    correctAnswer: 0
}, {
    question: "What state has the happiest people?",
    choices: ["Texas", "Hawaii", "Colorado", "California"],
    correctAnswer: 1
}, {
    question: "Which state is closest to Europe?",
    choices: ["Maine", "Florida", "California", "Washington"],
    correctAnswer: 0
}];
// start button and remove start button on click
$('#start').on('click', function () {
    game.start();
})
var game = {
    correctAnswer: 0,
    incorrectAnswer: 0,
    counter: 10,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter===0){
            console.log("Time's up!");
           
            game.result();
            //  game.done();
        }
    },
  
//start timer and reset timer when gameover 
    start: function(){
        timer = setInterval(game.countdown,1000);
        console.log (timer);
        $('#bodycon').prepend('<h2>Time Left:<span id="counter">100</span> seconds</h2>');
        $('#start').remove();
// Loop through each array to list question
        for (var i = 0; i < questions.length; i++) {
            console.log(questions[i].question)
            $('#bodycon').append('<h2>' + questions[i].question + '</h2>');
            for (var a = 0; a < questions[i].choices.length; a++) {
                $("#bodycon").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[a] + "'>" + questions[i].choices[a])
           }
        }
        $('#bodycon').append('<button id="end">DONE</button>');
//hide screen and display number of answers correct/incorrect
    },
    done: function(){
        $.each($('input[name=question-0]":checked'),function(){
            if($(this).val()===questions[0].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        $.each($('input[name=question-1]":checked'),function(){
            if($(this).val()===questions[1].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });

        $.each($('input[name=question-2]":checked'),function(){
            if($(this).val()===questions[2].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });

        $.each($('input[name=question-3]":checked'),function(){
             if($(this).val()===questions[3].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        $.each($('input[name=question-4]":checked'),function(){
             if($(this).val()===questions[4].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        $.each($('input[name=question-5]":checked'),function(){
            if($(this).val()===questions[5].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });  
        $.each($('input[name=question-6]":checked'),function(){
            if($(this).val()===questions[6].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });   
            
        $.each($('input[name=question-7]":checked'),function(){
            if($(this).val()===questions[7].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        $.each($('input[name=question-8]":checked'),function(){
            if($(this).val()===questions[8].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        $.each($('input[name=question-9]":checked'),function(){
            if($(this).val()===questions[9].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        $.each($('input[name=question-10]":checked'),function(){
            if($(this).val()===questions[10].correctAnswer){
                game.correctAnswer++;
            } else {
                game.incorrectAnswer++;
            }
            });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#bodycon h2').remove();

        $('#bodycon').html("<h2>You Finished!</h2>");
        $('#bodycon').append("<h3>Correct Answers: "+this.correctAnswer+"</h3>");
        $('#bodycon').append("<h3>Inorrect Answers: "+this.incorrectAnswer+"</h3>");
        $('#bodycon').append("<h3>Unanswered: "+(questions.length-(this.incorrectAnswer+this.correctAnswer))+"</h3>");
    }


    }  
    $('#end').on('click', function (){
        game.done()
    })
})
//add buttom to submit answers at the end 
console.log ("hello");