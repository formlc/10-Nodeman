var fs = require("fs");
var inquirer = require("inquirer");
var words = ["ALPHA","BRAVO","CHARLIE","DELTA","ECHO","FOXTROT","GOLF","HOTEL","INDIA","JULIET","KILO","LIMA","MIKE","NOVEMBER","OSCAR","PAPA","QUEBEC","ROMEO","SIERRA","TANGO","UNIFORM","VICTOR","WHISKEY","XRAY","YANKEE","ZULU"];

function checkLetter(response) {
  //console.log("Check achieved");
  if (response.name.length < 2 && this.lettersGuessed.indexOf(response.name) === -1) {
    //console.log("Legal guess achieved");
    var checker = response.name.toUpperCase();
    this.lettersGuessed.push(checker)
    for (var u = 0; u < this.goldenBoy.length; u++) {
      if (this.goldenBoy[u] === checker) {
        this.blank[u] = checker;
        console.log(this.blank);
      }
    }
  }else{
    console.log("invalid guess")
  }
}

function nodeMan() {
  var self = this;

  this.lettersGuessed = [];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.goldenBoy = this.word.split("");
  this.guessNum = 0;
  this.blank = [];
  this.setBlanks = function() {
    for (var x = 0; x < this.word.length; x++) {
      this.blank.push("_");
    }
    console.log(blank);
  }
  this.setBlanks();
  this.userGuess = function() {
    console.log("Guess #" + self.guessNum);
    if (self.guessNum < 10 && this.blank.indexOf("_") !== -1) {
      inquirer.prompt([
        {
          name: "name",
          message: "Guess a Letter"
        }
      ]).then(function(response) {
        console.log(response.name);
        self.guessNum++;
        checkLetter(response);

        self.userGuess();
      });
    } else if(self.guessNum < 10 && this.blank.indexOf("_") === -1) {
      console.log("YOU WON IN " + this.guessNum + " GUESSES!")
      nodeMan();
    } else if(self.guessNum >= 10) {
      console.log("YOU LOSE!")
      nodeMan();
    } else {
      console.log("Invalid guess");
      self.guessNum--;
      self.userGuess();
    }
  }
  this.userGuess();
}
nodeMan();
