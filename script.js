let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#New-btn")
let msgcntainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")



let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetgame=()=>{
    turn0=true;
    enableboxes()
    msgcntainer.classList.add("hide")
}
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false
        box.innerText=""

    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        console.log("box was clicked")

        if (turn0) {
            box.innerText = "O"
            turn0 = false
            box.classList.add("red")
            box.classList.remove("green")

        }
        else {
            box.innerText = "X"
            turn0 = true;
            box.classList.remove("red")
            box.classList.add("green")
        }
        box.disabled = true

        checkWinner();
    });

});
const disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratualtions winner is ${winner}`
    msgcntainer.classList.remove("hide")
    disabledboxes()
};

const checkWinner = () => {
    for (pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText


        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
            };
        };
    };
};

newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)