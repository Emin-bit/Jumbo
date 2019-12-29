

var randomNumber = Math.floor ( Math.random() * 6 ) + 1;

var randomDice = "images/dice" + randomNumber + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice);

var randomNumber1 = Math.floor ( Math.random() * 6 ) + 1;

var randomDice1 = "images/dice" + randomNumber1 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice1);

if (randomNumber>randomNumber1){
  document.querySelector("h1").innerHTML=" Igrač 1 je pobijedio !! ";
}else if(randomNumber<randomNumber1) {
  document.querySelector("h1").innerHTML=" Igrač 2 je pobijedio !! ";
}else{
  document.querySelector("h1").innerHTML=" Neriješeno !!! ";
}
