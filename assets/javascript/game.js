var gameObject = {
//Properties of the object.
gameArray: ["Daenrys", "Jaime", "Ayra", "Tyrion",
            "Gregor", "Cersei", "Sansa", "Joffery", "Ramsey",
            "Melisandre", "Margaery", "Sandor", "Bronn", "Petyr",
            "Hodor","Theon","Varys","Jon","Jorah","Missandei"],
lineArray: [],
guessedLetters: [],
gameCharPicked: true,
gameValue: 0,
gameWorking: true,
userGuess: true,
gameCounter: 0,
guessesLeft: 10,
wins: 0,
gamePickingChar: function (){
    this.gameCharPicked = this.gameArray[Math.floor(Math.random()*this.gameArray.length)];
}
};

document.onkeyup = function(event){

    gameObject.userGuess = event.key;
    var game;
    var win;
    var guessed;
    var attempts;

    if(gameObject.gameValue === 0){
        gameObject.gamePickingChar();
        gameObject.gameValue = 1;

        for(var i=0; i < gameObject.gameCharPicked.length; i++){
            gameObject.lineArray.push("_");
        }
        game = "<p>Guess this word: "+gameObject.lineArray+"</p>";
        document.querySelector("#game").innerHTML = game;
        win = "<p>Wins: "+gameObject.wins+"</p>";
        document.querySelector("#win").innerHTML = win;
        guessed = "<p>Guessed Letters: "+gameObject.guessedLetters+"</p>";
        document.querySelector("#guessed").innerHTML = guessed;
        attempts = "<p>Guesses Left: "+gameObject.guessesLeft+"</p>";j
        document.querySelector("#attempts").innerHTML = attempts;
    } //closes if statement

    else{
        for(var j=0; j<gameObject.gameCharPicked.length; j++){
            if(gameObject.gameCharPicked.charAt(j).toLowerCase() == gameObject.userGuess){
                gameObject.lineArray[j] = gameObject.userGuess;
                game = "<p>Guess this word: "+gameObject.lineArray+"</p>";
                document.querySelector("#game").innerHTML = game;
            }//closes the if statement
        }//closes the for loop

        if(gameObject.lineArray.indexOf(gameObject.userGuess) < 0){
            gameObject.guessedLetters.push(gameObject.userGuess);
            guessed = "<p>Guessed Letters: "+gameObject.guessedLetters+"</p>";
            document.querySelector("#guessed").innerHTML = guessed;
            gameObject.guessesLeft--;
            attempts = "<p>Guesses Left: "+gameObject.guessesLeft+"</p>";
            document.querySelector("#attempts").innerHTML = attempts;
        }

        if(gameObject.lineArray.indexOf(gameObject.userGuess) > -1){
            gameObject.gameCounter++;
            if(gameObject.gameCounter === gameObject.gameCharPicked.length){
                gameObject.wins++;
                win = "<p>Wins: "+gameObject.wins+"</p>";
                document.querySelector("#win").innerHTML = win;
                gameObject.gameCounter = 0;
                gameObject.gameValue = 0;
                gameObject.guessesLeft = 10;
                gameObject.lineArray = [];
                gameObject.guessedLetters = [];
            }
        }//closes the if statement
    } //closes else statement

}; //closes document.onkeyup
