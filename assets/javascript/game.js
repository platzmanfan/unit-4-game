// Creating global variable that we gonna use
var counter = 0;
var wins = 0;
var losses =0;

// using jquery we pulling the html elements

var randomNum = $("#randomNumber");

var win;

var loss;

var counterTotal;
var getElements = function(){
    randomNum = $("#randomNumber");
    win =$("#wins");
    loss =$("#losses");
    counterTotal = $("#counter");
}
var setElement = function(){
    $("#randomNumber").text(randomDisplay(19,120));
}
var randomDisplay = function(min, max){
    
    return Math.floor(Math.random() * (max - min) + min);
    
   
}

$(document).ready(function(){
    setElement();
});

console.log(randomDisplay(19,120))

