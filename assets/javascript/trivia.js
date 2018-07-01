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


    // TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
    $("#start").click(startTrivia);

    // TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
    $("#stop").click(stopTrivia);


    // This function will replace display whatever image it's given
    // in the 'src' attribute of the img tag.
    function displayQuestion() {
        // generate questions
    }

    function nextQuestion() {
    // if statements 

    // next questions
    

    // TODO: Use a setTimeout to run displayImage after 1 second.
    setTimeout(displayImage, 1000);

    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    //if (reset timer)
    //}
    }

    function startTrivia() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    showQuestion = setInterval(nextQuestion, 25000);

    }

    function stopTrivia() {

    // TODO: Put our clearInterval here:
    clearInterval(showQuestion);

    }

    // This will run the display image function as soon as the page loads.
    displayQuestion();


});