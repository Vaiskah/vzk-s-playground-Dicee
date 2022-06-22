var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1, randomNumber2);

var randomDiceImage1 = `images/dice${randomNumber1}.png`
var randomDiceImage2 = `images/dice${randomNumber2}.png`

// player 1
document.querySelector(".img1").setAttribute("src", randomDiceImage1)

//player 2
document.querySelector(".img2").setAttribute("src", randomDiceImage2)

// win or draw

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins🥇"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins🥇"
}else{
    document.querySelector("h1").innerHTML = "Draw Match 🏳"
}