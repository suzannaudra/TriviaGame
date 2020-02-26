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
    $('#start').remove();
    // Loop through each array to list question
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i].question)
        $('#bodycon').append('<h2>' + questions[i].question + '</h2>');
        for (var a = 0; a < questions[i].choices.length; a++) {
            $("#bodycon").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[a] + "'>" + questions[i].choices[a])
        }
    }

});



// var game = {
//     correctAnswer: 0,
//     incorrectAnswer: 0,
//     counter: 100,
//     countdown: function(){
//         game.counter--;
//         $('#counter').html(game.counter);
//         if(game.counter<=0){
//             console.log("Time's up!");
//             game.done();
//         }
// 		},
		
//start timer and reset timer when gameover 
//add buttom to submit answers at the end 
//hide screen and display number of answers correct/incorrect
//add image if they did well or poorly