/*
The rules I need to model:

    rock breaks scissors
    scissors cut paper
    paper covers rock

A revised mockup of the rules in a more explicit format:

    Choices (pairs)          Outcome
    ----------------------------------------------
    "rock" -> "scissors"    : "WIN"
    "scissors" -> "rock"    : "LOSE"

    "scissors" -> "paper"   : "WIN"
    "paper" -> "scissors"   : "LOSE"

    "paper" -> "rock"       : "WIN"
    "rock" -> "paper"       : "LOSE"

*/

var rounds = {
    "rock" : {
        "rock" : "TIE",
        "scissors" : "WIN",
        "paper" : "LOSE"
    }
    ,
    "scissors" : {
        "scissors" : "TIE"
        "paper" : "WIN",
        "rock" : "LOSE"
    }
    ,
    "paper" : {
        "paper" : "TIE"
        "rock" : "WIN",
        "scissors" : "LOSE"
    }
}

console.log( rounds["rock"]["scissors"] );
// "WIN"

console.log( rounds["scissors"]["rock"] );
// "LOSE"

console.log( rounds["paper"]["scissors"] );
// "LOSE"
