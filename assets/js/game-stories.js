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
    var questions = ["give 3 sips to the person who you know the longest.",
    "give 3 sips to the person who you know the shortest.",
    "clean your drink if you have had a positive corona test",
    "take 2 sips if you used corona as an excuse to skip school/work",
    "you can make a rule that everyone has to follow, so be creative!",
    "tell us the biggest thing you have ever stolen. If you refuse take 5 sips.",
    "take 2 sip if you ever blacked out while being drunk.",
    "name all the birthdays of all the players, take 1 sip for every incorrect answer.",
    "guess the favorite song of the player to your right. If you are wrong you have to take 3 sips.",
    "guess the favorite video game of the player to your left. If you are wrong you have to take 3 sips.",
    "ask a question to someone in this room you always wanted to ask. If he or she refuses to answer he/she has to take 6 sips.",
    "tell everyone your best joke, if nobody laughs (michiel does not count) you have to take 3 sips.",
    "wanneer was je voor het eerste dronken? vertel hoe dat is gegaan.",
    "wanneer had je voor het eerste seks?",
    "anneer had je voor het eerste keer drug gedaan? En welke was dat?",
    "als je ooit iets van 10 euro of meer hebt gestolen moet je 4 slokken nemen.",
    "regel chaps.",
    "Laat de andere mensen omstebeurt raden wat je lievelings vrijetijdsbesteding is. De eerste die het goed heeft mag 5 slokken uitdelen en de persoon links van je begint.",
    "Laat de andere mensen omstebeurt raden wat je lievelings café in Hilversum is. De eerste die het goed heeft mag 5 slokken uitdelen en de persoon links van je begint.",
    "wat heeft je voorkeur, hond of kat? Als de meeste mensen het met je eens zijn moet je 5 slokken nemen.",
    "hertog of heineken? Neem 1 slok voor ieder persoon die het niet met je eens is.",
    "grolsch of heineken? Neem 1 slok voor ieder persoon die het niet met je eens is.",
    "koffie of thee? Neem 1 slok voor ieder persoon die het niet met je eens is.",
    "hertog of heineken? Neem 1 slok voor ieder persoon die het niet met je eens is.",
    "welke drug heb je allemaal uitgeprobeerd? Neem 1 slok voor elke drugs die je hebt geprobeerd.",
    "vertel over je grootste seksdroom of neem een adtje.",
    "Laat de andere mensen omstebeurt raden wat je lievelingseten is. De eerste die het goed heeft mag 5 slokken uitdelen en de persoon links van je begint.",
    "wat heeft je voorkeur, apple of android? Neem 1 slok voor iedereen die het niet eens met je is.",
    "wat heeft je voorkeur, apple of windows voor PC? Neem 1 slok voor iedereen die het niet eens met je is.",
    "wanneer had je voor het eerste alcohol gedaan? Je leeftijd van toen je als eerste dronk, gedeeld door 2 mag je weggeven aan minimaal 2 verschillende personen.",
    "werk je liever met je handen of je hoofd? Neem 1 slok voor iedereen die het niet eens met je is.",
    "wanneer heb je voor het laatst gelogen en waarover? Als je niet op tijd een antwoord geeft moet je 5 slokken nemen.",
    "neem 3 slokken als je ooit verliefd op iemand bent geweest die in een relatie zat.",
    "wat is de hoogste boete die je ooit hebt gekregen? Iedereen die een hogere boete heeft gehad mag 2 slokken weggeven.",
    "wat is allergrootste miskoop die je ooit hebt gekregen? Iedereen die een hogere miskoop heeft gehad mag 2 slokken weggeven.",
    "wat is je slechtste eigenschap? Neem 5 slokken als je deze niet weet.",
    "wat is de raarste plek dat je seks hebt gehad?"];

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