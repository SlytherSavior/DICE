let diceNum1 = Math.floor(Math.random() * (1 - 7) + 7) ;
let diceNum2 = Math.floor(Math.random() * (1 - 7) + 7) ;

let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];

let diceName1 = "images/dice" + diceNum1 +".png";
let diceName2 = "images/dice" + diceNum2 +".png";



img1.setAttribute("src", diceName1);
img2.setAttribute("src", diceName2);

let winner = document.querySelector(".container h1");

if(diceNum1 > diceNum2){
  winner.innerHTML = "Player 1 Wins";
}else if(diceNum1 < diceNum2){
  winner.innerHTML = "Player 2 Wins";
}else { 
  winner.innerHTML = "DRAW";
}