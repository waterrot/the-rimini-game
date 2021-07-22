// variables for the player and game page.
var clickNextDiv = document.getElementById('startGame');    //select the whole card div
var outputPlayer = document.getElementById('output-player');           //select the p element where the player name will come
var outputQuestion = document.getElementById('output-card');           //select the p element where the question will be
var toRemove = document.getElementById('playerPage');       //select the player names input div

//code for when screen loads
window.addEventListener("load", function () {
    var playerStoredString = localStorage.getItem('names');     //get player name data from local storage and put it in a string
    var playerStoredObject = JSON.parse(playerStoredString);    //transform the player name data from a string to an object
    var playerStoredArray = Object.values(playerStoredObject);  //transform the player name data from an object to an array
    if (playerStoredString.length > 0) {          //this code becomes active when player names are allready filled in.
        toRemove.innerHTML = "";                  //remove html of input field

        var randomPlayer = playerStoredArray[Math.floor(Math.random() * playerStoredArray.length)]; //select random player name

        //output for when a player refreshes the page
        outputPlayer.innerHTML += "<b>" + randomPlayer + "</b>, ";
        outputQuestion.innerHTML += `The page was refreshed, so you and the person who has
        the phone in his/her hand have to take 2 sips.`;

        //make the game page visable
        var gameView = document.getElementById("gamePage");
        gameView.classList.remove("hide");

        //make restart button visible 
        var restart = document.getElementById("restartBtn");
        restart.classList = "btn btn-sm btn-danger";

        //open modal with the would you like to continue question
        $('#ContinueModal').modal('show');

        //turn the cursor into a pointer
        document.getElementById("startGame").style.cursor = "pointer";
    }
});

//code to add a player button
// I used some code from "Code Pen IO" as inspiration for this. The link to this site is https://codepen.io/rsherry/pen/QwoqyO
var addPlayer = document.getElementById("addPlayer");

addPlayer.addEventListener("click", function () {
    //create an input field
    var input = document.createElement("input");
    //create a <br> element
    var toTheNextLine = document.createElement("br");
    var playerId = "player";
    var i = 0;
    var x = document.getElementsByTagName("INPUT").length + 1;

    //give every input field an unique id using this loop
    for (i = 0; i < x; i++) {
        i;
    }

    input.setAttribute("id", playerId + i);                         //set the id to the input field
    input.setAttribute("name", "playerNameTag");                    //give the input field a name attribute
    input.type = "text";                                            //give the input field a type attribute with a value of text 
    input.classList = "mb-2";                                       //add some margin to the bottom of an input field
    var playerlist = document.getElementById("input-player-list");
    playerlist.appendChild(input);
    playerlist.appendChild(toTheNextLine);
});

//code to remove a player button
var removePlayer = document.getElementById("removePlayer");
removePlayer.addEventListener("click", function () {
    var x = document.getElementsByTagName('INPUT').length;
    if (x > 1) {
        $("#input-player-list input:last").remove();
        $("#input-player-list br:last").remove();
    }
});

//make a variable of the start game button
var buttonGetName = document.getElementById("btnPlayer");

//function actived when start game button is pressed
buttonGetName.addEventListener("click", function () {
    var getPlayerNames = document.getElementsByName('playerNameTag');
    var listPlayers = [];
    //a loop to put all the player names into an array
    for (let i = 0; i < getPlayerNames.length; i++) {
        var playerName = getPlayerNames[i].value;
        //if the name is shorter then 2 then make the border red and give an alert
        if (playerName.length < 2) {
            getPlayerNames[i].setAttribute("class", "red-border mb-2");
            alert("player name must be longer");
            return;
        } else {
            listPlayers.push(playerName);
            getPlayerNames[i].setAttribute("class", "mb-2");
        }
    }

    //turn array into a string and put it in the local storage
    var listString = JSON.stringify(listPlayers);
    localStorage.setItem('names', listString);

    toRemove.innerHTML = "";                  //remove html of input field

    //make restart button visible 
    var restart = document.getElementById("restartBtn");
    restart.classList = "btn btn-sm btn-danger";

    //make the game page visable
    var gameView = document.getElementById("gamePage");
    gameView.classList.remove("hide");

    //turn the cursor into a pointer
    document.getElementById("startGame").style.cursor = "pointer";
});

//when the game starts, click on the screen and this will happen: 
clickNextDiv.addEventListener("click", function () {
    var playerStoredString = localStorage.getItem('names');     //get player name data from local storage and put it in a string
    var playerStoredObject = JSON.parse(playerStoredString);    //transform the player name data from a string to an object  
    var playerStoredArray = Object.values(playerStoredObject);  //transform the player name data from an object to an array
    var randomPlayer = playerStoredArray[Math.floor(Math.random() * playerStoredArray.length)];     //select random player name

    //array with all the questions
    var questions = ["you have 2 choices: take 2 sips or let everyone else take 6 sips. What will it be?",
    "do a dance on a song to your own choose.",
    "stand on your hands and name at least 10 car brands. If you complete the challenge you can give away 5 sips, otherwise you have to take them.",
    "do a (tequila) shot with salt and lemon. If you don't have tequila replace it with the strongest drink available.",
    "if it is before 12 o'clock take 2 sips, is it after 12 o'clock take 5 sips and give everyone a glass of water.",
    "you can make a rule that everyone has to follow, so be creative!",
    "name the alphabet backward within 60 seconds. If you fail you have to take 4 sips.",
    "call the last person you have called and ask if he or she wants to join the party.",
    "let the person to your left look through your phone for 5 minutes or order some food for the crew.",
    "make a cocktail for the person to your left. Be creative, everything is allowed and the person to your left has to drink it.",
    "go planking for 1 minute. If you fail you have to take 3 sips.",
    "challenge somebody in this room. Do the invisible chair and the first person to fall has to take 5 sips.",
    "just give 10 sips alway, just not to the same person.",
    "do a shot of hot sauce",
    "daag iemand uit om 1v1 blikkoppen mee te doen. iedereen uit het spel moet je uitdaging accepteren",
    "je mag als eerste beginnen met een potje blikkoppen met de hele groep.",
    "eet dierenvoer dat aanwezig is.",
    "doe een vampire shot, je mag hulp krijgen met je benen.",
    "neem voor de rest van het spel een slok voor iedere keer dat je iemand aanspreek bij zijn/haar naam of het woord 'ik' gebruikt",
    "neem een duik binnen nu en 1 uur. Naast de zee en meren zijn vijvers en fonteinen ook toegestaan.",
    "lees het laatste bericht voor die je naar de bovenste 5 personen op whatsapp hebt gestuurd.",
    "laat de persoon links van je een woord op je hoofd schrijven.",
    "teken bij jezelf een snor op je gezicht.",
    "houd je ogen dicht tot je weer aan de beurt bent."];

    if (localStorage.getItem('theQuestions') === null) {
        var b = questions.slice();
        var newArr = []; //this is the destination of the randomly selected item

        //for loop to select a random question and splice it of the array
        for (let i = 0; i < 1; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];

            let index = b.indexOf(arr);                             //find the index of the randomly selected question
            questions.splice(index, 1);                             //splice the randomly selected question of the array
            newArr.push(arr);                                       //push the randomly selected question to the new array to show it
            var questionsString = JSON.stringify(questions);        //make a string of the new array
            localStorage.setItem("theQuestions", questionsString);  //upload the string to the local storage
        }
    } if (JSON.parse(localStorage.getItem('theQuestions')).length === 0) {
        var newArr = "Press the reset button to start over"; //this will be displayed when the array in local storage is out of items and the game is finished
    } else {
        var questionsStoredString = localStorage.getItem('theQuestions');       //get questions from local storage in string form
        var questionsStoredObject = JSON.parse(questionsStoredString);          //transform the questions data from a string to an object  
        var questions = Object.values(questionsStoredObject);                   //transform the questions data from an object to an array

        var b = questions.slice();
        var newArr = []; //this is the desitination of the randomly selected item

        //for loop to select a random question and splice it of the array
        for (let i = 0; i < 1; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];

            let index = b.indexOf(arr);                             //find the index of the randomly selected question
            questions.splice(index, 1);                             //splice the randomly selected question of the array
            newArr.push(arr);                                       //push the randomly selected question to the new array to show it
            var questionsString = JSON.stringify(questions);        //make a string of the new array
            localStorage.setItem("theQuestions", questionsString);  //upload the string to the local storage
        }
    }

    //the new output text
    outputPlayer.innerHTML = "";                                    //remove the old name from the previous round
    outputQuestion.innerHTML = "";                                  //remove the old question from the previous round
    outputPlayer.innerHTML += "<b>" + randomPlayer + "</b>, ";      //add the new name
    outputQuestion.innerHTML += "<p>" + newArr + "</p>";            //add the new question
});

//the question mark link who will open the game modal
var gameModal = document.getElementById("GameModalId");
gameModal.addEventListener("click", function () {
    event.stopPropagation();            //when you press the button the next question won't be loaded
    $("#GameModal").modal();        //open the game modal
});

//the restart button who will open the continue modal
var restart = document.getElementById("restartBtn");
restart.addEventListener("click", function () {
    event.stopPropagation();            //when you press the button the next question won't be loaded
    $("#ContinueModal").modal();        //open the continue modal
});

//the restart button in the modal
var restartModal = document.getElementById("restartBtnModal");
restartModal.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});