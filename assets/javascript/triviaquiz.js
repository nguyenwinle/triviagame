$(document).ready(function() {
     
    var blockchain = [{
        question: "1. What does P2P stand for?",
        choices: [
            "A: Password to Password",
            "B: Peer to Peer",
            "C: Product to Product",
            "D: Private Key to Public Key"
        ],
        correct : 1
    }, {
        question: "2. What is a node?",
        choices: [
            "A: A type of cryptocurrency",
            "B: A blockchain",
            "C: A computer on a blockchain network",
            "D: An exchange"
        ],
        correct: 2
    }, {
        question: "3. Who created Bitcoin?",
        choices: [
            "A: Satoshi Nakamoto",
            "B: Samsung",
            "C: John Mcafee",
            "D: china"
        ],
        correct: 0
    }, {
        question: "4. where do you store your cryptcurrency?",
        choices: [
            "A: Bank Account",
            "B: Floppy Disk",
            "C: Wallet",
            "D: In your pocket"
        ],
        correct: 2
    }, {
        question: "5. What are the different types of tokens?",
        choices: [
            "A: Platform",
            "B: Privacy",
            "C: Currency",
            "D: All of the above"
        ],
        correct: 3
    }, {
        question: "6. Where is the LEAST SAFE place to keep your cryptocurrency?",
        choices: [
            "A: In your pocket",
            "B: On an exchange",
            "C: On a hot wallet",
            "D: At your work desk"

        ],
        correct: 1
    }, {
        question: "7. Which is NOT apart of asymmetric encryption?",
        choices: [
            "A: Mining",
            "B: Public key",
            "C: Passphrase",
            "D: Private Key"

        ],
        correct: 1
    }, {
        question: "8. What is a blockchain?",
        choices: [
        "A: A type of cryptocurrency",
        "B: An exchange",
        "C: A distributed ledger on a peer to peer network",
        "D: A centralized ledger"
        ], 
        correct: 2
    }];

    // set variables
    var gifs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];
    var unanswered; 
    var seconds; 
    var time; 
    var answered; 
    var select;
    var currentQuestion; 
    var correctAnswer; 
    var incorrectAnswer; 



});