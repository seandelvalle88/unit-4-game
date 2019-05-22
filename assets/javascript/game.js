$(document).ready(function () {

    //initilize variables
    var wins = 0;
    var losses = 0;
    var result = 0;
    var randomNumberGenerator;
    var gem1;
    var gem2;
    var gem3;
    var gem4;

  
    //create a game start function
    function gameReset() {
        result = 0;
        randomNumber();
        randomGemValues();
        $("#result").empty();
    };

    //call gameReset function to auto-restart the app after rounds 
    gameReset();

    //have the computer choose a number at random
    function randomNumber() {
        randomNumberGenerator = Math.floor(Math.random() * 65 + 35);
        $("#random-number").text(randomNumberGenerator);
        console.log("Random Number: ", randomNumberGenerator);
    };

    //set up a function to be called to generate a random number for all buttons
    function randomGemValues() {
        gem1 = Math.floor(Math.random() * 19 + 1);
        gem2 = Math.floor(Math.random() * 19 + 1);
        gem3 = Math.floor(Math.random() * 19 + 1);
        gem4 = Math.floor(Math.random() * 19 + 1);

    };

    //call the randomGemValues function to set the number values for each gem
    randomGemValues();

    //set up a function to be called whenever the user wins or loses
    function results() {

        if (result === randomNumberGenerator) {
            wins++;
            $("#result-message").text('Hooray! You won!');
            $("#wins-counter").text("Wins: " + wins);
            gameReset();

        } else if (result > randomNumberGenerator) {
            losses++;
            $("#result-message").text("Oh dear, you're going to have to try again...");
            $("#losses-counter").text("Losses: " + losses);
            gameReset();
        };
    };

    //set up the on click event that adds gem values and displays the result
    $("#gem1-btn").on("click", function () {
        result += parseInt(gem1);
        $("#result").text(result);
        results()
        console.log("gem 1: ", gem1, "result: ", result);
    });

    $("#gem2-btn").on("click", function () {
        result += parseInt(gem2);
        $("#result").text(result);
        results()
        console.log("gem 2: ", gem2, "result: ", result);
    });

    $("#gem3-btn").on("click", function () {
        result += parseInt(gem3);
        $("#result").text(result);
        results()
        console.log("gem 3: ", gem3, "result: ", result);
    });

    $("#gem4-btn").on("click", function () {
        result += parseInt(gem4);
        $("#result").text(result);
        results()
        console.log("gem 4: ", gem4, "result: ", result);
    });

    //set a reset function to the start button so the user can force reset 
    $("#action-btn").on("click", function () {

        // Call gameReset function to reset the state of our app
        gameReset();
    });

});