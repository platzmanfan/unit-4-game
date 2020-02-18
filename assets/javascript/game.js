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
// we create functions to get elements, set the number and give random numbers!!
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
var randomNumber
var randomDisplay = function(min, max){
    
    targetNumber = Math.floor(Math.random() * (max - min) + min);
    return targetNumber;

}
var reset = function(){
    counter = 0;
    $("#counter").text(counter);
        

       
    
}
// we pulling the pictures and creating them via jquery

var createImg = function(){
    
    var crystal = $("<img>");
    var crystal1 =$("<img>");
    var crystal2 =$("<img>");
    var crystal3 =$("<img>");
             crystal.addClass("crystal-image");
             crystal1.addClass("crystal-image1");
             crystal2.addClass("crystal-image2");
             crystal3.addClass("crystal-image3");
                  crystal.attr("src", "assets/images/crystal-1.png");
                  crystal1.attr("src", "assets/images/crystal-2.png");
                  crystal2.attr("src", "assets/images/crystal-3.png");
                  crystal3.attr("src", "assets/images/crystal-4.png");
    
    
    crystal.attr("data-image", randomNumber(1,13));
    
    crystal1.attr("data-image" , randomNumber(1,13));
    
    crystal2.attr("data-image" , randomNumber(1,13));
    
    crystal3.attr("data-image" , randomNumber(1,13));
    $(".crystals").append(crystal);
    $(".crystals").append(crystal1);
    $(".crystals").append(crystal2);
    $(".crystals").append(crystal3);
}
// when windows load what to show
$(document).ready(function(){
          setElement();
          createImg();
   
});
var rNumber = function(){
   
    $(".crystal-image").attr("data-image", randomNumber(1,13));
    $(".crystal-image1").attr("data-image", randomNumber(1,13));
    $(".crystal-image2").attr("data-image", randomNumber(1,13));
    $(".crystal-image3").attr("data-image", randomNumber(1,13));
}
//// the event click with the if statements
$(document).on("click touchend" , ".crystal-image , .crystal-image1, .crystal-image2, .crystal-image3",  function(){
    var value = ($(this).attr("data-image"));
         value = parseInt(value);
         counter += value;
         $("#counter").text(counter);
    
    if(counter === targetNumber){
        wins++;
        $("#wins").text(wins);
        setElement();
        reset();
        rNumber();
    }
    else if (counter > targetNumber){
        losses++;
        $("#losses").text(losses);
        setElement();
        reset();
        rNumber();
       
    }
});

