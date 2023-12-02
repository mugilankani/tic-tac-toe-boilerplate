const box = document.querySelectorAll('.box');
const message = document.querySelector('#message');
const button = document.querySelector('#button');
const result = document.querySelector("#result");

const finalResult = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let xArray = [];
let yArray = [];
let turn = 'X';
let count = 0;
let flag = true;

for(let i=0; i<box.length;i++){
  box[i].addEventListener('click', () => textInserter(i));
}

button.addEventListener('click', () => {
  xArray = [];
  yArray = [];
  turn = 'X';
  count = 0;
  flag = true;
  result.style.visibility = "hidden";
  box.forEach(b => b.innerHTML = '');
});

function textInserter(index){
  if(box[index].innerHTML == '' && flag){
    box[index].innerHTML = `<h1>${turn}</h1>`;
    if(turn == 'X'){
      xArray.push(index);
      turn = 'O';
    } else {
      yArray.push(index);
      turn = 'X';
    }
    count += 1;
    checkWinningCombination(finalResult, turn == 'X' ? yArray : xArray, turn);
  }
}

function checkWinningCombination(finalResult, array, turn){
  for(let i = 0; i < finalResult.length; i++){
    let gameArray = finalResult[i].map(el => array.includes(el));
    if(gameArray.every(el => el == true)){
      result.style.visibility = "visible";
      message.innerText = `${turn == "X" ? "O" : "X"} Won the game`;
      flag = false;
      break;
    }
  }

  if(count == 9 && flag){
    result.style.visibility = "visible";
    message.innerText = "The game is a tie";
  }
}