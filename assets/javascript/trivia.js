$(document).ready(function() {
     
    var questions = [{
        question: "Which of these players never scored at least 2500 points in a season?",
        choices: ["Kevin Durant", "Rick Barry", "Lebron James", "Bob Macadoo"],
        images: ["../images/Rajah.gif"],
        correct: 2
    }, {
        question: "In 1980, Oscar Robertson was the NBA's all time leader in assists, who was 2nd?",
        choices: ["Michael Jordan", "Scottie Pippen", "Larry Bird", "John Stockton"],
        correct: 2

    }, {
        question: "Which of these players has never had a season in which they averaged at least 30 PPG on at least 55 FG%?",
        choices: ["Michael Jordan", "Kareem Abdul Jabar", "Adrian", "Karl Malone"],
        correct: 3
    }];

// Variable showImage will hold the setInterval when we start the slideshow
    var showQuestion;

    // Count will keep track of the index of the currently displaying picture.
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var percentage = (right / 10 * 100) + '%';
    var images;


    // TODO: Use jQuery to run "startTrivia" when we click the "start" button.

    $("#start").on("click", function() {
        $(this).hide();

        var firstQuestion = questions[0];

        $(".question").append("<h3 class = 'first'>" + firstQuestion.question + "</h3>")

        $(".first").append("<p>" + firstQuestion.choices + "</p>")
        
    });


    $("#start").click(startTrivia);

    function renderButtons() {
        // render choices using a loop and making them a button
    }

    // This function will replace display whatever question it's given
    function displayQuestion() {
        // generate questions
        // TODO: Use showQuestion to hold the setInterval to run nextQuestion.
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            //display each question at a time
        }
    s


    }

    function nextQuestion() {
    // if statements 

    // next questions
    

    // TODO: Use a setTimeout to run displayQuestion after 1 second.
    setTimeout(displayQuestion, 1000);


    }

    function startTrivia() {
        $(this).hide();
counter = setInterval(timer, 1000); 
displayTrivia();

    }

    function stopTrivia() {

    // TODO: Put our clearInterval here:
    clearInterval(showQuestion);

    }

    // This will run the display question function as soon as the page loads.
    displayQuestion();


});