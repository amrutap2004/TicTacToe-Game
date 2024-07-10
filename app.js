let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");

let turnO = true;//player a,b

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const resetgame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{

        console.log("box was clicked!");
        if(turnO)
            {
                box.innerText = "O";
                box.style.color="red";
                turnO = false;
            }
        else{
            box.innerText ="X";
            box.style.color = "blue";
            turnO = true ;
        }
        box.disabled = true;

        checkwinner();
    })
});

const disableboxes = () =>{
    for(let box of boxes)
        {
            box.disabled = true;
        }
}

const enableboxes = () =>{
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText="";
        }
}


const showwinner = (winner) =>{
    msg.innerText = `Congratulations . Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winPatterns)
        {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != "" )
                {
                    if(pos1val === pos2val && pos2val === pos3val)
                        {
                            console.log("winner",pos1val);

                            showwinner(pos1val);
                        }
                }
        }

        // [...boxes] is used to convert the NodeList into an array
        if ([...boxes].every(box => box.innerText !== "")) {
            msg.innerText = "It's a draw!";
            msgcontainer.classList.remove("hide");
        }
};

newbtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click",resetgame);