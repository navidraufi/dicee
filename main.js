let boxOne = document.querySelector(".box_1");
let boxTwo = document.querySelector(".box_2");

let header = document.getElementById("wlcm_header");

let playerOne = prompt("Enter Player One's Name");
let playertwo = prompt("Enter Player Two's Name");

document.getElementById("playerOne").innerHTML = playerOne;
document.getElementById("playerTwo").innerHTML = playertwo;

let oneIsInInvisible = document.querySelectorAll(".num1");
let twoIsInInvisible = document.querySelectorAll(".num3");
let threeIsInvisible = document.querySelectorAll(".num4");
let fourIsInvisible = document.querySelectorAll(".num6");
let fiveIsInvisible = document.querySelectorAll(".num7");
let sixIsInvisible = document.querySelectorAll(".num9");
let CenterIsVisible = document.querySelectorAll(".num5  ");

let rollBtn = document.getElementById("roll_button");

rollBtn.addEventListener("click", rollTheDice);

function rollTheDice() {
  let playerOneDiceNum = Math.floor(Math.random() * 6 + 1);
  let playerTwodiceNum = Math.floor(Math.random() * 6 + 1);

  if (playerOneDiceNum > playerTwodiceNum) {
    document.getElementById("playerOne").innerHTML = "1(⌐■_■)";
    document.getElementById("playerTwo").innerHTML = ".·´¯`(>▂<)´¯`·. ";

    header.innerHTML = "(☞ﾟヮﾟ)☞ " + playerOne + " Wins";
  } else if (playerOneDiceNum < playerTwodiceNum) {
    document.getElementById("playerTwo").innerHTML = "1(⌐■_■)";
    document.getElementById("playerOne").innerHTML = ".·´¯`(>▂<)´¯`·. ";
    header.innerHTML = playertwo + " Wins" + " ☜(ﾟヮﾟ☜)";
  } else if (playerOneDiceNum === playerTwodiceNum) {
    header.innerHTML = "Draw";
    document.getElementById("playerOne").innerHTML = playerOne;
    document.getElementById("playerTwo").innerHTML = playertwo;
  }

  if (playerOneDiceNum === 1) {
    CenterIsVisible[0].classList.remove("visible");
    oneIsInInvisible[0].classList.remove("visible");
    twoIsInInvisible[0].classList.remove("visible");
    threeIsInvisible[0].classList.remove("visible");
    fourIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    sixIsInvisible[0].classList.remove("visible");

    CenterIsVisible[0].classList.add("visible");
    oneIsInInvisible[0].classList.add("invisible");
    twoIsInInvisible[0].classList.add("invisible");
    threeIsInvisible[0].classList.add("invisible");
    fourIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("invisible");
    sixIsInvisible[0].classList.add("invisible");
  } else if (playerOneDiceNum === 2) {
    CenterIsVisible[0].classList.remove("visible");
    oneIsInInvisible[0].classList.remove("visible");
    twoIsInInvisible[0].classList.remove("visible");
    threeIsInvisible[0].classList.remove("visible");
    fourIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    sixIsInvisible[0].classList.remove("visible");

    CenterIsVisible[0].classList.add("invisible");
    oneIsInInvisible[0].classList.add("visible");
    twoIsInInvisible[0].classList.add("invisible");
    threeIsInvisible[0].classList.add("invisible");
    fourIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("invisible");
    sixIsInvisible[0].classList.add("visible");
  } else if (playerOneDiceNum === 3) {
    CenterIsVisible[0].classList.remove("visible");
    oneIsInInvisible[0].classList.remove("visible");
    twoIsInInvisible[0].classList.remove("visible");
    threeIsInvisible[0].classList.remove("visible");
    fourIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    sixIsInvisible[0].classList.remove("visible");

    CenterIsVisible[0].classList.add("visible");
    oneIsInInvisible[0].classList.add("visible");
    twoIsInInvisible[0].classList.add("invisible");
    threeIsInvisible[0].classList.add("invisible");
    fourIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("invisible");
    sixIsInvisible[0].classList.add("visible");
  } else if (playerOneDiceNum === 4) {
    CenterIsVisible[0].classList.remove("visible");
    oneIsInInvisible[0].classList.remove("visible");
    twoIsInInvisible[0].classList.remove("visible");
    threeIsInvisible[0].classList.remove("visible");
    fourIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    sixIsInvisible[0].classList.remove("visible");

    CenterIsVisible[0].classList.add("invisible");
    oneIsInInvisible[0].classList.add("visible");
    twoIsInInvisible[0].classList.add("visible");
    threeIsInvisible[0].classList.add("invisible");
    fourIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("visible");
    fiveIsInvisible[0].classList.add("visible");
    sixIsInvisible[0].classList.add("visible");
  } else if (playerOneDiceNum === 5) {
    CenterIsVisible[0].classList.remove("visible");
    oneIsInInvisible[0].classList.remove("visible");
    twoIsInInvisible[0].classList.remove("visible");
    threeIsInvisible[0].classList.remove("visible");
    fourIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    sixIsInvisible[0].classList.remove("visible");

    CenterIsVisible[0].classList.add("visible");
    oneIsInInvisible[0].classList.add("visible");
    twoIsInInvisible[0].classList.add("visible");
    threeIsInvisible[0].classList.add("invisible");
    fourIsInvisible[0].classList.add("invisible");
    fiveIsInvisible[0].classList.add("visible");
    fiveIsInvisible[0].classList.add("visible");
    sixIsInvisible[0].classList.add("visible");
  } else if (playerOneDiceNum === 6) {
    CenterIsVisible[0].classList.remove("visible");
    oneIsInInvisible[0].classList.remove("visible");
    twoIsInInvisible[0].classList.remove("visible");
    threeIsInvisible[0].classList.remove("visible");
    fourIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    fiveIsInvisible[0].classList.remove("visible");
    sixIsInvisible[0].classList.remove("visible");

    CenterIsVisible[0].classList.add("invisible");
    oneIsInInvisible[0].classList.add("visible");
    twoIsInInvisible[0].classList.add("visible");
    threeIsInvisible[0].classList.add("visible");
    fourIsInvisible[0].classList.add("visible");
    fiveIsInvisible[0].classList.add("visible");
    fiveIsInvisible[0].classList.add("visible");
    sixIsInvisible[0].classList.add("visible");
  }

  if (playerTwodiceNum === 1) {
    CenterIsVisible[1].classList.remove("visible");
    oneIsInInvisible[1].classList.remove("visible");
    twoIsInInvisible[1].classList.remove("visible");
    threeIsInvisible[1].classList.remove("visible");
    fourIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    sixIsInvisible[1].classList.remove("visible");

    CenterIsVisible[1].classList.add("visible");
    oneIsInInvisible[1].classList.add("invisible");
    twoIsInInvisible[1].classList.add("invisible");
    threeIsInvisible[1].classList.add("invisible");
    fourIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("invisible");
    sixIsInvisible[1].classList.add("invisible");
  } else if (playerTwodiceNum === 2) {
    CenterIsVisible[1].classList.remove("visible");
    oneIsInInvisible[1].classList.remove("visible");
    twoIsInInvisible[1].classList.remove("visible");
    threeIsInvisible[1].classList.remove("visible");
    fourIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    sixIsInvisible[1].classList.remove("visible");

    CenterIsVisible[1].classList.add("invisible");
    oneIsInInvisible[1].classList.add("visible");
    twoIsInInvisible[1].classList.add("invisible");
    threeIsInvisible[1].classList.add("invisible");
    fourIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("invisible");
    sixIsInvisible[1].classList.add("visible");
  } else if (playerTwodiceNum === 3) {
    CenterIsVisible[1].classList.remove("visible");
    oneIsInInvisible[1].classList.remove("visible");
    twoIsInInvisible[1].classList.remove("visible");
    threeIsInvisible[1].classList.remove("visible");
    fourIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    sixIsInvisible[1].classList.remove("visible");

    CenterIsVisible[1].classList.add("visible");
    oneIsInInvisible[1].classList.add("visible");
    twoIsInInvisible[1].classList.add("invisible");
    threeIsInvisible[1].classList.add("invisible");
    fourIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("invisible");
    sixIsInvisible[1].classList.add("visible");
  } else if (playerTwodiceNum === 4) {
    CenterIsVisible[1].classList.remove("visible");
    oneIsInInvisible[1].classList.remove("visible");
    twoIsInInvisible[1].classList.remove("visible");
    threeIsInvisible[1].classList.remove("visible");
    fourIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    sixIsInvisible[1].classList.remove("visible");

    CenterIsVisible[1].classList.add("invisible");
    oneIsInInvisible[1].classList.add("visible");
    twoIsInInvisible[1].classList.add("visible");
    threeIsInvisible[1].classList.add("invisible");
    fourIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("visible");
    fiveIsInvisible[1].classList.add("visible");
    sixIsInvisible[1].classList.add("visible");
  } else if (playerTwodiceNum === 5) {
    CenterIsVisible[1].classList.remove("visible");
    oneIsInInvisible[1].classList.remove("visible");
    twoIsInInvisible[1].classList.remove("visible");
    threeIsInvisible[1].classList.remove("visible");
    fourIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    sixIsInvisible[1].classList.remove("visible");

    CenterIsVisible[1].classList.add("visible");
    oneIsInInvisible[1].classList.add("visible");
    twoIsInInvisible[1].classList.add("visible");
    threeIsInvisible[1].classList.add("invisible");
    fourIsInvisible[1].classList.add("invisible");
    fiveIsInvisible[1].classList.add("visible");
    fiveIsInvisible[1].classList.add("visible");
    sixIsInvisible[1].classList.add("visible");
  } else if (playerTwodiceNum === 6) {
    CenterIsVisible[1].classList.remove("visible");
    oneIsInInvisible[1].classList.remove("visible");
    twoIsInInvisible[1].classList.remove("visible");
    threeIsInvisible[1].classList.remove("visible");
    fourIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    fiveIsInvisible[1].classList.remove("visible");
    sixIsInvisible[1].classList.remove("visible");

    CenterIsVisible[1].classList.add("invisible");
    oneIsInInvisible[1].classList.add("visible");
    twoIsInInvisible[1].classList.add("visible");
    threeIsInvisible[1].classList.add("visible");
    fourIsInvisible[1].classList.add("visible");
    fiveIsInvisible[1].classList.add("visible");
    fiveIsInvisible[1].classList.add("visible");
    sixIsInvisible[1].classList.add("visible");
  }
}
