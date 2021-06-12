
 //factory for creating player
 const players = function(name,symbol,turn){
    return {name,symbol,turn}
    };
   
  //Module
  const boardModule = (function(){
  
    //Array for game board
    let gameBoardArr= []; 
  
    //function for letting user mark the boxes
    const play = function(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn){
    btn. addEventListener("click",function(e){
  
    //logic for letting player 1 mark the box one at a time
     if(player1.turn==true && player2.turn==false && btn.textContent==""){
     btn.textContent = player1.symbol;
        player1.turn = false;
        player2.turn = true;
     //   gameBoardArr.push(player1.symbol);
   
       //letting player 2 mark the boxes 
    } else if(player1.turn==false &&
       player2.turn==true && btn.textContent == ""){
     btn.textContent = player2.symbol;
     player2.turn = false;
     player1.turn = true;
   //gameBoardArr.push(player2.symbol);
    }
  })
  })
    };
  
  
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];
  
  
  const getId = function(){
    const arr = [];
    const elements = document.querySelectorAll('.btn');
    elements.forEach(function(el){
    el.addEventListener("click",function(e){
  const clickedId = e.target.id;
  //console.log(clickedId);
  arr.push(parseInt(clickedId));
  //console.log(arr);
  while(arr.length>=3){
   const splitArr = arr.splice(0,3);
   gameBoardArr.push(splitArr);
    //console.log(splitArr);
   // console.log(gameBoardArr);
   //console.log(arr);
  // console.log(winningConditions);
  
  
   }
  //}
  //}
    })
  })
  }
    //returning object to be able to access outside the module
    return{
      play,getId
    }
  
  })();
  boardModule.play();
  boardModule.winningConditions;
  boardModule.getId();
  
  
  const player1 = players('Player1','X',true);
  const player2 = players('Player2','0',false);
  
  
  
  
  
  
  
  