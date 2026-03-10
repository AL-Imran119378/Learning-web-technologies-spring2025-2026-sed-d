const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameActive = true;

const winCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{
cell.addEventListener("click", ()=>handleClick(cell,index));
});

function handleClick(cell,index){

if(board[index] !== "" || !gameActive) return;

board[index] = currentPlayer;
cell.textContent = currentPlayer;

checkWinner();

if(gameActive){
currentPlayer = currentPlayer === "X" ? "O" : "X";
status.textContent = "Player " + currentPlayer + "'s Turn";
}

}

function checkWinner(){

for(let combo of winCombos){

let a = combo[0];
let b = combo[1];
let c = combo[2];

if(board[a] && board[a] === board[b] && board[a] === board[c]){

cells[a].classList.add("winner");
cells[b].classList.add("winner");
cells[c].classList.add("winner");

status.textContent = "Player " + currentPlayer + " Wins!";
gameActive = false;
return;

}
}

if(!board.includes("")){
status.textContent = "It's a Draw!";
gameActive = false;
}

}

resetBtn.addEventListener("click", resetGame);

function resetGame(){

board = ["","","","","","","","",""];
gameActive = true;
currentPlayer = "X";

cells.forEach(cell=>{
cell.textContent = "";
cell.classList.remove("winner");
});

status.textContent = "Player X's Turn";

}