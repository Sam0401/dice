// this is for the dice1 

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomdiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// this is for the dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomdiceImage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);


//  this is the condition for the Node.on the dice 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎊Player1  wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins!🎊";
}
else {
    document.querySelector("h1").innerHTML = "Oops..DRAW!!😆"
}