
// accessing HTML elements 
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#mgs");
let msgcontain=document.querySelector(".mgs-display");
let newgameBtn=document.querySelector("#newgame");
let count=0;

let turnO=false;


// defining winnig pattern
const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]


// adding event for each box to have X or O on clicking
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        ;
        if (turnO ){
            box.innerText='O';
            turnO=false;
            
        }
        else{
            box.innerText='X';
            turnO=true;
            
        }
        box.disabled=true;
        count++
        let won=check_winner();

        if (count === 9 && !won){
            isdraw();
        }
        
    })
})

// function for disabling buttons
disableAllBtn=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}


// function for enabling buttons
enableAllBtn=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}


// displaying winner on screen
display_winner=(winner)=>{
    msg.innerText=`${winner} is the winner`;
    msg.style.fontSize='50px';
    msgcontain.classList.remove("hide")
    disableAllBtn()


}


// cheking who is winner
check_winner=()=>{
    for (let pattern of winning_pattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if (val1!="" && val2!="" && val3!=""){
            if (val1===val2 && val2===val3){
                // won=true;
                display_winner(val1);
                // disapleBtn()
                return true;
            }

        }
        console.log(count);

     
        

    }
}

// draw case
const isdraw=()=>{
    msg.innerText=`Match is draw`;
    msg.style.fontSize='50px';
    msgcontain.classList.remove("hide")
    disableAllBtn()
}

// functionality for reset and new game 
const resetBtn =()=>{
    turnO=false;
    count=0;
    enableAllBtn();
    msgcontain.classList.add("hide");
}


// adding events for newgame and reset
reset.addEventListener("click",resetBtn);
newgameBtn.addEventListener("click",resetBtn);