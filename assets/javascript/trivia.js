$(document).ready(function() {
     
    var questions = {

    };

// Variable showImage will hold the setInterval when we start the slideshow
    var showQuestion;

    // Count will keep track of the index of the currently displaying picture.
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var percentage = (right / 10 * 100) + '%';


    // TODO: Use jQuery to run "startTrivia" when we click the "start" button.
    $("#start").click(startTrivia);

    // TODO: Use jQuery to run "stopTrivia" when we click the "stop" button.
    $("#stop").click(stopTrivia);


    // This function will replace display whatever question it's given
    function displayQuestion() {
        // generate questions
    }

    function nextQuestion() {
    // if statements 

    // next questions
    

    // TODO: Use a setTimeout to run displayQuestion after 1 second.
    setTimeout(displayQuestion, 1000);


    }

    function startTrivia() {

    // TODO: Use showQuestion to hold the setInterval to run nextQuestion.
    showQuestion = setInterval(nextQuestion, 25000);

    }

    function stopTrivia() {

    // TODO: Put our clearInterval here:
    clearInterval(showQuestion);

    }

    // This will run the display question function as soon as the page loads.
    displayQuestion();


});