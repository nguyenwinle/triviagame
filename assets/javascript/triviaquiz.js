$(document).ready(function() {
     
    var blockChain = [{
        question: "What does P2P stand for?",
        choices: [
            "Password to Password",
            "Peer to Peer",
            "Product to Product",
            "Private Key to Public Key"
        ],
        correct : 1
    }, {
        question: "What is a node?",
        choices: [
            "A type of cryptocurrency",
            "A blockchain",
            "A computer on a blockchain network",
            "An exchange"
        ],
        correct: 2
    }, {
        question: "Who created Bitcoin?",
        choices: [
            "Satoashi Nakamoto",
            "Samsung",
            "John Mcafee",
            "china"
        ],
        correct: 0
    }, {
        question: "where do you store your cryptcurrency?",
        choices: [
            "Bank Account",
            "Floppy Disk",
            "Wallet",
            "In your pocket"
        ],
        correct: 2
    }, {
        question: "What are the different types of tokens?",
        choices: [
            "Platform",
            "Privacy",
            "Currency",
            "All of the above"
        ],
        correct: 3
    }, {
        question: "Where is the LEAST SAFE place to keep your cryptocurrency?",
        choices: [
            "In your pocket",
            "On an exchange",
            "On a hot wallet",
            "At your work desk"

        ],
        correct: 1
    }, {
        question: "Which is NOT apart of asymmetric encryption?",
        choices: [
            "Mining",
            "Public key",
            "Passphrase",
            "Private Key"

        ],
        correct: 0
    }, {
        question: "What is a blockchain?",
        choices: [
        "A type of cryptocurrency",
        "An exchange",
        "A distributed ledger on a peer to peer network",
        "A centralized ledger"
        ], 
        correct: 2
    }];

    var showQuestion;

    // Count will keep track of the index of the currently displaying picture.
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var percentage = (incorrect / 10 * 100) + '%';
    var images;


    // Use jQuery to run "startTrivia" when we click the "start" button.


    $("#start").on("click", function() {
        $(this).hide();

        //$("body").append("<h3>Time Remaining:" + time + "</h3");

        var firstQuestion = questions[0];

        $(".question").append("<h3 class = 'first'>" + firstQuestion.question + "</h3>")

        $(".first").append("<p>" + firstQuestion.choices + "</p>")

        $("body").show();
        
    });


});