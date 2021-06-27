
//factory function for creating player 
const players = function(name,symbol,turn){
    return  {name,symbol,turn}
}
const player1_ = prompt("Enter the name of first player");
const player2_ = prompt("Enter the name of second player");

//call above function to create player
const player1 = players(player1_,'X',true);
const player2 = players(player2_,'0',false);

//function to display the player names 
const displayNames = function(){
  const player1Name = document.querySelector('.span0');
  const player2Name = document.querySelector('.span1');
  if(player1_ == "" && player2_ == ""){
    player1Name.textContent = 'Player1';
    player2Name.textContent = 'Player2';
  } else {
  player1Name.textContent = player1_;
  player2Name.textContent = player2_;
  }
}
const displayNames_ = displayNames();


  //Module 
  const boardModule = (function(){
  
//define necesarry variables
let activePlayer;
let gameState = true;
 
    //function play
    const play = function(){
      //select all the boxes and add event listener 
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
      if(gameState == true){
    //let player 1 mark the box 
     if(player1.turn==true && player2.turn==false && btn.textContent==""){
       activePlayer = player1;
       const toggelEffect = toggle();
     btn.textContent = player1.symbol;
        player1.turn = false;
        player2.turn = true;
       // console.log(activePlayer);

       //let player 2 mark the box
    } else if(player1.turn==false &&
       player2.turn==true && btn.textContent == ""){
     activePlayer = player2;
     const toggelEffect = toggle();

     btn.textContent = player2.symbol;
     player2.turn = false;
     player1.turn = true;
  // console.log(activePlayer);
} 
    
//check whether any player wins
const check_win = checkWin();
//check for tie
const drawGame = game_draw();
      }
  })
  })

    }
  
  const checkWin = function(){
    //select the boxes by their ordered ids and grab their textcontent
    const box0 = document.getElementById('0').textContent;
    const box1 = document.getElementById('1').textContent;
    const box2 = document.getElementById('2').textContent;
    const box3 = document.getElementById('3').textContent;
    const box4 = document.getElementById('4').textContent;
    const box5 = document.getElementById('5').textContent;
    const box6 = document.getElementById('6').textContent;
    const box7 = document.getElementById('7').textContent;
    const box8 = document.getElementById('8').textContent;
  
    checkRows();

    //function for checking rows 
    function checkRows(){
      //check first row
  if(box0 == activePlayer.symbol &&  box1 == activePlayer.symbol && box2 == activePlayer.symbol){
      console.log(`${activePlayer.name} wins`);
      const showWinner = displayWin();
      gameState = false;
    //  const restart_ = restart();

  } 
  //check second row
  if(box3 == activePlayer.symbol &&  box4 == activePlayer.symbol && box5 == activePlayer.symbol){
    const showWinner = displayWin();
    gameState = false;

  }
  //check third row
  if(box6 == activePlayer.symbol &&  box7 == activePlayer.symbol && box8 == activePlayer.symbol){
    const showWinner = displayWin();
    gameState = false;

  }
}

  checkCols();
  function checkCols(){
 //check first column
 if(box0 == activePlayer.symbol && box3 == activePlayer.symbol && box6 == activePlayer.symbol){
  const showWinner = displayWin();
  gameState = false;

 }
 //check second column
 if(box1 == activePlayer.symbol && box4 == activePlayer.symbol && box7 == activePlayer.symbol){
  const showWinner = displayWin();
  gameState = false;

}
//check third column 
if(box2 == activePlayer.symbol && box5 == activePlayer.symbol && box8 == activePlayer.symbol){
  const showWinner = displayWin();
  gameState = false;

}
  }

 checkDiagnols();
 function checkDiagnols(){
//check diagnols
if(box0 == activePlayer.symbol && box4 == activePlayer.symbol && box8 == activePlayer.symbol){
  const showWinner = displayWin();
  gameState == false;

}
if(box2 == activePlayer.symbol && box4 == activePlayer.symbol && box6 == activePlayer.symbol){
  const showWinner = displayWin();
  gameState == false;
}
  }
}

const displayWin = function(){
  let displayWinner = document.querySelector('.winmsg');
  displayWinner.innerHTML = ` Congratulations!! ${activePlayer.name} won!`;
  // const restart_ = restart();

}
const game_draw = function(){
  const btns = document.querySelectorAll('.btn');

  const btns_arr = Array.prototype.slice.call(btns);
    for(let i = 0;i<btns_arr.length;i++){
    //  console.log( typeof btns_arr[i]);
  //  console.log(btns_arr[i].value);
if(btns_arr[i].innerText !== ""){
//console.log('draw');
} else {
 //console.log('not draw');
}
}
}
const restart = function(){
  const restartBtn = document.querySelector('.restart');
  restartBtn.addEventListener("click",function(){

    //remove activePlayer class from both players
    const span0 = document.querySelector('.span0');
    const span1 = document.querySelector('.span1');
    span1.classList.remove('activePlayer')
    span0.classList.remove('activePlayer')

    //clear button fields
    const btns = document.querySelectorAll(".btn");
    btns.forEach(function(btn){
      btn.textContent = "";
    });
    //remove win msg if there's any
    const removeWinMsg = document.querySelector('.winmsg');
    removeWinMsg.innerHTML = "";
    gameState = true;
  });

}
const restart_ = restart();

const toggle = function(){
  const span0 = document.querySelector('.span0');
  const span1 = document.querySelector('.span1');

  if(activePlayer == player1){
    span1.classList.remove('activePlayer')
  span0.classList.add('activePlayer');
  
} else {
  span0.classList.remove('activePlayer');
  span1.classList.add('activePlayer');
}
}

    //return object to be able to access outside the module
    return{
      play,
    }
  })();

  boardModule.play();
  