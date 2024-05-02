let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".winner");
let hide = document.querySelector(".hide");


let turnO = true;    //player1 is true , player2 is false
const  winPattern =[  //winning pattern in 2d arrays form
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// reset

const reseGame = ()=>{
    turnO = true;
    enableBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText ="0";
            turnO=false;
        }else{
            box.innerText = "x";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
       
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.innerText = "Display";
    }
};


  let displayWinner = (pattern1)=>{
         msg.innerText=`Congratulation The Winner is ${pattern1}`;
         disableBoxes(); 
  };


//winning pattern;
const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;

        if(pattern1!="" && pattern2!="" && pattern3!=""){
            if(pattern1===pattern2 && pattern2 ===pattern3){
                displayWinner(pattern1);
                
            }
        }
    }
};

//reset button;

reset.addEventListener("click",reseGame);



