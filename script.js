
//factory function for creating player 
const players = function(name,symbol,turn){
    return  {name,symbol,turn}
}

const player1 = players('Player1','X',true);
const player2 = players('Player2','0',false);

  //Module 
  const boardModule = (function(){
  
//define necesarry variables
let activePlayer;
let gameState = true;

    //Array for game board
    let gameBoardArr= []; 
  
    //function for letting user play
    const play = function(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn){
    btn. addEventListener("click",function(e){

   if(gameState === true){
    //let player 1 mark the box 
     if(player1.turn==true && player2.turn==false && btn.textContent==""){
       activePlayer = player1;
     btn.textContent = player1.symbol;
        player1.turn = false;
        player2.turn = true;
        //console.log(activePlayer);


       //let player 2 mark the box
    } else if(player1.turn==false &&
       player2.turn==true && btn.textContent == ""){
     activePlayer = player2;
     btn.textContent = player2.symbol;
     player2.turn = false;
     player1.turn = true;
   //console.log(activePlayer);
} 
   };
//check whether any player wins
const check_win = checkWin();
  })
  })
    };
  
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
      gameState = false;
  } 
  //check second row
  if(box3 == activePlayer.symbol &&  box4 == activePlayer.symbol && box5 == activePlayer.symbol){
    console.log(`${activePlayer.name} wins`);
    gameState = false;
  }
  //check third row
  if(box6 == activePlayer.symbol &&  box7 == activePlayer.symbol && box8 == activePlayer.symbol){
    console.log(`${activePlayer.name} wins`);
    gameState = false;
  }
}

  checkCols();
  function checkCols(){
 //check first column
 if(box0 == activePlayer.symbol && box3 == activePlayer.symbol && box6 == activePlayer.symbol){
   console.log(`${activePlayer.name} wins`);
   gameState = false;

 }
 //check second column
 if(box1 == activePlayer.symbol && box4 == activePlayer.symbol && box7 == activePlayer.symbol){
  console.log(`${activePlayer.name} wins`);
  gameState = false;

}
//check third column 
if(box2 == activePlayer.symbol && box5 == activePlayer.symbol && box8 == activePlayer.symbol){
  console.log(`${activePlayer.name} wins`);
  gameState = false;
}
  }

 checkDiagnols();
 function checkDiagnols(){
//check diagnols
if(box0 == activePlayer.symbol && box4 == activePlayer.symbol && box8 == activePlayer.symbol){
  console.log(`${activePlayer.name} wins`);
  gameState == false;
}
if(box2 == activePlayer.symbol && box4 == activePlayer.symbol && box6 == activePlayer.symbol){
  console.log(`${activePlayer.name} wins`);
  gameState == false;
}
  }
}
    //return object to be able to access outside the module
    return{
      play,
    }
  })();
  
  boardModule.play();

  /*let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
  */
  
  
  
  
  