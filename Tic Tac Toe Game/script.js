let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let resetGame = document.querySelector(".reset");


let turnOne = true;
const winnerPosibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnOne) {
            box.innerText = "X";
            box.style.color = "green";
            turnOne = false;
        } else {
            box.innerText = "O";
            turnOne = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const checkWinner = () => {
    for (let chances of winnerPosibility) {
        let posVal1 = boxes[chances[0]].innerText;
        let posVal2 = boxes[chances[1]].innerText;
        let posVal3 = boxes[chances[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                console.log("Winner", posVal1);
                showWinnwer(posVal1);
            }

        }

    }
}

//////////////////////////////////////// evet performed

const showWinnwer = (winner) => {
    msg.innerText = `Congatulation, Winner is ${winner}`; 
    dis();
}

let dis = () =>{// this is use for after finished the game all boxes are disable
    for(let box of boxes){
        box.disabled = true;
    }
}

let resetGameu = () =>{// this is use for reset button action performed
    turnOne = true;
    enableBox();
  
}
resetGame.addEventListener("click", resetGameu);// tiggered the resetgameu function 

let enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
