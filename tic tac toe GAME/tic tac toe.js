let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let body = document.querySelector("body");
let text = document.createElement("div");
let newGame = document.querySelector('#newgame');
let mainContainer= document.querySelector('.main-container');
let line = document.querySelector("#line");
let turn0 = true;
let count = 0;

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    count++;
  
    if (turn0 === true) {
      box.innerText = "O";
      box.style.color = "black"
      box.style.border = "3px solid black"
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
      box.style.border = "3px solid red"
    }
    box.disabled = true;
    
    checkWinner();
   

    
  } );
});






const showWinner =(winner) =>{
      line.innerText = `Winner is ${winner}!🏆`;
      mainContainer.classList.remove("hide");

}

const disablebtn = ()=>{
   for(box of boxes){
    box.disabled = true;

   }
}

const enablebtn = ()=>{
  mainContainer.classList.add('hide');
  count = 0;
  turn0 = true;
  for(box of boxes){
    box.innerText = '';
    box.disabled = false;
    box.style.border = 'none';
   }
}

const checkWinner = () => {
  for (let pattern of arr) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(`Winner is ${pos1val}`); 
        disablebtn();

        showWinner(pos1val);

        
      }
     else{
      if(count == 9){
        line.innerText = 'the game is tie';
        mainContainer.classList.remove('hide');
      }
     } 
    }
  }
};

reset.addEventListener("click" , ()=>{
      enablebtn();

});


newGame.addEventListener("click" , ()=>{
  enablebtn();
  
})
