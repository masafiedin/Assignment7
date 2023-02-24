//Generates a random number b/w 1 and 6;
function randomDice() {
  var dice = Math.floor(Math.random() * 6);
  console.log(dice + 1);
  return dice + 1;
}
//change dice image
function changeImg(diceNo,div) {
    console.log("This is diceNO",diceNo)
 
  switch (diceNo) {
    case 1: {
       document.getElementById(div).src = "Resources/d1.png";
      break;
    }
    case 2: {
        document.getElementById(div).src ="Resources/d2.png";
      break;
    }
    case 3: {
        document.getElementById(div).src ="Resources/d3.png";
      break;
    }
    case 4: {
        document.getElementById(div).src = "Resources/d4.png";
      break;
    }
    case 5: {
        document.getElementById(div).src = "Resources/d5.png";
      break;
    }
    case 6: {
        document.getElementById(div).src = "Resources/d6.png";
      break;
    }
  }
}

//game logic
function play(){
    var temp1 = randomDice();
    var temp2 = randomDice();
    changeImg(temp1,"p1");
    changeImg(temp2,"p2");
    if(temp1 >temp2){
        document.getElementById("winner").innerHTML = "Player 1 wins!";
    }
    else if(temp2>temp1){
        document.getElementById("winner").innerHTML = "Player 2 wins!"
    }
    else{
        document.getElementById("winner").innerHTML = "Tie!"
    }

}
