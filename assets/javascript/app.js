$(document).ready(function (){

var questions = [{
    question: "What is the smallest state?",
    choices: ["Delaware", "Vermont", "Rhode Island", "Hawaii"],
    correctAnswer: 2
}, {
    question: "What is the largest state?",
    choices: ["Alaska", "Texas", "California", "Canada"],
    correctAnswer: 0
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
    unanswered:0,
    correctAnswer: 0,
    incorrectAnswer: 0,
    counter: 200,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter===0){
            console.log("Time's up!");
           
            this.done();
            this.result();
            
        }
    },
  
//start timer and reset timer when gameover 
    start: function(){
        timer = setInterval(game.countdown,200);
        console.log (timer);
        $('#bodycon').prepend('<h2>Time Left:<span id="counter">200</span> seconds</h2>');
        $('#start').remove();
// Loop through each array to list question
        for (var i = 0; i < questions.length; i++) {
            console.log(questions[i].question)
            const questionContainer = $('<div>').addClass('question');
            questionContainer.append('<h2>' + questions[i].question + '</h2>');
            for (var a = 0; a < questions[i].choices.length; a++) {
                questionContainer.append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[a] + "'>" + questions[i].choices[a])
           }
           $('#bodycon').append(questionContainer);
        }
        $('#bodycon').append('<button id="end">DONE</button>');
//hide screen and display number of answers correct/incorrect
    },
    done:function(){
        var self = this;
        ['div','div','div','div','div','div','div','div','div']
        $.each($('.question'),function(index, questionWrapper){
            var checkedInput = $(questionWrapper).find('input:checked'); //Is either undefined || the htmlelement
            if(checkedInput.length !== 0) {
                var currentQuestion = questions[index];
                var questionValue = $(checkedInput[0]).val();
                var correctAnswer = currentQuestion.choices[currentQuestion.correctAnswer];
                if(questionValue === correctAnswer){
                    self.correctAnswer++;
                } else {
                    self.incorrectAnswer++;
                }
        }
        else {
            self.unanswered++; 
            
        }
        console.log('correctAnswer', self.correctAnswer, 'incorrectAnswer', self.incorrectAnswer, 'unanswered', self.unanswered)
            });
        
    },
    result: function(){
        clearInterval(timer);
        $('#bodycon h2').remove();

        $('#bodycon').html("<h2>You Finished!</h2>");
        $('#bodycon').append("<h3>Correct Answers: "+this.correctAnswer+"</h3>");
        $('#bodycon').append("<h3>Incorrect Answers: "+this.incorrectAnswer+"</h3>");
        $('#bodycon').append("<h3>Unanswered: "+this.unanswered+"</h3>");
    }
};

    $(document).on('click', '#end',function (){
        game.done();
        game.result();
    });

})