# Week 5: CrystalsCollector Game
- **For:** Northwestern Coding Bootcamp
- **Developer:** Sean Del Valle
- **Deployment Date**   05/17/2019
- **Built With** HTML, CSS, Bootstrap, Javascript & JQuery


## Course Requirements
---
In this assignment, we were required to create a fun and interactive game for web browsers. The app was required to take user actions on the DOM and dynamically update the HTML page using Javascript and JQuery.

### Rules of the Game
1. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

2. Here's how the app works:

   * Four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.
   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * The game hides this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.
    
   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. 
     * Also, all the crystals will have four new hidden values. 
     * Of course, the user's score (and score counter) will reset to zero.

  
##### Design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.
