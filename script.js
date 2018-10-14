let max = 50;
    let min = 1;
    let randomNum;
    let pastGuesses = [];
    let attempts = 10;
    

    function newGame() {
        window.location.reload();
    }
   
    function generateNum () {
        randomNum = Math.floor(Math.random() * (max - min +1)) + min;       
        document.getElementById('startButton').style.display = none;
    }

    function compareGuess(){
        let userGuess = " " + document.getElementById('inputbox').value;
        userGuess = parseInt(userGuess);

    if (isNaN(userGuess)) {
            document.getElementById('resultOutput').innerHTML = 'Input INVALID. Make sure your guess is a number between 1 and 50';
    }
       if ((userGuess) < 1 || (userGuess > 50)) {
        document.getElementById('resultOutput').innerHTML = 'Input INVALID. Make sure your guess is a number between 1 and 50';
       } 
        
    pastGuesses.push(userGuess);
    document.getElementById('pastguesses').innerHTML = pastGuesses;
    
    attempts--;
    document.getElementById('attempts').innerHTML = attempts;  
 

     
    if (userGuess> randomNum) {
       document.getElementById('resultOutput').innerHTML = "<span style='background-color: pink;'>Your guess is too high!Try one more time.</span>";
       if (attempts<1) {
           alert('GAME OVER. You have no more attempts left. The game will restart.')
           newGame();
       }
    } else if (userGuess <randomNum) {
        document.getElementById('resultOutput').innerHTML = "<span style='background-color: pink;'>Your guess is too low! Try one more time.</span>";
        if (attempts<1) {
            alert('GAME OVER. You have no more attempts left. The game will restart.')
            newGame();
        }
    } else if (randomNum == userGuess) {
        document.getElementById('resultOutput').innerHTML = "<span style='background-color: turquoise;'>Congratulations!You guessed right.</span>";    
    }
}

    
