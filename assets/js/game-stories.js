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
    var questions = ["choose one other player, he or she will be your drinking budy for the rest of the game.",
        "clean your drink if have you have ever been caught at cheating on a test.",
        "take 3 sips if you have shoplifted something with a value of 10 euros or more.",
        "take 1 sip of your drink for every time you use the word 'I' until the end of the game.",
        "game: name your favourite music artist. The first person that names a song of this artist can give away 2 sips.",
        "you start this game. Name a movie where Leonardo Dicaprio plays in. the first person who doesn't know a movie has to clean his/her drink. Go in circles to the left.",
        "give 3 sips to the person who you know the longest.",
        "give 3 sips to the person who you know the shortest.",
        "give 2 sips to the person who was the latest person to arrive at the party today.",
        "you have 2 chooses: take 2 sips or let everyone else take 4 sips. What will it be?",
        "clean your drink if you have had a positive corona test",
        "take 2 sips if you used corona as an excuse to skip school/work",
        "take 3 sips if you have finished high school",
        "you have 2 chooses: do a dance on a song to your own choose or clean your drink.",
        "do a vampire shot. No ifs and no buts, just do it.",
        "race someone to your own choose for a 50m print. The loser takes 5 sips.",
        "arm wrestle fight tournament! Everybody has to do it, do KO games until their is 1 person left. He or she can give away 10 sips.",
        "stand on your hand and name at least 10 auto brands. If you compleet the challenge you can give away 5 sips, otherwise you have to take them.",
        "which eye color does everyone has? Everyone close your eyes and if the challenger is incorrect then he or she can only drink with the left hand.",
        "just take a shot, you look like you need one.",
        "how in this room has had the most drinks? If you are correct you can give away 3 sips otherwise you have to take them.",
        "do a tequila shot with salt and lemon. If you dont have tequilla replace it with the strongest drink available.",
        "sing a song! The first person to guess the name of it can give away 2 sips.",
        "if it is before 12 o'clock take 2 sips, is it after take 5 sips and give everyone a glass of water.",
        "do a game of rock paper scissors with the person to your left. The loser cleans his or her drink.",
        "BATTLE between you and the person to your right. take turns and name as many proffesional football player as you know until one person is out. The loser cleans both the drinks.",
        "you can make a rule that everyone has to follow, so be creative!",
        "name the alphabet backward within 60 seconds. If you fail you have to take 2 sips.",
        "call the last person you have called and ask if he or she wants to join the party.",
        "let the person to your left look through your phone for 5 minutes or order some food for the crew.",
        "order some food for the collective.",
        "make a cocktail for the person to your left. If he or she doesn't like it you have to make the same cocktail and clean it.",
        "you can press your thumb anytime you want on the table. The last one to do the same has to take 3 sips.",
        "grab some cards and play a quick game of fuck the dealer. You start as the dealer.",
        "chug a beer in less than 10 seconds.",
        "tell us the biggest thing you have ever stolen. If you refuse take 5 sips.",
        "take 2 sip if you ever blacked out while being drunk.",
        "do 10 push ups. If you fail you have to take 3 sips.",
        "go planking for 1 minute. If you fail you have to take 3 sips.",
        "challege somebody in this room. Do the invisible chair and the first person to fall has to take 5 sips.",
        "you are not allowed to say anything for the next 5 minutes, every time you fail you have to take 2 sips.",
        "if you know the person to your right longer then the person to your left you have to take 2 sips.",
        "name all the birthdays of all the players, take 1 sip for every incorrect answer.",
        "nobody is allowed to respons to your questions, the first person who does respons has to clean his/her drink.",
        "guess the favorite song of the player to your right. If you are wrong you have to take 3 sips.",
        "guess the favorite video game of the player to your left. If you are wrong you have to take 3 sips.",
        "ask a question to someone in this room you always wanted to ask. If he or she refuses to answer he/she has to take 4 sips.",
        "just give 10 sips alway, just not to the same person.",
        "tell everyone your best joke, if nobody laughs you have to take 3 sips.",
        "bring some food to the table. If there is no food in the house, you have to order something.",
        "name 10 countries in Africa, if you fail take 4 sips.",
        "name the capital of South Korea.",
        "name the capital of Brazil."];

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