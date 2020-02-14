// Creating global variable that we gonna use
var counter = 0;
var wins = 0;
var losses =0;

// using jquery we pulling the html elements


var win;
var image;
var loss;
var increment = [1,2,3,4,5,6,7,8,9,10,11,12];
var targetNumber;
var options
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
 
var randomNumber = function(){
    options = increment[Math.floor(Math.random() * increment.length)];
   return options;
   
}
var randomDisplay = function(min, max){
    
    targetNumber = Math.floor(Math.random() * (max - min) + min);
    return targetNumber;
    
}
var reset = function(){
    counter = 0;
    $("#counter").text(counter)
    
}
var createImg = function(){
    
    var crystal = $("<img>");
    var crystal1 =$("<img>");
    var crystal2 =$("<img>");
    var crystal3 =$("<img>");
    crystal.addClass("crystal-image");
    crystal1.addClass("crystal-image");
    crystal2.addClass("crystal-image");
    crystal3.addClass("crystal-image");
    crystal.attr("src", "assets/images/crystal-1.png");
    crystal1.attr("src", "assets/images/crystal-2.png");
    crystal2.attr("src", "assets/images/crystal-3.png");
    crystal3.attr("src", "assets/images/crystal-4.png");
    crystal1.attr("data-image", options);
    if(!randomNumber === crystal) {$(".crystals").append(crystal); }
    crystal.attr("data-image" , randomNumber(1,13));
    if(!randomNumber === crystal1) {$(".crystals").append(crystal1); }
    crystal1.attr("data-image" , randomNumber(1,13));
    if(!randomNumber === crystal2){$(".crystals").append(crystal2); }
    crystal2.attr("data-image" , randomNumber(1,13));
    if(!randomNumber === crystal3) {$(".crystals").append(crystal3); }
    crystal3.attr("data-image" , randomNumber(1,13));
    $(".crystals").append(crystal);
    $(".crystals").append(crystal1);
    $(".crystals").append(crystal2);
    $(".crystals").append(crystal3);
}
$(document).ready(function(){
    setElement();
   createImg();
   
});

// console.log(randomDisplay(19,120))
$(document).on("click", ".crystal-image" , function(){
    var value = ($(this).attr("data-image"));
    value = parseInt(value);
    counter += value;
    $("#counter").text(counter);
    
    if(counter === targetNumber){
        wins++;
        $("#wins").text(wins);
        setElement();
        reset();
    }
    else if (counter > targetNumber){
        losses++;
        $("#losses").text(losses);
        setElement();
        reset();
    }



});

