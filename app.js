let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let msg = document.querySelector(".message");
let message = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let playerO = true;

const disableboxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        let count = 0;
        if(playerO){
            box.style.color = "#22577a"; 
            box.innerText = "O";
            playerO = false;
        }else{
            box.style.color = "black"; 
            box.innerText = "X";
            playerO = true;
        }
        count++;
        box.disabled = true;
         checkWinner(boxes); 
    })
    });
    

const checkWinner = (boxes)=>{
    for(let pattern of winPatterns ){
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                msg.classList.remove("hide");
                message.innerText = `Congratulations! ${pos1val} Win`
                disableboxes(boxes);
            }

        }
    }
    }    
        const reset = () =>{
            playerO = true;
            msg.classList.add("hide");
            enableboxes();
        }
        newBtn.addEventListener("click",reset);
        resetBtn.addEventListener("click",reset);